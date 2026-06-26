# Script para renombrar imágenes al formato que espera el código
# Ejecutar desde la raíz del proyecto con: .\rename-images.ps1

$imageDir = "public\images"
$textureDir = "public\images\textures"

$renames = @(
    # Formato: @("nombre_actual", "nombre_nuevo")
    # IMÁGENES PRINCIPALES - ajustá el nombre_actual según lo que tenés
    @("héroe-runner.webp.png",            "hero-runner.webp"),
    @("heroe-runner.webp.png",            "hero-runner.webp"),
    @("hero-runner.webp.png",             "hero-runner.webp"),
    @("evento-altas-cumbres.webp.jpg",    "event-altas-cumbres.webp"),
    @("Evento-altas-cumbres.webp.jpg",    "event-altas-cumbres.webp"),
    @("Evento-puesta-de-sol.webp.png",    "event-sunset-run.webp"),
    @("evento-puesta-de-sol.webp.png",    "event-sunset-run.webp"),
    @("desafío-montaña.webp.jpg",         "event-mountain-challenge.webp"),
    @("desafio-montaña.webp.jpg",         "event-mountain-challenge.webp"),
    @("stats-background.webp.jpg",        "stats-background.webp"),
    @("aventura-champaqui.webp.png",      "adventure-champaqui.webp"),
    @("aventura-sierras-grandes.webp.png","adventure-sierras-grandes.webp"),
    @("aventura-merlo.webp.png",          "adventure-merlo.webp"),
    @("aventura-valle-encantado.webp.png","adventure-valle-encantado.webp"),
    @("aventura-puesta-de-sol.webp.png",  "adventure-sunset.webp"),
    @("cta-runner.webp.png",              "cta-runner.webp"),
    @("logo-ruta-libre.png.png",          "logo-ruta-libre.png")
)

$textureRenames = @(
    @("acuarela-top.png.jpg",          "watercolor-top.png"),
    @("acuarela-top.png",              "watercolor-top.png"),
    @("fondo de acuarela.png.jpg",     "watercolor-bottom.png"),
    @("fondo-de-acuarela.png.jpg",     "watercolor-bottom.png"),
    @("acuarela-izquierda.png.png",    "watercolor-left.png"),
    @("acuarela-izquierda.png",        "watercolor-left.png"),
    @("acuarela-derecha.png.jpg",      "watercolor-right.png"),
    @("acuarela-derecha.png",          "watercolor-right.png")
)

Write-Host "=== Renombrando imágenes principales ===" -ForegroundColor Cyan
foreach ($pair in $renames) {
    $src = Join-Path $imageDir $pair[0]
    $dst = Join-Path $imageDir $pair[1]
    if (Test-Path $src) {
        if ($src -ne $dst) {
            Rename-Item -Path $src -NewName $pair[1] -Force
            Write-Host "OK: $($pair[0]) -> $($pair[1])" -ForegroundColor Green
        }
    }
}

Write-Host ""
Write-Host "=== Renombrando texturas ===" -ForegroundColor Cyan
foreach ($pair in $textureRenames) {
    $src = Join-Path $textureDir $pair[0]
    $dst = Join-Path $textureDir $pair[1]
    if (Test-Path $src) {
        if ($src -ne $dst) {
            Rename-Item -Path $src -NewName $pair[1] -Force
            Write-Host "OK: $($pair[0]) -> $($pair[1])" -ForegroundColor Green
        }
    }
}

Write-Host ""
Write-Host "=== Archivos en public/images después del renombrado ===" -ForegroundColor Yellow
Get-ChildItem $imageDir | Select-Object Name
Write-Host ""
Write-Host "=== Archivos en public/images/textures ===" -ForegroundColor Yellow
Get-ChildItem $textureDir | Select-Object Name
