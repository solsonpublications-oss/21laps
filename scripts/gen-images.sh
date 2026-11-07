#!/bin/bash
# Generate all cinematic images for 21 Laps Entertainment site - SEQUENTIAL to avoid 429
set -u
OUT=/home/z/my-project/public/images
mkdir -p "$OUT"
LOG=/tmp/gen.log
echo "START $(date)" > "$LOG"

gen() {
  local name="$1"; local prompt="$2"
  if [ -f "$OUT/$name" ] && [ -s "$OUT/$name" ]; then
    echo "[skip] $name (exists)" >> "$LOG"
    return
  fi
  echo "[gen] $name $(date +%T)" >> "$LOG"
  if z-ai image -p "$prompt" -o "$OUT/$name" -s 1344x768 >> "$LOG" 2>&1; then
    echo "[done] $name $(date +%T)" >> "$LOG"
  else
    echo "[FAIL] $name $(date +%T)" >> "$LOG"
  fi
  sleep 3
}

gen hero-1.jpg "Cinematic wide shot of an open antique book on a dark wooden desk, glowing golden light and translucent film reel frames rising from the pages, dramatic moody lighting, book-to-screen adaptation concept, dark atmospheric background, volumetric light, photorealistic, cinematic color grading, no text"
gen hero-2.jpg "Cinematic vintage movie theater interior with empty velvet seats and a glowing golden screen casting warm light, ornate art deco architecture, dramatic dark atmosphere, film production concept, volumetric light beams, photorealistic, cinematic, no text"
gen hero-3.jpg "Cinematic close-up of stacked classic hardcover books transforming into film strip frames, golden backlight, dark moody background, magical particles, book adaptation concept, photorealistic, cinematic color grading, no text"
gen tile-films.jpg "Cinematic collection of vintage hardcover books beside a classic film camera and wooden clapperboard on a dark table, warm golden rim light, moody production still, shallow depth of field, photorealistic, no text"
gen tile-coming.jpg "Cinematic open antique book with magical golden light and soft smoke emerging from the pages, dark background, mysterious upcoming film concept, dramatic volumetric lighting, photorealistic, no text"
gen tile-submissions.jpg "Cinematic stack of manuscript scripts and reading glasses on a dark wooden desk with warm desk lamp light, vintage typewriter softly blurred in background, literary production concept, photorealistic, no text"
gen tile-studio.jpg "Cinematic film production studio interior with professional lighting equipment, film cameras and rigs, dark atmospheric mood, golden accent lighting, photorealistic, no text"
gen tile-partnerships.jpg "Cinematic silhouette of a handshake against a glowing city skyline at dusk, warm golden backlight, business partnership concept, dramatic, photorealistic, no text"
gen tile-links.jpg "Cinematic vintage film reels and classic books arranged on a dark wooden shelf with warm golden light, media archive concept, photorealistic, moody, no text"
gen bg-testimonials.jpg "Cinematic vintage movie theater interior with ornate coffered ceiling, wrought iron chandeliers, rows of empty seats, black and white archival photograph style, dark moody atmosphere, photorealistic, no text"
gen bg-reviews.jpg "Cinematic vintage cinema marquee at night with glowing bulbs, dark atmospheric street, golden warm light, fog, photorealistic, dramatic, no text"

echo "ALL DONE $(date)" >> "$LOG"
ls -la "$OUT" >> "$LOG" 2>&1
