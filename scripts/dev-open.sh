#!/usr/bin/env bash
set -e

HOST="127.0.0.1"
PORT="5173"
URL="http://${HOST}:${PORT}/"

echo "[arquivo-morto] Starting Vite on ${URL}"

# Start Vite in background
npx vite --host "${HOST}" --port "${PORT}" &
VITE_PID=$!

# Wait for port to respond
echo "[arquivo-morto] Waiting for server..."
for i in $(seq 1 30); do
  if curl -s --max-time 1 "${URL}" > /dev/null 2>&1; then
    echo "[arquivo-morto] Server ready."
    break
  fi
  sleep 1
done

# Open in default browser
echo "[arquivo-morto] Opening ${URL} in default browser..."
open "${URL}"

echo "[arquivo-morto] Dev server running. Press Ctrl+C to stop."
wait "${VITE_PID}"
