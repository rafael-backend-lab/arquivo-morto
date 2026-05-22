#!/usr/bin/env bash
set -e

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_ROOT"

PREVIEW_HOST="127.0.0.1"
PREVIEW_PORT="4173"
PREVIEW_URL="http://${PREVIEW_HOST}:${PREVIEW_PORT}"

echo ""
echo "╔══════════════════════════════════════════════════════╗"
echo "║          ARQUIVO MORTO — Preview público             ║"
echo "║          via Cloudflare Tunnel (trycloudflare.com)   ║"
echo "╚══════════════════════════════════════════════════════╝"
echo ""

# 1. Build
echo "[1/4] Gerando build de produção..."
npm run build
echo "[1/4] Build concluído."
echo ""

# 2. Verificar cloudflared
echo "[2/4] Verificando cloudflared..."
if ! command -v cloudflared &>/dev/null; then
  echo "      cloudflared não encontrado. Tentando instalar via Homebrew..."
  if ! command -v brew &>/dev/null; then
    echo ""
    echo "  ERRO: Homebrew não encontrado."
    echo "  Instale cloudflared manualmente:"
    echo "    https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/"
    echo ""
    exit 1
  fi
  brew install cloudflared
  echo "      cloudflared instalado."
else
  echo "      cloudflared encontrado: $(command -v cloudflared)"
fi
echo ""

# 3. Subir vite preview em background
echo "[3/4] Subindo vite preview em ${PREVIEW_URL}..."
npx vite preview --host "${PREVIEW_HOST}" --port "${PREVIEW_PORT}" &
VITE_PID=$!

# Aguardar o servidor estar pronto
for i in $(seq 1 20); do
  if curl -s --max-time 1 "${PREVIEW_URL}" >/dev/null 2>&1; then
    break
  fi
  sleep 1
done
echo "[3/4] Servidor pronto em ${PREVIEW_URL}"
echo ""

# 4. Abrir Cloudflare Tunnel
echo "[4/4] Abrindo Cloudflare Tunnel..."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  A URL pública vai aparecer abaixo (trycloudflare.com)"
echo "  Copie e envie para quem quiser avaliar o site."
echo ""
echo "  ⚠️  O link fica ativo SOMENTE enquanto este terminal"
echo "      estiver aberto. Feche o terminal para encerrar."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Cleanup ao encerrar
cleanup() {
  echo ""
  echo "[arquivo-morto] Encerrando servidor e tunnel..."
  kill "$VITE_PID" 2>/dev/null || true
  exit 0
}
trap cleanup INT TERM

cloudflared tunnel --url "${PREVIEW_URL}"

# Se cloudflared sair sozinho, matar o vite também
kill "$VITE_PID" 2>/dev/null || true
