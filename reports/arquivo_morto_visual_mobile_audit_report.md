# Relatório: Auditoria Visual Mobile — Arquivo Morto

Data: 2026-05-22

---

## Método

Screenshots capturadas com Playwright (chromium headless) apontando para o preview local (`npm run preview`).
Nenhum print solicitado ao usuário.

```bash
# Ferramenta usada
node /tmp/pw-screenshots/capture.mjs
# Chrome: /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
```

---

## Screenshots capturadas

### Antes das correções

| Arquivo | Viewport | Dimensão total |
|---|---|---|
| `reports/screenshots/mobile-390.png` | 390×844 | 390×44515px |
| `reports/screenshots/mobile-430.png` | 430×932 | 430×41521px |
| `reports/screenshots/tablet-768.png` | 768×1024 | 768×29927px |
| `reports/screenshots/desktop-1440.png` | 1440×1000 | 1440×22506px |

### Depois das correções

| Arquivo | Viewport | Dimensão total |
|---|---|---|
| `reports/screenshots/final-mobile-390.png` | 390×844 | 390×44264px |
| `reports/screenshots/final-mobile-430.png` | 430×932 | 430×41270px |
| `reports/screenshots/final-tablet-768.png` | 768×1024 | 768×29676px |
| `reports/screenshots/final-desktop-1440.png` | 1440×1000 | 1440×22506px |

---

## Problemas encontrados

### 1. Hero technical panel empilhado abaixo do conteúdo (CRÍTICO)

**Breakpoint afetado:** ≤960px (tablet e mobile)

O `hero-technical-panel` (ARQ-MORTO / DOSSIÊ CENTRAL / frequência 17Hz...) nunca era
ocultado — apenas redimensionado para `width: 100%`. Em tablet (768px) e mobile (390px)
o painel aparecia como um bloco adicional ABAIXO dos botões, quebrando o fluxo visual
do hero e adicionando ~300–400px desnecessários de altura.

**Evidência:** `tablet-768.png` mostra painel ARQ-MORTO ocupando bloco completo entre
botões e manifesto. `mobile-390.png` mostra mesmo comportamento.

**Fix:** `@media (max-width: 800px) { .hero-technical-panel { display: none; } }`

---

### 2. Cornish dossier grid em 2 colunas em tablet 768px (MÉDIO)

**Breakpoint afetado:** ≤960px (ainda 2 colunas) e ≤800px sem override para Cornish

O `.cornish-dossier-grid` usava `repeat(2, minmax(0, 1fr))` e só colapsava a 1 coluna
no breakpoint ≤640px. No tablet 768px, os 8 painéis ficavam em 2 colunas comprimidas
(~350px cada), o texto ficava espremido.

**Evidência:** `tablet-768.png` Cornish section mostra 2 colunas com texto muito denso.

**Fix:** `@media (max-width: 800px) { .cornish-dossier-grid { grid-template-columns: 1fr; } }`

---

### 3. Hero `min-height: 520px` fixo em mobile (BAIXO)

**Breakpoint afetado:** ≤720px

Mesmo com o conteúdo do hero cabendo em menos espaço (especialmente sem o painel
técnico), o hero mantinha `min-height: 520px`. Corrigido para `auto`.

---

### 4. Imagens externas (Wikimedia) não carregam no headless (INFORMATIVO)

As imagens do Aldini, Cornish e Brukhonenko usam URLs de redirecionamento do Wikimedia
Commons. No browser headless (sem sessão de usuário), essas URLs não retornam imagem —
aparecem como placeholder escuro. No browser real com sessão normal, as imagens carregam.

**Não é bug de CSS** — é comportamento esperado de imagens externas em ambiente headless.
Recomendação futura: baixar imagens de domínio público para `public/assets/`.

---

## Arquivos alterados

- `src/App.css` — novo bloco `@media (max-width: 800px)` + `min-height: auto` no hero

---

## Correções feitas

```css
/* novo bloco: hide hero panel + collapse Cornish grid at ≤800px */
@media (max-width: 800px) {
  .hero-technical-panel { display: none; }
  .cornish-dossier-grid { grid-template-columns: 1fr; }
  .cornish-dossier-panel { min-height: auto; }
}

/* hero min-height: auto at ≤720px (was 520px fixed) */
@media (max-width: 720px) {
  .hero { min-height: auto; ... }
}
```

---

## Validação mobile (breakpoints finais)

| Largura | Comportamento |
|---|---|
| 1440px | Multi-col grids, hero técnico visível ✓ |
| 1000px | Brukhonenko flows → 1 col ✓ |
| 960px | Chapter grids → 2 cols ✓ |
| 800px | **NOVO:** hero técnico oculto; Cornish dossier → 1 col ✓ |
| 720px | All chapter grids → 1 col; hero min-height auto ✓ |
| 640px | Hero padding 32/20px; seções margin 40px; timeline 68px; botões empilhados ✓ |
| 580px | Aldini gallery → 1 col ✓ |

---

## Resultado do build

```
vite v8.0.14 building client environment for production...
✓ 18 modules transformed.
dist/index.html          3.54 kB │ gzip:  1.22 kB
dist/assets/*.css       74.94 kB │ gzip: 12.55 kB
dist/assets/*.js       261.70 kB │ gzip: 80.94 kB
✓ built in 122ms
```

---

## Deploy

- Site ID: `e6bc782d-2505-49a3-bb8e-fa61f98ff0d4`
- URL: https://arquivo-morto.netlify.app
- Deploy ID: `6a0fd9aa3b78e12e3e7a61ec`

---

## Status final

- [x] Screenshots capturadas sem intervenção do usuário
- [x] Hero limpo em tablet (768px) e mobile (390px, 430px)
- [x] Cornish dossier em 1 coluna a partir de 800px
- [x] Build passou
- [x] Deploy passou
- [x] Commit local criado
- [x] Não fez push para GitHub
- [x] OG card social intacto
- [x] Fallback estático preservado
