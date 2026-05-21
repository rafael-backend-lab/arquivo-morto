# Arquivo Morto — Refatoração de datação editorial

## Arquivos alterados

- `src/App.jsx`
- `src/App.css`
- `README.md`
- `docs/editorial-direction.md`
- `reports/arquivo_morto_dates_refactor_report.md`

## Seções revisadas

- Capítulo I — A humanidade contra a morte
- Capítulo II — Necromancia, alquimia e o desejo de retorno
- Capítulo III — Do corpo sagrado ao corpo estudado
- Capítulo IV — Galvanismo, medicina legal e sinais do cadáver
- Capítulo V — A morte técnica: medicina, corpo e fronteiras atuais
- Histórias do Arquivo
- Dossiê em destaque
- Dossiês iniciais
- Classificação do Arquivo
- Artigos
- Gabinete de Anatomia

## Exemplos de códigos substituídos por datas

- `FOR-001` passou a exibir `1780s–1791`
- `OCC-003` passou a exibir `1527–1608`
- `HIS-004` passou a exibir `1921–1922`
- `DOS-001` passou a exibir `1803`
- `CLF-003` passou a exibir `séc. XVIII–XIX`
- `PRO-334` passou a exibir `data lacrada`

## Como os códigos internos foram preservados

- `id`, `code`, `ref` e demais identificadores continuam existindo nos arrays e objetos de conteúdo.
- As chaves de renderização do React continuam usando os códigos internos existentes.
- Os códigos agora aparecem como metadado secundário em linhas como `Arquivo: DOS-001`, `Registro: OCC-003` e `Código: MED-002`.

## Resultado do npm run build

- `npm run build` executado com sucesso em 2026-05-21.
- Saída principal:
  - `dist/index.html` gerado
  - `dist/assets/index-BPAPP5-i.css` gerado
  - `dist/assets/index-y2X-C_oq.js` gerado

## Commit criado

- Commit local desta entrega: `replace archive card codes with historical dates`

