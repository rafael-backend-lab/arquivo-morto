# Relatório: Preview Público via Cloudflare Tunnel

Data: 2026-05-21

---

## Por que Vercel foi contornado

O fluxo com Vercel (`vercel --prod`) exige login/token autenticado que não estava
disponível no ambiente local. O script `deploy` do `package.json` foi substituído por
`public:preview`, que usa Cloudflare Tunnel — sem necessidade de conta, login ou token.

---

## Como o novo fluxo funciona

```
npm run public:preview
       │
       ├─ npm run build          → gera dist/ em produção
       ├─ verifica cloudflared   → instala via Homebrew se ausente
       ├─ vite preview           → servidor local em http://127.0.0.1:4173
       └─ cloudflared tunnel     → expõe :4173 como URL pública trycloudflare.com
```

O Cloudflare Tunnel cria um proxy reverso temporário sem abrir portas no roteador,
sem conta Cloudflare e sem configuração DNS. A URL é gerada automaticamente no formato:

```
https://[random-words].trycloudflare.com
```

---

## Comando final para usar

```bash
npm run public:preview
```

Ou diretamente:

```bash
bash scripts/public-preview.sh
```

O script está em `scripts/public-preview.sh` e foi adicionado ao `package.json`
como `"public:preview": "bash scripts/public-preview.sh"`.

---

## Limitações

| Limitação | Detalhe |
|-----------|---------|
| Link temporário | Expira quando o terminal é fechado ou o processo é encerrado |
| URL aleatória | Cada execução gera uma URL diferente (sem domínio fixo) |
| Depende de `cloudflared` | Instalado automaticamente via Homebrew se ausente |
| Requer macOS/Linux | O script usa `bash` e `brew install cloudflared` |
| Sem HTTPS customizado | A URL é `trycloudflare.com`, não um domínio próprio |

---

## Alternativas para URL permanente

| Plataforma | Método | Custo |
|------------|--------|-------|
| **Netlify** | Arrastar `dist/` em app.netlify.com → URL permanente em segundos | Gratuito |
| **Cloudflare Pages** | `npx wrangler pages deploy dist` → URL `.pages.dev` permanente | Gratuito |
| **GitHub Pages** | `npm run build` + `gh-pages -d dist` (requer push) | Gratuito |
| **Surge.sh** | `npx surge dist arquivo-morto.surge.sh` | Gratuito |

Para o Netlify (mais simples):
1. Acesse app.netlify.com
2. Arraste a pasta `dist/` para a área de drop
3. URL permanente gerada instantaneamente, sem login com GitHub
