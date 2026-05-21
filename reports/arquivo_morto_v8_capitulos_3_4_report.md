# Arquivo Morto V8 — Capítulos III e IV

**Data:** 2026-05-21

## Arquivos alterados

| Arquivo | Mudança |
|---|---|
| `src/App.jsx` | Arrays `bodyStudyChapter` e `forensicDeathChapter`; inserção dos Capítulos III e IV; ajuste da ordem editorial antes do capítulo moderno; `Capítulo V` no bloco moderno |
| `src/App.css` | Novos estilos `.body-study-section`, `.body-study-grid`, `.body-study-card`, `.forensic-section`, `.forensic-grid`, `.forensic-card`, `.forensic-label`, `.forensic-warning`, `.anatomy-label` e responsividade |
| `README.md` | Ordem editorial corrigida nas seções; notas `V8` e `V8.1` adicionadas |
| `docs/editorial-direction.md` | Seções `V8 — Anatomia, dissecação e corpo estudado` e `V8.1 — Galvanismo, medicina legal e sinais do cadáver` |
| `reports/arquivo_morto_v8_capitulos_3_4_report.md` | Novo relatório desta entrega |

## Capítulos adicionados

### Capítulo III
**Título:** Do corpo sagrado ao corpo estudado

**Subtítulo:** Quando o cadáver deixou de ser apenas relíquia, pecado ou mistério, tornou-se também matéria de estudo.

### Capítulo IV
**Título:** Galvanismo, medicina legal e sinais do cadáver

**Subtítulo:** Antes da morte se tornar protocolo hospitalar, ela foi lida no músculo, na pele, no rigor, no gás, no silêncio e nos movimentos que pareciam vida.

## Resumo dos cards

### Capítulo III
- Corpo sagrado: cadáver como relíquia, tabu, memória e respeito ritual.
- Dissecação e anatomia: abertura do corpo como ruptura simbólica e avanço do saber anatômico.
- Escolas médicas: necessidade institucional de cadáveres para ensino.
- Ressurrecionistas: body snatchers, mercado clandestino de corpos e horror urbano da anatomia.
- Vitalismo: debate sobre o princípio que separaria o vivo do morto.
- Cadáver como prova: nascimento do olhar médico-legal sobre causa mortis e indício corporal.

### Capítulo IV
- Galvani e a eletricidade animal: nervos, contrações e força animadora em debate.
- Aldini e o teatro galvânico: demonstrações públicas com cadáveres e espetáculo científico.
- Andrew Ure e o cadáver em Glasgow: contrações galvânicas que perturbaram a plateia.
- Espasmo cadavérico: fenômeno médico-legal separado de fantasia de reanimação.
- Rigidez cadavérica: transformação muscular como leitura pós-morte do corpo.
- Gases, ruídos e movimentos pós-morte: processos naturais que alimentaram medos populares.
- Catalepsia e medo do enterro vivo: pânico social diante do diagnóstico equivocado.
- Autópsia e medicina legal: corpo como documento, prova e laudo.

## Como isso corrige a ponte entre ocultismo/alquimia e medicina moderna

Esses dois capítulos recompõem a passagem que faltava entre o imaginário ocultista do Capítulo II e a linguagem clínica do capítulo moderno. O Capítulo III desloca o morto do campo do rito e do símbolo para o campo do estudo, do ensino e da prova anatômica.

O Capítulo IV mostra o momento em que o cadáver passa a ser lido pela eletricidade, pela fisiologia, pela medicina legal e pelos sinais materiais da morte. Com isso, `A morte técnica: medicina, corpo e fronteiras atuais` deixa de surgir abruptamente e passa a operar como continuação histórica de uma longa transformação do corpo morto em objeto de observação, laudo e protocolo.

## Observação editorial sobre medicina legal

Todo o material de medicina legal foi tratado em chave cultural, histórica e editorial. O capítulo não ensina autópsia, não descreve procedimentos investigativos e não oferece orientação clínica ou forense.

## Resultado do build

```bash
> arquivo-morto@0.0.0 build
> vite build

vite v8.0.14 building client environment for production...
transforming...✓ 17 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-BTyyelip.css   43.92 kB │ gzip:  7.99 kB
dist/assets/index-2CGM20Gb.js   241.44 kB │ gzip: 75.87 kB

✓ built in 82ms
```

## Commit criado

```bash
add anatomy galvanism and forensic death chapters
```

## Próximos passos

1. Revisar a `Linha do tempo` para refletir explicitamente os marcos de anatomia, galvanismo e medicina legal agora presentes nos Capítulos III e IV.
2. Considerar uma âncora de navegação futura para capítulos editoriais, caso o arquivo continue crescendo por blocos históricos.
3. Ajustar, se necessário, a posição de seções auxiliares como classificação e nota de curadoria para uma taxonomia ainda mais explícita do fluxo editorial.
