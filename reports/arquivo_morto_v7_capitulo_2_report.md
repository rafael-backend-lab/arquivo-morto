# Arquivo Morto V7 — Capítulo II

**Data:** 2026-05-21

## Arquivos alterados

| Arquivo | Mudança |
|---|---|
| `src/App.jsx` | Array `occultReturnChapter` com 6 verbetes e nova seção "Necromancia, alquimia e o desejo de retorno" posicionada após o Capítulo I |
| `src/App.css` | Novos estilos `.occult-section`, `.occult-grid`, `.occult-card`, `.occult-mark`, `.occult-category`, `.occult-warning` e responsividade do capítulo |
| `README.md` | Nota curta do V7, atualização da lista de seções e status para `v7.0` |
| `docs/editorial-direction.md` | Registro do V7 com foco em ocultismo, alquimia e matéria animada |
| `reports/arquivo_morto_v7_capitulo_2_report.md` | Novo relatório desta entrega |

## Seção adicionada

**Título:** Necromancia, alquimia e o desejo de retorno

**Subtítulo:** Entre o rito e o laboratório, a humanidade tentou falar com os mortos, prolongar a vida e imaginar matéria obedecendo ao espírito.

Inserida em `src/App.jsx` logo após **A humanidade contra a morte** e antes das seções modernas do Arquivo Morto.

## Resumo dos 6 cards

| Card | Enfoque |
|---|---|
| Necromancia | Comunicação com mortos como busca de saber proibido, tratada como tradição ritual e histórica |
| Alquimia | Matéria, espírito, transmutação, anima e filosofia da transformação |
| John Dee | Ocultismo renascentista, matemática, astrologia e linguagem angélica, sem associação a reanimação cadavérica |
| Golem | Mito de matéria animada pela palavra e criação artificial anterior à ciência moderna |
| Elixir da vida | Longevidade, imortalidade simbólica e resistência à decadência do corpo |
| Autômatos e corpo mecânico | Máquinas que simulam vida e ponte para a criatura artificial moderna |

## Como o capítulo faz ponte entre rito, ocultismo e ciência moderna

O capítulo mostra que a imaginação do retorno não começou no laboratório elétrico. Primeiro aparecem ritos de consulta aos mortos, filosofias de transmutação da matéria, criaturas moldadas pela palavra e sonhos de longevidade.

Em seguida, esses mesmos temas deslocam o problema da vida para a linguagem da técnica: matéria obediente, corpo como mecanismo, anima como princípio oculto e criatura artificial como hipótese cultural. Essa transição prepara a passagem editorial para anatomia, galvanismo, Frankenstein e horror científico sem confundir tradição simbólica com ciência.

## Resultado do build

```bash
> arquivo-morto@0.0.0 build
> vite build

vite v8.0.14 building client environment for production...
transforming...✓ 17 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-D1CIyecv.css   35.93 kB │ gzip:  7.20 kB
dist/assets/index-B_5nAjcK.js   223.94 kB │ gzip: 70.53 kB

✓ built in 86ms
```

## Commit criado

```bash
add occult and alchemy chapter
```

## Próximos passos

1. Criar um Capítulo III sobre anatomia, vitalismo e o corpo como máquina para fechar a transição até o galvanismo.
2. Adicionar âncoras de navegação para capítulos históricos, caso a enciclopédia cresça por volumes editoriais.
3. Testar leitura em telas pequenas para calibrar o comprimento dos avisos e a densidade tipográfica dos verbetes.
