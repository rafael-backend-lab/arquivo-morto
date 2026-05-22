# Relatório: Revisão Final de Entrega — Arquivo Morto v9.1

Data: 2026-05-21

---

## Problemas encontrados

### 1. Variável CSS `--muted` não definida
`var(--muted)` era usada em 10 declarações de `color` em `App.css`
(`.brukhonenko-flow-copy p`, `.cornish-video-copy p`, `.brukhonenko-media-copy p`
e similares), mas não estava declarada no bloco `:root`.

Comportamento: o navegador usava o valor herdado do pai (coincidentemente `#C8BDAE`),
o que mascarava o problema visualmente mas tornava o código incorreto.

### 2. Ausência de `overflow-x: hidden` no body
Nenhuma regra impedia overflow horizontal no eixo X. Apesar de todos os grids
principais terem breakpoints que os colapsam para `1fr` em telas pequenas, a ausência
da declaração global deixava margem para overflow acidental em elementos com
`minmax()` de valor mínimo alto ou conteúdo pré-formatado.

---

## Ajustes feitos

### src/index.css
- Adicionado `overflow-x: hidden` ao `body` como barreira global contra scroll
  horizontal em mobile (390px).

### src/App.css
- Adicionado `--muted: #8A7E72` ao bloco `:root`, tornando a variável explícita
  e consistente com `--text-dim`.

### README.md
- Status atualizado de `v9.0` (em desenvolvimento) para `v9.1` (pronto para deploy).
- Indicação de plataformas suportadas: Netlify, Vercel, GitHub Pages.

---

## Validação de ordem histórica

Verificação via `grep -n` em `src/App.jsx`:

| Linha | Bloco |
|-------|-------|
| 741 | `Aldini-Forster, Londres, 1803` |
| 829 | `Robert E. Cornish: Lazarus` |
| 1033 | `Sergei Brukhonenko: o autojektor` |

Ordem correta: Aldini (1803) → Cornish (1930s) → Brukhonenko (1920s–1940).
Nenhuma seção duplicada detectada.

---

## Imagens e vídeos revisados

### Imagens Wikimedia Commons (Aldini e Brukhonenko)
Todos os três redirecionamentos `Special:Redirect` retornam HTTP 301 → upload válido:
- `A_Galvanised_Corpse.jpg` ✓
- `Giovanni_Aldini_Wellcome_M0017313.jpg` ✓
- `J._Aldini,_galvanism_Wellcome_L0001964.jpg` ✓
- `Sergei_Brukhonenko.png` → upload.wikimedia.org ✓
- `Patent_autojektor.gif` ✓
- `Experiment1940.jpg` ✓

### Imagens Wixstatic (Cornish)
Todas retornam HTTP 200:
- `d5cc5f_9cbe05858d1c479a8ec9624b6dd0c764~mv2.webp` ✓
- `d5cc5f_ba83559514e546cc8d3c4327f211165c~mv2.jpg` ✓
- `d5cc5f_167d7cc8f0054f32a4245dc11aff5086~mv2.jpg` ✓

### Vídeos (YouTube embed)
- Cornish: `youtube.com/embed/YnRoO4u6gJQ` ✓
- Brukhonenko: `youtube.com/embed/KDqh-r8TQgs` ✓

Nenhuma imagem quebrada encontrada. Nenhuma URL malformada no JSX.

---

## Validação mobile/responsiva

### Breakpoints confirmados

| Largura | Cornish lead | Brukhonenko flow | Aldini gallery | Vídeos |
|---------|-------------|-----------------|----------------|--------|
| > 1180px | 2 colunas | 2 colunas | 3 colunas | 2 colunas |
| ≤ 1180px | 1 coluna | — | — | — |
| ≤ 1000px | 1 coluna | 1 coluna | — | 1 coluna |
| ≤ 900px | — | — | 2 colunas (main span 2) | — |
| ≤ 720px | — | — | — | — (grids gerais: 1 col) |
| ≤ 580px | — | — | 1 coluna | — |

### Header/nav em 390px
- `nav-links` ocultas em ≤ 720px. Nav restante: brand + mode-toggle. OK.
- `hero padding: 38px 26px` em ≤ 720px. OK.
- H1 usa `clamp(4.5rem, 12vw, 9.5rem)`. Em 390px: mínimo 4.5rem (72px). OK.

### Overflow horizontal
- `overflow-x: hidden` adicionado ao `body`. Barreira global.
- Grids com `minmax()` de valor fixo todos cobertos por breakpoints ≤ 1000px–1180px.

---

## Resultado do npm run build

```
vite v8.0.14 building client environment for production...
✓ 17 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-BMGnOfFh.css   72.06 kB │ gzip: 11.85 kB
dist/assets/index-BFwcxp8R.js   261.70 kB │ gzip: 80.94 kB
✓ built in 88ms
```

Build passa sem erros ou warnings. ✓

---

## Status git

```
 M README.md
 M src/App.css
 M src/index.css
?? claude_arquivo_morto_v2.md   ← não versionado
?? src/assets/                  ← não versionado
```

`claude_arquivo_morto_v2.md` e `src/assets/` não foram adicionados ao commit.

---

## Recomendação para deploy público

O projeto está pronto para deploy. Opções:

| Plataforma | Comando / configuração |
|------------|----------------------|
| **Netlify** | `npm run build` → pasta `dist/` como publish dir |
| **Vercel** | detecta Vite automaticamente |
| **GitHub Pages** | `vite build` + `gh-pages -d dist` |
| **Preview local** | `npm run preview` → http://localhost:4173 |

Configuração adicional recomendada antes do deploy:
- Verificar domínio e meta tags de OG/SEO em `index.html` se o site for público.
- Confirmar que as URLs externas (Wikimedia, Wixstatic) não têm restrições de CORS
  para produção (apenas para imagens carregadas via `<img>`, não há CORS issue).
