# Relatório: UX/UI Professional Polish — Arquivo Morto

Data: 2026-05-22

---

## Problemas encontrados

### Mobile

| Problema | Severidade | Status |
|---|---|---|
| Hero com `min-height: 520px` fixo até ≤640px | Médio | Corrigido |
| Hero padding de 38px lateral em 640px (ainda alto) | Médio | Corrigido |
| Botões hero em linha em telas estreitas | Baixo | Corrigido |
| Seções com `margin-top: 64–80px` em mobile (ritmo excessivo) | Médio | Corrigido |
| `featured-blocks` permanecia 2 colunas abaixo de 640px | Alto | Corrigido |
| Timeline coluna de 72px em mobile (sem ajuste abaixo de 720px) | Baixo | Corrigido |
| Card heads sem `flex-wrap` explícito (possível overflow em texto longo) | Baixo | Corrigido |

### Visual / identidade

| Problema | Status |
|---|---|
| `.section-label` era texto simples âmbar sem marcação visual de capítulo | Corrigido |
| Timeline sem separadores visuais entre eventos | Corrigido |
| Ano da timeline sem distinção visual suficiente | Corrigido |
| `.featured-meta` sem divisória abaixo (campos misturados com título) | Corrigido |
| `.clf-card` sem `position: relative` para pseudo-elementos decorativos | Corrigido |
| Timeline sem container de arquivo (nenhum border ou background) | Corrigido |

---

## Mudanças feitas

### 1. `section-label` — redesenho como carimbo de capítulo

**Antes:** texto simples, âmbar, `letter-spacing: 0.22em`, sem borda.

**Depois:**
```css
.section-label {
  display: inline-block;
  font-family: ui-monospace, 'Courier New', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.24em;
  color: var(--chem-green);
  padding: 4px 10px;
  border: 1px solid rgba(29, 138, 72, 0.28);
  border-radius: 3px;
  background: rgba(29, 138, 72, 0.06);
}
```

Resultado: cada capítulo agora tem uma etiqueta verde `CAPÍTULO I / II / III...` visível como carimbo de arquivo.

---

### 2. Timeline — visual de registro cronológico de arquivo

**Antes:** linha vertical, dot vermelho, texto simples, nenhuma separação entre eventos.

**Depois:**
- Ano com pílula âmbar: `padding + border + background` (visual de badge de data)
- Dot maior (10px), com borda fina adicional e glow mais forte
- Cada evento tem `border-bottom` sutil como separador de linha de registro
- Container `.timeline` com `border`, `border-radius` e `background` de arquivo (sem padding horizontal para preservar alinhamento da linha vertical com os dots)

---

### 3. Mobile 640px — ritmo e espaçamento

```css
@media (max-width: 640px) {
  /* Todas as seções: margin-top reduzido de 64–80px para 40px */
  .section, .humanity-section, .occult-section, ... { margin-top: 40px !important; }

  /* Hero: min-height removido, padding reduzido */
  .hero { min-height: auto; padding: 32px 20px 36px; border-radius: 12px; }

  /* Botões: coluna em mobile */
  .actions { flex-direction: column; gap: 8px; }
  .btn { width: 100%; justify-content: center; }

  /* Featured blocks: 1 coluna */
  .featured-blocks { grid-template-columns: 1fr; }

  /* Timeline: coluna de ano reduzida para 68px, ::before ajustado */
  .timeline::before { left: 68px; }
  .timeline-event { grid-template-columns: 68px 1fr; padding-bottom: 20px; }

  /* Section header h3: escala menor */
  .section-header h3 { font-size: clamp(1.3rem, 5vw, 1.9rem); }
}
```

---

### 4. Card heads — wrap em viewports estreitas

```css
.history-card-head, .occult-card-head, .body-study-card-head,
.forensic-card-head, .medical-card-head {
  flex-wrap: wrap;
  row-gap: 6px;
}
```

Evita que tag de período e label de tema se sobreponham em telas de 360px.

---

### 5. Featured-meta — divisória de dossiê

```css
.featured-meta {
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(248, 240, 224, 0.07);
  margin-bottom: 20px;
}
```

Os campos de data, local e classificação ficam claramente separados do título do dossiê.

---

### 6. CLF cards — linha de acento inferior

```css
.clf-card { position: relative; overflow: hidden; }
.clf-card::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(184, 154, 102, 0.18), transparent);
}
```

Acento visual âmbar no rodapé de cada card de classificação.

---

## Mudanças evitadas e por quê

| Ideia | Por que evitada |
|---|---|
| Adicionar `padding-inline: 32px` no `.timeline` | Quebraria alinhamento da linha `::before` com os dots |
| Redesenhar gabinete como grid masonry | Sem Masonry JS — complexidade desnecessária |
| Adicionar animações de entrada por seção | Viola identidade editorial (sem runtime pesado) |
| Reformatar Cornish e Brukhonenko como "tabs" | Destruiria layout documental atual |
| Trocar Georgia por fonte importada | CLAUDE.md proíbe dependências desnecessárias |
| Criar nova seção "recursos externos" | Fora do escopo — sem conteúdo editorial novo |
| Adicionar hover highlights nas timeline rows | CSS hover já funciona; não adicionei efeito extra que parecesse "widget" |

---

## Validação mobile

Breakpoints cobertos após polimento:

| Largura | Comportamento garantido |
|---|---|
| 1180px | Cornish lead → 1 col |
| 1000px | Brukhonenko flows → 1 col |
| 960px | Grids capítulos → 2 cols; featured → 1 col |
| 800px | Soviet dossier lead → 1 col |
| 720px | Hero padding reduzido; todos os grids → 1 col; nav oculta |
| 640px | Hero min-height auto; botões em coluna; seções margin 40px; timeline 68px col |
| 580px | Aldini gallery → 1 col |
| 480px | Cabinet padding reduzido |

---

## Validação SEO/semântica

- Fallback estático preservado em `index.html` (`.static-fallback` dentro de `#root`)
- OG image intacto: `arquivo-morto-share-v4.jpg` (1200×630 JPEG)
- Estrutura semântica (section, article, h3, h4, aria-labelledby) não alterada
- Sem regressão no build de produção

---

## Resultado do build

```
vite v8.0.14 building client environment for production...
✓ 18 modules transformed.
dist/index.html                   3.54 kB │ gzip:  1.22 kB
dist/assets/index-DEnoQ1AG.css   74.79 kB │ gzip: 12.54 kB
dist/assets/index-CH107QKe.js   261.70 kB │ gzip: 80.94 kB
✓ built in 106ms
```

Build passou sem erros. CSS: 74.79 kB (apenas +1.9 kB vs versão anterior). ✓

---

## Deploy Netlify

- Site ID: `e6bc782d-2505-49a3-bb8e-fa61f98ff0d4`
- URL: https://arquivo-morto.netlify.app
- Deploy ID: `6a0fd4baf548b31ada90667f`
- Verificado: `HTTP/2 200`, `content-type: text/html`
- OG image: intacto, JPEG, 200

---

## Recomendações futuras

1. **Imagens reais**: substituir os SVG inline do `ArchiveVisual` por gravuras históricas de domínio público (Wellcome Collection, Wikimedia) nas seções Aldini, Cornish e Brukhonenko.

2. **Hero para mobile**: considerar empilhar o título em duas linhas menores em vez de `clamp` agressivo — pode dar mais impacto editorial sem risco de corte.

3. **Timeline expandida**: adicionar era marcadores (p.ex. separador "século XVIII" / "século XIX" / "XX" / "Hoje") como headers dentro da timeline.

4. **Gabinete** em mobile: os 6 itens ficam longos. Uma versão "stack compacta" com altura mínima menor para mobile melhoraria a leitura.

5. **Navegação mobile**: o `nav-links` desaparece em ≤720px. Um hambúrguer ou ancora de navegação flutuante melhoraria acessibilidade — mas requer JavaScript simples ou CSS-only trick.
