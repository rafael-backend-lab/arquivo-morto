# Arquivo Morto V4 — Relatório de expansão editorial

**Data:** 2026-05-21

## Arquivos alterados

| Arquivo | Mudança |
|---|---|
| `src/App.jsx` | Array `stories` com 6 histórias; seção "Histórias do Arquivo"; seção "Nota de curadoria" |
| `src/App.css` | `.stories-grid`, `.story-card`, `.story-type-*`, `.story-code`, `.story-category`, `.story-status`, `.story-excerpt`, `.story-classification`, `.curator-note`, `.curator-inner`, `.curator-tag`, `.curator-body`; responsivo V4 |
| `README.md` | Seção V4 com lista de novidades; status → v4.0 |
| `docs/editorial-direction.md` | Seção "V4 — Histórias, curadoria e densidade editorial" com tabelas e decisões |

## Histórias adicionadas

| Código | Tipo | Título | Status |
|---|---|---|---|
| HIS-001 | História real documentada | A mandíbula que se abriu em Londres | VERIFICADO |
| HIS-002 | História real documentada | O cadáver que fez a plateia recuar | ARQUIVADO |
| HIS-003 | Literatura | Frankenstein: a criatura antes do monstro | FUNDACIONAL |
| HIS-004 | Literatura de horror | Herbert West e a medicina que perdeu a alma | PROIBIDO |
| HIS-005 | História e medicina | Os homens que roubavam carne | ARQUIVADO |
| HIS-006 | Ficção editorial | Prontuário 334-B | LACRADO |

## Como os conteúdos foram classificados

**Separação por `story.type` (campo interno):**
- `type: 'real'` → borda superior âmbar, categoria dourada — indica episódio histórico documentado
- `type: 'literatura'` → borda superior bone, categoria discreta — indica obra literária publicada
- `type: 'ficcao'` → borda superior crimson, categoria vermelha — indica ficção editorial do Arquivo Morto

**Marcação textual obrigatória para ficção:**
O resumo do HIS-006 contém: "Este dossiê é ficção editorial do Arquivo Morto — não representa evento histórico real." Nenhum fato histórico foi inventado ou distorcido nos demais registros.

**Nota de curadoria:**
Seção dedicada explicando os três tipos de material, a separação editorial e o propósito cultural do projeto. Posicionada após as histórias e antes do Dossiê em Destaque.

## Resultado do npm run build

```
vite v8.0.14 building client environment for production...
✓ 17 modules transformed.

dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-uohQ-a7U.css   22.23 kB │ gzip:  5.07 kB
dist/assets/index-C6DtPwvg.js   213.40 kB │ gzip: 67.00 kB

✓ built in 78ms
```

Build limpo. Sem erros ou avisos.

## Commit criado

```
expand arquivo morto editorial stories
```

Branch: `main` — não publicado no GitHub.

## Próximos passos

1. **Conteúdo** — revisar e expandir os textos de dossiês, artigos e linha do tempo com o mesmo nível de densidade da V4
2. **Navegação** — adicionar "Histórias" ao menu fixo (site-header)
3. **Busca/filtro** — considerar filtro por tipo de conteúdo (real / literatura / ficção) nas histórias
4. **Publicação** — definir plataforma (GitHub Pages, Vercel ou Netlify), atualizar footer-github e solicitar aprovação explícita antes de qualquer push
5. **Mobile** — testar em dispositivos reais, especialmente cards de história em telas ≤390px
