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
