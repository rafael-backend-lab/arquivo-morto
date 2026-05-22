# Relatório: Iconografia Histórica — Arquivo Morto

Data: 2026-05-22

---

## Objetivo

Adicionar 4–8 imagens históricas de domínio público ao site para enriquecer a experiência visual editorial sem comprometer a identidade dark documental.

---

## Imagens adicionadas

| Arquivo local | Título | Fonte | Tamanho |
|---|---|---|---|
| `galvanism-corpse.jpg` | *A Galvanised Corpse* | Wellcome Collection / Wikimedia Commons | 150 KB |
| `aldini-portrait.jpg` | *Giovanni Aldini* | Wikimedia Commons | 51 KB |
| `frankenstein-title.jpg` | *Frankenstein — 1ª edição, 1818* | Wikimedia Commons | 72 KB |
| `mary-shelley.jpg` | *Mary Wollstonecraft Shelley* (Rothwell, c. 1840) | Wikimedia Commons | 106 KB |
| `vesalius-anatomy.jpg` | *De Humani Corporis Fabrica*, p. 190 | Wikimedia Commons | 168 KB |

**Total:** 5 imagens, 547 KB combinados.

---

## Processo de download

URLs resolvidas via API do Wikimedia Commons:

```bash
curl -sA "$UA" "https://commons.wikimedia.org/w/api.php?action=query&titles=File:X&prop=imageinfo&iiprop=url&format=json"
```

A imagem `mary-shelley` estava disponível apenas em TIFF (4.6 MB). Convertida para JPEG via:

```bash
sips -s format jpeg -s formatOptions 85 mary-shelley.tif --out mary-shelley.jpg
```

A imagem `vesalius-anatomy` requeria header `Referer: https://commons.wikimedia.org/` para download bem-sucedido.

Todas as imagens foram redimensionadas para máx. 800px e qualidade JPEG 80–85:

```bash
sips -Z 800 -s format jpeg -s formatOptions 80 imagem.jpg --out imagem.jpg
```

---

## Mudanças implementadas

### `public/assets/archive/`

5 JPEGs otimizados, domínio público.

### `src/App.jsx`

Nova seção `<section className="archive-gallery">` inserida entre o manifesto e o Capítulo I.
5 `<figure>` com `<img loading="lazy">` e `<figcaption>` com título e crédito.

### `src/App.css`

Novo bloco de estilos `.archive-gallery` inserido logo após os estilos de `.manifesto`:

```css
.archive-gallery { margin: 48px 0 0; padding: 40px 0; border-top: 1px solid var(--border); }
.gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.gallery-image-wrap { height: 240px; overflow: hidden; ... object-fit: cover; }
.gallery-item-title { color: #b89a66; font-family: ui-monospace; ... }
.gallery-item-meta { color: #56604e; font-size: 0.62rem; ... }
```

Responsividade:
- `≤640px`: 1 coluna, altura de imagem 200px
- `641px–960px`: 2 colunas

### `docs/image-credits.md`

Créditos completos: título, autor, fonte, licença, URL original.

---

## Decisões de design

| Decisão | Motivo |
|---|---|
| `filter: sepia(0.18) contrast(1.05)` nas imagens | Harmoniza com paleta escura sem descaracterizar as imagens |
| `object-position: center top` | Garante que rostos e elementos principais ficam visíveis no crop |
| `loading="lazy"` | Performance — imagens abaixo do fold não bloqueiam carregamento |
| `object-fit: cover` com altura fixa | Grid uniforme independente da proporção original |
| Hover remove sepia | Feedback sutil sem animar pesado |
| Seção antes do Capítulo I | Funciona como antessala visual antes do conteúdo editorial |

---

## Resultado do build

```
vite v8.0.14 building client environment for production...
✓ 18 modules transformed.
dist/index.html                   3.54 kB │ gzip:  1.22 kB
dist/assets/index-B4LYhazD.css   76.24 kB │ gzip: 12.83 kB
dist/assets/index-hKzqx6Gl.js   264.77 kB │ gzip: 81.44 kB
✓ built in 113ms
```

CSS: 76.24 kB (+1.3 kB vs versão anterior). JS: 264.77 kB (+3 kB por refs de string adicionais). Build passou sem erros.

---

## Deploy Netlify

- Site ID: `e6bc782d-2505-49a3-bb8e-fa61f98ff0d4`
- URL: https://arquivo-morto.netlify.app
- Deploy ID: `6a0fde6a96a288267a033c72`
- Arquivos enviados ao CDN: 8 (5 imagens + CSS/JS/HTML atualizado)

---

## Status final

- [x] 5 imagens de domínio público obtidas e verificadas
- [x] Imagens redimensionadas e otimizadas (máx. 800px, JPEG 80)
- [x] `public/assets/archive/` populado com imagens válidas
- [x] Seção `archive-gallery` adicionada ao `App.jsx`
- [x] CSS responsivo adicionado ao `App.css`
- [x] `docs/image-credits.md` criado com créditos completos
- [x] Build passou
- [x] Deploy Netlify passou
- [x] OG card intacto (não modificado)
- [x] Fallback estático preservado
- [x] Conteúdo editorial não alterado
- [x] Sem novas dependências
- [x] Não fez push para GitHub
