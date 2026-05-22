# Relatório: Correção da Ordem Editorial — Aldini-Forster, Londres, 1803

Data: 2026-05-21

## Problema identificado

O bloco "Aldini-Forster, Londres, 1803" (`<section id="destaque" className="featured-dossier">`)
estava posicionado depois dos blocos do século XX — Robert E. Cornish (anos 1930) e
Sergei Brukhonenko (1920s–1940). Isso violava a ordem histórica cronológica do projeto.

**Posição anterior no arquivo:** após o fechamento da `soviet-dossier` section, por volta
da linha 1147 (após Cornish e Brukhonenko).

## Correção aplicada

O bloco foi recortado da posição original (pós-Brukhonenko) e inserido **antes** da
abertura da `cornish-dossier` section, logo após o encerramento da seção
"A morte técnica: medicina, corpo e fronteiras atuais" (Capítulo V).

**Posição nova no arquivo:** linha ~738, antes de Robert E. Cornish e Sergei Brukhonenko.

O label `section-label` foi ajustado de `"Dossiê em destaque"` para `"Dossiê fundacional"`,
mantendo identidade visual e classes intactas.

## Confirmação de ausência de duplicata

O bloco `<section id="destaque" className="featured-dossier">` aparece exatamente
uma vez no arquivo após a edição. Nenhum conteúdo foi duplicado.

## Saída do grep de ordem (validação)

```
741:  <h3>Aldini-Forster, Londres, 1803</h3>
794:  <h3 id="cornish-dossier-heading">Robert E. Cornish: Lazarus...</h3>
807:  Robert Edwin Cornish foi um biólogo americano...
998:  <h3 id="soviet-dossier-heading">Sergei Brukhonenko: o autojektor...</h3>
```

Linhas 357/359 são ocorrências na array de dados `medicalDeathChapter`, não blocos
de renderização — não afetam a ordem visual.

**Conclusão:** Aldini (741) aparece antes de Cornish (794) e Brukhonenko (998). ✓

## Resultado do build

```
vite v8.0.14 building client environment for production...
✓ 17 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index--io1DwtG.css   70.51 kB │ gzip: 11.63 kB
dist/assets/index-BJ3kCSdL.js   260.18 kB │ gzip: 80.55 kB
✓ built in 88ms
```

Build passou sem erros. ✓

## Ordem editorial final

1. Capítulo I — A humanidade contra a morte
2. Capítulo II — Necromancia, alquimia e o desejo de retorno
3. Capítulo III — Do corpo sagrado ao corpo estudado
4. Capítulo IV — Galvanismo, medicina legal e sinais do cadáver
5. Capítulo V — A morte técnica (medicina moderna)
6. **Dossiê fundacional — Aldini-Forster, Londres, 1803** ← movido aqui
7. Dossiê americano — Robert E. Cornish: Lazarus (anos 1930)
8. Dossiê histórico-médico — Sergei Brukhonenko / autojektor (1920s–1940)
9. Arquivo de casos / Artigos / Linha do tempo / Gabinete
