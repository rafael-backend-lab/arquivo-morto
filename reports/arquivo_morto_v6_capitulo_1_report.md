# Arquivo Morto V6 — Capítulo I

**Data:** 2026-05-21

## Arquivos alterados

| Arquivo | Mudança |
|---|---|
| `src/App.jsx` | Array `humanityAgainstDeath` com 6 registros e nova seção "A humanidade contra a morte" inserida após o manifesto |
| `src/App.css` | Novos estilos `.humanity-section`, `.history-grid`, `.history-card`, `.archive-era-label` e responsividade da seção histórica |
| `README.md` | Nota curta do V6, atualização da lista de seções e status para `v6.0` |
| `docs/editorial-direction.md` | Registro do V6 com foco em morte ritual e culturas antigas |
| `reports/arquivo_morto_v6_capitulo_1_report.md` | Novo relatório desta entrega |

## Seção adicionada

**Título:** A humanidade contra a morte

**Subtítulo:** Antes do laboratório, antes da eletricidade e antes do cinema, já existia a tentativa humana de negociar com o fim.

Inserida em `src/App.jsx` logo após o manifesto e antes das demais seções editoriais modernas do Arquivo Morto.

## Resumo dos 6 cards

| Card | Enfoque |
|---|---|
| Egito Antigo | Mumificação, preservação do corpo, travessia espiritual e permanência funerária |
| Mesopotâmia | Submundo como território, descida aos mortos e destino inevitável |
| Grécia e Roma | Hades, ritos funerários, memória ritual e vínculo entre cidade e mortos |
| Cristianismo | Ressurreição, milagre, corpo glorificado e retorno como promessa escatológica |
| Mortos inquietos no folclore | Revenants, vampiros, assombrações e ansiedade social em torno do cadáver |
| Ancestrais e mediação espiritual | Culto ancestral, xamanismo, oferendas e contato simbólico com os mortos |

## Resultado do build

```bash
> arquivo-morto@0.0.0 build
> vite build

vite v8.0.14 building client environment for production...
transforming...✓ 17 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-DAxnqRbg.css   33.54 kB │ gzip:  6.94 kB
dist/assets/index-QaGIECKJ.js   218.96 kB │ gzip: 68.81 kB

✓ built in 81ms
```

## Commit criado

```bash
add humanity against death chapter
```

## Próximos passos

1. Adicionar âncoras de navegação para capítulos históricos, se o projeto evoluir para novos volumes editoriais.
2. Expandir a linhagem histórica com novos blocos sobre necromancia erudita, medicina medieval ou espiritualismo moderno.
3. Testar a densidade dos cards em telas muito estreitas para calibrar comprimento editorial conforme o preview local.
