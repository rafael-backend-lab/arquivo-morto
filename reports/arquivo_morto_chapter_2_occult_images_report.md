# Relatório: Capítulo II — Iconografia Oculta — Arquivo Morto

Data: 2026-05-22

---

## Problema original

O Capítulo II — "Necromancia, alquimia e o desejo de retorno" — era composto apenas de texto: um subtítulo editorial e 6 cards de texto (Necromancia, Alquimia, John Dee, Golem, Elixir da vida, Autômatos). Sem nenhuma âncora visual, o capítulo mais iconográfico do site — alquimia, Golem, autômatos, John Dee — ficava sem ilustração histórica correspondente.

---

## Solução

Criação de um bloco editorial `occult-visual-board` inserido entre o cabeçalho do capítulo (`.section-header`) e a grade de cards de texto (`.occult-grid`). O bloco apresenta 4 imagens históricas de domínio público contextualizadas ao conteúdo dos cards.

---

## Imagens adicionadas

| Arquivo local | Título | Autor / Fonte | Dimensão | Tamanho | Motivo editorial |
|---|---|---|---|---|---|
| `occult-alchemy-lab.jpg` | *O Alquimista* | Pieter Bruegel, o Velho, séc. XVI — Wikimedia Commons | 900×619px | 202 KB | Ilustra os cards Alquimia e Elixir da vida |
| `occult-john-dee.jpg` | *Retrato de John Dee* | Ashmolean Museum / Wikimedia Commons | 800×800px | 177 KB | Ilustra diretamente o card John Dee |
| `occult-golem.jpg` | *O Golem e o Rabino Loew* | Wikimedia Commons | 274×477px | 79 KB | Ilustra o card Golem e criação artificial |
| `occult-automaton.jpg` | *O Pato Mecânico de Vaucanson* | Gravura séc. XVIII — Wikimedia Commons | 261×350px | 32 KB | Ilustra o card Autômatos e corpo mecânico |

**Total:** 4 imagens, 490 KB combinados.  
**Licença:** todas domínio público. URLs verificadas via API do Wikimedia Commons.

---

## Onde as imagens foram inseridas

`src/App.jsx` — dentro de `<section className="section occult-section">`, após o `.section-header` e antes do `.occult-grid`.

Estrutura do bloco inserido:

```jsx
<section className="occult-visual-board">
  <div className="occult-visual-intro">
    <span className="archive-date">ICONOGRAFIA OCULTA</span>
    <h4>Pranchas visuais do desejo de retorno</h4>
    <p>Antes da eletricidade médica...</p>
  </div>
  <div className="occult-visual-grid">  {/* grid 1.35fr 1fr */}
    <figure className="occult-visual-card occult-visual-card-large">
      occult-alchemy-lab.jpg  {/* coluna esquerda: Bruegel */}
    </figure>
    <div className="occult-visual-stack">  {/* coluna direita: 3 empilhadas */}
      occult-john-dee.jpg
      occult-golem.jpg
      occult-automaton.jpg
    </div>
  </div>
</section>
```

---

## Créditos e licenças

| Arquivo | URL original |
|---|---|
| `occult-alchemy-lab.jpg` | https://upload.wikimedia.org/wikipedia/commons/2/24/Pieter_Bruegel_d._%C3%84._014.jpg |
| `occult-john-dee.jpg` | https://upload.wikimedia.org/wikipedia/commons/4/40/John_Dee_Ashmolean.jpg |
| `occult-golem.jpg` | https://upload.wikimedia.org/wikipedia/commons/a/a8/Golem_and_Loew.jpg |
| `occult-automaton.jpg` | https://upload.wikimedia.org/wikipedia/commons/9/9a/Vaucanson_duck1.jpg |

---

## Por que ajudam no Capítulo II

| Imagem | Card relacionado | Relação editorial |
|---|---|---|
| Bruegel Alquimista | Alquimia + Elixir da vida | Laboratório alquímico real do séc. XVI — matéria, transmutação, busca pela imortalidade |
| John Dee | John Dee | Retrato direto do personagem histórico descrito no card |
| Golem e Loew | Golem | Representação visual da criatura de barro animada por palavra sagrada |
| Pato de Vaucanson | Autômatos e corpo mecânico | Autômato histórico do séc. XVIII que imitava digestão e movimento |

---

## CSS

```css
.occult-visual-board {
  margin: 42px 0 48px;
  padding: 28px;
  border: 1px solid rgba(114, 214, 164, 0.18);
  background: linear-gradient(135deg, rgba(58,15,20,0.34), rgba(3,22,13,0.42)), rgba(8,8,8,0.78);
}

.occult-visual-grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 18px;
  align-items: start;
}

.occult-visual-frame img {
  object-fit: contain;    /* ← sem corte */
  filter: sepia(0.30) contrast(1.04) brightness(0.93);
}
```

---

## Validação mobile

| Breakpoint | Comportamento |
|---|---|
| Desktop (≥960px) | 2 colunas: Bruegel grande à esquerda, 3 cards empilhados à direita |
| Tablet (640–960px) | 2 colunas 1fr / 1fr equilibradas |
| Mobile (≤640px) | 1 coluna, 4 imagens empilhadas verticalmente, sem corte |

Screenshots capturados via Playwright:
- `reports/screenshots/ch2-desktop-1440.png` ✓
- `reports/screenshots/ch2-mobile-390.png` ✓

---

## Resultado do build

```
vite v8.0.14 building client environment for production...
✓ 18 modules transformed.
dist/index.html                   3.54 kB │ gzip:  1.22 kB
dist/assets/index-jAKtv9hz.css   78.41 kB │ gzip: 13.19 kB
dist/assets/index-CVf1uj58.js   266.66 kB │ gzip: 81.88 kB
✓ built in 108ms
```

Build passou. CSS: 78.41 kB (+1.8 kB pelo novo bloco).

---

## Deploy Netlify

- Site ID: `e6bc782d-2505-49a3-bb8e-fa61f98ff0d4`
- URL: https://arquivo-morto.netlify.app
- Deploy ID: `6a0fe816359f6829813fbb75`

---

## Status final

- [x] `occult-visual-board` inserido no Capítulo II
- [x] 4 imagens históricas de domínio público adicionadas
- [x] Bruegel (alquimia) como imagem feature à esquerda
- [x] John Dee, Golem, Vaucanson empilhados à direita
- [x] `object-fit: contain` — sem corte em nenhuma imagem
- [x] Responsividade: 1 coluna em ≤640px
- [x] Créditos em `docs/image-credits.md`
- [x] Screenshots de validação capturados
- [x] Build passou
- [x] Deploy passou
- [x] Não fez push
