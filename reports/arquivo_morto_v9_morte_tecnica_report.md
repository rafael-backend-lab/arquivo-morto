# Arquivo Morto V9 — Morte técnica

**Data:** 2026-05-21

## Arquivos alterados

| Arquivo | Mudança |
|---|---|
| `src/App.jsx` | Arrays `medicalDeathChapter` e `medicalEditorialSources`; nova seção "A morte técnica: medicina, corpo e fronteiras atuais"; nota bioética e lista de fontes-base |
| `src/App.css` | Novos estilos `.modern-death-section`, `.medical-grid`, `.medical-card`, `.medical-tag`, `.medical-warning`, `.bioethics-note`, `.source-list` e responsividade do capítulo |
| `README.md` | Nota do V9, atualização da lista de seções e observação de uso editorial de fontes oficiais sem orientação médica |
| `docs/editorial-direction.md` | Nova seção "V9 — Medicina moderna, bioética e fronteiras atuais" com separação editorial e fontes recomendadas |
| `reports/arquivo_morto_v9_morte_tecnica_report.md` | Novo relatório desta entrega |

## Seção adicionada

**Título:** A morte técnica: medicina, corpo e fronteiras atuais

**Subtítulo:** Na modernidade, vencer a morte deixou de ser apenas mito ou ritual: tornou-se linguagem de emergência, UTI, transplante, protocolo, bioética e tecnologia.

Inserida em `src/App.jsx` após os capítulos históricos e ocultistas, antes das camadas literárias e pop do projeto.

## Cards criados

| Card | Enfoque |
|---|---|
| Parada cardíaca e ressuscitação clínica | Emergência, circulação, tentativa médica de reversão clínica sem instrução procedimental |
| Morte cerebral | Critérios médicos, irreversibilidade e diferença entre morte cerebral e coma |
| Suporte artificial de vida | Ventilação, UTI, manutenção orgânica e dilema ético |
| Transplantes | Doação de órgãos e tecidos, continuidade corporal e ética institucional |
| Criogenia | Preservação em baixa temperatura como promessa cultural e especulação |
| Biotecnologia e reparo do corpo | Próteses, engenharia de tecidos e medicina regenerativa |
| IA, luto digital e simulações dos mortos | Chatbots, vozes, avatares e presença artificial após a perda |
| Diretivas antecipadas e fim de vida | Autonomia do paciente, planejamento e limites terapêuticos |

## Como a seção separa medicina real de especulação cultural

O capítulo distribui seus verbetes em campos editoriais explícitos: medicina real, bioética clínica, ética institucional, tecnologia emergente e especulação cultural. Assim, parada cardíaca, morte cerebral, suporte artificial, transplantes e diretivas antecipadas são tratados como medicina contemporânea e dilema humano real.

Criogenia e luto digital aparecem enquadrados como fronteiras culturais e tecnológicas, nunca como equivalentes clínicos de ressuscitação, sobrevivência ou retorno dos mortos. A ficção científica permanece fora deste bloco, reservada às histórias, dossiês e obras literárias do Arquivo Morto.

## Fontes oficiais recomendadas

- American Heart Association — CPR/ECC Guidelines
- NHS — Brain death
- Cleveland Clinic — Brain Death: What It Is, Stages & Criteria
- WHO — Guiding Principles on Human Cell, Tissue and Organ Transplantation
- MedlinePlus / NIH — Advance Directives
- National Institute on Aging / NIH — Advance Care Planning

## Resultado do build

```bash
> arquivo-morto@0.0.0 build
> vite build

vite v8.0.14 building client environment for production...
transforming...✓ 17 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-B881r6PR.css   39.41 kB │ gzip:  7.61 kB
dist/assets/index-BNa9VOpc.js   231.91 kB │ gzip: 73.21 kB

✓ built in 87ms
```

## Commit criado

```bash
add modern medical death chapter
```

## Próximos passos

1. Criar o capítulo intermediário sobre anatomia, vitalismo e corpo estudado para fechar a ponte entre alquimia e medicina moderna.
2. Considerar um índice editorial por macrocamadas: rito, ocultismo, medicina real, especulação cultural e ficção.
3. Revisar a timeline futuramente para refletir com mais precisão os temas modernos já introduzidos neste capítulo.
