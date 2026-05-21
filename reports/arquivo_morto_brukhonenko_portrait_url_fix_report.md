# Arquivo Morto — Brukhonenko Portrait URL Fix

## Alteração
Corrigida URL externa do retrato de Sergei Brukhonenko.

## Antes
upload.wikimedia.org direto com caminho quebrado.

## Depois
commons.wikimedia.org/wiki/Special:Redirect/file/Sergei_Brukhonenko.png

## Motivo
O link especial do Commons redireciona para o arquivo real e evita depender do hash/caminho interno do upload.wikimedia.org.

## Validação
npm run build.
