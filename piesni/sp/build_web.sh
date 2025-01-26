#!/bin/sh -e

[ -f "$1" ] || { echo "Need a file as arg"; exit 1; }

[ "$(basename -- "$1" .pdf)" != "$(basename -- "$1")" ] || { echo "$1 is not a .pdf file."; exit 1; }

INPUT="$1"
BASE=$(basename "$INPUT" .pdf)


[ -d "$BASE" ] && { 
  echo "The $BASE already exists."
  [ -n "$FORCE" ] && rm -rf "$BASE" && echo "Removed the dir."
}
mkdir -p "$BASE" && echo "Created $BASE"

pdfinfo -dests "$INPUT" | grep '"page\.' | cut -f2 -d'"' | cut -d. -f2- | while read PG
do
  printf "%s " $PG 
  pdf2svg "$INPUT" "$BASE"/$PG.svg $PG || break
  gzip -c < "$BASE"/$PG.svg > "$BASE"/$PG.svgz
  echo '<a href="'$PG'.svg">'$PG'</a>' >> "$BASE/pages.html"
done
echo

pdfinfo -dests "$INPUT" | grep -Ev 'Hfootnote|\.desc|section\.|subsection\.' | awk 'NR > 1 {gsub(/\[.*\]/, ""); print "{" $2 ": " $1 "}"}' | jq -c -s add > "$BASE"/dests.json
echo "Created $BASE/dests.json "
