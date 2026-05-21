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
3. **A humanidade contra a morte** — seis fichas históricas sobre ritos, mitos e culturas funerárias
4. **Necromancia, alquimia e o desejo de retorno** — seis fichas sobre ocultismo, matéria animada e longevidade
5. **Do corpo sagrado ao corpo estudado** — seis fichas sobre anatomia, vitalismo, ensino médico e corpo como prova
6. **Galvanismo, medicina legal e sinais do cadáver** — oito fichas sobre eletricidade animal, sinais pós-morte e olhar pericial
7. **A morte técnica: medicina, corpo e fronteiras atuais** — oito fichas sobre emergência, bioética, transplantes, biotecnologia e luto digital
8. **Dossiê em destaque** — Aldini-Forster, Londres, 1803, como peça principal do arquivo
9. **Dossiês selecionados** — seis casos condensados para consulta rápida, sem repetição estrutural
10. **Artigos** — cinco ensaios e investigações temáticas
11. **Linha do tempo** — de 1730 até hoje
12. **Gabinete de Anatomia** — itens fictícios lacrados e catalogados
13. **Nota de curadoria** — fechamento editorial sobre fato, literatura e ficção
14. **Footer** — identificação editorial

## V8 — Capítulo III: Do corpo sagrado ao corpo estudado

Capítulo intermediário dedicado à passagem do cadáver ritualizado para o cadáver estudado, dissecado, ensinado e lido como documento anatômico.

## V8.1 — Capítulo IV: Galvanismo, medicina legal e sinais do cadáver

Capítulo de transição entre anatomia histórica e medicina moderna, com foco em galvanismo, sinais pós-morte, medo do enterro vivo e consolidação do olhar médico-legal em tom editorial, não instrutivo.

## V9 — A morte técnica: medicina, corpo e fronteiras atuais

Capítulo editorial dedicado à medicina moderna, bioética e tecnologia contemporânea diante do fim. A parte médica usa fontes oficiais e tom editorial, sem orientação médica, sem ensino de procedimento e sem recomendação de tratamento.

## Refinamento de datação editorial

Os cards históricos agora priorizam datas, séculos e períodos reais como metadado visual principal. Códigos internos permanecem apenas como referência secundária de arquivo.

## Editorial cleanup

A estrutura editorial foi enxugada para reduzir repetição entre seções. O dossiê em destaque permanece como peça principal sobre Aldini/Forster, enquanto os antigos blocos de histórias e dossiês foram consolidados em uma única seção de dossiês selecionados.

## V7 — Capítulo II: Necromancia, alquimia e o desejo de retorno

Novo capítulo editorial que liga rito, ocultismo, alquimia, mito de matéria animada e a imaginação pré-científica da criatura artificial.

## V6 — Capítulo I: A humanidade contra a morte

Nova seção editorial histórica com seis fichas sobre morte ritual, memória funerária e culturas antigas diante do fim.

## V5 — Visual archive layer

- **Camada visual de arquivo**: componente `ArchiveVisual` renderiza 6 tipos de ilustração em CSS/SVG inline — `galvanic-wave`, `anatomical-plate`, `medical-file`, `reagent-vial`, `corpse-tag`, `occult-diagram`
- **Hero**: sistema visual de diagrama técnico em background (`.hero-visual-system`)
- **Dossiê em Destaque**: painel visual lateral com etiqueta GALVANISMO/1803 e carimbo OBSERVAÇÃO PÓS-MORTE
- **Histórias e Gabinete**: cada card tem miniatura visual tipada
- **`public/assets/archive/`**: estrutura preparada para imagens reais de domínio público

## V4 — Editorial expansion

- **Histórias do Arquivo** — 6 fichas editoriais ricas com código, categoria, título, resumo, trecho narrativo e classificação
- **Nota de curadoria** — seção explicando a separação entre história real, literatura e ficção editorial do projeto
- Conteúdo classificado explicitamente: história real documentada, literatura, ficção editorial
- Status `v4.0`

## V3 — Visual polish

- **Selo visual do Arquivo Morto** — carimbo científico em CSS puro no hero (círculo duplo, monograma AM, linhas galvânicas)
- **Classificação do Arquivo** — 4 blocos de catálogo: Literatura de Reanimação, Galvanismo Histórico, Anatomia Proibida, Horror Científico
- **Modo Terminal refinado** — botão com estado visual via `data-mode`, brilho verde perceptível no modo padrão, crimson ativo no modo terminal
- **Footer editorial premium** — frase de fechamento: "Todo arquivo morto ainda respira em alguma página."

## V2 — Refinamento editorial e Modo Terminal

A V2 introduz:

- **Navegação fixa** (`site-header`) com links para todas as seções
- **Modo Terminal** — botão que alterna o visual para paleta fosfórica verde terminal
- **Dossiê em destaque** — Aldini-Forster, Londres, 1803, com número de caso, classificação, resumo e nota editorial
- **Painel técnico lateral no hero** com ARQ-MORTO, frequência 17Hz, reagente HW-7 e status lacrado
- **Footer com três colunas** — Arquivo Morto, Categorias, Registro

## Status

`v9.0` — capítulo editorial médico e bioético adicionado. Em desenvolvimento local. Não publicado ainda.

## Nota editorial

Projeto cultural e independente. Inspiração temática em H. P. Lovecraft, Mary Shelley e história da ciência do século XIX. Nenhuma cópia de marca, texto ou identidade visual de obras existentes.
