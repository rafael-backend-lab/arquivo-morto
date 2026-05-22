# Relatório: Publicação no GitHub — Arquivo Morto

Data: 2026-05-22

---

## README.md

Reescrito do zero. O README anterior acumulava ~216 linhas de notas internas de versão (V2, V3, V4...), misturando changelog com documentação.

O novo README contém:
- Título e subtítulo limpos
- Preview com imagem social
- Link de produção
- Descrição editorial completa do projeto
- Tabela de seções
- Stack com detalhes relevantes
- Scripts documentados em tabela
- Estrutura de pastas
- Nota editorial com separação explícita de fato, literatura e ficção
- Autor com link GitHub

## index.html — SEO

Ajustes aplicados:

| Campo | Antes | Depois |
|---|---|---|
| `<title>` | `Arquivo Morto` | `Arquivo Morto — Literatura, ciência e horror da reanimação` |
| `<meta name="description">` | 120 caracteres, ok | Reescrita para ~105 chars, mais direta |
| `<link rel="canonical">` | ausente | `https://arquivo-morto.netlify.app/` |
| `<meta name="theme-color">` | ausente | `#080808` |
| `og:url` | sem trailing slash | com trailing slash |
| `og:title` | `Arquivo Morto` | título completo |
| `og:description` | ok, mantida com ajuste | ajustada para coincidir com twitter |
| `twitter:title` | `Arquivo Morto` | título completo |
| JSON-LD | ausente | `CreativeWork` com name, url, description, author, inLanguage |

og:image e twitter:image permanecem apontando para `arquivo-morto-share-v4.jpg` — não alterados.

## robots.txt

Sem alteração necessária. Já estava correto:
```
User-agent: *
Allow: /
Sitemap: https://arquivo-morto.netlify.app/sitemap.xml
```

## sitemap.xml

`changefreq` alterado de `weekly` para `monthly` (site editorial estático sem atualizações frequentes).

## package.json

Campo `description` adicionado:
```
"description": "Projeto editorial dark sobre literatura, ciência e horror da reanimação."
```

## Assets

30 assets verificados. Nenhum faltando.

## Build

```
vite v8.0.14
✓ 18 modules transformed.
dist/index.html       4.25 kB │ gzip:  1.41 kB
dist/assets/*.css    83.93 kB │ gzip: 14.06 kB
dist/assets/*.js    279.16 kB │ gzip: 85.74 kB
✓ built in 156ms
```

## Estado do repositório

Mudanças não commitadas até este relatório:
- `M src/App.jsx` — UX polish (cinema mobile nav, timeline 1818, dossiês subtitle)
- `M src/App.css` — UX polish (mobile nav 6 links, article arrow)
- `M README.md` — reescrito para GitHub
- `M index.html` — SEO atualizado
- `M package.json` — description adicionado
- `M public/sitemap.xml` — changefreq monthly
- `?? public/assets/cinema/frankenstein-2025-01.jpg` e outros 5 novos arquivos
- `D public/assets/cinema/raw/*` e outros arquivos antigos deletados

## Próximo passo manual

1. Criar repositório no GitHub: `rafael-backend-lab/arquivo-morto`
2. Configurar remote: `git remote add origin <URL>`
3. Push: `git push -u origin main`
4. Verificar se GitHub Pages ou badge de deploy está correto (opcional)
5. Netlify já está em produção: https://arquivo-morto.netlify.app

---

Status final: **pronto para publicação pública no GitHub.**
