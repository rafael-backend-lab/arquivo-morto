# Arquivo Morto — Deploy Netlify

## Objetivo
Publicar o site Arquivo Morto com URL pública mais apresentável que o túnel temporário.

## Configuração
- Build command: npm run build
- Publish directory: dist
- SPA redirect: /* -> /index.html

## Observação
Cloudflare Tunnel rápido gera nome aleatório. Netlify permite URL pública mais limpa.
