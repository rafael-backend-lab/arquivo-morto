# Arquivo Morto V3 — Relatório de visual polish

**Data:** 2026-05-21

## Arquivos alterados

| Arquivo | Mudança |
|---|---|
| `src/App.jsx` | `classifications` array; `archive-seal` no hero; seção "Classificação do Arquivo"; `data-mode` no botão; footer-quote |
| `src/App.css` | `.mode-toggle` com glow; `[data-mode]` state styling; `.archive-seal` + `.seal-*`; `.classification-grid` + `.clf-*`; `.footer-quote`; responsivo V3 |
| `README.md` | Seção "V3 — Visual polish"; status → v3.0 |
| `docs/editorial-direction.md` | Seção "V3 — Selo, classificação e acabamento" |

## Melhorias visuais

### 1. Selo do Arquivo Morto (.archive-seal)
Carimbo científico CSS puro no canto inferior direito do hero. Três anéis concêntricos (sólido, tracejado, fino). Centro: monograma "AM" em Georgia, separador com traço galvânico (`.seal-bolt`), texto "Arquivo Morto / Est. 1803" em monospace. Opacidade 0.11 — presença subliminar, não elemento de conteúdo. Some em mobile (≤720px).

### 2. Classificação do Arquivo
Nova seção entre Manifesto e Dossiê em Destaque. Grid 4 colunas de etiquetas de catálogo:
- CLF-001 · Literatura de Reanimação · 14 dossiês
- CLF-002 · Galvanismo Histórico · 8 registros
- CLF-003 · Anatomia Proibida · 11 espécimes
- CLF-004 · Horror Científico · 22 arquivos

Borda superior âmbar como marcador visual de categoria. Colapsa para 2 colunas em ≤960px, 2 colunas em ≤720px.

### 3. Modo Terminal refinado
Botão usa `data-mode={mode}` para estado visual. `data-mode="arquivo"` → glow verde `box-shadow: 0 0 8px rgba(29,138,72,0.12)`. `data-mode="terminal"` → borda e texto crimson com `box-shadow: 0 0 10px rgba(200,75,90,0.18)`. Implementação state-driven via CSS `[data-mode]` — sem lógica JS, sem classes extras.

### 4. Footer editorial premium
Frase de fechamento antes do rodapé técnico: "Todo arquivo morto ainda respira em alguma página." — Georgia itálico, opacidade 0.24, espaçamento abaixo para o `footer-ref`.

## Resultado do npm run build

```
vite v8.0.14 building client environment for production...
✓ 17 modules transformed.

dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-CMGLZu8z.css   19.02 kB │ gzip:  4.63 kB
dist/assets/index-QezucdQ5.js   206.47 kB │ gzip: 64.76 kB

✓ built in 80ms
```

Build limpo. CSS cresceu de 16.28 kB para 19.02 kB — diferença proporcional ao conteúdo adicionado.

## Commit criado

```
polish arquivo morto visual identity
```

Branch: `main` — não publicado no GitHub.

## Comando para rodar

```bash
npm run dev:open
```

Sobe o Vite em `127.0.0.1:5173` e abre no navegador padrão automaticamente.

## Recomendação sobre publicar

O projeto está pronto para publicação em termos de qualidade visual e código. Antes de publicar, recomenda-se:

1. Revisar o conteúdo editorial de cada seção (textos, dossiês, artigos)
2. Definir domínio ou plataforma (GitHub Pages, Vercel, Netlify)
3. Atualizar o `footer-github` com o link real do repositório
4. Testar em dispositivos móveis reais (não só breakpoints simulados)
5. Solicitar aprovação explícita antes de qualquer `git push` (conforme regras do projeto)

Estado atual: **pronto para review final antes de publicação.**
