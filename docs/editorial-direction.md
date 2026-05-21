# Direção Editorial — Arquivo Morto

## Conceito central

Arquivo Morto é um projeto editorial que vive na intersecção entre horror científico, literatura gótica, galvanismo histórico e imaginário de laboratório proibido. A premissa: e se um arquivo secreto catalogasse tudo o que a ciência tentou e não devia?

## Referências temáticas

| Referência | Contexto |
|---|---|
| H. P. Lovecraft — Herbert West: Reanimator (1922) | Laboratório como território de horror cósmico |
| Mary Shelley — Frankenstein (1818) | Arquétipo moderno da criatura reanimada |
| Stuart Gordon — Re-Animator (1985) | Cinema cult, o reagente verde |
| Giovanni Aldini — experimentos galvânicos, Londres (1803) | Ciência como espetáculo fúnebre |
| Andrew Ure — galvanização de Matthew Clydesdale, Glasgow (1818) | Horror real no contexto da execução |
| Stephen Gray — corpo humano como condutor elétrico, Londres (1730) | Fundação do corpo como fio |

## Direção de arte

### Estética geral

Dark editorial. Não é terror barato nem visual de Halloween. É um arquivo científico fúnebre tratado com seriedade documental — como se um instituto real tivesse catalogado o impossível.

### Referências visuais

- **Victorian laboratory** — vidros, instrumentos, iluminação a gás, latão envelhecido
- **Medical archive** — prontuários, lâminas histológicas, fichas de catalogação numeradas
- **Necro-scientific dossier** — documentos lacrados, numeração de arquivo, selos de classificação
- **Analog horror sutil** — ruído de fita, scanlines CRT, flicker controlado
- **Texturas** — papel velho, ferro oxidado, vidro antigo, tinta ferruginosa

### O que evitar

- Estética de Halloween genérica
- Cores saturadas ou neon
- Carnavalesco, kitsch, exagerado
- Qualquer elemento que pareça template de marketing ou portfólio padrão

## Paleta

| Token | Hex | Uso |
|---|---|---|
| `--black` | `#080808` | Background principal |
| `--wine` | `#3A0F14` | Acentos, hero, borders de alerta |
| `--chem-green` | `#1D8A48` | Tags, elementos ativos, reagente |
| `--amber` | `#F8F0E0` | Elementos de destaque, headings |
| `--bone` | `#EBE6DD` | Texto principal claro |
| `--charcoal` | `#1C1D1F` | Fundos secundários |
| `--necrosis` | `#122421` | Backgrounds muito sutis |

## Tipografia

| Uso | Fonte |
|---|---|
| Títulos editoriais | Georgia, Times New Roman, serif |
| Corpo de texto | system-ui, sans-serif padrão |
| Metadados / códigos de arquivo | ui-monospace, Courier New, monospace |

## Efeitos visuais

- **Noise overlay**: SVG `feTurbulence` em `fractalNoise`, opacity ~0.04. Film grain analógico.
- **Scanlines**: `repeating-linear-gradient` horizontal, opacity ~0.03. CRT sutil.
- **Hero flicker**: `@keyframes` com variações de opacity de 0.01–0.02 em intervalos irregulares.
- **Glow nos dots da timeline**: `box-shadow` com spread em crimson.
- Nenhum efeito deve prejudicar legibilidade ou performance.

## Estrutura de conteúdo

### Dossiês
Casos históricos (Aldini, Ure, Gray) e ficcionais (Herbert West, Mary Shelley) tratados com linguagem documental. Cada dossiê tem ID único, status classificatório, localização histórica, tag de categoria e texto descritivo pericial.

**Status possíveis**: LACRADO, ARQUIVADO, PROIBIDO, CATALOGADO, FRAGMENTADO, FUNDACIONAL

### Artigos
Ensaios curtos sobre temas tangenciais: roubo de cadáveres, vitalismo, body horror, horror sônico, cartografia medieval do corpo. Formato lista editorial numerada.

### Linha do tempo
1730 → hoje. Do corpo como condutor elétrico à IA, criogenia e interfaces neurais.

### Gabinete de Anatomia
Itens fictícios catalogados como espécimes, documentos, substâncias, instrumentos e registros. Ficção documental — o arquivo dentro do arquivo.

**Tipos**: ESPÉCIME, DOCUMENTO, SUBSTÂNCIA, REGISTRO, INSTRUMENTO

## Tom de escrita

- Frio, pericial, distante
- Poético mas contido — sem melodrama
- Como um laudo que sabe que está descrevendo o impossível
- Precisão de data e local quando possível (confere autenticidade documental)
- Frases curtas a médias, nunca retórica excessiva

## V2 — Refinamento editorial e modo terminal

### Novidades da V2

**Navegação fixa (`site-header`)**
Header fixo no topo com links para Dossiês, Artigos, Linha do Tempo e Gabinete. Botão de alternância de modo no canto direito. CSS puro, sem JavaScript de scroll.

**Modo Terminal**
Estado React (`useState`) que alterna entre `Modo Arquivo` (paleta padrão dark vinho/âmbar) e `Modo Terminal` (paleta fosfórica verde — phosphor green `#00e87a`). Implementado via classe `.mode-terminal` na raiz. Nenhum runtime adicional — só CSS custom properties sobrescritas.

**Dossiê em destaque**
Seção dedicada ao caso DOS-001 (Aldini-Forster, Londres, 1803) com:
- Número do caso, local, classificação (EXPERIMENTO · GALVANISMO)
- Resumo pericial do evento de 17/01/1803
- Nota editorial contextualizando o caso como evento fundacional do arquivo

**Painel técnico lateral no hero**
`aside.hero-technical-panel` ao lado do conteúdo principal com identificador `ARQ-MORTO`, seção `DOSSIÊ CENTRAL` e dados técnicos: Frequência 17Hz, Reagente HW-7, Status lacrado, Registro necrociência editorial.

**Footer três colunas**
`.footer-grid` com `grid-template-columns: 1.4fr 1fr 1fr`:
1. **Arquivo Morto** — descrição editorial
2. **Categorias** — links internos
3. **Registro** — metadados do arquivo (ARQ-001, voltagem, reagente, data)

### Decisões técnicas V2

- Modo Terminal usa CSS custom properties sobrescritas em `.mode-terminal` — sem duplicação de componentes
- Painel técnico some em mobile (≤720px) para não quebrar hero
- Navegação nav-links some em mobile — hero ainda acessível via scroll
- Nenhuma dependência nova adicionada

## V3 — Selo, classificação e acabamento

### Selo Visual (archive-seal)

Carimbo científico em CSS puro, posicionado absolutamente no canto inferior direito do hero. Três camadas concêntricas: borda sólida externa, borda tracejada intermediária, borda fina interna. Centro: monograma "AM" em Georgia, separador com traço galvânico (`.seal-bolt`), "Arquivo Morto" e "Est. 1803" em ui-monospace. Opacidade `0.11` — elemento de identidade visual, não de conteúdo. Some em mobile (≤720px).

### Classificação do Arquivo

Quatro etiquetas de catálogo entre o Manifesto e o Dossiê em Destaque. Grid 4 colunas. Cada card: borda superior âmbar, código CLF-001..004, nome em Georgia, contagem em monospace. Visual de ficha de catálogo físico.

| Código | Categoria |
|---|---|
| CLF-001 | Literatura de Reanimação |
| CLF-002 | Galvanismo Histórico |
| CLF-003 | Anatomia Proibida |
| CLF-004 | Horror Científico |

### Modo Terminal refinado

Botão `mode-toggle` usa `data-mode={mode}`. `data-mode="arquivo"` → glow verde sutil (convite). `data-mode="terminal"` → crimson com glow (estado ativo). State-driven via CSS `[data-mode]` sem lógica JS extra.

### Footer editorial premium

Frase de fechamento: "Todo arquivo morto ainda respira em alguma página." — Georgia, itálico, opacidade `0.24`. Posicionada antes do `footer-ref` técnico, separando tom literário de metadado operacional.

## V4 — Histórias, curadoria e densidade editorial

### Histórias do Arquivo

Seis fichas editoriais classificadas por natureza de conteúdo. Grid 2 colunas. Cada card tem borda superior colorida por tipo, código, categoria, título, resumo, trecho narrativo em blockquote e classificação por índice.

**Tipos de conteúdo e marcação visual:**

| Tipo | CSS class | Cor de borda |
|---|---|---|
| História real documentada | `.story-type-real` | âmbar `rgba(184,154,102,0.65)` |
| Literatura | `.story-type-literatura` | bone `rgba(235,230,221,0.35)` |
| Ficção editorial | `.story-type-ficcao` | crimson `rgba(200,75,90,0.65)` |

**Histórias incluídas:**

| Código | Tipo | Título |
|---|---|---|
| HIS-001 | Real | A mandíbula que se abriu em Londres |
| HIS-002 | Real | O cadáver que fez a plateia recuar |
| HIS-003 | Literatura | Frankenstein: a criatura antes do monstro |
| HIS-004 | Literatura | Herbert West e a medicina que perdeu a alma |
| HIS-005 | Real | Os homens que roubavam carne |
| HIS-006 | Ficção editorial | Prontuário 334-B |

### Nota de curadoria

Seção após as histórias, antes do Dossiê em Destaque. Explica a separação entre os três tipos de material do arquivo (história, literatura, ficção). Formato similar ao Manifesto: grid dois colunas com tag verde e corpo de texto. Propósito: transparência editorial — o projeto nunca confunde fato com ficção.

Princípio: o horror, quando aparece, vem dos fatos. A ficção existe para completar o que os documentos não alcançam.

### Decisões editoriais V4

- Fatos históricos (Aldini, Ure, body snatchers) citados com localização e data — nenhum foi inventado ou distorcido
- Obras literárias (Shelley, Lovecraft) citadas com autoria e data — tratadas como literatura, não como registro
- Ficção editorial (Prontuário 334-B) marcada explicitamente na categoria e no resumo
- Os excerpts narrativos das histórias reais são reconstituição editorial de tom, não transcrição de documentos primários

## V5 — Imagens, gravuras e camada visual

### Componente ArchiveVisual

Função React `ArchiveVisual({ type, label, code, size })` que renderiza um quadro visual editorial sem imagem externa. O `type` determina o background SVG via classe CSS `.visual-[type]`. Tamanhos: `sm` (90px), `md` (120px), `lg` (160px).

**Tipos disponíveis:**

| Tipo | Visual | Estética |
|---|---|---|
| `galvanic-wave` | ECG/osciloscopio verde | Laboratório galvânico, frequência 17Hz |
| `anatomical-plate` | Oval + cruzeta | Prancha anatômica vitoriana |
| `medical-file` | Pasta pautada | Prontuário médico, arquivo |
| `reagent-vial` | Frasco HW-7 | Substância química, reagente |
| `corpse-tag` | Etiqueta pendurada | Ficha de cadáver, número 334-B |
| `occult-diagram` | Círculos concêntricos + cruzes | Diagrama científico/esotérico |

### Onde imagens reais entrarão

Quando imagens de domínio público forem adicionadas a `public/assets/archive/`, elas substituirão ou complementarão os SVG inline nos seguintes pontos:

- **Hero**: `.hero-visual-system` → gravura galvânica histórica (ex: ilustrações de Aldini)
- **Featured Dossier**: `.featured-visual-panel` → gravura do experimento Forster 1803
- **Dossier cards**: campo `visual` → imagem tipada por dossiê
- **Story cards**: campo `visual` → ilustração contextual por história
- **Cabinet items**: campo `visual` → fotografia/gravura do espécime

### Fontes recomendadas de imagens

- **Wellcome Collection** — gravuras médicas e anatômicas históricas (CC BY)
- **Wikimedia Commons** — ampla coleção, verificar licença por item
- **Internet Archive** — livros e revistas históricas digitalizados
- **Biodiversity Heritage Library** — gravuras científicas do séc. XVIII–XIX
- **Library of Congress** — fotografias históricas (domínio público)
- **National Library of Medicine** — história da medicina e anatomia

### Princípio visual V5

Os placeholders SVG são editoriais, não genéricos. Cada tipo foi desenhado para evocar o registro visual específico da temática (osciloscópio para galvanismo, prontuário para documentos, vial para reagentes). Quando imagens reais forem adicionadas, devem manter a mesma especificidade — gravuras e fotos históricas, nunca stock photos modernos.

## V6 — Capítulo I: morte ritual e culturas antigas

Nova seção inserida após o manifesto, em tom histórico, documental e fúnebre, dedicada às formas pelas quais diferentes culturas imaginaram a permanência, a travessia ou o retorno dos mortos antes da ciência moderna.

As seis fichas cobrem Egito Antigo, Mesopotâmia, Grécia e Roma, Cristianismo, mortos inquietos no folclore e ancestrais com mediação espiritual. Cada card deve tratar crença, rito, mito ou tradição como material cultural e histórico, nunca como fato científico.
