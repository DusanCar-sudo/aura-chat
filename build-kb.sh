#!/bin/sh
# build-kb.sh — assemble Aura's product knowledge from the PUBLIC repos.
# Output: kb/knowledge.md (what the site chat knows) and aura-kb.js (it, as JS).
# Everything here ships inside public website code. Public repos, plus
# aura-os (private) README + user docs, approved 2026-09-18; not its internal notes.
set -eu
cd "$(dirname "$0")"
work=$(mktemp -d); trap 'rm -rf "$work"' EXIT
owner=DusanCar-sudo
# repo:files (README.md always; extra docs after it)
set -- \
  "aura-code:docs/aura-code-overview.md docs/ARCHITECTURE.md docs/PROTOCOL.md docs/SECURITY.md docs/SANDBOX-DESIGN.md docs/MIXTURE_OF_AGENTS.md docs/SELF_HEALING.md docs/WINDOWS.md" \
  "aura-os:docs/ask-aura.md docs/aura-term.md docs/aura-os-mcp.md docs/popups.md docs/pane-status.md docs/building-a-settings-tool.md" \
  "aura-droid:" "aura-mic:" "powerboard:" "aura-pulse:docs/ROADMAP.md docs/WINDOWS.md" "aura-pulse-website:"
out=kb/knowledge.md
printf '# Aura product knowledge\n\nBuilt %s from github.com/%s (product repos).\n' "$(date -u +%F)" "$owner" > "$out"
for spec; do
  repo=${spec%%:*}; extra=${spec#*:}
  gh repo clone "$owner/$repo" "$work/$repo" -- --depth 1 -q
  printf '\n\n=== PRODUCT: %s (github.com/%s/%s) ===\n' "$repo" "$owner" "$repo" >> "$out"
  for f in README.md $extra; do
    [ -f "$work/$repo/$f" ] || continue
    printf '\n--- %s/%s ---\n' "$repo" "$f" >> "$out"
    # drop images/badges and html comments; keep the words
    sed -e '/^!\[/d' -e '/<img /d' -e '/^<!--/,/-->$/d' "$work/$repo/$f" >> "$out"
  done
done
node -e 'const fs=require("fs");fs.writeFileSync("aura-kb.js","window.AURA_KB="+JSON.stringify(fs.readFileSync("kb/knowledge.md","utf8"))+";\n")'
wc -c "$out" aura-kb.js
