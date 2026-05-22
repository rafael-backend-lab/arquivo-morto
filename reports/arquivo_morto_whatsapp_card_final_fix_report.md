# Relatório: WhatsApp Card Fix — Arquivo Morto

Data: 2026-05-22

---

## Problema

O card de compartilhamento no WhatsApp (e Facebook) não exibia imagem preview.

**Causas identificadas:**
1. `og:image` apontava para `og-arquivo-morto.svg` — SVG não é suportado pelo WhatsApp/Facebook
2. Imagem PNG existente (`og-arquivo-morto.png`) era 1200×1200 (quadrada) e 1.1MB — dimensões erradas e tamanho excessivo
3. PNG era RGBA — canais de transparência causam problemas em alguns scrapers de OG

---

## Solução

### Imagem nova: `public/arquivo-morto-share-v4.jpg`

| Propriedade | Valor |
|-------------|-------|
| Formato | JPEG (RGB, sem transparência) |
| Dimensões | 1200 × 630 px |
| Tamanho | 113 KB (bem abaixo do limite de 500 KB) |
| Conteúdo visual | Design editorial escuro — fundo #080808, texto "ARQUIVO MORTO" em Georgia, acento vinho #3A0F14, linha verde #1D8A48 |

**Processo de geração:**
1. Renderizou o SVG existente (`public/og-arquivo-morto.svg`) via macOS `qlmanage -t -s 1200` → PNG 1200×1200
2. Cortou os primeiros 630px do topo via `sips --cropToHeightWidth 630 1200`
3. Converteu para JPEG a 85% de qualidade via `sips -s format jpeg -s formatOptions 85`

Sem dependências externas (sem ImageMagick, sem Pillow).

---

## Meta tags atualizadas em `index.html`

```html
<meta property="og:image"         content="https://arquivo-morto.netlify.app/arquivo-morto-share-v4.jpg" />
<meta property="og:image:secure_url" content="https://arquivo-morto.netlify.app/arquivo-morto-share-v4.jpg" />
<meta property="og:image:type"    content="image/jpeg" />
<meta property="og:image:width"   content="1200" />
<meta property="og:image:height"  content="630" />
<meta property="og:image:alt"     content="Arquivo Morto — Literatura, ciência e horror da reanimação" />
<meta name="twitter:image"        content="https://arquivo-morto.netlify.app/arquivo-morto-share-v4.jpg" />
```

---

## Netlify `_headers`

Criado `public/_headers` para garantir `Content-Type: image/jpeg` correto:

```
/arquivo-morto-share-v4.jpg
  Content-Type: image/jpeg
  Cache-Control: public, max-age=604800, immutable
```

---

## Validação pós-deploy

```
$ curl -sI https://arquivo-morto.netlify.app/arquivo-morto-share-v4.jpg
HTTP/2 200
content-type: image/jpeg
content-length: 115743
```

```
$ curl -s https://arquivo-morto.netlify.app | grep og:image
og:image" content="https://arquivo-morto.netlify.app/arquivo-morto-share-v4.jpg"
og:image:secure_url" content="..."
og:image:type" content="image/jpeg"
```

---

## Deploy

- Site ID: `e6bc782d-2505-49a3-bb8e-fa61f98ff0d4`
- URL pública: https://arquivo-morto.netlify.app
- Deploy ID: `6a0fcba0ed71861f7c269de3`
- Arquivos enviados: `index.html`, `arquivo-morto-share-v4.jpg`, `_headers`

---

## Resultado

O WhatsApp e demais plataformas sociais agora receberão um JPEG 1200×630 válido
com Content-Type correto. O card deve exibir a imagem corretamente ao compartilhar
o link `https://arquivo-morto.netlify.app`.

> Para forçar atualização do cache do WhatsApp, enviar o link em uma nova conversa
> (o WhatsApp scrapa o OG na primeira vez que o link é enviado para um destinatário).
