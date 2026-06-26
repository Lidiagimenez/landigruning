#!/bin/bash
# Script para renombrar imágenes (Mac/Linux)
# Ejecutar desde la raíz del proyecto con: bash rename-images.sh

IMG="public/images"
TEX="public/images/textures"

rename_if_exists() {
  local src="$1/$2"
  local dst="$1/$3"
  if [ -f "$src" ] && [ "$src" != "$dst" ]; then
    mv "$src" "$dst"
    echo "OK: $2 -> $3"
  fi
}

echo "=== Renombrando imágenes principales ==="
rename_if_exists "$IMG" "héroe-runner.webp.png"             "hero-runner.webp"
rename_if_exists "$IMG" "heroe-runner.webp.png"             "hero-runner.webp"
rename_if_exists "$IMG" "evento-altas-cumbres.webp.jpg"     "event-altas-cumbres.webp"
rename_if_exists "$IMG" "Evento-puesta-de-sol.webp.png"     "event-sunset-run.webp"
rename_if_exists "$IMG" "evento-puesta-de-sol.webp.png"     "event-sunset-run.webp"
rename_if_exists "$IMG" "desafío-montaña.webp.jpg"          "event-mountain-challenge.webp"
rename_if_exists "$IMG" "desafio-montaña.webp.jpg"          "event-mountain-challenge.webp"
rename_if_exists "$IMG" "stats-background.webp.jpg"         "stats-background.webp"
rename_if_exists "$IMG" "aventura-champaqui.webp.png"       "adventure-champaqui.webp"
rename_if_exists "$IMG" "aventura-sierras-grandes.webp.png" "adventure-sierras-grandes.webp"
rename_if_exists "$IMG" "aventura-merlo.webp.png"           "adventure-merlo.webp"
rename_if_exists "$IMG" "aventura-valle-encantado.webp.png" "adventure-valle-encantado.webp"
rename_if_exists "$IMG" "aventura-puesta-de-sol.webp.png"   "adventure-sunset.webp"
rename_if_exists "$IMG" "cta-runner.webp.png"               "cta-runner.webp"
rename_if_exists "$IMG" "logo-ruta-libre.png.png"           "logo-ruta-libre.png"

echo ""
echo "=== Renombrando texturas ==="
rename_if_exists "$TEX" "acuarela-top.png.jpg"           "watercolor-top.png"
rename_if_exists "$TEX" "acuarela-top.png"               "watercolor-top.png"
rename_if_exists "$TEX" "fondo de acuarela.png.jpg"      "watercolor-bottom.png"
rename_if_exists "$TEX" "fondo-de-acuarela.png.jpg"      "watercolor-bottom.png"
rename_if_exists "$TEX" "acuarela-izquierda.png.png"     "watercolor-left.png"
rename_if_exists "$TEX" "acuarela-izquierda.png"         "watercolor-left.png"
rename_if_exists "$TEX" "acuarela-derecha.png.jpg"       "watercolor-right.png"
rename_if_exists "$TEX" "acuarela-derecha.png"           "watercolor-right.png"

echo ""
echo "=== Resultado final ==="
ls "$IMG"
echo "--- texturas ---"
ls "$TEX"
