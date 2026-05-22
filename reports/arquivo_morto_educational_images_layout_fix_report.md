# Relatório: Correção do Layout das Imagens Didáticas — Arquivo Morto

Data: 2026-05-22

---

## Problema

A galeria criada na iteração anterior foi rejeitada visualmente pelo usuário.

**Sintomas confirmados:**
- Bloco de 5 imagens em grade 3×2 logo após o manifesto, sem contexto editorial
- Imagens com `object-fit: cover` e altura fixa 240px — cortavam conteúdo histórico documental
- Layout de vitrine genérica, incompatível com a identidade editorial fria do site
- Imagens sem relação com o conteúdo ao redor

---

## Solução

Remoção da galeria inicial. Redistribuição das imagens como ilustrações contextuais, cada uma inserida no trecho editorial mais próximo do seu conteúdo.

---

## Distribuição das imagens por contexto

| Imagem | Inserida em | Posição |
|---|---|---|
| `galvanism-corpse.jpg` | `aldini-visual-gallery` (Dossiê Aldini) | Figura principal — substituiu URL externa do Wikimedia |
| `aldini-portrait.jpg` | `aldini-visual-gallery` (Dossiê Aldini) | Segunda figura — substituiu URL externa do Wikimedia |
| `vesalius-anatomy.jpg` | Capítulo III — "Do corpo sagrado ao corpo estudado" | `anatomy-visual-note`: figura editorial direita entre header e grid |
| `frankenstein-title.jpg` | Após Linha do Tempo | `literature-visual-strip`: 1ª coluna do painel literário |
| `mary-shelley.jpg` | Após Linha do Tempo | `literature-visual-strip`: 2ª coluna do painel literário |

---

## Mudanças em `src/App.jsx`

### Removido
- Bloco `<section className="archive-gallery">` com 5 figuras em grade — eliminado por completo

### Dossiê Aldini — `aldini-visual-gallery`
Imagens principais do dossiê agora usam cópias locais em vez de URLs redirect do Wikimedia Commons que dependem de sessão de usuário:
- `A Galvanised Corpse` → `/assets/archive/galvanism-corpse.jpg`
- `Giovanni Aldini` → `/assets/archive/aldini-portrait.jpg`

### Capítulo III — corpo sagrado
Nova figura inserida antes do `.body-study-grid`:
```jsx
<figure className="anatomy-visual-note">
  <div className="contextual-figure-frame">
    <img src="/assets/archive/vesalius-anatomy.jpg" ... loading="lazy" />
  </div>
  <figcaption className="contextual-figure-caption">
    Vesalius · De Humani Corporis Fabrica, 1543 — ...
  </figcaption>
</figure>
```

### Após Linha do Tempo
Nova `literature-visual-strip` com Frankenstein (1818) e Mary Shelley (Rothwell, c. 1840), posicionada entre a linha do tempo e o Gabinete de Anatomia:
```jsx
<div className="literature-visual-strip">
  <figure>... frankenstein-title.jpg ...</figure>
  <figure>... mary-shelley.jpg ...</figure>
</div>
```

---

## Mudanças em `src/App.css`

### Removido
Bloco completo `.archive-gallery` (`.gallery-grid`, `.gallery-item`, `.gallery-image-wrap`, etc.) — eliminado.

### Adicionado

```css
/* Frame universal para imagens contextuais */
.contextual-figure-frame {
  background: #080808;
  padding: 8px;
  border: 1px solid rgba(235, 230, 221, 0.10);
}

/* Imagem dentro do frame: contain, sem corte, altura natural */
.contextual-figure-frame img {
  width: 100%;
  height: auto;
  max-height: 420px;
  object-fit: contain;        /* ← nunca object-fit: cover */
  filter: grayscale(0.65) sepia(0.20) contrast(1.06);
}

/* Legenda monospace pequena */
.contextual-figure-caption {
  font-size: 0.60rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: rgba(235, 230, 221, 0.42);
}

/* Vesalius: direita, 240px, recua antes do grid */
.anatomy-visual-note {
  width: 240px;
  margin: 0 0 32px auto;
}

/* Strip literária: 2 colunas no desktop */
.literature-visual-strip {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin: 36px 0 0;
  max-width: 600px;
}
```

### Responsividade (≤640px)
```css
.anatomy-visual-note { width: 100%; margin: 0 0 28px; }
.literature-visual-strip { grid-template-columns: 1fr; max-width: 100%; }
```

---

## Por que `object-fit: contain`

As imagens históricas (gravuras, retratos, páginas de livro) têm proporções variadas e conteúdo relevante em toda a área. `object-fit: cover` ocultaria partes essenciais. `object-fit: contain` preserva a imagem inteira dentro de um container de tamanho controlado por `max-height`.

---

## Validação mobile

| Breakpoint | Comportamento |
|---|---|
| Desktop (≥960px) | `anatomy-visual-note` direita 240px; `literature-visual-strip` 2 colunas |
| Tablet (641–960px) | Mesmo comportamento (sem override) |
| Mobile (≤640px) | Ambas as figuras em 1 coluna, largura total |

---

## Resultado do build

```
vite v8.0.14 building client environment for production...
✓ 18 modules transformed.
dist/index.html                   3.54 kB │ gzip:  1.22 kB
dist/assets/index-CZdai5np.css   75.74 kB │ gzip: 12.78 kB
dist/assets/index-Btmy2G56.js   263.05 kB │ gzip: 81.29 kB
✓ built in 102ms
```

Build passou. CSS: 75.74 kB (−0.5 kB vs versão anterior).

---

## Deploy Netlify

- Site ID: `e6bc782d-2505-49a3-bb8e-fa61f98ff0d4`
- URL: https://arquivo-morto.netlify.app
- Deploy ID: `6a0fe1c68c5b42429cbb184d`

---

## Status final

- [x] Galeria inicial rejeitada removida por completo
- [x] Imagens redistribuídas por contexto editorial
- [x] `object-fit: cover` eliminado das imagens históricas
- [x] Imagens exibidas inteiras com `object-fit: contain`
- [x] `galvanism-corpse` e `aldini-portrait` no Dossiê Aldini (via cópias locais)
- [x] `vesalius-anatomy` no Capítulo III (corpo sagrado)
- [x] `frankenstein-title` e `mary-shelley` na faixa literária pós-timeline
- [x] Responsividade: 1 coluna em ≤640px
- [x] Build passou
- [x] Deploy passou
- [x] Imagens baixadas preservadas
- [x] OG card intacto
- [x] Não fez push
