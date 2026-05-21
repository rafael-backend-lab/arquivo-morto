# Arquivo Morto

Projeto editorial sombrio sobre literatura, ciência e horror da reanimação.

## Conceito

Arquivo Morto explora a intersecção entre ficção de horror, história da ciência e a obsessão humana com a reanimação dos mortos. Do galvanismo de Giovanni Aldini ao laboratório de Herbert West, da criatura de Frankenstein aos prontuários médicos do século XIX.

A proposta mistura:

- Horror cósmico e gótico (Lovecraft, Mary Shelley)
- Galvanismo e experimentos elétricos com cadáveres (séculos XVIII–XIX)
- História da medicina, anatomia e vitalismo
- Cinema cult (Re-Animator, 1985)
- Imaginário científico fúnebre e documentação de arquivo

## Stack

- React 19
- Vite 8
- CSS próprio (sem Tailwind, sem frameworks de estilo)

## Como rodar

```bash
npm install
npm run dev
```

Acesse: `http://localhost:5173`

## Local Preview

O VS Code Simple Browser não é obrigatório. Use o fluxo abaixo pelo terminal:

| Comando | O que faz |
|---|---|
| `npm run dev:local` | Sobe Vite em `127.0.0.1:5173` (porta fixa) |
| `npm run open` | Abre `http://127.0.0.1:5173/` no navegador padrão |
| `npm run dev:open` | Sobe Vite + aguarda a porta + abre o navegador automaticamente |
| `npm run build` | Gera build de produção em `dist/` |

**Fluxo recomendado:**

```bash
# opção 1 — automático
npm run dev:open

# opção 2 — manual
npm run dev:local
# em outro terminal ou aba:
npm run open
```

> Se preferir, use a aba **Ports** do VS Code para reencaminhar a porta 5173 e abrir no browser integrado.

## Build

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  App.jsx          componente principal com todas as seções
  App.css          design system dark editorial completo
  index.css        base global mínima
public/
  favicon.svg
docs/
  editorial-direction.md   direção de arte e conteúdo
```

## Seções

1. **Hero** — cinematográfico, com metadados de arquivo falsos
2. **Manifesto** — texto frio e poético sobre morte e ciência
3. **Dossiês** — seis casos históricos e ficcionais catalogados
4. **Artigos** — cinco ensaios e investigações temáticas
5. **Linha do tempo** — de 1730 até hoje
6. **Gabinete de Anatomia** — itens fictícios lacrados e catalogados
7. **Footer** — identificação editorial

## Status

`v1.0` — primeira versão profissional. Em desenvolvimento local. Não publicado ainda.

## Nota editorial

Projeto cultural e independente. Inspiração temática em H. P. Lovecraft, Mary Shelley e história da ciência do século XIX. Nenhuma cópia de marca, texto ou identidade visual de obras existentes.
