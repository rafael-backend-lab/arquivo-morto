# Relatório: Mobile Polish e Social Preview — Arquivo Morto

Data: 2026-05-21

---

## Problemas mobile corrigidos

### 1. Título H1 cortando nas laterais
**Causa:** `font-size: clamp(4.5rem, 12vw, 9.5rem)` — em 390px viewport,
`12vw = 42.9px < 4.5rem (72px)`, então o clamp aplicava o mínimo: 72px.
Com padding de 26px em cada lado, o conteúdo disponível era ~306px.
A palavra "Arquivo" em Georgia a 72px ultrapassava esse limite.

**Fix:** `font-size: clamp(2.2rem, 11vw, 9.5rem)`
- Em 390px: `11vw = 42.9px ≈ 2.68rem > 2.2rem` → usa preferred: ~43px. Confortável.
- Em 600px: `11vw = 66px` → usa 66px.
- Em 800px: `11vw = 88px` → usa 88px.

### 2. `cornish-dossier-grid` sem breakpoint mobile (bug crítico)
**Causa:** `.cornish-dossier-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) }`
sem nenhum `@media` de colapso. Em 390px: duas colunas de ~171px com cards
de `min-height: 310px` — texto espremido e ilegível.

**Fix:** Adicionado ao bloco `@media (max-width: 640px)`:
```css
.cornish-dossier-grid { grid-template-columns: 1fr; }
.cornish-dossier-panel { min-height: auto; padding: 1rem; }
```

### 3. `soviet-dossier-panel` sem override de min-height no mobile
**Causa:** `.soviet-dossier-panel { min-height: 310px }` não tinha override
nos breakpoints mobile existentes (o grid ia para 1fr em 800px, mas a
min-height permanecia, criando blocos muito altos em 1 coluna).

**Fix:** Adicionado ao bloco `@media (max-width: 640px)`:
```css
.soviet-dossier-panel { min-height: auto; padding: 1rem; }
```

### 4. Iframes sem aspect-ratio em telas muito pequenas
**Fix:** Em 640px e abaixo, iframes dos vídeos do Cornish e Brukhonenko
recebem `aspect-ratio: 16/9` e `height: auto` para escalar corretamente.

---

## Breakpoints usados

| Breakpoint | Seções cobertas |
|------------|----------------|
| ≤ 1180px | Cornish lead split → 1 coluna |
| ≤ 1000px | Brukhonenko flow rows, video panels, Cornish galleries → 1 coluna |
| ≤ 960px | Featured layout, stories grid → 1 coluna |
| ≤ 900px | Aldini gallery → 2 colunas (main span 2); Cornish gallery → 1 col |
| ≤ 800px | Soviet dossier lead e grid, Cornish dossier lead → 1 coluna |
| ≤ 720px | Todos os chapter grids (history, occult, body-study, forensic, medical, cabinet) → 1 col; nav-links oculto |
| ≤ 640px | **NOVO:** cornish-dossier-grid, cornish-dossier-panel, soviet-dossier-panel, classification-grid, iframes com aspect-ratio |
| ≤ 580px | Aldini gallery → 1 coluna total |

---

## Como o hero foi ajustado

| Propriedade | Antes | Depois |
|-------------|-------|--------|
| `font-size` | `clamp(4.5rem, 12vw, 9.5rem)` | `clamp(2.2rem, 11vw, 9.5rem)` |
| `letter-spacing` em 640px | `-0.055em` (global) | `-0.03em` (override) |
| `line-height` em 640px | `0.82` (global) | `0.9` (override) |
| Resultado em 390px | 72px (clipping) | ~43px (confortável) |

---

## Como grids foram convertidas para 1 coluna

No novo bloco `@media (max-width: 640px)`:
- `cornish-dossier-grid` → `grid-template-columns: 1fr` (antes: sem breakpoint)
- `classification-grid` → `grid-template-columns: 1fr` (antes: `repeat(2, 1fr)` em 720px)
- Imagens das galerias Cornish: `height: auto` + `max-height: 60-72vw`

---

## Meta tags sociais adicionadas

### index.html (completo)

```html
<!-- Basic -->
<meta name="description" content="..." />
<html lang="pt-BR">

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://arquivo-morto.netlify.app" />
<meta property="og:title" content="Arquivo Morto" />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://arquivo-morto.netlify.app/og-arquivo-morto.svg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="pt_BR" />
<meta property="og:site_name" content="Arquivo Morto" />

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Arquivo Morto" />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="https://arquivo-morto.netlify.app/og-arquivo-morto.svg" />
```

> **Nota:** SVG tem suporte limitado no Facebook e WhatsApp para OG image.
> Se o card não aparecer corretamente nessas plataformas, converter
> `public/og-arquivo-morto.svg` para PNG (1200×630) e atualizar as meta tags.
> O iframely/Twitter suporta SVG com mais consistência.

---

## Caminho da imagem OG

```
public/og-arquivo-morto.svg    → servido em /og-arquivo-morto.svg
URL pública: https://arquivo-morto.netlify.app/og-arquivo-morto.svg
```

Design: fundo `#080808`, título "ARQUIVO / MORTO" em Georgia 136px,
acento vinho `#3A0F14`, linha galvânica verde `#1D8A48`, metadados de arquivo,
quadro com marca de canto estilo blueprint — 1200×630px.

---

## Resultado do build

```
vite v8.0.14 building client environment for production...
✓ 17 modules transformed.
dist/index.html                   1.84 kB │ gzip:  0.69 kB
dist/assets/index-CVmx741N.css   72.89 kB │ gzip: 12.00 kB
dist/assets/index-BlL9zPht.js   261.70 kB │ gzip: 80.94 kB
✓ built in 108ms
```

Build passou sem erros. ✓
