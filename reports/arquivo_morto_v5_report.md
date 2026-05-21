# Arquivo Morto V5 — Relatório de camada visual

**Data:** 2026-05-21

## Arquivos alterados

| Arquivo | Mudança |
|---|---|
| `src/App.jsx` | Campo `visual` nos arrays `dossiers`, `cabinet`, `stories`; componente `ArchiveVisual`; hero-visual-system; featured-visual-panel; ArchiveVisual nas story cards e cabinet items; "Histórias" no nav |
| `src/App.css` | `.archive-visual`, `.archive-visual-frame`, `.av-*`, `.visual-meta`, 6 tipos de visual (SVG inline), `.hero-visual-system`, `.hvs-diagram`, `.featured-layout`, `.featured-visual-panel`, `.fvp-tag`, `.fvp-stamp`; responsivo V5 |
| `README.md` | Seção V5; status → v5.0 |
| `docs/editorial-direction.md` | Seção "V5 — Imagens, gravuras e camada visual" |
| `public/assets/archive/README.md` | Novo — regras de licença e fontes recomendadas |

## Elementos visuais criados

### Componente ArchiveVisual
- Função React reutilizável com props `type`, `label`, `code`, `size`
- Renderiza quadros visuais com SVG inline via CSS background-image
- Não usa imagens externas — completamente auto-contido

### 6 tipos de visual (SVG data URL no CSS)

| Classe CSS | Descrição visual |
|---|---|
| `.visual-galvanic-wave` | ECG com onda quadrada verde, grid de laboratório, label "17Hz" |
| `.visual-anatomical-plate` | Oval dupla com cruzeta e pontos cardinais — prancha anatômica |
| `.visual-medical-file` | Prontuário com aba, linhas pautadas, margem vermelha e barras redactadas |
| `.visual-reagent-vial` | Frasco com líquido verde HW-7, tampa e marcadores de medição |
| `.visual-corpse-tag` | Etiqueta pendurada com furo, cordão, número 334-B e linhas |
| `.visual-occult-diagram` | 3 círculos concêntricos com cruz e diagonais — diagrama esotérico |

### Hero visual system
- `.hero-visual-system` + `.hvs-diagram` — diagrama técnico de 380px com 4 anéis concêntricos, cruzeta e diagonais, opacity 0.045, posicionado à direita do hero

### Featured visual panel
- `.featured-layout` — flex com `.featured-content` e `.featured-visual-panel`
- Painel lateral 200px com tag "GALVANISMO / 1803", ArchiveVisual galvanic-wave tamanho lg, e carimbo "OBSERVAÇÃO PÓS-MORTE"

## Onde imagens reais serão colocadas

| Local | Campo/classe | Tipo de imagem recomendado |
|---|---|---|
| Hero background | `.hero-visual-system` | Gravura galvânica histórica (Aldini, séc. XIX) |
| Featured panel | `.featured-visual-panel` | Gravura do experimento Forster 1803 |
| DOS-001 / HIS-001 | `visual: 'galvanic-wave'` | Ilustração de experimento galvânico |
| DOS-005 | `visual: 'anatomical-plate'` | Prancha anatômica histórica |
| DOS-003 / HIS-004 | `visual: 'reagent-vial'` | Ilustração de laboratório |
| HIS-005 | `visual: 'corpse-tag'` | Fotografia histórica de cemitério ou documento |

## Fontes públicas recomendadas

- **Wellcome Collection** (wellcomecollection.org) — gravuras médicas CC BY
- **Wikimedia Commons** — verificar licença por item
- **Internet Archive** (archive.org) — livros históricos digitalizados
- **Biodiversity Heritage Library** — gravuras científicas séc. XVIII–XIX
- **Library of Congress** (loc.gov) — fotografias históricas domínio público
- **National Library of Medicine** — história da medicina e anatomia

## Resultado do npm run build

```
vite v8.0.14 building client environment for production...
✓ 17 modules transformed.

dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-BsgukihU.css   31.37 kB │ gzip:  6.62 kB
dist/assets/index-CjgdIxe8.js   214.89 kB │ gzip: 67.32 kB

✓ built in 86ms
```

CSS cresceu de 22.23 kB para 31.37 kB — diferença proporcional aos SVG inline adicionados.
Build limpo. Sem erros ou avisos.

## Commit criado

```
add arquivo morto visual archive layer
```

Branch: `main` — não publicado no GitHub.
