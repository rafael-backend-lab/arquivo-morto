# public/assets/archive — Imagens do Arquivo Morto

Esta pasta armazena imagens editoriais reais para uso no site.

## Regras obrigatórias

Toda imagem adicionada aqui **deve** ser:
- Domínio público (copyright expirado), OU
- Licença livre (Creative Commons CC0, CC BY, CC BY-SA)

Nunca adicionar imagens protegidas por copyright sem permissão documentada.

## Fontes recomendadas

| Fonte | URL | Tipos de conteúdo |
|---|---|---|
| Wellcome Collection | wellcomecollection.org | Anatomia, medicina histórica, gravuras médicas |
| Wikimedia Commons | commons.wikimedia.org | Amplo — verificar licença por item |
| Internet Archive | archive.org | Livros, revistas, ilustrações antigas |
| Biodiversity Heritage Library | biodiversitylibrary.org | Gravuras científicas, história natural |
| Library of Congress | loc.gov/pictures | Fotografias históricas, imprensa |
| National Library of Medicine | nlm.nih.gov | Anatomia, medicina, história da ciência |

## Como registrar cada imagem

Para cada imagem adicionada, crie uma entrada no arquivo `CREDITS.md` nesta pasta com:

```
Arquivo: nome-do-arquivo.jpg
Fonte: [nome da coleção]
URL: [URL da fonte original]
Licença: [CC0 / CC BY / domínio público / outra]
Autor: [se aplicável]
Data da imagem: [data ou período aproximado]
```

## Estrutura sugerida

```
public/assets/archive/
  hero/           imagens para o hero e seção principal
  dossiers/       ilustrações dos dossiês
  stories/        imagens para as histórias
  cabinet/        placas e espécimes do gabinete
  backgrounds/    texturas e fundos
  README.md       este arquivo
  CREDITS.md      créditos e licenças
```

## Uso no código

As imagens serão referenciadas via CSS `background-image: url('/assets/archive/...')` ou
`<img src="/assets/archive/..." alt="..." />` nas seções correspondentes do App.jsx.

Os placeholders visuais atuais (SVG inline no CSS) serão substituídos quando
imagens reais de qualidade forem adicionadas.
