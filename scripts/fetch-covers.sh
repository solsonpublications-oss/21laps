#!/bin/bash
set -u
OUT=/home/z/my-project/public/images/covers
mkdir -p "$OUT"
LOG=/tmp/covers.log
echo "START $(date)" > "$LOG"

declare -A QUERIES=(
  ["story-of-your-life"]="Arrival 2016 science fiction film movie poster"
  ["night-at-the-museum"]="Night at the Museum 2006 comedy film movie poster"
  ["the-boogeyman"]="The Boogeyman 2023 Stephen King horror film poster"
  ["the-spectacular-now"]="The Spectacular Now 2013 coming of age film poster"
  ["the-darkest-minds"]="The Darkest Minds 2018 young adult film poster"
  ["cheaper-by-the-dozen"]="Cheaper by the Dozen family comedy film poster"
  ["when-you-were-mine"]="Rosaline 2022 romantic comedy film poster"
  ["alexander"]="Alexander and the Terrible Horrible No Good Very Bad Day film poster"
  ["this-is-where-i-leave-you"]="This Is Where I Leave You 2014 drama film poster"
  ["the-adam-project"]="The Adam Project 2022 sci-fi adventure film poster"
  ["shadow-and-bone"]="Shadow and Bone Netflix fantasy series poster"
  ["six-of-crows"]="Six of Crows Leigh Bardugo novel book cover"
  ["all-the-light"]="All the Light We Cannot See Netflix miniseries poster"
  ["the-perfect-couple"]="The Perfect Couple Netflix mystery series poster"
  ["dash-and-lily"]="Dash and Lily Netflix romantic series poster"
  ["ollies-odyssey"]="Lost Ollie Netflix family series poster"
  ["never-lie"]="Never Lie Freida McFadden thriller novel book cover"
  ["flawless"]="Flawless Elsie Silver romance novel book cover"
  ["the-eyes-and-the-impossible"]="The Eyes and the Impossible Dave Eggers novel book cover"
)

fetch_one() {
  local id="$1" q="$2"
  if [ -f "$OUT/$id.jpg" ] && [ -s "$OUT/$id.jpg" ]; then echo "[skip] $id" >> "$LOG"; return; fi
  local j="/tmp/search-$id.json"
  if z-ai image-search -q "$q" --count 1 --no-rank --gl us -o "$j" >> "$LOG" 2>&1; then
    local url=$(python3 -c "import json;d=json.load(open('$j'));r=d.get('results',[]);print(r[0]['original_url'] if r else '')" 2>/dev/null)
    if [ -n "$url" ]; then
      if curl -sf -L -o "$OUT/$id.jpg" "$url" 2>>"$LOG"; then
        echo "[ok] $id ($url)" >> "$LOG"
      else
        echo "[curl-fail] $id $url" >> "$LOG"
      fi
    else
      echo "[nourl] $id" >> "$LOG"
    fi
  else
    echo "[search-fail] $id" >> "$LOG"
  fi
}

# Process in parallel batches of 3
IDS=("${!QUERIES[@]}")
i=0
while [ $i -lt ${#IDS[@]} ]; do
  batch=()
  for j in 0 1 2; do
    idx=$((i+j))
    [ $idx -ge ${#IDS[@]} ] && break
    id="${IDS[$idx]}"
    fetch_one "$id" "${QUERIES[$id]}" &
    batch+=($!)
  done
  wait "${batch[@]}" 2>/dev/null
  i=$((i+3))
  echo "batch done up to $i" >> "$LOG"
done

echo "ALL DONE $(date)" >> "$LOG"
ls -la "$OUT" >> "$LOG" 2>&1
