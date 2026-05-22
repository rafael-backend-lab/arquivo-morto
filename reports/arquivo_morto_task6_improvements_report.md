# Relatório: Task 6 — Melhorias de UX e Confiabilidade — Arquivo Morto

Data: 2026-05-22

---

## Melhorias implementadas

Três melhorias identificadas após revisão completa do site:

1. **Navegação mobile** — `nav-links` desaparecia em ≤720px, deixando mobile sem navegação
2. **Imagens Brukhonenko** — URLs `Special:Redirect` do Wikimedia substituídas por arquivos locais
3. **Timeline 1818** — Imagem da capa de Frankenstein inserida inline no evento de Mary Shelley

---

## 1. Barra de navegação mobile

### Problema
`.nav-links` some em `≤720px` sem fallback. Usuário mobile sem forma de navegar entre seções.

### Solução
Barra fixa no rodapé, CSS puro, sem JavaScript.

**JSX inserido após `</header>`:**
```jsx
<nav className="mobile-nav-bar" aria-label="Navegação rápida">
  <a href="#destaque" className="mobile-nav-link">Destaque</a>
  <a href="#dossies" className="mobile-nav-link">Dossiês</a>
  <a href="#artigos" className="mobile-nav-link">Artigos</a>
  <a href="#linha" className="mobile-nav-link">Timeline</a>
  <a href="#gabinete" className="mobile-nav-link">Gabinete</a>
</nav>
```

**CSS:**
```css
.mobile-nav-bar { display: none; }

@media (max-width: 720px) {
  .mobile-nav-bar {
    display: flex;
    position: fixed;
    bottom: 0; left: 0; right: 0;
    z-index: 300;
    height: 52px;
    background: rgba(8, 8, 8, 0.96);
    border-top: 1px solid rgba(248, 240, 224, 0.10);
    backdrop-filter: blur(12px);
    align-items: stretch;
    justify-content: space-around;
  }
  .mobile-nav-link {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ui-monospace, 'Courier New', monospace;
    font-size: 0.58rem;
    letter-spacing: 0.10em;
    text-transform: uppercase;
    color: rgba(248, 240, 224, 0.45);
    border-right: 1px solid rgba(248, 240, 224, 0.06);
    transition: color 0.15s ease, background 0.15s ease;
  }
  .mobile-nav-link:last-child { border-right: none; }
  .mobile-nav-link:active { color: #b89a66; background: rgba(184, 154, 102, 0.08); }
  .page { padding-bottom: 60px; }
}
```

**Screenshot:** `reports/screenshots/mobile-nav-390.png` ✓

---

## 2. Imagens Brukhonenko — arquivos locais

### Problema
Três imagens usavam `Special:Redirect/file/` do Wikimedia. Esses redirects funcionam via 301 em browsers, mas são menos confiáveis em CDN/cache e podem quebrar se o Wikimedia renomear arquivos.

### Solução
Download direto de `upload.wikimedia.org`, conversão para JPEG, servir localmente em `public/assets/archive/`.

| Arquivo local | Fonte original | Conversão |
|---|---|---|
| `brukhonenko-portrait.jpg` | `Sergei_Brukhonenko.png` — Wikimedia Commons | PNG → JPEG via `sips` |
| `brukhonenko-autojektor.jpg` | `Patent_autojektor.gif` — Wikimedia Commons | GIF → JPEG via `sips` |
| `brukhonenko-experiment.jpg` | `Experiment1940.jpg` — Wikimedia Commons | JPEG direto, redimensionado para 900px |

**Tamanhos finais:**
- `brukhonenko-portrait.jpg` — 423×600, 93 KB
- `brukhonenko-autojektor.jpg` — 558×600, 103 KB
- `brukhonenko-experiment.jpg` — 900×714, 155 KB

**Screenshot:** `reports/screenshots/brukhonenko-local-desktop.png` ✓

---

## 3. Timeline 1818 — imagem de Frankenstein

### Problema
O evento "1818 — Mary Shelley publica Frankenstein" na timeline não tinha âncora visual. A imagem `frankenstein-title.jpg` (já presente no projeto) não estava sendo utilizada na timeline.

### Solução
Array `timelineEvents` atualizado com campos `image`, `imageAlt`, `imageCaption` no evento 1818. Render da timeline atualizado para exibir imagem condicionalmente.

**timelineEvents — evento 1818:**
```js
{
  year: '1818',
  desc: 'Mary Shelley publica Frankenstein no auge do imaginário galvanista.',
  image: '/assets/archive/frankenstein-title.jpg',
  imageAlt: 'Página de título da edição original de Frankenstein, 1818',
  imageCaption: 'Frankenstein; or, The Modern Prometheus · 1ª edição, 1818',
},
```

**CSS:**
```css
.timeline-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.timeline-figure {
  margin: 0;
  max-width: 260px;
  padding-left: 26px;
}
.timeline-figure .contextual-figure-frame img {
  max-height: 200px;
}
```

A imagem `frankenstein-title.jpg` foi movida do `literature-visual-strip` (onde duplicava com `mary-shelley.jpg`) para a timeline. O strip agora exibe apenas o retrato de Mary Shelley.

**Screenshot:** `reports/screenshots/timeline-1818-desktop.png` ✓

---

## Resultado do build

```
vite v8.0.14 building client environment for production...
✓ 18 modules transformed.
dist/index.html                   3.54 kB │ gzip:  1.22 kB
dist/assets/index-C_fVGi6g.css   79.35 kB │ gzip: 13.35 kB
dist/assets/index-DAhPTC8i.js   267.21 kB │ gzip: 82.02 kB
✓ built in 121ms
```

---

## Deploy Netlify

- Site ID: `e6bc782d-2505-49a3-bb8e-fa61f98ff0d4`
- URL: https://arquivo-morto.netlify.app
- Deploy ID: `6a0fec75dd78554d278d856a`

---

## Commit

`adac331` — add mobile nav, timeline 1818 image, local brukhonenko assets

---

## Status final

- [x] Barra de navegação mobile fixa no rodapé (≤720px)
- [x] 5 links de âncora: Destaque, Dossiês, Artigos, Timeline, Gabinete
- [x] `backdrop-filter: blur(12px)` — fundo semitransparente sobre conteúdo
- [x] `.page { padding-bottom: 60px }` — conteúdo não fica atrás da barra
- [x] brukhonenko-portrait.jpg — local, 93 KB
- [x] brukhonenko-autojektor.jpg — local, 103 KB
- [x] brukhonenko-experiment.jpg — local, 155 KB
- [x] Frankenstein title page inline no evento 1818 da timeline
- [x] `contextual-figure-frame` com `object-fit: contain` — sem corte
- [x] Créditos atualizados em `docs/image-credits.md`
- [x] Screenshots de validação capturados (3)
- [x] Build passou
- [x] Deploy passou
- [x] Commit criado
- [x] Não fez push
