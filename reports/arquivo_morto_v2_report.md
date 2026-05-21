# Arquivo Morto V2 — Relatório de implementação

**Data:** 2026-05-21

## Arquivos alterados

| Arquivo | Mudança |
|---|---|
| `src/App.jsx` | `useState` import; site-header fixo; painel técnico no hero; seção Dossiê em destaque; footer 3 colunas |
| `src/App.css` | Estilos V2: `.site-header`, `.nav`, `.mode-toggle`, `.mode-terminal`, `.hero-layout`, `.hero-technical-panel`, `.featured-dossier`, `.footer-grid` e responsivo |
| `README.md` | Seção V2 com lista de novidades; status atualizado para v2.0 |
| `docs/editorial-direction.md` | Seção "V2 — Refinamento editorial e modo terminal" com decisões técnicas |

## Provas de existência dos termos V2

```
src/App.jsx:181   {mode === 'arquivo' ? 'Modo Terminal' : 'Modo Arquivo'}
src/App.jsx:218   <div className="panel-id">ARQ-MORTO</div>
src/App.jsx:267   <p className="section-label">Dossiê em destaque</p>
src/App.css:666   .site-header {
src/App.css:768   .mode-terminal .site-header {
README.md:92      - **Modo Terminal** — botão que alterna...
README.md:94      - **Painel técnico lateral no hero** com ARQ-MORTO...
```

## Resultado do npm run build

```
vite v8.0.14 building client environment for production...
✓ 17 modules transformed.

dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-C8rbdfsj.css   16.28 kB │ gzip:  4.16 kB
dist/assets/index-C2LKLKos.js   205.11 kB │ gzip: 64.45 kB

✓ built in 76ms
```

Build limpo. Sem erros ou avisos.

## Funcionalidades V2 implementadas

### 1. Navegação fixa (site-header)
Header com `position: fixed` no topo. Links para Dossiês, Artigos, Linha do Tempo e Gabinete. Botão Modo Terminal no canto direito. CSS `backdrop-filter: blur(12px)` para fundo semi-transparente editorial.

### 2. Modo Terminal
`useState('arquivo')` em `App()`. Clique no botão altera para `'terminal'`, que adiciona a classe `.mode-terminal` na raiz. CSS custom properties sobrescritas: `--bone`, `--text`, `--chem-green` → paleta fosfórica `#00e87a`. Botão mostra "Modo Arquivo" quando terminal está ativo.

### 3. Painel técnico lateral (ARQ-MORTO)
`aside.hero-technical-panel` ao lado de `.hero-content` via flexbox. Contém:
- **ARQ-MORTO** — identificador do arquivo
- **DOSSIÊ CENTRAL** — seção
- Frequência: 17Hz
- Reagente: HW-7
- Status: lacrado (vermelho)
- Registro: necrociência editorial

### 4. Dossiê em destaque
Seção entre o Manifesto e a grade de Dossiês. Caso DOS-001, Londres, 1803. Estrutura: número do caso + local + classificação → título → resumo pericial → nota editorial em caixa destacada.

### 5. Footer três colunas
`.footer-grid` com `grid-template-columns: 1.4fr 1fr 1fr`. Colunas: **Arquivo Morto** (descrição), **Categorias** (links), **Registro** (metadados monospace).

## Commit criado

```
improve arquivo morto editorial interface
```

Branch: `main` — não publicado no GitHub.

## Comando recomendado para rodar

```bash
npm run dev:open
```

Sobe o Vite em `127.0.0.1:5173` e abre automaticamente no navegador padrão.

Ou manualmente:
```bash
npm run dev:local   # terminal 1
npm run open        # terminal 2
```
