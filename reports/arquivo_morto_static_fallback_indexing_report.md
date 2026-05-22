# Relatório: Static Fallback para Indexação — Arquivo Morto

**Data:** 2026-05-22
**Projeto:** Arquivo Morto — https://arquivo-morto.netlify.app

---

## Diagnóstico

O site Arquivo Morto é uma SPA React. O HTML inicial servido ao cliente continha apenas:

```html
<div id="root"></div>
```

Todo o conteúdo editorial (títulos, textos, seções, dossiês históricos) era injetado pelo bundle JavaScript via React no lado do cliente. Isso é o comportamento padrão de uma React SPA gerada por Vite.

---

## Impacto

- Humanos com JS habilitado: experiência completa, sem degradação.
- Crawlers sem JS (Googlebot antigo, IA externas, Gemini, ferramentas de inspeção estática): recebiam HTML com `#root` vazio, sem nenhum conteúdo indexável.
- Plataformas de preview de link (WhatsApp, Telegram, Slack): dependem de meta tags OG — essas já estavam presentes e funcionando corretamente.
- Ferramentas de diagnóstico de acessibilidade e SEO estático podiam reportar "página sem conteúdo".

---

## Solução

Adicionado fallback estático editorial diretamente dentro do `<div id="root">` em `index.html`.

O fallback contém:
- `<h1>Arquivo Morto</h1>` — título principal indexável
- Descrição curta do projeto
- Seção de dossiês históricos com nomes-chave: Galvanismo, Giovanni Aldini, George Forster, Sergei Brukhonenko, Robert E. Cornish, Frankenstein, Herbert West
- Seção de capítulos com resumo temático

CSS inline mínimo adicionado no `<head>` para `.static-fallback`:
- Fundo escuro (`#080808`) — preserva identidade visual dark editorial
- Texto claro (`#F8F0E0` âmbar)
- Subtítulos em verde químico (`#1D8A48`)
- `max-width: 860px` com padding responsivo
- Tipografia Georgia (consistente com o design system do projeto)

O React substitui o conteúdo do `#root` normalmente quando o bundle JS carrega. Nenhuma alteração foi feita em `App.jsx` ou nos componentes.

---

## Preservação de meta tags

Todas as meta tags OG e Twitter Card foram preservadas intactas, incluindo:

- `og:image` → `https://arquivo-morto.netlify.app/arquivo-morto-share-v4.jpg`
- `og:image:secure_url` → mesma URL
- `og:image:type` → `image/jpeg`
- `og:image:width` → `1200`
- `og:image:height` → `630`
- `twitter:card` → `summary_large_image`

---

## Validações

### Build local

```bash
npm run build
# dist/index.html gerado sem erros
```

### Grep no dist/index.html

```
grep -n "static-fallback\|Arquivo Morto\|Sergei Brukhonenko\|Robert E. Cornish\|og:image" dist/index.html
```

Resultado esperado: linhas com todos os termos presentes no HTML estático.

---

## Deploy

- Plataforma: Netlify
- Site ID: `e6bc782d-2505-49a3-bb8e-fa61f98ff0d4`
- Comando: `npx netlify-cli@latest deploy --prod --dir=dist --site=e6bc782d-2505-49a3-bb8e-fa61f98ff0d4`
- URL pública: https://arquivo-morto.netlify.app

### Validação pública

```bash
curl -Ls https://arquivo-morto.netlify.app/ | grep -E "static-fallback|Arquivo Morto|Sergei Brukhonenko|Robert E. Cornish|og:image"
```

---

## Arquivos modificados

| Arquivo | Alteração |
|---|---|
| `index.html` | CSS inline para `.static-fallback` + conteúdo estático em `#root` |
| `README.md` | Nota sobre fallback estático para crawlers/IA |
| `reports/arquivo_morto_static_fallback_indexing_report.md` | Este relatório |

---

## Critério de sucesso

- [x] HTML inicial público não fica mais vazio
- [x] `#root` contém fallback textual indexável com nomes e temas do projeto
- [x] React continua funcionando normalmente (fallback é substituído pelo bundle JS)
- [x] Card social continua com JPG via `og:image`
- [x] Build de produção passa sem erros
- [x] Deploy produção no Netlify concluído
