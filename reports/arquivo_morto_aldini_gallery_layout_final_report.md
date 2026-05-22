# Relatório: Correção do Layout da Galeria Aldini

Data: 2026-05-21

## Causa da lacuna

O CSS acumulou três blocos conflitantes para `.aldini-visual-gallery` (linhas 3918–4101),
todos com `!important`, se contradizendo em cascata:

1. **Bloco original**: `grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr)` + `grid-row: span 2` + `.aldini-visual-main img { height: 620px }`
2. **"Aldini visual layout refinement"**: sobrescreve com `height: 720px !important; max-height: 76vh` + `span 2 !important` + `justify-content: space-between`
3. **"Aldini caption position fix"**: sobrescreve com `height: auto !important; max-height: none !important; min-height: 0` + `justify-content: flex-start`

O resultado final do grid era:
- Coluna esquerda (`.aldini-visual-main`): `grid-row: span 2`, mas imagem com `height: auto` → card mais curto que a soma de 2 linhas da coluna direita → **lacuna preta na parte inferior do card principal**.
- `justify-content: space-between` empurrava a legenda para baixo mesmo com conteúdo curto.

## O que foi removido

Todos os três blocos duplicados e suas regras `!important` conflitantes foram eliminados
e substituídos por um único bloco limpo (sem `!important` nas regras base).

Regras removidas principais:
- `grid-row: span 2` (causa raiz da lacuna)
- `height: 720px !important` / `height: auto !important` (conflito de altura)
- `justify-content: space-between !important` (empurrava legenda)
- `align-items: stretch !important` / `align-items: start !important` (conflito)

## O que foi ajustado no CSS

Substituição por um único bloco consolidado:

```css
.aldini-visual-gallery {
  display: grid;
  grid-template-columns: 1.4fr 0.75fr 0.75fr;  /* 3 colunas, sem spanning */
  gap: 1.2rem;
  margin: 1.6rem 0 2rem;
  align-items: start;
}
```

- **Grid de 3 colunas**: main (mais larga) + 2 secundárias na mesma linha → sem spanning, sem lacuna
- **Imagens**: main com `height: 320px`, secundárias com `height: 280px`
- **Figcaption**: `margin-top: 0.85rem; padding-top: 0.75rem` imediatamente abaixo da imagem
- **Responsivo 900px**: 2 colunas, main com `grid-column: span 2` (cobre linha inteira)
- **Responsivo 580px**: 1 coluna, altura auto

## Confirmação de ausência de imagens duplicadas

Três figuras únicas na galeria:
- `A Galvanised Corpse` — gravura satírica do século XIX
- `Giovanni Aldini Wellcome M0017313.jpg` — retrato histórico
- `J. Aldini, galvanism Wellcome L0001964.jpg` — imagem técnica

Nenhuma duplicata. Nenhum `aldini-human-cadaver-plate` encontrado (bloco inexistente/não inserido).

## Resultado do build

```
vite v8.0.14 building client environment for production...
✓ 17 modules transformed.
dist/assets/index-CE7erVwk.css   72.03 kB │ gzip: 11.83 kB
dist/assets/index-CDNzo6iZ.js   261.70 kB │ gzip: 80.94 kB
✓ built in 84ms
```

Build passou sem erros. ✓
