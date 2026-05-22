# Relatório: Correção do Visual Board — Seção Anatomia — Arquivo Morto

Data: 2026-05-22

---

## Problema visual encontrado

A seção "Do corpo sagrado ao corpo estudado" tinha uma única imagem de 240px alinhada à direita (`vesalius-anatomy.jpg` via `.anatomy-visual-note`), deixando a área central da seção completamente vazia antes do grid de cards. O espaço morto entre o título e os cards prejudicava o ritmo editorial.

---

## Solução

Substituição do bloco `anatomy-visual-note` isolado por um **anatomy-visual-board**: composição editorial de 3 imagens em layout 2 colunas (feature + stack), preenchendo o espaço de forma documental e contextual.

---

## Imagens adicionadas

| Arquivo | Título | Fonte | Dimensão final | Tamanho |
|---|---|---|---|---|
| `anatomy-lesson.jpg` | *A Lição de Anatomia do Dr. Nicolaes Tulp* | Rembrandt van Rijn, 1632 — Wikimedia Commons | 900×678px | 132 KB |
| `vesalius-skeleton.jpg` | *De Humani Corporis Fabrica*, prancha p. 174 (esqueleto) | Andreas Vesalius, 1543 — Wikimedia Commons | 397×700px | 125 KB |

**Imagem já existente mantida:** `vesalius-anatomy.jpg` (prancha p. 190, 456×800px).

**Licença:** todas de domínio público (obras de mais de 400 anos). Fontes verificadas via API do Wikimedia Commons.

---

## Seção alterada

`src/App.jsx` — Capítulo III: "Do corpo sagrado ao corpo estudado"

---

## Como o espaço vazio foi corrigido

### Antes

```jsx
<figure className="anatomy-visual-note">          ← única imagem 240px
  <img src="/assets/archive/vesalius-anatomy.jpg" />
</figure>
<div className="body-study-grid">...</div>
```

O `anatomy-visual-note` era `width: 240px; margin: 0 0 32px auto` — aparecia como um bloco estreito no canto direito, com a área esquerda completamente vazia.

### Depois

```jsx
<div className="anatomy-visual-board">
  <figure className="anatomy-visual-main">
    <img src="/assets/archive/anatomy-lesson.jpg" />  ← Rembrandt, paisagem, coluna esquerda
  </figure>
  <div className="anatomy-visual-stack">
    <figure className="anatomy-visual-card">
      <img src="/assets/archive/vesalius-anatomy.jpg" />   ← Vesalius p.190
    </figure>
    <figure className="anatomy-visual-card">
      <img src="/assets/archive/vesalius-skeleton.jpg" />  ← Vesalius p.174
    </figure>
  </div>
</div>
<div className="body-study-grid">...</div>
```

A pintura de Rembrandt (paisagem 900×678) ocupa a coluna esquerda como imagem principal; as duas pranchas de Vesalius (retrato) ficam empilhadas na coluna direita. Juntos, os três elementos preenchem toda a largura disponível antes dos cards.

---

## CSS novo

```css
.anatomy-visual-board {
  display: grid;
  grid-template-columns: 1.45fr 1fr;
  gap: 16px;
  margin: 0 0 44px;
  align-items: start;
}

.anatomy-visual-stack {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.anatomy-visual-frame {
  background: #080808;
  border: 1px solid rgba(235, 230, 221, 0.10);
  padding: 10px;
}

.anatomy-visual-frame img {
  width: 100%;
  height: auto;
  object-fit: contain;    /* ← sem corte, imagem inteira */
  filter: grayscale(0.60) sepia(0.18) contrast(1.06);
}

.anatomy-visual-main .anatomy-visual-frame img { max-height: 360px; }
.anatomy-visual-card  .anatomy-visual-frame img { max-height: 188px; }
```

---

## Validação mobile

| Breakpoint | Comportamento |
|---|---|
| Desktop (≥720px) | 2 colunas: Rembrandt grande à esquerda, 2 Vesalius empilhados à direita |
| ≤720px | 1 coluna: 3 imagens empilhadas, todas largura total |
| ≤640px | 1 coluna (override adicional confirma), imagens com max-height reduzido |

Screenshots capturados via Playwright:
- `reports/screenshots/anatomy-board-desktop.png` (1440px) ✓
- `reports/screenshots/anatomy-board-mobile.png` (390px) ✓

---

## Resultado do build

```
vite v8.0.14 building client environment for production...
✓ 18 modules transformed.
dist/index.html                   3.54 kB │ gzip:  1.22 kB
dist/assets/index-BBi444Z-.css   76.62 kB │ gzip: 12.88 kB
dist/assets/index-BSBdWSCu.js   264.00 kB │ gzip: 81.41 kB
✓ built in 117ms
```

Build passou. CSS: 76.62 kB (+0.9 kB pela nova composição).

---

## Deploy Netlify

- Site ID: `e6bc782d-2505-49a3-bb8e-fa61f98ff0d4`
- URL: https://arquivo-morto.netlify.app
- Deploy ID: `6a0fe4fddbec9a2d099f22c1`
- Arquivos enviados: 5 (2 novas imagens + CSS/JS/HTML atualizados)

---

## Status final

- [x] Espaço vazio eliminado — board cobre toda a largura
- [x] 3 imagens editoriais (Rembrandt + 2 Vesalius) na composição
- [x] `object-fit: contain` — imagens inteiras, sem corte
- [x] `anatomy-visual-board` com layout 1.45fr / 1fr no desktop
- [x] 1 coluna em ≤720px e ≤640px
- [x] Créditos atualizados em `docs/image-credits.md`
- [x] Screenshots de validação capturados
- [x] Build passou
- [x] Deploy passou
- [x] Não fez push
