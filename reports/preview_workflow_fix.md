# Preview Workflow Fix — Arquivo Morto

**Data:** 2026-05-21

## Problema Encontrado

O VS Code Simple Browser (`ms-vscode.simple-browser`) não pôde ser instalado/ativado no ambiente atual. O fluxo de preview dependia dessa extensão, tornando-o não confiável. Não havia scripts dedicados para fixar porta, abrir navegador ou automatizar o ciclo dev → browser.

## Arquivos Alterados

| Arquivo | Mudança |
|---|---|
| `package.json` | Adicionados scripts: `dev:local`, `dev:open`, `open`, `preview` com host/porta fixos |
| `scripts/dev-open.sh` | Script novo: sobe Vite, aguarda porta, abre navegador padrão |
| `README.md` | Adicionada seção "Local Preview" com tabela de comandos e fluxos recomendados |
| `CLAUDE.md` | Adicionada seção "Regras de Preview Local"; comandos expandidos |

## Scripts Disponíveis

```bash
npm run dev          # Vite padrão (localhost:5173)
npm run dev:local    # Vite em 127.0.0.1:5173 (porta fixa)
npm run dev:open     # Sobe Vite + aguarda + abre navegador (via scripts/dev-open.sh)
npm run open         # Abre http://127.0.0.1:5173/ no navegador padrão
npm run build        # Build de produção → dist/
npm run preview      # Preview do build em 127.0.0.1:4173
```

## Resultado do npm run build

```
vite v8.0.14 building client environment for production...
✓ 17 modules transformed.

dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-Dfph5Gk2.css   11.25 kB │ gzip:  3.22 kB
dist/assets/index-jtcXAPIg.js   201.09 kB │ gzip: 63.66 kB

✓ built in 102ms
```

Build bem-sucedido. Sem erros ou avisos.

## Comando Final Recomendado

```bash
# Para abrir o projeto com uma linha:
npm run dev:open

# Ou manualmente (em dois terminais):
npm run dev:local    # terminal 1
npm run open         # terminal 2 (após o servidor subir)
```

> Alternativa no VS Code: use a aba **Ports** e reencaminhe a porta 5173 para abrir no browser integrado — sem dependência de extensões.

## Status Git Final

Commit local criado: `fix local preview workflow`  
Branch: `main`  
Não publicado no GitHub (conforme instrução).
