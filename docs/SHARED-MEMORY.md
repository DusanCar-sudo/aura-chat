# Aura shared memory on Puter KV (draft for review)

One Aura everywhere: the phone (Aura Droid), the web client on Puter's
desktop, the site chat and Telegram read and write the same memory, so
something told to Aura on the phone is known on the web a minute later.
Nothing here needs our server: Puter KV is per-user cloud storage that
comes with the visitor's Puter sign-in.

**Status: draft.** Nothing is built yet; this fixes the shape first so the
three clients (B web, A Droid, Telegram) don't each invent their own.

## 1. What syncs and what never leaves the machine

The rule that matters most, decided before any code:

| Tier | Where it lives | Examples |
|---|---|---|
| **cloud** | Puter KV (synced) | preferences ("answer in Serbian"), people and roles, product facts, open todos, chat summaries |
| **local** | the device only, never uploaded | file paths and project internals, API keys/tokens, anything about Aura Imprint, anything the user marks private, raw chat transcripts |

Every memory carries a `scope` (`cloud` / `local`). Clients write `local`
by default when unsure. Before any upload the sync layer runs a **deny
filter** and refuses the write (keeping it local) if the text matches:
API-key / token shapes (`sk-…`, long hex/base64), `password`/`passphrase`,
private IPs and Tailscale `100.x` addresses, absolute home paths, and the
word list in `deny.txt` (Imprint, …). A refused write is logged, not lost.

## 2. Keys

Puter KV is flat string → value, per user, per app. Everything is
prefixed `aura:v1:` so the layout can change later (`v2`) without a
migration clobbering old data.

| Key | Value | Written by |
|---|---|---|
| `aura:v1:mem:<id>` | one memory (JSON below) | any client |
| `aura:v1:profile` | the user's standing facts: name, languages, timezone | any client, rarely |
| `aura:v1:thread:<id>` | a conversation *summary* (not the transcript) | client that owned the chat |
| `aura:v1:device:<name>` | last seen, client version | each client on start |
| `aura:v1:meta` | `{ "schema": 1 }` | first client, once |

`<id>` is a ULID: time-sortable and generated offline without collisions,
so two devices never fight over an id.

Listing is by prefix (`puter.kv.list('aura:v1:mem:*')`); no index key to
keep consistent.

## 3. A memory

Same shape as Aura Droid's `Memory` (Room), so the phone maps 1:1:

```json
{
  "id": "01J8Z4Q6T3M2K9X7C5B1N0VRAD",
  "text": "Dusan prefers answers in Serbian Cyrillic on the phone",
  "tag": "preference",
  "scope": "cloud",
  "createdAt": 1789716000000,
  "updatedAt": 1789716000000,
  "lastUsedAt": 1789716000000,
  "useCount": 0,
  "source": "droid",
  "deleted": false
}
```

- `text`: one fact per memory, in Aura's words. Hard cap 500 chars.
- `tag`: free text (preference, person, project, todo, …), as on the Droid.
- `source`: which client wrote it (`droid`, `web`, `site`, `telegram`, `desktop`).
- `deleted`: a tombstone. Deleting sets it and `updatedAt`; the key is
  removed after 30 days, so a device that was offline still learns the
  memory is gone instead of re-uploading it.

## 4. Sync rules

- **Last write wins by `updatedAt`**, per memory. Memories are small and
  independent, so there is nothing to merge.
- `useCount` and `lastUsedAt` do not bump `updatedAt` (reading a memory
  must not make it win a conflict). Clients batch usage and write it at
  most once an hour.
- Each client keeps a local copy (Room on the phone, IndexedDB on the
  web) and syncs on start, on resume and after each write. Offline is
  normal: writes queue locally.
- **Budget:** what goes into the prompt is at most ~40 memories, ranked
  by `lastUsedAt` then `useCount`, the same trimming the Droid does now.
  KV can hold more; the prompt never sees more.

## 5. What this does not cover (later)

- **Full Aura handoff:** when the desktop Aura is online (Cloudflare
  Tunnel), cloud clients route to it for files and computer use. It reads
  the same cloud memories, and keeps its local ones local.
- **Aura Code's dreams/lessons:** stay in the repo. A future `desktop`
  client may publish selected lessons as `cloud` memories.
- **Sharing between users:** none. Every Puter account is its own Aura.

## Open questions for Dusan

1. Default for chat summaries: `cloud` (Aura remembers conversations
   across devices) or `local` (only facts sync)?
2. Should the public site chat (anonymous visitors) read/write memory at
   all? Proposed: no; only signed-in clients you run (web, Droid, Telegram).
3. Anything to add to the deny list besides Imprint?
