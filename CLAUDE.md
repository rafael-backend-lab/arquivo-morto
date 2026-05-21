# CLAUDE.md — Arquivo Morto

## Comandos

```bash
npm run dev          # dev server em http://localhost:5173
npm run dev:local    # dev server fixo em 127.0.0.1:5173
npm run dev:open     # sobe Vite + abre navegador padrão automaticamente
npm run open         # abre http://127.0.0.1:5173/ no navegador padrão
npm run build        # build de produção em dist/
npm run preview      # preview do build em 127.0.0.1:4173
```

## Regras de Preview Local

- Não depender do Simple Browser do VS Code — ele não está disponível neste ambiente.
- Usar `npm run dev:open` ou `npm run dev:local` + `npm run open` para abrir no navegador padrão.
- Alternativa: usar a aba **Ports** do VS Code para reencaminhar a porta 5173.
- Sempre validar mudanças com `npm run build` antes de considerar tarefa concluída.

## Regras

- Não fazer push para GitHub sem aprovação explícita.
- Manter identidade visual dark editorial. Não introduzir estilos claros ou neutros.
- Não adicionar Tailwind, Framer Motion, Lenis ou outras dependências sem necessidade justificada.
- Preservar performance: CSS puro, sem runtime de animação pesado.
- Paleta base: preto profundo `#080808`, vinho `#3A0F14`, verde químico `#1D8A48`, âmbar `#F8F0E0`.
- Tipografia: Georgia para títulos, system-ui para corpo, ui-monospace para metadados de arquivo.
- Conteúdo é editorial e cultural — manter tom frio, pericial, documental.
