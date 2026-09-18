# Aura product knowledge

Built 2026-09-18 from github.com/DusanCar-sudo (product repos).


=== PRODUCT: aura-code (github.com/DusanCar-sudo/aura-code) ===

--- aura-code/README.md ---
# Aura


**Autonomous AI coding agent with persistent memory, TUI, and Telegram control**

[![Website](https://img.shields.io/badge/website-aura--website-6ed0ea?style=flat-square)](https://dusancar-sudo.github.io/aura-website/)
[![Version](https://img.shields.io/badge/version-v0.18.0-terracotta?style=flat-square)](https://github.com/DusanCar-sudo/aura-code/releases)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18-green?style=flat-square)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square)](https://www.typescriptlang.org)
[![Providers](https://img.shields.io/badge/routing%20targets-31-purple?style=flat-square)](#providers)

**→ [dusancar-sudo.github.io/aura-website](https://dusancar-sudo.github.io/aura-website/)** · [Windows guide](docs/WINDOWS.md) · [styled version](https://v2-seven-flax.vercel.app/aura-windows-manual)

*Architecture and design by [Dušan Milosavljević](https://github.com/DusanCar-sudo) — Da Nang, Vietnam*

Built with modern coding tools — Claude Code among them — used throughout.

---

## What is Aura?

Aura is a model-agnostic autonomous coding agent. Give it a task in natural
language — it reads your codebase, plans, executes, verifies, and reports back.

---

## Why Aura

**A framework, not a turnkey product — and it still starts with one command.**

Most coding agents are appliances: you get the workflow their authors chose, and
customising it means waiting for them. Aura is built the other way round. The
model is yours to pick (31 routing targets over four transports, or any
OpenAI-compatible endpoint, or a local model with no key at all), the tools are
yours to extend, and the parts you add are ordinary files you can read, edit
and share.

That costs you nothing at the start — `npm install -g aura-code` and a task in
plain English is the whole first run. The framework is there when you want it,
not homework before you begin.

**And unlike an appliance, she accumulates.**

She works, captures what happened, learns which tasks she is competent at,
routes those to a local model and saves the expensive one for the hard parts —
and turns the whole record into a dataset that belongs to you.

**1. She remembers — lessons, not chat history.**
What broke last time, what your build actually needs, what you told her once and
should not have to repeat. Stored in `~/.aura/memory/` on your machine. It never
leaves it.

**2. She learns what she can handle alone.**
The Archimedes layer scores her competence per project and per task category,
then alternates: a local model for what she has proven she can do, a frontier
model for what she has not. Cost falls as she improves, instead of staying flat
forever.

**3. She builds you a dataset you own.**
`:mine` turns your sessions into structured training examples in
`training-data/`, and competence tracking tells you when you have enough to
fine-tune. The training run itself is yours to make — Aura assembles the raw
material, which is the part nobody else gives you.

**4. She grows new parts on request.**
Skills, plugins, MCP servers, subagents. "I want a travel agent" is an ordinary
request here, because a skill is a file and writing files is what she does — so
extending her is a conversation, not a pull request against someone else's
roadmap. The capability she builds is yours to keep, edit and share.

The tools reach past the codebase — `email`, `calendar`, `telegram`,
`whatsapp`, `cron`, `browser`, and on Linux a `computer` tool that sees the
screen and drives the pointer. Same memory, same agent, so what she learns
working on your code is there when she is handling the rest of your day.

Most agents are something you use. Aura is something that compounds.

---

## Quick Start

```bash
npm install -g aura-code
export DEEPSEEK_API_KEY=sk-...
aura 'refactor the auth module to use JWT'
```

Optional but worth it: with **RTK** (Rust Token Killer) on `PATH`, Aura's shell
and git tools route through it, compressing command output before it reaches the
context window — 80% fewer input tokens per session, measured. Without it they
run the bare command exactly as before. `AURA_RTK=0` opts out.

---

## Features

- **Autonomous execution** — reads files, edits code, runs shell commands, verifies, retries
- **Mid-run steering** — type while it works; the note is folded into the next turn, not a restart
- **Finishes rather than stalling** — on a stall it works out what it was missing, then carries on
- **Learns durably** — what it worked out is written down and read back in every later session
- **Gazelle mode** — a lean conversational path for everything that isn't a coding task; 26x less context per turn
- **The Archimedes Principle** — a small local model attempts tasks first; the cloud model steps in only when needed
- **Full TUI** — terminal UI with command palette, diff view, markdown rendering, vim-style input
- **Persistent memory** — identity, lessons, and project context survive across sessions
- **Telegram bot** — voice notes, PC control, file transfer, webcam snapshots
- **31 routing targets, 4 transports** — DeepSeek, Claude, GPT, Gemini, GLM, MiMo, Ollama, OpenRouter and more
- **Token efficiency** — tiered context strategy, prompt caching, tool relevance gating
- **MCP support** — Model Context Protocol for external tool connections

---

## Visual Showcase & Aura Web Studio

Aura features a web client interface (`web/`) with visual drag-and-drop Kanban execution, n8n/Zapier automation integration hubs, visual workflow builders, and interactive canvas previews.

| Visual Kanban Board | Execution List Manager |
|---|---|
| ![Kanban Board](assets/screenshots/01-kanban-board.png) | ![Execution List](assets/screenshots/02-execution-list.png) |

| Third-Party Automation Hub (n8n, Zapier, Make) | Linear Zapier Workflow Builder |
|---|---|
| ![Third-Party Providers](assets/screenshots/03-third-party-providers.png) | ![Zapier Workflow](assets/screenshots/04-workflow-zapier-visual.png) |

| Interactive Web & Canvas Preview | Archimedes Competence Engine |
|---|---|
| ![Canvas Preview](assets/screenshots/05-canvas-web-preview.png) | ![Archimedes Competence](assets/screenshots/06-archimedes-competence.png) |

| Resilient Provider Mesh Settings | Swarm Multi-Agent Orchestrator |
|---|---|
| ![Provider Settings](assets/screenshots/07-model-mesh-settings.png) | ![Swarm Orchestrator](assets/screenshots/08-swarm-orchestrator.png) |

| DAG Workflow Architecture | Retro Task Detail Inspector |
|---|---|
| ![System Architecture](assets/screenshots/09-system-architecture.png) | ![Task Detail Modal](assets/screenshots/10-task-detail-modal.png) |

| Code Editor & Canvas | Multi-Agent TUI Terminal |
|---|---|
| ![Code Editor Canvas](assets/screenshots/11-code-editor-canvas.png) | ![Multi Agent TUI](assets/screenshots/12-multi-agent-tui.png) |

---

## Gazelle — conversational mode

Most of what you say to a coding agent isn't a coding task. "What did we decide
about the auth flow?" doesn't need 25 tool schemas and a project tree — but the
coding agent sends them anyway, every turn.

Gazelle is the same Aura on a different path: no tool schemas, no project
context, no Archimedes, no verification gate. Just the conversation.

```bash
aura --gazelle                 # or: aura --mode gazelle
AURA_MODE=gazelle aura         # or set it in the environment
```

### What it costs

Measured on this repo with Aura's own tokenizer (`estimateContextTokens`, the
same one `:context` reports with):

| Per-turn fixed context | Coder | Gazelle |
|---|---|---|
| System prompt + project context | 4,793 | 356 |
| Tool schemas (25 tools) | 4,574 | 0 |
| **Total every turn** | **9,367** | **356** |

**26x less context per turn — 9,011 tokens saved on every message.**

Over a whole conversation the gap widens well past that, because the coding
agent's history also accumulates file contents and tool output while Gazelle's
does not. How much further depends entirely on how many tools a given session
calls, so that multiple is an observation about a session, not a number this
project will quote as a spec.

### Switching mid-session

Neither mode is a dead end, and conversation history carries across:

```
:coder      → hand off to the full coding agent (tools, project context)
:gazelle    → drop back to the lean conversational path
```

Gazelle also notices when it needs tools and offers to switch on its own —
recognized from its own wording, not a second model call, so the detection is
free. Answer `y` (or just press Enter) and it hands off with the conversation
intact.

Both commands work in the ordinary `aura` REPL too, not just a session started
with `--gazelle`: the TUI stays where it is and swaps only what a turn does, and
the status line grows a `gazelle` marker so the cheap path is never a guess. In
the REPL, Enter submits a line rather than accepting an offer, so a reply that
wants tools points at `:coder` instead.

### Memory

When a Gazelle session ends it writes a rolling situational summary — what you
were working on, what was unresolved. Not a transcript, not a fact dump. The
next session opens already knowing where you left off and uses that as
background, rather than opening with "I recall that…".

### What it isn't

Gazelle can't read files, search code, or run anything. That's the point — it's
the front door, not the workshop. When a request needs hands, `:coder` is one
word away.

---

## Providers

| Provider | Models |
|----------|--------|
| DeepSeek | deepseek-v4, deepseek-v4-flash |
| Claude (Anthropic) | Opus 4, Sonnet 4.6, Haiku |
| GPT (OpenAI) | gpt-4o, gpt-4o-mini |
| Gemini (Google) | gemini-2.5-pro, gemini-2.5-flash |
| GLM (Zhipu / Z.ai) | glm-5.2, glm-5.1, glm-5 — `zhipu-coding/` routes via the Coding Plan |
| MiMo (Xiaomi) | mimo-v2.5-pro, mimo-v2.5 (`mimo/`, `xiaomi/`) |
| Ollama | any local model (`ollama/`, `local/`, `local-profile/`) |
| LM Studio | any loaded model (`lmstudio/`) |
| OpenRouter | 100+ models |
| Groq | llama, mixtral |
| xAI (Grok) | grok-2, grok-2-mini, grok-beta |
| BytePlus ModelArk | DeepSeek V4 Flash/Pro GA, Seed, Kimi (`byteplus/`) |
| FPT Cloud AI | DeepSeek V4, GLM-5.2, Qwen3.8, Gemma 4, GPT-OSS, Embeddings (`fpt/`) |
| OpenCode Go | MiniMax M3/M2.7, Kimi K3 and more (`go-anthropic/`) |
| OpenCode Zen | free tier — DeepSeek V4 Flash, Ling 3.0, MiMo V2.5 (`zen/`) |
| OpenCode | `opencode/` |
| NVIDIA NIM | any NIM-hosted model (`nvidia/`) |
| Hugging Face | Inference Providers router (`huggingface/`) |
| Kimi (Moonshot) | any Moonshot model (`kimi/`) |
| Qwen (DashScope) | any DashScope model (`qwen/`) |
| MiniMax | any MiniMax model (`minimax/`) |
| StepFun | any StepFun model (`stepfun/`) |
| Fireworks AI | any Fireworks model (`fireworks/`) |
| Upstage | Solar models (`upstage/`) |
| Arcee AI | any Arcee model (`arcee/`) |
| Tencent Hunyuan | any Hunyuan model (`tencent/`) |
| GMI Cloud | any GMI-hosted model (`gmi/`) |
| Kilo Code | any Kilo-routed model (`kilocode/`) |
| Alibaba Cloud | any Model Studio model (`alibaba/`) |

Thirty-one routing targets, but not thirty-one integrations. They collapse onto **four
transports**: `AnthropicProvider` and `GoogleProvider` for the two wire formats
that differ, `OpenAICompatibleProvider` for everything else, and
`ArchimedesModel` for the local small-model path. Adding a provider is a base
URL, an API key env var, and a model-id rewrite — not a new class.

---

## The Archimedes Principle

Aura's local+cloud alternation system. A small local model — "Archimedes" — attempts tasks first; a large cloud model escalates in only when Archimedes can't be trusted with the task or its answer fails verification. Every alternation is captured as an *episode*, and Archimedes's track record decides how much it gets trusted next time.

The name reflects the design: a small model, present from the beginning, that learns from every episode where the large model had to intervene.

### The local model

The shipped code default is `qwen2.5-coder:1.5b` via Ollama. In practice this project runs **IBM Granite 4.1 (3B)** (`granite4.1:3b`), which proved notably accurate for its size in testing — set it via `archimedes.modelName` in `.aura.json` (example below). Any Ollama model tag works.

### Competence-based routing

Before each task, `assessCompetence` checks Archimedes's historical success rate on similar tasks (token-overlap similarity against the last 50 episodes):

- **Fewer than `minAttempts` (default 3) prior attempts** on a pattern → Archimedes always gets a chance, to gather training data.
- **Success rate ≥ `competenceThreshold` (default 0.7)** → Archimedes handles the task.
- **Below threshold after enough attempts** → escalate straight to the large model.

If Ollama isn't reachable, Aura escalates immediately rather than hanging.

### The verification gate

When Archimedes produces an answer, it is *not* trusted just for being non-empty. A single cheap `complete()` call (no tools, no history) asks the large model whether the answer actually addresses the task; anything other than a clear `VALID` — including verification errors — escalates to the large model. This exists because a small model's most dangerous failure mode isn't crashing, it's a confident-but-wrong answer or silent drift off-task.

### Runtime toggle: `:archon` / `:archoff`

In the interactive TUI you can override `.aura.json`'s `archimedes.enabled` for the rest of the session:

- `:archon` — force Archimedes routing on, even if the config file has it disabled
- `:archoff` — force everything to the large model, even if the config file has it enabled

The override lasts for the current session only; restart returns control to the config file.

### Configuration

`.aura.json`'s `archimedes` block:

```json
{
  "archimedes": {
    "enabled": true,
    "modelName": "granite4.1:3b",
    "ollamaBaseUrl": "http://localhost:11434/v1",
    "competenceThreshold": 0.7,
    "minAttempts": 3
  }
}
```

When enough Archimedes failures accumulate (20 by default), Aura flags the project as ready for fine-tuning — failed episodes become instruction-tuning rows for the local model.

**Performance note:** if you run Archimedes on an AMD iGPU via Ollama and see local-model calls hang for minutes, the Vulkan backend's prefill throughput may be far below CPU on your hardware. Running Ollama CPU-only (e.g. hiding the Vulkan device via `GGML_VK_VISIBLE_DEVICES`) restores usable speed.

---

## CLI

```bash
aura 'your task'           # run a single task
aura                       # interactive TUI
aura serve                 # start the HTTP API server
aura --auto 'task'         # fully autonomous, no confirmations
aura --readonly 'analyze'  # read-only analysis
aura --sandboxed 'refactor auth'  # kernel-enforced boundary (Linux)
aura --doctor              # self-diagnostic
```

### Flags

| Flag | Description |
|------|-------------|
| `--model, -m <id>` | Model to use (default: saved global config / `AURA_MODEL`) |
| `--api-key <key>` | API key (overrides env var) |
| `--base-url <url>` | Custom API endpoint (Ollama, proxies, etc.) |
| `--auto` | Auto-approve all tool calls (no confirmation) |
| `--readonly` | Read-only mode (no file writes or shell commands) |
| `--sandboxed` | Kernel-enforced boundary: Aura's own install is read-only and writes outside the project fail at the OS level. Linux + bubblewrap; refuses rather than pretending elsewhere. Not combinable with `--computer`. See [SECURITY.md](SECURITY.md) |
| `--gazelle` | [Gazelle mode](#gazelle--conversational-mode): lean conversational path, no tools |
| `--mode gazelle` | Same as `--gazelle` (env: `AURA_MODE=gazelle`) |
| `--cwd <path>` | Working directory (default: current) |
| `--models` | List all known model IDs |
| `--interactive` | Start the interactive REPL/TUI |
| `--no-session` | Disable conversation history persistence |
| `--new-session` | Force a fresh session (ignore prior history) |
| `--resume [id]` | Resume latest session, or a specific session by ID |
| `--chat-id <id>` | Attach to a specific chat ID (creates if missing) |
| `--list-sessions` | List all saved sessions for this project |
| `--no-setup` | Skip the first-run setup wizard |
| `--reset-setup` | Wipe saved config and re-run the setup wizard |
| `--orchestrate` | Force multi-agent orchestration mode |
| `--architect "task"` | Blueprint mode: plan-only, produces a blueprint |
| `--blueprint <id>` | Show a saved blueprint by ID |
| `--blueprints` | List all saved blueprints |
| `--build [id]` | Full orchestrated build; `--build <id>` builds from a blueprint |
| `--plan` | Preview execution plan before running |
| `--verify` | Verify output after task; retry on failure |
| `--max-verify-retries <n>` | Max verification retries (default: 3) |
| `--test-command <cmd>` | Shell command run as part of verification (e.g. `"npm test"`) |
| `--max-turns <n>` | Max agent loop turns before stopping |
| `--moa` | Mixture of agents: parallel read-only perspectives + synthesis (exploratory tasks) |
| `--analyze` | Mine session history for weakness patterns; save report |
| `--propose-harness` | Generate system-prompt patches from the weakness report |
| `--apply-harness <id>` | Apply a proposal patch; reverts if tests fail |
| `--doctor [--fix] [--offline]` | Scan Aura itself for issues; `--fix` attempts auto-repairs |
| `--workflow <name> ...` | Create and run a sequential workflow with named steps |
| `--resume-workflow <id>` | Resume a paused/failed workflow from the last completed step |
| `--workflows` | List all persisted workflows |
| `--profile local` | Use local Ollama defaults (no API key required) |
| `--speak` | Read task summaries aloud (also `AURA_SPEAK=1`) |
| `--rate-limit-rpm <n>` | Cap requests per minute |
| `--rate-limit-tpm <n>` | Cap tokens per minute |
| `--max-retries <n>` | Max retry attempts on 429/5xx (default: 5) |
| `--fallback <model>` | Fallback model if primary exhausts retries (repeatable) |
| `--help, -h` / `--version, -v` | Help / version |

CLI flags always override `.aura.json`.

---

## REPL commands

Inside the interactive TUI (press **Ctrl+P** for a fuzzy-searchable command palette):

### Modes

| Command | Description |
|---------|-------------|
| `:coder` | Switch to full coding-agent mode (tools, project context) |
| `:gazelle` | Switch to lean conversational mode |

### Session

| Command | Description |
|---------|-------------|
| `:id` | Show current chat ID |
| `:sessions` | List all saved sessions |
| `:resume` / `:resume <id>` | Resume the latest (or a specific) session |
| `:new` | Start a new session (fresh history) |
| `:history` | Show turn count in current session |
| `:clear-history` | Wipe conversation history (keep session ID) |
| `:save [title]` | Rename / save current session |
| `:delete <id>` | Delete a saved session |

### Model / API

| Command | Description |
|---------|-------------|
| `:model` / `:model <id>` | Interactive model selector / direct switch |
| `:provider` | Pick provider, then model (live-fetched lists) |
| `:apikey <key>` | Set API key for current session |

### Workflows / tasks

| Command | Description |
|---------|-------------|
| `:workflows` | List all saved workflows |
| `:workflow <name> "step1" "step2" ...` | Create & run a multi-step workflow |
| `:resume-workflow <id>` | Resume a paused/failed workflow |
| `:q add <prompt>` / `:q list` / `:q run <n>` / `:q drop <n>` / `:q clear` | Task queue |
| `:machina <task>` | Run task with self-verification + auto-retry |
| `:council <task>` | 2–3 parallel read-only specialists, then synthesis |
| `:ecclesia <topic>` | 5 independent research agents + synthesis verdict |

### Memory / side channel

| Command | Description |
|---------|-------------|
| `:dream` / `:dream full` | Consolidate recent (or all) episodes into a dream entry |
| `:rem` | Show reconciled memory (or latest dream) |
| `:mine` / `:mine --refine` | Mine episodes for patterns (zero-LLM clustering) |
| `:research <topic>` | Multi-step research pass, saved to `research/*.md` |
| `:confess` / `:confessions` | Auto-detect & list anomalous-episode confessions |
| `:btw <question>` | Quick side question (read-only, no history pollution) |
| `:lessons` | Everything Aura has learned, both scopes, with keys |
| `:lessons global` / `:lessons project` | Only that scope |
| `:lessons timeline` | When lessons were learned, as a per-day chart |
| `:lessons <text>` | Only lessons matching that text |
| `:forget <key>` | Remove one lesson from the prompt for good |

### Computer use

| Command | Description |
|---------|-------------|
| `:compon` | Turn computer use ON (shows the disclosure first) |
| `:compoff` | Turn it OFF and release the input device |
| `:comp` | Show whether it is on, and what is holding it there |

### While a task is running

| Command | Description |
|---------|-------------|
| *anything else* | Steers the running task — folded in at the next turn |
| `:stop` / `:cancel` | Abort the running task |

### Design

`:designx` treats a design ask as a commission rather than a coding ticket: it routes 2–3 named
directions out of a hand-written style lexicon (Swiss International, Risograph Misprint, Cassette
Futurism, Blueprint, …), sends the agent to scrape real references for those specific directions,
then builds a self-contained artefact into `design/`. The lexicon exists to stop the run converging
on the default AI page — centred hero, gradient headline, three rounded cards.

| Command | Description |
|---------|-------------|
| `:designx <brief>` | Route a direction, scrape references, build the artefact |
| `:designx web\|deck\|pdf <brief>` | Force the artefact type (otherwise inferred from the brief) |
| `--classic` / `--wild` / `--feral` | How far past convention to push (default: balanced) |
| `--style <id>` | Pin a direction from the lexicon (repeatable, comma-separated) |
| `--seed <n>` / `--count <n>` | Re-roll reproducibly / how many directions to route |
| `--no-scrape` / `--out <dir>` | Skip the reference pass / choose the output directory |
| `:designx styles` | List the lexicon |

Output is one self-contained file per target — `index.html` (web), `deck.html` (arrow-key slides,
one slide per printed page), `document.html` (A4 paged media, rendered to PDF via headless Chrome
when one is installed) — plus a `DESIGN.md` recording which direction it led with and why.

### Archimedes

| Command | Description |
|---------|-------------|
| `:archon` | Enable Archimedes Alternator for this session (overrides `.aura.json`) |
| `:archoff` | Disable Archimedes Alternator for this session (overrides `.aura.json`) |

### Voice / safety

| Command | Description |
|---------|-------------|
| `:speak` | Toggle reading replies aloud |
| `:approve` / `:approve all` / `:approve off` | Auto-approve controls for y/N prompts |

### Context / stats / system

| Command | Description |
|---------|-------------|
| `:compact`, `:compress` | Force context compaction now |
| `:context` | Show loaded project context |
| `:graph` / `:graph refresh` | Codebase knowledge graph summary / reload |
| `:plans` | List saved execution plans |
| `:viz`, `:dashboard` | Generate and open the memory dashboard |
| `:doctor` / `:doctor --fix` | Scan Aura itself for issues / attempt repairs |
| `/stats`, `/usage` | Token + cost usage this session |
| `/cost [n]` | Cache hit rate + cost per call (default: last 20) |
| `/context` | Context health dashboard (window, compaction, cost) |
| `/context tune`, `/ct` | Adjust when compaction fires (←/→ on the ladder) |
| `/clear`, `/reset` | Reset cumulative usage stats — does **not** clear history (use `:clear-history`) |
| `:help` | Show all commands |
| `:quit`, `:q`, `/exit` | Exit |

---

## Steering, and finishing

Two behaviours that have no command because they are simply how a run works.

**Steering.** The TUI never stops reading your keyboard while a task runs. Type
a plain line mid-task and it is parked, then handed to the model at the next
turn boundary — the run keeps its history, its tool results and its plan, and
just learns one more thing:

```
  ↳ queued — Aura picks this up on the next turn.
  ↳ steering use tabs, not spaces
```

Commands still wait for the run to end: `:model`, `:new` and `:compact` mutate
state the running loop is holding. `:stop` still aborts.

**Finishing.** A run that hits its turn cap or stalls used to return "Loop
stalled" and throw away everything it had learned. Now, once per run, at the
point where the run was already lost:

```
turn 22/25 → stall
  ↳ name what you do not know          one cheap call, no tools
  ↳ search what Aura already learned    free — no LLM call
  ↳ …on a miss, research it             read-only, 5 turns
  ↳ resume the original task
  ↳ write the lesson down               next time this gap is free
```

Memory is searched before anything is spent, which is the whole reason lessons
are written down in the first place. Facts about the world go to
`~/.aura/memory/lessons-global.md` and apply everywhere; facts about one repo
stay in its `.aura/lessons.md`. Read them with `:lessons`, drop a wrong one
with `:forget`. Skipped entirely if you abort, or if a budget ceiling has
fired — the ceiling that just stopped the run is not something a recovery pass
should spend through.

---

## Cost controls

A long agent session is expensive in a way that isn't visible while it runs.
The history is resent on every call, so per-call input cost grows linearly and
total cost grows quadratically — and a session can look fine by turn count
while being the expensive one. Aura guards this at three levels.

**Compaction threshold.** Compaction fires at `min(window * rung, context.maxTokens)`,
default cap **80k tokens**. The cap matters on large-window models: as a pure
share of the window, rung 1 on a 1M-window model sits at 550k, so a session
can grow indefinitely without ever compacting. Tune the ladder live with
`/context tune` (short: `/ct`), or set `context.ladder` / `context.maxTokens`
in `.aura.json`. On a large-window model the 80k cap is usually what's
binding, not the ladder — the tuner marks rungs held at the cap and tells you
when the ladder has no effect at all.

**Session budget.** Two cumulative ceilings across a whole conversation, not
per agent-loop invocation:

| Ceiling | Default | What it's for |
|---------|---------|---------------|
| Turns | 50 (`--max-turns`) | Coarse backstop for when caching doesn't save you |
| Input tokens, net of cache hits | 1M | The one that tracks actual spend |

Both are needed because turns are a poor proxy for cost. Cache hits bill at a
fraction of the standard rate — on GLM-5.2, $0.26 vs $1.40 per Mtok — so a
well-cached 50-turn session and a cold one cost wildly different amounts for
the same turn count. The token ceiling measures what you actually pay for; the
turn cap catches runaway loops. Whichever binds first stops the run, and it
stops *cleanly*: the current turn finishes and history is persisted, so the
session stays resumable.

**In the interactive REPL, only the token ceiling is cumulative.** You are
typing every message and watching every response, so a session-wide *turn*
cap would interrupt a cheap, supervised conversation for crossing a count
that says nothing about its cost — one real 96-minute session ran 58 turns at
a 86% cache hit rate for $0.50. The per-message `--max-turns` guard still
applies and is what actually catches a runaway loop.

The turn cap is 50, not the previous 150. **Expect `--max-turns` to be routine
for real project work**, not just something benchmark runs pass.

**Stalled streams.** A cloud provider's SSE stream can go silent without the
connection closing — no error, no end-of-stream, just nothing. The provider
SDKs don't catch this: their `timeout` option only covers time-to-headers, not
the streamed body. Aura applies its own idle timeout **between chunks**
(default 60s); on a stall it aborts the request and retries once, but only if
nothing has been displayed yet — retrying after partial output would duplicate
the response. Tune with `AURA_STREAM_IDLE_MS` (ms; `0` disables).

**Visibility.** `/cost` reports cache hit rate and per-call cost from
`.aura/token-log.jsonl`, including what the same input would have cost
uncached. Hit ratio is the dominant lever: in one measured session, 19.5M
tokens at a 98% hit rate cost $1.04, while 7.75M uncached tokens cost $7.90 —
the same work, 7.6x cheaper.

---

## Memory System

Persistent memory across sessions — identity, lessons from past failures, session summaries. Stored locally, never leaves your machine.

Everything lives under `~/.aura`, or wherever `AURA_HOME` points if you set it:

| Path | What |
|------|------|
| `~/.aura/memory/identity.json` | Who you are and settled facts |
| `~/.aura/memory/lessons-global.md` | Lessons true everywhere — read in every project |
| `<project>/.aura/lessons.md` | Lessons true only in this repo |
| `~/.aura/episodes/` | What happened, in the order it happened |
| `~/.aura/confessions/` | Permanent lessons from high-cost failures |

Read what Aura has learned with `:lessons`; drop a lesson that turned out wrong
with `:forget <key>`. These are injected into the system prompt, so a wrong one
left in place gets repeated back to you until it is removed.

---

## Running as a service

`aura setup telegram` generates a ready-to-use unit at
`~/.config/systemd/user/aura-telegram.service`, which is the supported route —
it fills in the paths for your machine rather than leaving you to edit them.

Hand-written reference units (`aura.service` for the CLI in a tmux session,
`aura-telegram.service`, `rclone-gdrive.service`) are kept outside this
repository, since they carry absolute paths for one specific machine and are
deployment glue rather than part of the package. Adjust `User`,
`WorkingDirectory` and `ExecStart` before reusing any of them.

```bash
cp aura-telegram.service ~/.config/systemd/user/
systemctl --user daemon-reload
systemctl --user enable --now aura-telegram.service
```

### Run the compiled build, not `npx tsx`

If you write your own unit for any Aura entrypoint, point `ExecStart` at the
compiled JS with plain `node`:

```ini
ExecStart=/usr/bin/node /path/to/aura-code/dist/tools/telegram-bot.js
```

Not `npx tsx src/tools/telegram-bot.ts`. `tsx` isn't a dependency of this
project, so npx re-resolves and installs it from the network on **every start** —
which pins a CPU core at 100% for the life of the unit, bloats `~/.npm/_npx` by
gigabytes, and never reaches the program's first log line. It looks exactly like
a hang with no error. This cost one production incident here; the compiled build
starts in under a second.

Trade-off: `npm run build` is then required after editing `src/`, since nothing
transpiles on the fly anymore. Use `/usr/bin/node` rather than an nvm path —
nvm paths pin a node version and break on upgrade.

### Restart policy

```ini
[Unit]
StartLimitIntervalSec=300
StartLimitBurst=5

[Service]
Restart=on-failure
RestartSec=15
```

`StartLimitIntervalSec` / `StartLimitBurst` cap total restart attempts in a
window: after 5 failures in 5 minutes systemd gives up instead of looping. Note
they are **`[Unit]`** directives — systemd silently ignores them under
`[Service]`, which makes a policy that looks correct do nothing.

Worth knowing what this does and doesn't buy you: the Telegram bot's poll loop
already handles Telegram 409 Conflicts in-band (5s pause, then exponential
backoff) and its `uncaughtException` handler deliberately doesn't exit. A bot
that never exits is never restarted, so restart policy is a guard against
future failure modes that *do* exit — not a fix for a busy-looping process.

---

## Where this is going

Persistent memory across projects, space and time — and the datasets that come
out of it. Every session Aura works through leaves behind something a future
model can learn from, which is the long way round to a question worth asking:
how much of what we call awareness is just a record that never gets thrown away.

That is the ambition. The parts of it that already run are documented above; the
rest is being built in the open.

---

## License

MIT © [Dušan Milosavljević](https://github.com/DusanCar-sudo)

Website: **[dusancar-sudo.github.io/aura-website](https://dusancar-sudo.github.io/aura-website/)**

--- aura-code/docs/aura-code-overview.md ---
# Aura Code — App Description (Instruction Prompt)

Use this document as context/instructions when working on or reasoning about this
codebase. It describes what Aura Code is, how it is structured, and how it runs.

---

## What this app is

**Aura Code** is a model-agnostic, autonomous coding agent that runs from the
command line. Given a natural-language task, it reads a codebase, plans a
strategy, executes changes (editing files, running commands), verifies the
result (tests, integrity checks), and reports what it did.

- **Package:** `aura-code` (v0.3.0), CLI binary `aura`
- **Language:** TypeScript (strict), CommonJS, Node ≥ 18
- **Framework name:** *Praktess* ("she who acts and executes")
- **License:** MIT
- **Entry point:** `dist/cli/index.js` (compiled from `src/cli/index.ts`)

Run it with:

```bash
npm install -g aura-code
aura 'your task here'
```

At least one provider API key must be set (e.g. `ANTHROPIC_API_KEY`,
`OPENAI_API_KEY`, `GOOGLE_API_KEY`, `XIAOMI_API_KEY`), or a local Ollama model.

---

## Core loop

1. **Read** — inspects files, structure, and dependencies (perception layer).
2. **Plan** — decides what to change and how.
3. **Execute** — writes code, runs shell commands, makes edits via tools.
4. **Verify** — runs tests, checks file integrity, confirms changes.
5. **Report** — summarizes what was done and what passed.

The single-agent loop lives in `src/agent/loop.ts`; the system prompt is built
in `src/agent/system-prompt.ts`.

---

## Modes (selected by CLI flags)

| Mode | Flag | What it does |
|------|------|--------------|
| normal | *(default)* | Single-agent loop: read → plan → execute → verify |
| orchestrate | `--orchestrate` | Multi-agent: Researcher → Coder → Reviewer |
| architect | `--architect` | High-level design/planning before implementation |
| verify | `--verify` | Post-task checks with automatic retry on failure |
| analyze | `--analyze` | Scans session history for failure patterns |

Other notable flags: `--auto` (autonomous), `--readonly`, `--model/-m`,
`--fallback`, `--resume`, `--plan`, `--workflow`, `--blueprint`, `--models`.

---

## Providers (model-agnostic)

Resolved through `src/providers/` with a resilient factory, fallback chain,
circuit breaker, and rate limiting.

| Provider | Models |
|----------|--------|
| Claude (Anthropic) | Opus, Sonnet, Haiku |
| GPT (OpenAI) | gpt-4o, gpt-4o-mini |
| Gemini (Google) | gemini-2.5-pro, gemini-2.5-flash |
| MiMo (Xiaomi) | mimo-v2.5-pro, mimo-v2.5 |
| Ollama (local) | any local model, no API key |
| Any OpenAI-compatible endpoint | via `openrouter/<model>` or custom `.aura.json` providers |

Custom providers can be registered in `.aura.json` (e.g. DeepSeek is configured
there in this repo).

---

## Source layout (`src/`)

- `agent/` — core loop, context building, system prompt, session store, sub-agent spawner
- `orchestration/` — multi-agent router, orchestrator, specialists, plan store
- `architect/` — blueprint engine and types for high-level design
- `perception/` — codebase extraction, graph store, queries (the "read" layer)
- `providers/` — LLM provider adapters + resilient factory, fallback, types
- `tools/` — the agent's tool implementations (see below)
- `verify/` — verification checks and retry logic
- `safety/` — permission system and confirmation prompts
- `harness/` — weakness mining and self-improvement proposals
- `workflows/` — multi-step workflow engine
- `archimedes/` — episode capture, competence, fine-tuning / local model support
- `server/` — Express + WS server and session handling
- `viz/` — dashboard generation
- `setup/` — first-run wizard and global config
- `cli/` — argument parsing, terminal display, entry point
- `config/` — defaults, fallback chain, project config resolution
- `util/` — circuit breaker, rate limiter, retry, env, errors

---

## Tools available to the agent

Defined in `src/tools/` and registered in `src/tools/index.ts`:
`read_file`, `list_dir`, `edit_file`, `write_file`, `search_code`, `run_shell`,
`run_tests`, `git` (status/diff), `spawn_task` (sub-agents), `web_fetch`,
`web_search`, `browser`, `http_request`, `memory`, `clipboard`, `notify`,
`image_read`, `email`, `calendar`, `telegram`, `whatsapp`, `cron`.

---

## Configuration

- `.aura.json` — project-level model + custom provider config
- `.env.example` — documents supported environment variables / API keys
- Global config via the first-run wizard (`src/setup/`)
- `AURA_MODEL`, `AURA_FALLBACK_MODEL`, `AURA_MAX_RETRIES`, `AURA_API_RPM/TPM`
  environment overrides

---

## Build, run, test

```bash
npm run build     # tsc -> dist/
npm run dev       # ts-node src/cli/index.ts
npm start         # node dist/cli/index.js
npm test          # vitest run
```

Tests live in `tests/` and run under Vitest (`vitest.config.ts`).

---

## Notes for agents working in this repo

- The compiled output in `dist/` is generated from `src/`; edit `src/`.
- Imports use `.js` extensions (ESM-style specifiers compiled for Node).
- Keep the model-agnostic abstraction: add providers through `src/providers/`
  and the factory, not with ad-hoc SDK calls elsewhere.
- Respect the permission/safety layer (`src/safety/`) for anything that touches
  the filesystem or shell.

--- aura-code/docs/ARCHITECTURE.md ---
# Aura Code — Architecture

> "I don't try. I verify."

## The Abstract Agent Machine

Aura is not "an LLM with a loop around it." It is formally modelled as a **5-tuple Abstract Agent Machine (AAM)**:

```
AAM = (S, P, O, δ, s₀)
```

| Component | Meaning | What it is in Aura |
|---|---|---|
| **S** | State space | Conversation history plus loop counters. Every run lives inside S. |
| **P** | Primitives | The finite, enumerable set of tool calls the machine can invoke — 27 tools across `src/tools/*.ts`. |
| **O** | Oracle | The only swappable part — an LLM, a human, a rule table, or another AAM run recursively. |
| **δ** | Transition function | δ(s, O(s)) → s′: consult the oracle, run its output through the safety gate, execute tool calls against P, fold results into history. |
| **s₀** | Initial state | Empty history plus the user's task as the first message. |

This formal model is what makes Aura **provider-agnostic by construction, not by convention**. Swap the oracle (Claude → GPT → Gemini → MiMo → local Ollama) and the machine is unchanged — S, P, δ, and s₀ remain identical. This isn't a design goal stated in prose; it's a structural property of the system.

Verified against live source via `:machina` (see `docs/machina.html` for the full grounding table and diagram).

## The Agent Loop — δ in practice

The agent loop (`src/agent/loop.ts`) is the concrete implementation of δ. Each iteration:

1. **Compaction check** — before consulting the oracle, the loop measures current history size against the model's context window and compares it to an escalating **generational ladder**: `LADDER = [0.55, 0.70, 0.85]` (`src/agent/compactor.ts:13`). Each time a recap gets recompacted the threshold for the *next* pass rises one rung; once it crosses the ladder for the current generation, `compactHistory()` runs (checked at `src/agent/compactor.ts:227`, triggered from `src/agent/loop.ts:217`).

2. **Oracle invocation** — `provider.stream(system, history, TOOL_DEFINITIONS)` at `src/agent/loop.ts:235`. Yields text chunks, tool start/input/end events, and a final `{ stopReason }`.

3. **Safety gate** — every tool call from the oracle is checked against the permissions system before execution (`src/agent/loop.ts:349`). Dangerous invocations may require user confirmation.

4. **State update** — tool results and oracle text fold back into S.

5. **Loop back** — s′ becomes the new s. Continues until the oracle signals `stopReason: 'done'` or the turn counter hits the bound.

**The halting bound:** `maxTurns: 150` by default (`src/config/defaults.ts:10`), sized per task shape by the loop's profile logic. A run that hits its ceiling while still making visible progress gets **one** upgrade to a wider ceiling instead of dying with a resume hint — `--max-turns` set explicitly on the command line never widens. This makes the *real* machine decidable — it always terminates — unlike the unbounded theoretical AAM, which is Turing-complete and therefore subject to the Halting Problem: no general test can say whether an arbitrary unbounded task ever finishes. Real Aura is deliberately not that machine.

### Context compaction, precisely

`src/agent/compactor.ts` does not simply keep "the last N messages." The real rule, in order:

1. Walk backward from the end of history accumulating message token-cost until the verbatim tail would exceed `RETENTION_RATIO` (40%) of the model's context window — this sets the initial `keepFrom` boundary by *budget*, not by a fixed message count.
2. Snap that boundary forward to the nearest user-turn start within the next 6 messages, if one exists, so the kept slice opens with real user context and no `tool_use`/`tool_result` pair gets split.
3. **Only if no user turn is found** nearby does it fall back to a fixed window: `FALLBACK_KEEP = 3` — the 3 most recent messages — then walked forward past any leading `tool_result` so the kept slice never opens on an orphaned result.

So "keep the 3 most recent messages" is the *fallback* path, not the primary rule. The primary rule is token-budget-aware and turn-boundary-aware: don't cut a user's question away from its context, whenever a reasonable cut point exists within budget.

### Tool primitives (P)

27 tools, defined across `src/tools/*.ts` — 9 inline in `index.ts` (`read_file`, `list_dir`, `edit_file`, `write_file`, `search_code`, `run_shell`, `run_tests`, `git_status`, `git_diff`) plus the remainder as standalone definitions in their own files (`web_search`, `web_fetch`, `browser`, `memory`, `clipboard`, `notify`, `image_read`, `email`, `calendar`, `cron`, `audio_transcribe`, `youtube_transcript`, `mcp`, `telegram`, `whatsapp`, `gmail`, and others). Finite and enumerable — that's what makes P a real component of the tuple, not just "a big toolbox."

## Memory, Dreams, and Reconciliation

Aura does not have a traditional database. It has an **event-sourced, offline consolidation pipeline**, modelled on biological sleep.

```
episodes (raw experience, append-only)
  → :dream (src/dream/dream.ts) — nightly/on-demand consolidation
    → parser (src/dream/parser.ts) — structured bullets per section
      → reconciler (src/dream/reconcile.ts) — dedup, conflict, strengthen
        → dreams/.reconciled.md — the projection (materialized view)
          → knowledge/ — portable OKF v0.1 bundle (src/dream/okf.ts)
            → context.ts reads it → system prompt → agent uses memory
```

### Dreams

A dream is an offline consolidation pass over recorded episodes:

1. **Recall** — load episodes since the last dream (cutoff tracked in `dreams/.state.json`, and only ever advanced after a dream is successfully written — see the key invariant below).
2. **Consolidate** — feed episode digests to an LLM, distilling them into `## Lessons`, `## Patterns`, `## Open threads`, and a `## Tomorrow brief`.
3. **Prepare** — write one dated `.md` file under `dreams/<date>.md`.
4. **Reconcile** — if ≥3 dreams exist, run cross-dream reconciliation.
5. **OKF bundle** — if reconciliation succeeds, write a portable knowledge bundle to `knowledge/`.

Key invariant: the cutoff timestamp only advances when consolidation succeeds. If the provider fails, episodes are preserved, never burned. A single Ollama fallback is tried before giving up. Reconciliation itself is best-effort — if it fails, the dream file is already safely written.

### Reconciliation

Produces `dreams/.reconciled.md` — the agent's current best understanding, with lineage annotations. Six verdicts:

| Verdict | Meaning |
|---|---|
| KEEP | Unique claim, no conflict — retained as-is. |
| STRENGTHEN | Same claim across multiple dreams — confidence up. |
| MERGE | Related claims combined into one. |
| SUPERSEDE | Newer claim replaces an older one. |
| CONFLICT | Contradictory claims — both surfaced, never silently resolved. |
| DROP | Exact duplicate or obsolete — removed. |

Confidence is **mechanical, not model-generated**: `confidence = sourceDates.length / totalDreams`. A model-generated "0.72" is theater; "appears in 8 of 14 dreams → 0.57" is data.

**3-dream gate** — reconciliation only runs when ≥3 dreams exist; below that there isn't enough history for meaningful cross-dream analysis. The reconciliation prompt explicitly instructs the LLM: *"Do NOT invent new claims. Only work with what's in the input."*

### OKF Bundle

Reconciled beliefs are also written as an Open Knowledge Format v0.1 bundle to `knowledge/` — `index.md`, `log.md`, and per-section subdirectories (`lessons/`, `patterns/`, `open-threads/`), each concept as its own `.md` file. Regenerated every reconciliation pass; a projection, not a durable store. Old dream files remain untouched as an append-only audit trail.

### Injection into the agent loop

Reconciled memory is loaded in `context.ts` (`loadReconciledMemory`), which reads `dreams/.reconciled.md`, strips YAML frontmatter, truncates to ~2000 characters, and injects it into the system prompt under `### Memory (from past sessions)`. Optional — if no reconciled file exists, the prompt is identical to a memoryless agent.

## Experience Mining — Baby Archimedes & Papa Archimedes

A second, independent path from raw episodes to usable knowledge — pure statistics first, local-model judgment second.

```
episodes
  → Baby Archimedes (src/mining/extract.ts) — NO LLM, pure clustering/statistics
    → concepts (MinedConcept[])
      → Papa Archimedes (src/mining/refine.ts) — local LLM judgment
        → training-data/*.jsonl — fine-tuning-ready output
```

**Baby Archimedes** clusters episodes by category, then recursively splits by keyword overlap (depth-bounded at 3, size-bounded at 3 episodes minimum — a real termination condition, not unbounded recursion). Zero LLM calls, zero API keys, zero network. Confidence is mechanical: cluster size relative to total episodes.

**Papa Archimedes** takes Baby Archimedes's concepts and asks a local model (ArchimedesAlternator's configured small model, e.g. `qwen2.5-coder:1.5b` via Ollama) to judge whether each concept is a real, generalizable lesson or coincidental noise. Pre-call gating skips weak-signal concepts before ever spending a model call. Deduplicates against `dreams/.reconciled.md` so the two independent pipelines (dream reconciliation and mining) don't produce redundant rows. Accepted lessons are written as `TrainingExample` rows, ready for external fine-tuning — the same approach used to build the Serbian Legal LLM corpus.

Implemented in `src/mining/extract.ts` and `src/mining/refine.ts`; as of this
writing there is no `:mine` REPL command or CLI flag wired to either stage —
the pipeline runs, but only when called directly (e.g. from tests or another
module), not from user-facing Aura.

## Council and Research

| Command | What happens |
|---|---|
| `:research <topic>` | Single agent, multi-turn web research → markdown report in `research/`. |
| `:council <topic>` | 2-3 parallel read-only domain specialists (Mixture of Agents, `src/agent/mixture.ts`), never seeing each other's work, then one synthesis pass. |

`src/research/council.ts` also implements a separate, independently-testable
5-agent Ecclesia (`runCouncil`, default `panelSize: 5`, resolves its panel
model from the configured provider or a `--panel`/`AURA_PANEL_MODEL`
override) described in `docs/COMMITTEE.md` — as of this writing it is not
called from the CLI or REPL, so `:council` currently means the 2-3-agent
Mixture of Agents path above, not this Ecclesia.

## Verification

| System | Purpose |
|---|---|
| `:machina` | The formal AAM model itself, verified line-by-line against live source. Catches drift when code changes shift line numbers. |
| `council-verify.ts` | Checks panel agents' cited sources against their own tool-call logs. |
| `--verify` flag | Post-task verification with automatic retries. |

## Provider chain

```
request → rate limiter → primary model
  → on 429/5xx: exponential backoff + jitter (capped 60s)
    → circuit breaker (trips after 5 consecutive failures)
      → fallback model chain (--fallback)
```

Web search follows the same resilience pattern: Tavily (API) → Serper (Google passthrough) → DuckDuckGo (HTML scrape, no key) → a loud, explicit error if all three fail — never a silent "no results."

## Key invariants

1. Episodes are never burned on provider failure — the dream cutoff only advances on success.
2. Dreams are append-only; `.reconciled.md` and `knowledge/` are projections, regenerable from the underlying dreams.
3. `:machina`'s claims must match real source — drift is caught and fixed, not papered over.
4. The agent always reads before editing; never guesses at file structure.
5. Search and other tool failures are loud, never silently swallowed into a false "no results."
6. The unbounded theoretical machine is Turing-complete and undecidable; the real machine trades some of that theoretical power for guaranteed termination via `maxTurns` and context compaction.

## Stats

- **1317 tests**, 0 failures (94 files)
- **27 tool primitives**
- **v0.8.0**
- TypeScript (strict), MIT license

--- aura-code/docs/PROTOCOL.md ---
# Aura engine protocol

One message schema, two transports. This document is the source of truth;
`src/protocol/types.ts` mirrors it in TypeScript and both transport adapters
are deliberately thin so they cannot drift into different protocols.

| Transport | Command | Framing | Clients |
|---|---|---|---|
| stdio | `aura sidecar` | newline-delimited JSON, one frame per line | `aura-mathetes` (Tauri spawns it as a child process) |
| WebSocket | `aura serve` | one frame per WS message | `aura-droid`, any remote client |

Android cannot reliably spawn and supervise a native child process, so
`aura-droid` connects to the existing `aura serve` socket. Tauri can, so
Mathetes uses the sidecar and gets no listening port, no bearer token, and no
network attack surface — the OS process boundary is the trust boundary.

`aura serve` keeps its own older `type:`-tagged message format for the
browser UI it serves. The two are dispatched by shape on the same socket: a
message with `kind` is a protocol frame, a message with `type` is legacy.
New clients should only use frames.

---

## Frames

Three kinds. Both sides may send a request and both must answer one — that
symmetry is what makes tool approval work, since the engine asks the *client*
whether a tool may run and blocks on the reply.

### Request

```json
{ "kind": "req", "id": "1", "method": "session.create", "params": { "projectRoot": "/home/u/proj" } }
```

`id` is unique per sender and echoed on the response. Requests from the
engine use UUIDs; a client may use whatever it likes.

### Response

```json
{ "kind": "res", "id": "1", "ok": true, "result": { "sessionId": "9f3c…" } }
```

```json
{ "kind": "res", "id": "1", "ok": false, "error": { "code": "no_such_session", "message": "No such session: 9f3c" } }
```

### Event

One-way, never answered. `sessionId` is present on everything except
engine-wide events such as `engine.ready`.

```json
{ "kind": "evt", "method": "turn.delta", "sessionId": "9f3c…", "params": { "turnId": "77a1…", "text": "Reading " } }
```

### Error codes

| Code | Meaning |
|---|---|
| `bad_frame` | Unparseable, or `kind` is not `req`/`res`/`evt` |
| `unknown_method` | No such method |
| `bad_params` | Missing or wrong-typed parameter |
| `no_such_session` | Unknown `sessionId` |
| `session_busy` | A turn is already running on that session |
| `budget_exhausted` | The session's token ceiling is spent |
| `provider_error` | The model provider rejected the call |
| `internal` | Unexpected engine fault |

A malformed line does not kill the connection — the engine answers
`bad_frame` (with `id: ""` when the id could not be read) and continues.

---

## Client → engine methods

Shapes mirror `aura-mathetes`' existing `#[tauri::command]` surface so the
Tauri rewrite is mechanical:

| Tauri command | Protocol method |
|---|---|
| `create_agent` | `session.create` |
| `run_agent` | `turn.send` |
| `get_agent_messages` | `session.history` |
| `list_tools` | `tools.list` |
| `get_workspace_state` | `session.state` |
| — | `session.list`, `session.destroy`, `turn.cancel`, `usage.get` |

### `session.create`

Creates an isolated session. `projectRoot` scopes session storage, memory,
and every file tool — two sessions on different roots cannot see each
other's history or search each other's files.

```json
{ "kind": "req", "id": "1", "method": "session.create",
  "params": {
    "projectRoot": "/home/u/proj",
    "model": "deepseek/deepseek-v4-flash",
    "apiKey": "sk-…",
    "baseUrl": "https://api.example.com/v1",
    "name": "Aura",
    "maxInputTokens": 200000
  } }
```

Every field except `projectRoot` is optional; omitted ones fall back to the
engine's configured defaults. `maxInputTokens` sets this session's own
ceiling (see [Budget](#budget)).

```json
{ "kind": "res", "id": "1", "ok": true,
  "result": { "sessionId": "9f3c…", "projectRoot": "/home/u/proj", "model": "deepseek/deepseek-v4-flash", "name": "Aura" } }
```

### `session.destroy`

```json
{ "kind": "req", "id": "2", "method": "session.destroy", "params": { "sessionId": "9f3c…" } }
{ "kind": "res", "id": "2", "ok": true, "result": { "destroyed": true } }
```

Aborts any running turn.

### `session.list`

```json
{ "kind": "req", "id": "3", "method": "session.list", "params": {} }
{ "kind": "res", "id": "3", "ok": true, "result": { "sessions": [
  { "sessionId": "9f3c…", "name": "Aura", "projectRoot": "/home/u/proj",
    "model": "deepseek/deepseek-v4-flash", "createdAt": 1785241896034,
    "busy": false, "turnsUsed": 4, "inputTokensUsed": 3096 }
] } }
```

### `session.history`

Full conversation, including tool calls and results.

```json
{ "kind": "req", "id": "4", "method": "session.history", "params": { "sessionId": "9f3c…" } }
{ "kind": "res", "id": "4", "ok": true, "result": { "messages": [
  { "role": "user", "content": "Run the shell command: echo hi > proof.txt" },
  { "role": "assistant", "content": "", "toolCalls": [
    { "id": "call_00…", "name": "run_shell", "input": { "command": "echo hi > proof.txt" } } ] },
  { "role": "tool_result", "results": [
    { "id": "call_00…", "name": "run_shell", "content": "(command completed with no output)", "isError": false } ] }
] } }
```

### `session.state`

Everything a client needs to render a workspace in one call —
`get_workspace_state`'s replacement.

```json
{ "kind": "req", "id": "5", "method": "session.state", "params": { "sessionId": "9f3c…" } }
{ "kind": "res", "id": "5", "ok": true, "result": {
  "sessionId": "9f3c…", "name": "Aura", "projectRoot": "/home/u/proj",
  "model": "deepseek/deepseek-v4-flash", "busy": false, "messageCount": 8,
  "tools": [ { "name": "read_file", "description": "…", "parameters": { "type": "object" } } ],
  "usage": { "inputTokensUsed": 3096, "maxInputTokens": 200000, "turnsUsed": 4, "exhausted": false }
} }
```

### `turn.send`

Starts a turn. **The response returns immediately with a `turnId`; the work
arrives as events.** A client that waits for the response before reading
events will deadlock, because the engine may ask for approval mid-turn and
blocks until the client answers.

```json
{ "kind": "req", "id": "6", "method": "turn.send",
  "params": { "sessionId": "9f3c…", "message": "Add a health check endpoint" } }
{ "kind": "res", "id": "6", "ok": true, "result": { "turnId": "77a1…" } }
```

One turn per session at a time; a second concurrent `turn.send` gets
`session_busy`. Different sessions may run turns concurrently.

### `turn.cancel`

```json
{ "kind": "req", "id": "7", "method": "turn.cancel", "params": { "sessionId": "9f3c…" } }
{ "kind": "res", "id": "7", "ok": true, "result": { "cancelled": true } }
```

`cancelled` is `false` when nothing was running. The turn still emits
`turn.completed`.

### `tools.list`

```json
{ "kind": "req", "id": "8", "method": "tools.list", "params": {} }
{ "kind": "res", "id": "8", "ok": true, "result": { "tools": [
  { "name": "read_file", "description": "Read file contents with line numbers…",
    "parameters": { "type": "object", "properties": { "path": { "type": "string" } }, "required": ["path"] } }
] } }
```

`parameters` is JSON Schema, passed through unchanged from the engine's tool
definitions.

### `usage.get`

```json
{ "kind": "req", "id": "9", "method": "usage.get", "params": { "sessionId": "9f3c…" } }
{ "kind": "res", "id": "9", "ok": true, "result":
  { "inputTokensUsed": 3096, "maxInputTokens": 200000, "turnsUsed": 4, "exhausted": false } }
```

`maxInputTokens` is `null` when the session is uncapped.

---

## Engine → client requests

### `approval.request`

The engine asks permission before running a gated tool and **blocks the turn
until the client answers**.

```json
{ "kind": "req", "id": "0bf5…", "method": "approval.request",
  "params": {
    "sessionId": "9f3c…",
    "tool": "run_shell",
    "args": { "command": "echo hi > proof.txt" },
    "tier": 3,
    "rendered": "Allow: $ echo hi > proof.txt?"
  } }
```

`tool` and `args` are structured — a client renders its own modal rather
than parsing `rendered`, which is human prose formatted for a terminal.

The client answers with a normal response frame:

```json
{ "kind": "res", "id": "0bf5…", "ok": true, "result": { "decision": "allow" } }
```

| `decision` | Effect |
|---|---|
| `allow` | Run it once |
| `deny` | Block it; the agent is told the user denied it and continues |
| `allow_always_session` | Run it, and stop asking for that tool for the rest of the session |

**Deny is the default on anything else.** A timeout (120 s), a dropped
transport, an `ok: false` response, or an unrecognised `decision` all deny.
Silence is never consent.

### Tiers

`tier` is on the wire now so the Phase 5 guard does not change the format.
Until it lands the engine emits `3` for everything that reaches a
confirmation.

| Tier | Meaning |
|---|---|
| 1 | Auto — reads, searches, memory lookups |
| 2 | Accept-edits — writes inside the project root |
| 3 | Approval required — outside the root, installs, network, `git push`, credential paths, destructive shell |
| 4 | Bypass — not implemented |

---

## Engine → client events

| Method | `params` | When |
|---|---|---|
| `engine.ready` | `protocolVersion`, `defaultModel`, `defaultProjectRoot` | Once, on connect |
| `turn.started` | `turnId` | Turn begins |
| `turn.delta` | `turnId`, `text` | Assistant text, streamed |
| `turn.tool_call` | `turnId`, `name`, `input` | Model invoked a tool |
| `turn.tool_result` | `turnId`, `name`, `result`, `elapsedMs` | Tool returned |
| `turn.tool_blocked` | `turnId`, `name`, `reason` | Tool refused or denied |
| `turn.error` | `turnId`, `message` | Turn threw |
| `turn.completed` | see below | Turn ended, success or not |
| `log` | `turnId`, `level`, `message` | Engine diagnostics |

`turn.completed` always fires, including after `turn.error` and after a
cancel:

```json
{ "kind": "evt", "method": "turn.completed", "sessionId": "9f3c…",
  "params": {
    "turnId": "77a1…", "success": true,
    "summary": "Created /tmp/proof.txt with the content hello.",
    "turns": 4, "toolCount": 3,
    "usage": { "inputTokens": 11800, "outputTokens": 298, "cachedTokens": 8704, "costUsd": 0.000638736 },
    "budgetStopped": false
  } }
```

---

## Budget

Each session carries its own ceiling on cumulative **billed input tokens**
(raw prompt minus prompt-cache hits — cache hits bill at a fraction of the
standard rate, so counting them would stop a cheap well-cached session and an
expensive cold one at the same point).

- Default: `AURA_SESSION_BUDGET` if set, else 1,000,000.
- Per session: `maxInputTokens` on `session.create`.
- `AURA_SESSION_BUDGET=0` disables the ceiling. A malformed value falls back
  to the default rather than to unlimited — failing open on a typo is the one
  outcome this must never have.

The check is **predictive**: before each turn the engine measures the prompt
it is about to send and stops if it would cross the ceiling, rather than
noticing afterwards. Input is billed when the request is sent, so a
stop-after check saves nothing on the offending call. A turn that cannot fit
is never sent and `turn.completed` carries `budgetStopped: true`.

`turn.send` on an already-exhausted session is rejected outright with
`budget_exhausted`.

---

## Local model management

**Not part of this protocol.** Starting, stopping and discovering a local
`llama-server` is process supervision, and it stays on the Rust side in
`aura-mathetes` (`src-tauri/src/llamacpp/`). The engine only ever speaks HTTP
to a server that is already running — point a session at it with
`baseUrl` on `session.create`.

---

## Worked example

`scripts/protocol-test-client.mjs` is a runnable reference client: it spawns
`aura sidecar`, lists tools, opens a session, sends a message, answers the
approval request, and prints every frame in both directions.

```bash
node scripts/protocol-test-client.mjs \
  --model 'deepseek/deepseek-v4-flash' \
  --root /tmp/demo \
  --task "Run the shell command: echo hi > proof.txt"
```

Abridged transcript (`→` client to engine, `←` engine to client):

```
← {"kind":"evt","method":"engine.ready","params":{"protocolVersion":1,…}}
→ {"kind":"req","id":"1","method":"tools.list","params":{}}
← {"kind":"res","id":"1","ok":true,"result":{"tools":[…26 tools…]}}
→ {"kind":"req","id":"2","method":"session.create","params":{"projectRoot":"/tmp/demo",…}}
← {"kind":"res","id":"2","ok":true,"result":{"sessionId":"3e0f8be7…",…}}
→ {"kind":"req","id":"4","method":"turn.send","params":{"sessionId":"3e0f8be7…","message":"Run the shell command: echo hi > proof.txt"}}
← {"kind":"res","id":"4","ok":true,"result":{"turnId":"64a1cd24…"}}
← {"kind":"evt","method":"turn.started","params":{"turnId":"64a1cd24…"}}
← {"kind":"evt","method":"turn.tool_call","params":{"name":"run_shell","input":{"command":"echo hi > proof.txt"}}}
← {"kind":"req","id":"0bf5…","method":"approval.request","params":{"tool":"run_shell","args":{"command":"echo hi > proof.txt"},"tier":3,"rendered":"Allow: $ echo hi > proof.txt?"}}
→ {"kind":"res","id":"0bf5…","ok":true,"result":{"decision":"allow"}}
← {"kind":"evt","method":"turn.tool_result","params":{"name":"run_shell","result":"(command completed with no output)","elapsedMs":6}}
← {"kind":"evt","method":"turn.completed","params":{"success":true,"turns":4,"toolCount":3,…}}
```

---

## Implementation notes for client authors

- **Read events while a request is outstanding.** `turn.send` responds
  immediately and the turn's work arrives as events; the engine will issue
  an `approval.request` mid-turn and wait for it. A client that serialises
  all frames behind one in-flight request deadlocks — the engine's own stdio
  adapter had exactly this bug, and an `allow` came back as "denied by user"
  because the response sat in a queue behind the turn awaiting it.
- **stdout is the frame stream.** In sidecar mode nothing else may be
  written to it; the engine redirects its own `console.log` to stderr for
  this reason. Read stderr separately for diagnostics.
- **Match responses by `id`,** not by arrival order.
- **Answer `approval.request` promptly.** It denies after 120 s.

--- aura-code/docs/SECURITY.md ---
# Security model

Aura is an autonomous coding agent. When you run `aura`, tool calls execute
with **your full user privileges** — there is no OS sandbox. The agent also
reads untrusted content (repo files, fetched web pages, command output) and
feeds it to the model, so a **prompt-injection payload in that content can
attempt to drive tool calls**. The layers below exist to keep that from
escalating into arbitrary code execution, secret theft, or a networked
foothold.

These are defense-in-depth mitigations, not a sandbox. For untrusted code,
run Aura inside a container/VM you're willing to lose.

## What's enforced (v0.7.2)

### Filesystem jail — file tools stay inside the project root
`read_file`, `write_file`, `edit_file`, `list_dir`, `search_code`, and the
`run_shell` working directory all resolve their target through
`src/safety/path-jail.ts` and reject anything outside the project root:
`../` traversal, absolute paths (`/etc/passwd`, `~/.ssh/...`), and **symlink
escapes** (a symlink inside the project that points outside is resolved before
the containment check). This blocks reading credentials into model context and
writing persistence into shell rc files / `authorized_keys`.

> Note: `run_shell` itself is not filesystem-contained — a shell command can
> still `cat` anything the user can. The jail covers the structured file tools;
> shell is gated by the permission layer below.

### SSRF guard — outbound HTTP can't reach internal targets
`web_fetch` and `http_request` route through `src/safety/ssrf.ts`, which:
- allows **http/https only**;
- **resolves the host and rejects** loopback, RFC-1918, link-local
  (incl. the `169.254.169.254` cloud-metadata endpoint), CGNAT, and IPv6
  loopback/ULA/link-local/mapped-private addresses;
- **re-validates every redirect hop** (redirects are followed manually), so a
  public URL can't 302 to the metadata service.

This closes the "steal cloud IAM creds / hit an internal admin panel and
exfil" chain from the outbound tools.

### Command permissions — interpreters require confirmation
`src/safety/permissions.ts` + `src/config/defaults.ts`:
- The auto-approve **safe-list no longer contains interpreters or
  package-runners** (`node`, `python`, `python3`, `ts-node`, `npx`,
  `npm run`, `curl`). Whitelisting an interpreter is equivalent to
  whitelisting "run any code" (`node -e '…'`, `python3 -c '…'`), so these now
  require explicit confirmation in `normal` mode.
- A command is only auto-approved if it has **no shell control operators**
  (`;`, `&`, `|`, `<`, `>`, backtick, `$(`). This stops prefix-smuggling like
  `cat x; python3 -c '…'` — a safe prefix can no longer launder a chained
  command.
- The safe-list match is **anchored** to the whole command, so `lscpu` no
  longer matches `ls`, `curlx` no longer matches `curl`.
- The dangerous-command denylist is broadened (long-form `rm --recursive
  --force`, `find … -delete/-exec`, world-writable `chmod`). **This denylist
  is a backstop only** — a regex over a shell string can always be evaded, so
  it is never the primary boundary. The primary boundary is: interpreters
  need confirmation, and `--auto` mode is an explicit user opt-in to skip it.

### Web server — loopback + token + origin
`src/server/index.ts` (the `aura --serve` web client):
- **binds `127.0.0.1`** (not `0.0.0.0`), so it isn't LAN-reachable;
- requires a **per-session bearer token** (random 24 bytes, or
  `AURA_SERVER_TOKEN`) on every HTTP route and on the WebSocket handshake —
  the token is embedded in the served page URL;
- **validates the WebSocket `Origin`** against its own origin, blocking
  cross-site WebSocket hijacking (a random website you visit can't open
  `ws://localhost:<port>` and drive your agent).

## Still open / by design
- **No OS sandbox.** `run_shell` and test-runners execute real code with your
  privileges. Confirmation gates it in `normal` mode; `--auto` skips
  confirmation by design.
- **`--auto` mode** relies on the denylist backstop. Use it only in a
  disposable environment.
- **No audit log** of executed commands, and no outbound egress allow-list.
- Test-runners (`npm test`, `pytest`, …) remain auto-approved for workflow
  reasons; a malicious repo's test script is a separate threat (running an
  untrusted project's tests). Prefer a container for untrusted repos.

--- aura-code/docs/SANDBOX-DESIGN.md ---
# `--sandboxed`: a real boundary

**Status:** implemented (Linux/bubblewrap), `src/safety/sandbox.ts`, verified by
`tests/safety/sandbox-boundary.test.ts`. The open questions at the bottom are
answered in "Decisions taken" below; the rest of this document is the design as
approved, kept for the reasoning behind the options that were rejected.

## The problem, stated exactly

SECURITY.md:164 already says it, correctly:

> The check is ordinary TypeScript in a tree Aura can write to, and this has
> been demonstrated rather than theorised — asked firmly enough to enable
> computer use "even if you need to change files", Aura edited its way past the
> gate. The same is true of every other in-process guard here, including the
> permission levels: an agent that can edit its own source and rebuild can edit
> the thing that says no.

Three guards live in this repo, all of them ordinary TypeScript running in the
same process, with the same UID, as the agent they constrain:

| Guard | File | What it stops |
|---|---|---|
| Permission levels | `src/safety/permissions.ts` | unconfirmed writes / shell |
| Path jail | `src/safety/path-jail.ts` | file tools escaping the project root |
| Computer-use gate | `src/tools/screen/disclosure.ts` | screen/input control |

`run_shell` and `write_file` are enough to edit any of them. The guards stop
accidents. They are not boundaries, and the project is unusually honest about
saying so — which is precisely why closing the gap is worth doing rather than
papering over.

## What a boundary has to mean here

A boundary is a rule the agent's own UID cannot rescind. That rules out
anything written in TypeScript inside `dist/`.

Two guarantees are achievable and worth having:

- **G1 — the guards cannot be tampered with.** Aura's installed tree is
  read-only from inside the sandbox. Nothing a session does can change what the
  *next* session enforces.
- **G2 — the blast radius is the project.** Writes outside the project root and
  the state directory fail at the OS level, not at `path-jail.ts`. This turns an
  in-process check into an enforced one.

One guarantee is **not** achievable and must not be claimed:

- **Not G3 — "the agent cannot run arbitrary code."** `run_shell` exists by
  design. Inside the sandbox the agent can still write a script into the project
  and execute it, including spawning `node -r ./patch.js` against a *copy* of the
  engine. What it cannot do is make that modification persist into the installed
  Aura. The honest claim is "tampering cannot persist", not "the agent is
  contained".

Overclaiming here would repeat exactly the failure SECURITY.md currently avoids.

## Options considered

### A. Dedicated user account

Re-exec the engine as an `aura-sandbox` user that has no write permission on the
install directory.

- **Boundary strength:** strong. Standard POSIX ownership; nothing exotic.
- **Cost:** needs root once to create the user, and the project tree must be made
  writable by it (`chown`/ACL). That second step is the killer — every new
  project needs a permissions change, and getting it wrong either breaks the
  agent or hands the sandbox user more than intended.
- **Other friction:** interactive TTY handoff, `sudo` in the invocation path, API
  keys must cross a user boundary without landing in a world-readable env.

### B. Container mode

Run the engine in a container: project bind-mounted read-write, install
read-only.

- **Boundary strength:** strongest, and the most portable across hosts.
- **Cost:** a heavy dependency (Docker/Podman must be installed and running),
  seconds of startup per invocation, and it breaks two things this project cares
  about — **computer use** (needs the host display and input devices) and the
  **local Archimedes path** (needs to reach Ollama on the host). Both are
  solvable with `--network=host` and X11/Wayland socket passing, at which point
  a good part of the isolation is handed back.

### C. OS-level filesystem restriction — **recommended**

On Linux, `bubblewrap` (`bwrap`) creates an unprivileged user namespace and
binds the filesystem exactly as told:

```
bwrap --ro-bind / /  --dev /dev  --proc /proc   \
      --bind <project-root> <project-root>      \
      --bind <state-dir>    <state-dir>         \
      -- node <install-dir>/dist/cli/index.js "$@"
```

Note the root bind is `--ro-bind`, not `--dev-bind`. An earlier draft of this
sketch used `--dev-bind / /`, which leaves the entire filesystem writable and
delivers G1 only — the install would have needed its own `--ro-bind` and
everything else would still have been open. Read-only by default with explicit
read-write exceptions is the shape that yields both guarantees, and it fails
closed: a path nobody thought about is read-only rather than writable.

- **Boundary strength:** strong for G1 and G2. The read-only bind is enforced by
  the kernel; a write to the install tree returns `EROFS` regardless of UID.
- **Cost:** one small, widely packaged binary. **No root, no daemon, no
  per-project `chown`, no startup penalty.**
- **Keeps what matters:** the process stays on the host network and the host
  display, so Ollama and computer use continue to work unchanged.
- **Limits:** Linux only. `bwrap` needs unprivileged user namespaces enabled
  (default on most distros; Debian and RHEL have historically shipped it off).

### Verified, not assumed

Both guarantees were tested on this machine (`bwrap` present, unprivileged
userns enabled) before recommending the option:

| Attempt | Result |
|---|---|
| write a guard file in the install tree | `Read-only file system`, file byte-unchanged |
| write `authorized_keys` outside the jail | `Read-only file system`, file byte-unchanged |
| write inside the project root | succeeded |
| run `node` | works |
| reach Ollama on `localhost:11434` | `HTTP 200` |

The last two matter as much as the first two: a boundary that breaks the local
model path would invalidate the project's whole economic argument, and nobody
would run it.

### Recommendation

**Option C as the default, with B documented as the stricter opt-in.**

C buys both achievable guarantees at near-zero operational cost and without
sacrificing the local-model path — which is the whole economic argument of this
project, so a sandbox that breaks it would not get used. B stays documented for
anyone who wants isolation beyond the filesystem and will accept the cost.

A is not recommended: it delivers no more than C while requiring root and a
per-project permission change.

Platform support is explicitly staged, and stated rather than implied:

| Platform | Mechanism | Status |
|---|---|---|
| Linux | `bubblewrap` | recommended, phase 1 |
| Linux (no userns) | container mode | documented fallback |
| macOS | `sandbox-exec` | investigate; deprecated but functional |
| Windows | — | unsupported; `--sandboxed` must refuse, not pretend |

`--sandboxed` on a platform with no mechanism must **fail loudly**. A flag that
silently does nothing is worse than no flag, because it manufactures exactly the
false confidence this design exists to remove.

## Implementation sketch

1. **`src/safety/sandbox.ts`** — detect an available mechanism, build the
   `bwrap` argv, re-exec `process.argv` inside it. One module, no changes to any
   tool.
2. **Re-exec guard** — an env marker (`AURA_SANDBOX_ACTIVE=1`) so the inner
   process knows it is already jailed and does not recurse.
3. **Path set** — install dir read-only; project root read-write; `~/.aura`
   read-write (sessions, episodes, the cost ledger); everything else inherited
   read-only via `--ro-bind /`.
4. **Startup banner** — state which guarantees are active, in the same plain
   register SECURITY.md uses.
5. **Refusal path** — no mechanism, no sandbox, non-zero exit.

## How it gets verified

The plan asks for a test that attempts to modify a guard file from inside the
sandbox and asserts failure. Concretely, `tests/safety/sandbox-boundary.test.ts`,
skipped when `bwrap` is absent so it never passes vacuously:

- writing to `<install>/dist/safety/permissions.js` fails with `EROFS`/`EACCES`
- writing to `<install>/dist/tools/screen/disclosure.js` likewise
- writing *inside the project root* still succeeds — a boundary that breaks the
  agent is not a boundary, it is an outage
- writing to `$HOME/.ssh/authorized_keys` fails at the OS level, with
  `path-jail.ts` deleted from the picture — proving G2 is enforced rather than
  merely checked
- `--sandboxed` with no mechanism available exits non-zero

The third and fourth cases matter most: they are what distinguish a real
boundary from a broken install.

## SECURITY.md changes

The existing disclosure stays exactly as it is for the default path — it is
accurate and it is the reason this work is worth doing. A new section
distinguishes the two modes:

- **Default — guardrail.** Unchanged text. In-process gates, honest about
  stopping accidents rather than operators.
- **`--sandboxed` — boundary.** G1 and G2, named as guarantees, with the
  mechanism and platform stated. Plus the explicit non-guarantee: arbitrary code
  execution inside the sandbox remains possible, so this bounds blast radius and
  prevents persistent tampering — it does not make an adversarial agent safe.

## A conflict this design cannot dissolve

In a **development checkout the install directory *is* the project root** — on
this machine `which aura` resolves to `<repo>/dist/cli/index.js`. G1 wants that
tree read-only; G2 wants the project writable. Both cannot hold at once.

This is not a flaw in the mechanism, it is the honest shape of the situation:
when the agent's task is editing Aura itself, no filesystem boundary can
distinguish "legitimate work" from "editing the thing that says no". Options:

- **Refuse.** `--sandboxed` errors when the project root contains the running
  install. Cleanest, and states the truth.
- **Split.** Sandbox against an installed copy elsewhere, so the checkout is
  editable but the *running* engine is not. More useful, more moving parts.

I lean toward refusing in phase 1 and documenting why, because a sandbox that
appears to work while the agent edits its own guards is worse than no sandbox.
Note this means `--sandboxed` will not protect work *on this repo* — it protects
users running Aura against other projects, which is the actual deployment.

## Decisions taken

1. **`~/.aura` is inside the boundary; config is not.** State and config already
   live in different directories — state in `~/.aura`, config in
   `~/.config/aura-code/` — so the split the question asked for costs nothing.
   State is bound read-write; the config file stays read-only, and with it the
   default permission level it can carry. A session cannot weaken the next one.

2. **`--sandboxed` stays opt-in for now.** Making it the default is the change
   that would actually move users' security posture, but it is a separate
   decision from shipping the mechanism, and it wants real-world use first.

3. **Computer use is refused under `--sandboxed`.** The two are mutually
   exclusive: the CLI refuses the combination at startup, and
   `checkComputerUseGate` refuses inside a sandbox so `:compon` cannot lift it
   mid-session. Host display access is a genuine escape route from a filesystem
   boundary, and a guarantee with a documented way around it is not one.

## What the implementation found that the design did not

**A private `/tmp`, mounted first.** The design's path set named the install,
the project and the state dir. It did not mention `/tmp`, and the first
implementation bound the host's one read-write so builds would keep working —
which quietly punched a hole through G2, since `/tmp` is outside the project and
world-readable. The boundary test caught it by *succeeding* at a write it was
supposed to be refused. It is now `--tmpfs`: private, writable, gone when the
sandbox exits.

Then the ordering bit. bwrap applies its arguments left to right, so a tmpfs
mounted after the project bind mounts straight over it — a project at
`/tmp/my-app` appeared inside the sandbox as an empty directory, with no error
anywhere. The tmpfs now comes first and the writable binds land on top. Both
behaviours are pinned by tests, because both failed silently, which is the
failure mode this whole document exists to argue against.

## Open questions, as originally written

1. **Is `~/.aura` inside or outside the boundary?** It must be writable
   (sessions, episodes, cost ledger). But `~/.aura/config.json` can carry a
   default permission level, so a writable state dir is a small channel for
   persisting a weakened setting. Options: split writable state from read-only
   config, or accept it and document it. My inclination is to split, since the
   whole point is that nothing a session does changes what the next one enforces.
2. **Should `--sandboxed` become the default** once Linux support is solid,
   with an explicit `--no-sandbox` escape? That is the choice that would actually
   change users' security posture, rather than offering a flag almost nobody
   types.
3. **Does computer use stay permitted under `--sandboxed`?** Host display access
   is a real escape route from a filesystem sandbox — a process that can drive
   the user's keyboard can open a terminal outside the jail. Arguably
   `--sandboxed` should refuse computer use outright, and the two flags should be
   mutually exclusive.

Question 3 is the one I would most want settled before writing code, because it
decides whether `--sandboxed` is a filesystem boundary or a broader one.

--- aura-code/docs/MIXTURE_OF_AGENTS.md ---
# Mixture of Agents — Phase 1: Domain Expertise · Phase 2: Parallel Perspectives

`src/agent/domain-expertise.ts` + one added param on `buildSystemPrompt`

## Problem

Aura had one system prompt for every task — generic coding-agent instructions,
no matter whether the task was a CSS layout fix, a database migration, or an
auth endpoint. Real expertise (accessibility checks for frontend, transaction
safety for database work, injection risks for security-touching code) never
made it into the model's attention unless it happened to already know to
apply it.

## What it does (Phase 1 — live)

**Domain classification** (`classifyDomains`) — same cheap-keyword philosophy
as the loop classifier. Scores 7 domains by keyword hits in the task string,
returns the top 2 matches (capped, to keep the prompt lean), empty array if
nothing matches:

`frontend`, `backend`, `database`, `security`, `devops`, `testing`, `algorithms`

**Prompt injection** (`getDomainPromptBlock`) — for each matched domain,
appends a concrete, imperative checklist (4 bullets, same terse style as the
rest of `system-prompt.ts` — no fluff, no "consider whether..."). Example,
`security`:

```
- Never log secrets, tokens, or passwords, even at debug level.
- Parameterize all queries — string-concatenated SQL is an injection
  vector regardless of "trusted" input.
- Check auth/permission boundaries on every new endpoint or route, not
  just the ones the task explicitly mentions.
- Treat any credential found in code, commits, or chat as compromised —
  flag it once, recommend rotation, don't just fix the immediate leak.
```

`buildSystemPrompt` now takes `task` as a third argument specifically to
feed this classifier. Every call site was updated (`loop.ts`); `spawner.ts`
imports `buildSystemPrompt` but doesn't call it directly (goes through
`runAgentLoop`), so it needed no change.

## Why this shape (not a separate agent, not an extra LLM call)

Mixture-of-agents in the literature usually means multiple models each
propose an answer, then something aggregates. That's real but expensive —
N model calls instead of 1. Phase 1 gets most of the practical benefit
(domain-specific checklists actually in the model's context) for zero
extra cost: it's prompt engineering with a classifier in front of it,
not a new inference path.

Verified isolated from the loop changes in the same session: with the
domain block forced to `''`, duration didn't change — confirming this
addition isn't what caused the latency observed elsewhere in the session
(see `ADAPTIVE_LOOP.md`).

## Phase 2 — live in v0.7.1 (opt-in via `--moa`)

`src/agent/mixture.ts` (`runMixtureOfAgents`) + a gate in `src/cli/index.ts`.

For `exploratory`-shaped tasks (per `loop-profile.ts`'s classification —
that's where ambiguity actually benefits from multiple angles):

1. `classifyDomains(task)` picks up to 2 domain lenses; a `generalist`
   lens is always added (fallback pair `architecture` + `generalist` when
   nothing matches). Net: 2-3 perspectives.
2. Each lens runs a full agent loop in parallel (`Promise.all`) with
   `PermissionSystem('read-only')`, `disableSpawn: true` (one level of
   parallelism only), and a muted display (warnings/errors still surface,
   prefixed with the lens name).
3. One real `provider.complete()` synthesis call reconciles the reports —
   agreement stated plainly, conflicts weighed by confidence/evidence.
4. Returns a normal `LoopResult` (aggregated turns/usage/cost, including
   the synthesis call) so the CLI treats it like any single-agent run.

All the design constraints from the original plan held:
- **Read-only only** — perspectives diagnose; they never edit.
- **Gated by task shape AND `--moa`** — the N-call cost stays off the
  default path until benchmarks justify it. Passing `--moa` on a
  non-exploratory task warns and runs the normal single-agent path.
- **Synthesis is a real model call**, and its tokens/cost are counted in
  the returned result.

Covered by `tests/mixture.test.ts` (fan-out counts, synthesis input,
all-perspectives-failed short-circuit).

## Not done here

- No benchmark yet against a genuinely ambiguous fixture task (something
  `task-001` isn't — it has one right answer, which is exactly why it's a
  bad test for whether multiple perspectives help). Until that exists,
  `--moa` stays opt-in.
- The REPL path doesn't offer MoA; only single-shot `aura --moa '<task>'`.

--- aura-code/docs/SELF_HEALING.md ---
# Self-Healing — Automatic File Integrity Recovery

> Built into the agent loop itself, not a command. Fires only when a read
> or parse actually fails — never runs proactively on healthy files.

## Why this exists

Aura's memory and reference systems (episodes, dreams, reconciled memory,
skill files, project config) are all plain files on disk. Files can get
corrupted: a process killed mid-write, a disk error, a manual edit gone
wrong, a crash during a multi-step write. Today, a corrupted file simply
throws an unhandled error and stops whatever was using it — `:dream`
fails outright, `:mine` skips silently, a skill fails to load with no
clear explanation.

Self-healing replaces "crash or silently skip" with "detect, repair what's
safely repairable, clearly report what isn't, keep working."

## The hard rule that shapes everything below

**Not all files are healable the same way, and treating them the same is
dangerous.** Two categories, with permanently different rules:

### Static files — safe to fully replace

Files whose correct content is the same regardless of how much the system
has been used: source code (`src/**/*.ts`), documentation (`docs/*.md`),
committed skill files, config templates. These have a canonical original
in git. If corrupted, the fix is `git checkout -- <file>` — restore the
whole file from the last committed version. No new mechanism needed here;
git already is the self-healing system for this category. The only new
work is *detecting* corruption and *triggering* the restore automatically.

### Dynamic files — only snippet-level repair, never wholesale replacement

Files whose content is unique and grows with usage: `episodes/*.json`,
`dreams/*.md`, `dreams/.state.json`, `dreams/.reconciled.md`, `knowledge/`,
`research/*.md`, `council/*.md`, training data. These have **no canonical
original** — there is nothing to "download a fresh copy" of, because the
content is irreplaceable history specific to this project and this user.

For these, healing means: if a **known structural snippet** within the
file is broken — a missing required section header, a malformed
frontmatter block, an unparseable JSON fragment in an otherwise-readable
file — repair only that snippet using the file format's own known-good
shape. **Never replace the file. Never discard real content.** If the
damage isn't isolated to a recognizable snippet (the file is largely
unreadable, not just missing one section), do not attempt automatic
repair — quarantine and report (see below).

This distinction is the whole design. Violating it (treating dynamic
files like static ones) risks silently destroying irreplaceable data,
which is worse than leaving it broken and visible.

## Trigger: lazy, not proactive

Self-healing does **not** scan files preemptively or run on every read.
It fires only when something already failed:

- A `JSON.parse()` throws while loading an episode or `.state.json`.
- `parser.ts`'s dream-section parsing produces an empty or clearly
  truncated result where content was expected (e.g. a dream file with a
  title line but zero parsed sections, when the raw file is non-trivial
  in size — a strong signal of mid-write truncation, not an empty day).
- A skill file fails to load (frontmatter doesn't parse, or the file is
  unreadable).
- Any other existing `try/catch` around a file read that currently just
  logs and moves on becomes a point where the healing check is offered
  the chance to act, instead.

This keeps the cost at zero for the overwhelming majority of reads (which
already succeed) and only spends effort exactly when something is
already wrong.

## Repair flow

```
read/parse attempt
       |
       v
   succeeds? --yes--> done, no healing involved
       |
       no
       v
  is this a STATIC file (tracked in git)?
       |                          |
      yes                         no (dynamic)
       |                          |
       v                          v
  git checkout -- <file>    is the damage isolated to
  log: "restored <file>     a known snippet/section?
  from git (was corrupted)"        |                |
                                   yes               no
                                    |                |
                                    v                v
                          repair just that    quarantine the file
                          snippet using the   (move to <dir>/.corrupted/),
                          format's known      log clearly what broke and
                          shape (e.g. a       that it was NOT auto-fixed,
                          missing section     continue without crashing
                          header) -- leave
                          everything else
                          in the file
                          untouched
```

### Snippet repair, concretely

For dream files specifically (the clearest existing case, since
`parser.ts` already encodes the expected shape): if a dream file has a
valid title and at least one real section, but is missing an expected
section header entirely (e.g. truncated before `## Tomorrow brief` was
ever written), the repair is to **insert the missing header with an
explicit placeholder**, not to fabricate content:

```markdown
## Tomorrow brief

*[This section was missing -- the file may have been truncated during
writing. No content was recovered.]*
```

This keeps the file structurally valid (so the parser and reconciliation
no longer choke on it) without inventing lesson content that was never
actually produced. **No LLM call for repair, by default** -- same
philosophy as Baby Archimedes: a placeholder is honest and free; calling a
model to "guess" what the missing section probably said is neither.
Re-derivation (asking a model to regenerate a missing section from that
day's episodes, if they're still available) can be added later as an
explicit, opt-in upgrade -- never the default behavior.

### Quarantine, concretely

When damage isn't isolated to a known snippet -- the file is mostly
unreadable, binary garbage, or structurally unrecognizable -- move it
aside rather than deleting it (in case manual recovery is possible later)
and log it visibly:

```
<original-dir>/.corrupted/<original-filename>.<timestamp>
```

Example log line, surfaced to the user the next time they run a command
that would have touched the file:

```
[!] episodes/a3f9c1-mqzz.json appears corrupted and could not be safely
    repaired. Moved to episodes/.corrupted/a3f9c1-mqzz.json.20260629.
    This episode's data may be lost.
```

Honest, visible, and it never pretends data was recovered when it wasn't.

## What this does NOT do

- Does not replace `episodes/`, `dreams/*.md`, `council/`, `research/`,
  or training data wholesale, ever, regardless of how badly corrupted --
  only isolated, recognized snippets within them get touched.
- Does not run as a background scan or scheduled job -- purely reactive
  to an actual failed read/parse.
- Does not call an LLM by default for repair -- placeholder-and-report is
  the baseline; re-derivation is a future, explicit opt-in.
- Does not touch credentials or config files (`telegram.json`,
  `.aura.json`) at all -- these are excluded entirely, since a "healed"
  default would have no working credentials and could silently break
  authentication in a way that's harder to notice than an outright error.

## Open questions for implementation

1. **Where does the static-vs-dynamic classification live?** Likely a
   small lookup keyed by path pattern (`src/**`, `docs/**` -> static;
   `episodes/**`, `dreams/**`, `research/**`, `council/**`,
   `training-data/**` -> dynamic), checked before any repair attempt.

2. **Does `git checkout` need the working tree to be clean for that
   file?** If a static file has *uncommitted* changes when it gets
   corrupted, restoring from git would discard those changes too. Worth
   deciding: warn and skip auto-restore if `git diff --quiet -- <file>`
   shows uncommitted changes, falling back to quarantine-and-report for
   that case specifically (treat it like a dynamic file for that one
   instance).

3. **Per-file-type snippet definitions** -- dream files have a clear
   known shape via `parser.ts` already. Episodes (`Episode` JSON) and
   `.reconciled.md` need their own "what does a healthy version of this
   look like" reference before snippet repair can be written for them.
   Build dream-file repair first (the shape already exists), then extend
   to other dynamic file types one at a time.

--- aura-code/docs/WINDOWS.md ---
# Aura on Windows

Getting Aura running on Windows 10 or 11, written for someone who has never
opened a terminal before. If you have Node.js already, skip to
[Install Aura](#3-install-aura).

A styled version is published at
[v2-seven-flax.vercel.app/aura-windows-manual](https://v2-seven-flax.vercel.app/aura-windows-manual)
(source: `site/aura-windows-manual.html`). This file is the one that is always
current, because it lives with the code and is updated in the same commit.

---

## 1. Install Node.js

Aura runs on Node.js, so that goes on first. You need **version 18 or newer**.

1. Open your browser — Edge, Chrome, Firefox, any of them.
2. Go to **[nodejs.org](https://nodejs.org)**.
3. Click the big green **LTS** button (Long Term Support). An installer
   downloads.
4. Double-click the downloaded `.msi` file. Accept every default and click
   **Install**. When Windows asks for administrator permission, click **Yes**.

## 2. Open a terminal

Press the **Windows key**, type `terminal` (or `cmd`), and press **Enter**.

A black or blue window opens with a blinking cursor. Nothing here can break your
computer — you are just typing instructions instead of clicking them.

Check the install worked. Type each line and press Enter:

```
node --version
npm --version
```

You should see version numbers, something like `v20.11.0` and `10.2.4`. If you
instead see *"'node' is not recognized"*, close the terminal, open a new one,
and try again — Windows only notices a new install in windows opened after it.

## 3. Install Aura

```
npm install -g aura-code
```

This takes a minute or two. Then confirm it:

```
aura --version
```

## 4. Give Aura a model to think with

Aura does not include an AI model. You point her at one, and you choose which —
that is what "model-agnostic" means. You need **one** key, not all of them.

| Provider | Where to get a key | Cost |
|---|---|---|
| Anthropic (Claude) | [console.anthropic.com](https://console.anthropic.com) | Pay as you go |
| OpenAI (GPT) | [platform.openai.com](https://platform.openai.com) | Pay as you go |
| Google (Gemini) | [aistudio.google.com](https://aistudio.google.com) | Free tier available |
| DeepSeek | [platform.deepseek.com](https://platform.deepseek.com) | Low cost |
| Zhipu (GLM) | [z.ai](https://z.ai) | Low cost |
| Ollama | [ollama.com](https://ollama.com) | Free, runs on your own machine |

An API key is a long password that lets Aura talk to the model. It usually
starts with `sk-`. Treat it like a credit card number: never paste it into a
chat, a screenshot, or a public repository.

**For this terminal session only:**

```
set ANTHROPIC_API_KEY=sk-ant-your-key-here
```

**Permanently, for every future terminal:**

```
setx ANTHROPIC_API_KEY "sk-ant-your-key-here"
```

`setx` only affects terminals you open *afterwards*, so close this one and open
a new one before testing.

## 5. Run your first task

Move to a project folder and describe what you want in plain English:

```
cd C:\Users\You\my-project
aura "list all the code files in this folder and tell me what they do"
```

Aura reads the folder, plans, acts, checks her work, and reports back.

Good first tasks, in increasing order of nerve:

```
aura "find all the TODO comments in this project"
aura "explain what this codebase does"
aura "add a README with setup instructions"
aura "fix the bug in the login form"
```

---

## Everyday commands

| Command | What it does |
|---|---|
| `aura "your task"` | The normal loop: read, plan, execute, verify, report |
| `aura` | Opens the interactive session (TUI) |
| `aura --help` | Every flag, with explanations |
| `aura --version` | Which version you have |
| `aura --models` | Lists the models your keys can reach |
| `aura --doctor` | Checks your setup and tells you what is missing |

If something behaves oddly, `aura --doctor` is the first thing to run. It names
the package to install rather than describing the symptom.

## Modes

| Flag | Use it when |
|---|---|
| *(none)* | Ordinary work — a feature, a fix, a question |
| `--plan` | You want the plan first, before anything is changed |
| `--architect` | Design and specification only; no files are edited |
| `--orchestrate` | Large jobs — researcher, coder and reviewer working together |
| `--verify` | Run the tests and keep fixing until they pass |
| `--analyze` | Look back over past sessions for recurring failures |
| `--gazelle` | Conversational mode, for talking rather than tasking |

## Safety

You decide how much rope she gets.

| Level | What she may do |
|---|---|
| `--readonly` | Read files only. No edits, no commands. The safe way to explore. |
| *(default)* | Read and edit files; asks before running shell commands. |
| `--auto` | Full autonomy, no prompts. For projects you trust. |

Start with `--readonly` on a codebase you care about. Move to the default once
you have seen how she works. Save `--auto` for a repository with a clean commit
you can return to.

## A note on computer use

Aura can take over the screen, mouse and keyboard — but **that feature is Linux
only right now**. Windows support is planned for the next release. Everything
else in this guide works on Windows today.

---

## When something goes wrong

**"'aura' is not recognized"**
The install did not finish, or this terminal predates it. Open a new terminal
and try `aura --version`. If it still fails, re-run
`npm install -g aura-code` and read the output for an error.

**"No API key found"**
The key is not set in *this* terminal. If you used `setx`, open a new terminal —
the old one cannot see it. Confirm with `echo %ANTHROPIC_API_KEY%`.

**Aura stops halfway through a long answer**
The model ran out of output budget. Set `AURA_MAX_TOKENS=32768` and try again.
Reasoning models spend that budget on thinking before they write anything.

**A permission error on install**
Open the terminal as Administrator: press the Windows key, type `terminal`,
right-click **Windows Terminal**, choose **Run as administrator**.

**Everything is slow or expensive**
Use a cheaper model for routine work — `aura -m gemini-2.5-flash "..."` or a
local Ollama model, which is free. `aura --models` shows what you can reach.

---

## Where to go next

- [README](../README.md) — what Aura is and why she is built this way
- [CHANGELOG](../CHANGELOG.md) — what changed in each release
- `aura --help` — the full flag list, always current


=== PRODUCT: aura-os (github.com/DusanCar-sudo/aura-os) ===

--- aura-os/README.md ---
# Aura OS

> Finally, your own OS on your own laptop — running what you need,
> nothing you don't. Aura built it for herself: she installs, themes,
> fixes and backs it up. You ask; Aura does it, snapshots first.

## Direction: a dev OS, not a polished one

Aura OS is a working desk for developers and their agents: text over
icons, square panes, every agent's last step in the sidebar, the
numbers that matter (RAM, the last 500 copies) one glance away. It runs
everything you run today — browsers, dev tools, media, games — on a
bare desktop under 350 MB. If it doesn't help you ship, it isn't on
screen.

## Two projects in one

1. **The OS** — a layer on Arch Linux: install script,
   sway dotfiles, `aura-os-*` commands, and Aura as the operator.
2. **Aura herself** — Aura builds most of this from instructions. Where she
   stumbles (wrong tool, wrong surface, runaway commands), the fix goes into
   aura-code, not just this repo. Log those in `NOTES-aura-behaviour.md`.

## Layout

    vm/            QEMU test VM (run-vm.sh, disk image, ISO — not in git)
    install.sh     entry point, run on a fresh Arch install   (Aura builds)
    install/       ordered install steps                      (Aura builds)
    config/        sway, Waybar, fuzzel, mako, foot          (Aura builds)
    bin/aura-os-*  the only commands Aura may use for system changes
    themes/        swappable themes
    AURA.md        standing rules Aura loads for this repo

## Test loop

    cd vm && ./run-vm.sh install    # first boot: archinstall, then clone repo
    ./run-vm.sh                     # later boots
    ssh -p 2222 dusan@localhost     # drive the guest from the host

--- aura-os/docs/ask-aura.md ---
# Ask Aura (aura-term, Ctrl+Shift+A)

Sends the selection, or else the window's last failed command, to Aura.
Her answer opens in a new window next to the terminal — never inside the
running program. A command she suggests is shown and runs only when the
user presses Enter, in the answer window.

## Flow

1. Ctrl+Shift+A (`aura-ask` action) in aura-termd writes the request to
   `$XDG_RUNTIME_DIR/aura-os/ask/<shell pid>-<n>.json` (mode 0600):

   ```json
   {"selection": "...", "cwd": "/home/dusan/x"}
   {"command": "ls /nope", "output": "ls: cannot access ...", "exit": 2, "cwd": "/home/dusan"}
   ```

   The failed block comes from the shell integration (OSC 133): the
   command text between the B and C marks, the output between C and D
   (last 16 KiB), and D's exit code. Nothing selected and no failed
   command yet: the key does nothing.

2. It runs, via `swaymsg exec` (so sway places it as a split next to the
   focused terminal; a plain spawn outside sway):

       aura-term --app-id=aura-ask --title='Ask Aura' --working-directory=<cwd> \
           aura-term-ask --input <request> --delete-input

   `app_id` `aura-ask` lets sway rules size or float the answer window.

3. `aura-term-ask` (C, no dependencies) reads the request, starts
   `aura sidecar` and speaks its NDJSON protocol (aura-code
   `docs/PROTOCOL.md`): `session.create` → `turn.send` → streams
   `turn.delta` → `turn.completed` → `session.destroy`. The engine's stderr
   goes to `$XDG_RUNTIME_DIR/aura-os/ask/sidecar.log`.

4. The last one-line ```` ```sh ```` block in the answer becomes the
   suggestion: Enter runs it with `sh -c` in the request's cwd, `q` +
   Enter closes without running anything.

`aura-term-ask` also works standalone: `aura-term-ask < request.json`
(`--no-prompt` skips the Enter/close prompts).

## Read-only

- `session.create` with `"permission": "read-only"` and
  `"allowedTools": []` — the session has no tools at all.
- Every `approval.request` is answered `deny` (and shown as denied).
- The session is destroyed after the answer, which removes its stored
  history.

## Without Aura

If `aura` is not in PATH (the VM today), the window says so and prints the
exact prompt that would have been sent.

--- aura-os/docs/aura-term.md ---
# aura-term

Aura OS's terminal (task 005): a fork of [foot](https://codeberg.org/dnkl/foot)
1.28.0 in `term/`, running in server mode — one `aura-termd` process for
all windows, `aura-term` is the ~2 MB per-window client. Everything foot
does (VT, fonts, IME, Unicode, sixel, URL mode, search) works unchanged;
Aura's code lives in `term/aura-*.c` with small hooks in foot's sources,
so upstream foot merges apply cleanly (checked against foot master).

## Keys

| Key | Action |
|-----|--------|
| Ctrl+Shift+↑ / ↓ | jump to the previous / next command block (also foot's Ctrl+Shift+Z / X) |
| Ctrl+Shift+Y | copy the last command's output |
| Ctrl+Shift+A | Ask Aura about the selection, or the last failed command |
| Ctrl+Alt+← / → / ↑ / ↓ | split: new pane left / right / above / below, in this pane's directory |
| Ctrl+Shift+C / V, Ctrl+Shift+R, Ctrl+Shift+N, Ctrl+Shift+O, Ctrl+Shift+U | foot defaults: copy / paste, search, new window, URL mode, Unicode input |

Rebind in `~/.config/aura-term/aura-term.ini`, `[key-bindings]` section
(same format as foot.ini; Aura's actions are `aura-copy-block`,
`aura-ask` and `aura-split-left|right|up|down`).

## Features

- **Command blocks.** With the shell integration, every command is a
  block: exit code and duration are drawn at the right edge of the
  command's line (`✓ 1.2s` dim, `✗ 2 · 1.2s` red), only over blank
  cells. Blocks can be jumped between and copied.
- **Ask Aura.** Ctrl+Shift+A sends the selection or the last failed block
  (command, output, exit code, cwd) to Aura; her answer opens as a split
  next to the terminal, never in the running program. A suggested command
  runs only when you press Enter in that window. See
  [ask-aura.md](ask-aura.md).
- **Agent awareness and tab identity.** Each window keeps
  `$XDG_RUNTIME_DIR/aura-os/panes/<pid>.json` up to date — cwd, git
  branch, agent (claude / codex / aura) and state (idle / working ● /
  done ✓ / needs input !) — for the aura-os-status sidebar, and tags its
  sway window `aura-pane-<pid>`. Needs-input also sends a desktop
  notification. See [pane-status.md](pane-status.md).
- **Splits.** Ctrl+Alt+arrows open a new pane next to the
  current one in its working directory, using sway's native splits
  (`split h|v` + `exec aura-term`): every pane is a real sway window, so
  focus/resize/move keys, pane status and the sidebar all work on it.
  Sway only inserts after the focused window, so a left/up pane is
  opened with the marker tag `aura-split-left|up` and moves itself
  (`[tag="aura-pane-<pid>"] move left|up`) once mapped; it still gets
  its normal `aura-pane-<pid>` tag. Outside sway: a new window.
- **Own terminfo.** `TERM=foot`, with foot 1.28's own entry installed in
  `/usr/local/share/aura-term/terminfo` and exported as `$TERMINFO`;
  anything that loses `$TERMINFO` (sudo, ssh) falls back to ncurses' own
  `foot` entry.

## Shell integration

Command blocks, the pane cwd/branch and the failed block for Ask Aura need
it. Add to `~/.bashrc` (bash ≥ 5.1) or `~/.zshrc`:

    . /usr/local/share/aura-term/shell/aura-term.bash   # or aura-term.zsh

It emits OSC 133 (A/B/C/D;exit) and OSC 7; other terminals ignore them.

## Files

| Path | What |
|------|------|
| `~/.config/aura-term/aura-term.ini` | user config (foot.ini format) |
| `$XDG_RUNTIME_DIR/aura-term-$WAYLAND_DISPLAY.sock` | server socket |
| `$XDG_RUNTIME_DIR/aura-os/panes/<pid>.json` | pane status (read by the sidebar) |
| `$XDG_RUNTIME_DIR/aura-os/ask/` | Ask Aura requests (0600, deleted after use), sidecar log |

## Install (Aura OS, inside the system — never on the host)

Per AURA.md these belong in an `install/` step / `aura-os-*` command
(snapshot first); the commands are:

    # build deps
    pacman -S --needed meson ninja gcc pkgconf python tllist libutf8proc fcft \
        pixman wayland wayland-protocols libxkbcommon fontconfig ncurses sway

    # release build, the same recipe as Arch's foot (PGO + LTO, makepkg flags)
    tools/aura-term-build.sh pgo term term/build-pgo
    sudo ninja -C term/build-pgo install          # everything under /usr/local

    # shell integration
    sudo install -Dm644 -t /usr/local/share/aura-term/shell config/shell/aura-term.bash config/shell/aura-term.zsh
    echo '. /usr/local/share/aura-term/shell/aura-term.bash' >> ~/.bashrc

    # sway: $term = aura-term, autostart aura-termd, Ask Aura split rule
    git apply config/aura-term-sway.patch         # then redeploy + swaymsg reload

    # mako notifications (foot's default notify command is notify-send)
    pacman -S --needed libnotify

    # then foot can go; its terminfo is owned by ncurses and stays
    pacman -R foot

`tools/aura-term-build.sh dev term term/build` is the quick non-PGO build.
Tests (private headless sway, never the real session):
`tools/aura-term-test/`.

## Budget (task 005)

Measured in the VM, private headless sway, Arch's foot 1.28.0 (+pgo) vs
aura-term (+pgo, same recipe), both `--config=/dev/null`
(`tools/aura-term-test/measure-*.sh`).

| | foot | aura-term |
|---|---|---|
| server, no windows | 9.9 MB RSS / 2.8 MB PSS | 9.8 MB / 2.7 MB |
| first window (fonts load once), 1280×720 | +9.2 MB server + 1.8 MB client | same |
| first window, 1920×1080 | +18.5 MB + 1.8 MB | +18.4 MB + 1.8 MB |
| each further window, tiled on one screen | ~+0.2 MB server + 1.8 MB client | same |
| each further full-size window (own workspace), 1280×720 | +7.6 MB + 1.8 MB | same |
| each further full-size window (own workspace), 1920×1080 | +16.9 MB + 1.8 MB | same |
| idle CPU, 5 windows, 10 s | 0 ticks | 0 ticks |
| key → frame, `cat` echo (800 samples) | median 0.81 ms, p95 0.93 | median 0.81 ms, p95 0.94 |
| key → frame, `bash` echo (800 samples) | median 0.91 ms, p95 1.07 | median 0.92 ms, p95 1.05 |
| launch → window mapped (40) | median 7.8 ms | median 7.5 ms |

The ≤ 15 MB per idle window budget holds for tiled windows and for
full-size windows up to 1280×720; a full-size 1920×1080 window on its own
workspace costs ~18.7 MB, exactly as in upstream foot: the server keeps
two screen-sized shm buffers per window, and sway 1.12 does not send the
xdg-toplevel `suspended` state to windows on hidden workspaces, so they
cannot be dropped there. For comparison, standalone foot (today's
`$term`) costs 28 MB for the first window and +11.6 MB for each further
tiled window at 1920×1080.

Latency: key → frame is from the key event reaching the terminal to its
`wl_surface.commit` of the frame showing the glyph (WAYLAND_DEBUG
timestamps); compositor scan-out is excluded and identical for both.
No typometer (needs a real display and camera) was run.

--- aura-os/docs/aura-os-mcp.md ---
# aura-os-mcp — Aura OS for agents

A local MCP server (stdio, Bash + jq). It runs only while an agent is
connected; there is no daemon. Every call is logged with the agent's name
to `~/.local/state/aura-os/mcp.log`.

## Connect an agent
- Claude Code: `claude mcp add --scope user aura-os -- /usr/local/bin/aura-os-mcp`
- Aura: ask her to connect with her `mcp` tool, command `aura-os-mcp`
- Anything else that speaks MCP over stdio: command `aura-os-mcp`

## Tools (phase 1)
read: windows_list, desks_list, system_status, agents_status,
recent_items, apps_list, theme_list
reversible: window_focus, window_move_to_desk, window_float, desk_switch,
app_open (.desktop ids only), url_open (http/https only), tab_rename,
tab_color, theme_apply, wallpaper_set, sidebar_toggle, notify

## Not in phase 1, on purpose
No shell/command tool. Closing windows (unsaved work), reading the
clipboard (passwords), packages, snapshots and reboot come in phase 2,
behind a confirmation the user clicks.

## Tested (2026-09-13, VM)
Scripted session: 19 tools listed; `run_shell` → unknown tool; URL with
`;touch /tmp/pwned` rejected (file not created); app id
`../../etc/passwd` rejected; whole session 0.39 s. Real Claude Code:
`claude mcp list` → connected; `claude -p` answered desks + RAM through
desks_list and system_status.

--- aura-os/docs/popups.md ---
# Popups: click to open, stay open, click outside to close

2026-09-15. Popups used to close the moment the mouse left them — sway's
default `focus_follows_mouse yes` gives focus to whatever the mouse
hovers, and fuzzel + the floating TUIs close on focus loss.

## The fix (three parts)

1. `config/sway/config`: `focus_follows_mouse no` — hovering never
   steals focus, so a popup keeps it while the mouse wanders. Clicking
   elsewhere still focuses (clicks always did).
2. `bin/aura-os-popup` — wrapper for the floating TUIs (calendar,
   wiremix, nmtui/replaced menus, hold-screens). Spawns an aura-float
   term and watches sway's `window` events (subscribe — nothing polls):
   once the popup had focus, the first focus event naming another window
   is a click outside → it closes. One second of grace at spawn.
3. `bin/aura-os-wifi` / `bin/aura-os-bluetooth` — fuzzel menus with
   toggles replacing raw nmtui/bluetoothctl: wifi (turn on/off, scan +
   connect with password prompt, known networks connect/forget,
   disconnect) and bluetooth (power on/off, 10 s scan + pair + trust +
   connect, connect/disconnect/remove). `aura-os-settings wifi /
   bluetooth` open them; both also take `toggle` for a key binding.

fuzzel menus (clip, recent, settings list, theme pick) already close on
focus loss — with `focus_follows_mouse no` that now means click-outside.

## Verified in the VM

- Calendar popup open → mouse moved away → still open → click outside →
  closed (screenshots popup-1/popup-2 sequence).
- wifi menu renders status + "(no wifi device…)" on the ethernet-only
  VM; bluetooth menu branch for "controller off" is code-reviewed only —
  the VM has no bt controller, untested end to end.

--- aura-os/docs/pane-status.md ---
# Pane status files (aura-term → aura-os-status)

aura-term reports what runs in each terminal window, for the task 003
sidebar ("spaces" list and agent status). The terminal is the writer;
the sidebar only reads.

## Where

    $XDG_RUNTIME_DIR/aura-os/panes/<pid>.json

One file per window. `<pid>` is the window's shell (the terminal's child
process), not aura-termd: in server mode every window shares one
aura-termd process. Directories are created mode 0700.

- Created when the window's shell starts, removed when the window closes.
- Written atomically (`<pid>.json.tmp` + `rename`), so a reader never sees
  a partial file.
- Written only when the content changes (state, agent, cwd, branch).
  Repeated OSC 7 reports of the same cwd do not touch the file.
- If aura-termd crashes, files can be left behind: treat a file whose
  `pid` is not alive (`kill -0`) as stale.

## Format

One JSON object, one line:

```json
{"pid":6531,"cwd":"/home/dusan/aura-os","branch":"main","agent":"claude","state":"input","since":1789229302}
```

| field    | type           | meaning |
|----------|----------------|---------|
| `pid`    | int            | shell pid; same as the file name |
| `cwd`    | string \| null | from OSC 7 (shell integration); before the first OSC 7, `/proc/<pid>/cwd` |
| `branch` | string \| null | git branch of `cwd` (read from `.git/HEAD`, worktrees included); short sha when detached; null outside a repo |
| `agent`  | `"claude"` \| `"codex"` \| `"aura"` \| null | agent running in the foreground; null at the shell prompt or for any other program |
| `state`  | `"idle"` \| `"working"` \| `"done"` \| `"input"` | see below |
| `since`  | int            | unix time of the last `state` change |

Sidebar symbols (task 005 spec): `working` ●, `done` ✓, `input` !,
`idle` nothing.

## Matching a file to its sway window

Each aura-term window sets its xdg-toplevel tag to `aura-pane-<pid>`
(sway ≥ 1.12 shows it as `"tag"` in `swaymsg -t get_tree`), so the sidebar
can find, focus or label the window for a pane file:

    swaymsg '[tag="aura-pane-6531"] focus'

A user-configured `toplevel-tag` in aura-term.ini overrides this; such
windows still have status files but no tag to match.

## States

Needs the shell integration (`config/shell/aura-term.bash` / `.zsh`,
OSC 133 + OSC 7). Without it a window stays `idle`.

| event | → state |
|-------|---------|
| window opens | `idle` |
| command starts (OSC 133;C) | `working` |
| command finishes (OSC 133;D, or a new prompt without D) after an agent ran, after ≥ 10 s, or while `done`/`input` | `done` |
| command finishes, anything else | `idle` |
| bell while an agent runs | `input`, plus a desktop notification (mako) "‹agent› needs input" |
| bell while a non-agent command runs | `done` |
| OSC 9 / 777 / 99 notification while a command runs, from an agent or with question-like text (permission, approve, allow, confirm, waiting, input, `?`) | `input` |
| OSC 9 / 777 / 99 notification while a command runs, otherwise | `done` |
| bell or notification at the prompt (e.g. tab completion) | no change |
| key press while `done` or `input` | `working` if a command still runs, else `idle` |

OSC notifications are already shown by aura-term itself (foot's
desktop-notifications), so only bell-triggered `input` sends the extra
notification. Desktop notifications use `[desktop-notifications]
command` (default `notify-send`, which needs libnotify installed for mako
to receive them) and are suppressed for the focused window unless
`inhibit-when-focused=no`.

The spec's check, `sleep 20; printf '\a'`: `working` at once, `done`
at the bell (and it stays `done` when the command finishes 20 s later).

## Agent detection

When a command starts, aura-term identifies the pty's foreground process
group (`tcgetpgrp`) after the next output, and on any bell or
notification — no polling. It matches `/proc/<pgid>/comm`, then
`argv[0]`/`argv[1]` of `/proc/<pgid>/cmdline` (for `node …/claude`):

- `claude`, or a path containing `claude-code` → `claude`
- `codex`, `codex.js`, or a path containing `@openai/codex` → `codex`
- `aura` → `aura`

An agent run inside ssh, tmux or a container is not detected; it counts
as an ordinary job.

## Reading it (sidebar)

Watch the directory with inotify: `IN_MOVED_TO` on `*.json` is an update
(every write is a rename), `IN_DELETE` on `*.json` is a closed window.
Ignore `*.json.tmp`. Re-read only the changed file; don't poll.

--- aura-os/docs/building-a-settings-tool.md ---
# Building a settings tool

Every everyday setting in Aura OS is the same shape: **one vertical list you
arrow through or click, state on the left, no forms and no REPLs**. This file
is how to build the next one so it matches the ones that exist.

The rule behind the rule: *a person who does not know the command line must be
able to do the thing.* Dropping someone into `bluetoothctl` is not a settings
tool, it is a shell with extra steps. That is what these replaced.

## The shape

    [ ON  ]  Bluetooth
    ──────────────
    ●  Lenovo Wireless Stereo Headset
    ○  HONOR CHOICE Headphones Pro
    ⟳  Scan for new devices
    ←  Back

A row is one of three things, and never anything else:

| Row | Means | On pick |
|---|---|---|
| `[ ON  ] X` / `[ OFF ] X` | a toggle, current state shown | flip it, stay in the list |
| `●` connected · `○` known · `·` seen | an item with state | open its actions |
| `⟳ ★ ◈ ←` + words | an action | do it |

State goes **first** so the list answers "is it on?" without being read
left-to-right. Never a second column, a tab, or a grid.

## Skeleton

```bash
#!/usr/bin/env bash
# aura-os-thing — one sentence on what a person can do here.
set -uo pipefail
. "$(dirname "$(readlink -f "$0")")/aura-os-menu"

state() { probe somectl status | grep -q yes && echo on || echo off; }

while :; do
    s="$(state)"
    pick="$( { row_toggle "$s" "Thing"
               rule
               echo "⟳  Do something"
               row_back; } | menu "thing" )"
    case "${pick:-}" in
        "") exit 0 ;;                       # cancelled — always exit
        *"Thing") toggle_it ;;
        "⟳  Do something") do_it ;;
        "←  Back"|"──────────────") exit 0 ;;
    esac
done
```

`bin/aura-os-menu` is the whole library: `menu`, `probe`, `row_toggle`,
`row_back`, `rule`, `bar`, `notify`, `have`. Source it, use it, add to it
rather than growing a second one.

## Five things that will bite you

These are not style notes. Each one cost real debugging time, and each is
invisible until you run the tool on the actual machine.

1. **`--layer overlay` is mandatory.** sway stacks tiled and fullscreen
   windows above the layer-shell `top` layer, so a menu without it opens,
   accepts keystrokes, and draws *underneath the window* — it looks like the
   tool silently did nothing. `menu` already passes it; do not call `fuzzel`
   directly.

2. **Wrap every state probe in `probe`.** `bluetoothctl` blocks forever when
   no controller is present — absent hardware, or just rfkilled — and hangs
   the tool before it draws its first row. `probe` is a 3-second `timeout`.

3. **`local` expands all its arguments before assigning any.**
   `local p="$1" n=$((p*2))` sees an *unset* `p`. Split the lines.

4. **`cut -c` counts bytes, not characters.** It slices `▁▃▆█` in half and
   prints mojibake. Index an awk array instead. Related: mawk cannot put
   multibyte characters in a bracket class, so match structure
   (`/[A-Za-z]+: *$/`) rather than box-drawing glyphs.

5. **Do not carry your own palette.** `aura-os-theme` writes
   `~/.config/fuzzel/theme.ini`, so `fuzzel` is themed system-wide already.
   A tool that passes its own colors stops following the theme the moment
   someone switches it.

## Wiring a new tool in

1. `bin/aura-os-<thing>` — `install/04-aura.sh` picks up `bin/aura-os-*` by
   glob, so nothing to edit there.
2. Add a line to the `items` list in `bin/aura-os-settings` **and** a case
   branch. Keep it to one line: the picker does `${pick%% *}`, so a wrapped
   entry breaks.
3. A key binding goes in `config/sway/config.d/15-fkeys.conf`, and must be
   added to `install/03-sway.sh`, which lists config.d files explicitly.
4. Bind the bare key *and* the `XF86` code — the same physical key sends
   different codes depending on FnLock. Add `--locked` only for things that
   must work on the lock screen (sound, brightness).

## Testing it without rebooting the laptop

`tools/aura-vm` boots the installed system from its own partition in QEMU,
in snapshot mode, so the real install cannot be touched:

```sh
tools/aura-vm --fullscreen        # snapshot; writes are thrown away
tools/vm-type 'some command'      # type into it (no guest agent needed)
tools/vm-type --key ret
```

Two things about the VM worth knowing before you trust it: keystrokes must be
paced (~35ms), or virtio-keyboard silently drops and reorders them and you
debug a command you never actually typed; and the guest resolution follows
the QEMU window size, so `--fullscreen` is how you get a real one.

Fastest way to check a list reads well, without a GUI at all — stub the
picker and look at the rows. The stub must write to **stderr** — the
caller captures stdout in a command substitution, so a stub that prints
to stdout shows you nothing and looks like a bug in the tool:

```sh
sed 's|^\. "\$(dirname.*|. bin/aura-os-menu; menu() { cat >\&2; echo ""; }|' \
    bin/aura-os-thing | bash
```

## Adding a theme

`themes/<name>/palette`, 15 `key=#rrggbb` lines — copy an existing one. That
is the whole job: `aura-os-theme apply` recolors sway, waybar, aura-term,
fuzzel, GTK and Qt from it.


=== PRODUCT: aura-droid (github.com/DusanCar-sudo/aura-droid) ===

--- aura-droid/README.md ---
# aura-droid

Aura Code as Android app

## Overview

Aura Droid is the official Android client for [Aura Code](https://github.com/DusanCar-sudo/aura-code) - a model-agnostic autonomous AI coding agent.

## Features

- 🤖 **Full Aura Integration** - Connect to your local Aura instance or remote server
- 💬 **Chat Interface** - Claude-like conversational UI with message history
- 📁 **Session Management** - Create, pin, archive, and delete chat sessions
- ⚙️ **Configurable** - Set up API keys, models, providers, and behavior settings
- ✅ **Approval Control** - Choose whether Aura asks for approval on every action or auto-approves them
- 🔓 **Sandbox-Out Mode** - Let Aura work beyond the app's sandbox when you ask for it
- 🌙 **Dark/Light Theme** - Material 3 design with automatic theme switching
- 📝 **Markdown Support** - Render markdown messages with code highlighting
- 🔧 **Multiple Modes** - Switch between Coder, Gazelle, and Architect modes

## Screenshots

| Chat Interface | Sessions | Settings | Modes |
|---|---|---|---|

## Requirements

- Android 8.0 (API 26) or higher
- Local Aura server running or remote server URL

## Installation

### From Source

```bash
git clone https://github.com/DusanCar-sudo/aura-droid.git
cd aura-droid
./gradlew assembleDebug
```

Install the APK:
```bash
adb install app/build/outputs/apk/debug/app-debug.apk
```

## Setup

1. Open the app
2. Go to Settings
3. Configure your API credentials:
   - **API Key**: Your LLM provider API key
   - **Base URL**: Your Aura server URL (default: `http://localhost:8080/`)
   - **Model**: Select your preferred model
   - **Provider**: Select your LLM provider

## Architecture

- **Kotlin** - 100% Kotlin codebase
- **Jetpack Compose** - Modern declarative UI
- **Material 3** - Latest Material Design components
- **Hilt** - Dependency injection
- **Room** - Local database for sessions and messages
- **Coroutines & Flow** - Reactive programming

## Development

### Building

```bash
# Debug build
./gradlew assembleDebug

# Release build
./gradlew assembleRelease
```

### Testing

```bash
# Unit tests
./gradlew test

# Instrumented tests
./gradlew connectedAndroidTest
```

### Code Style

This project follows Kotlin coding conventions and uses ktlint for linting.

## Roadmap

- [ ] Streaming response support
- [ ] Code viewing and diff display
- [ ] File browser for coder mode
- [ ] Voice input support
- [ ] Widget for quick access
- [ ] Notifications for long-running tasks

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Apache-2.0](LICENSE)

## Related

- [aura-code](https://github.com/DusanCar-sudo/aura-code) - CLI version
- [Aura Website](https://aurawebsite-eta.vercel.app)

---

Built with ❤️ by [Dušan Milosavljević](https://github.com/DusanCar-sudo)


=== PRODUCT: aura-mic (github.com/DusanCar-sudo/aura-mic) ===

--- aura-mic/README.md ---
# aura-mic

Speak, and the words land in whatever window you're looking at.

`aura-mic` records from your microphone, transcribes it, and types the result into the focused
window — a terminal, an editor, a browser text box. It is a single command with no daemon, no
tray icon, and no model to download: transcription runs against a hosted API, or against your own
Parakeet server if you'd rather nothing left the machine.

It was extracted from [Aura Code](https://github.com/DusanCar-sudo/aura-code), where it lived as
the `dic` command. The package is `aura-mic`; the command you type stays **`dic`**, so existing
shortcuts keep working. `aura-mic` is installed as a longer alias for the same thing.

## Install

```sh
npm install -g aura-mic
```

You also need a recorder and, for typing into other windows, an injector:

| | Linux | macOS |
|---|---|---|
| Recording | `arecord` (`alsa-utils`) | built in |
| Typing | `ydotool` + `ydotoold`, or `wtype` | built in |
| Clipboard | `wl-clipboard` (Wayland) or `xclip` (X11) | built in |

On KDE/KWin under Wayland, use `ydotool` — KWin refuses `wtype`.

## Use

```sh
dic                      # record, transcribe, type it where the cursor is
dic --no-inject          # transcribe to the clipboard only
dic loop                 # keep going: speak, it types, repeat
dic speak "hello there"  # the other direction — text to speech
dic devices              # list microphones
dic help
```

Press `Ctrl+C` to stop a recording.

### As a global hotkey

`toggle` is the mode worth binding to a key: press once to start recording, press again to
transcribe, type, and hit Enter.

```sh
dic toggle               # first press records, second sends
dic toggle --no-submit   # ... without pressing Enter for you
```

Bind it however your desktop does shortcuts — KDE: *System Settings → Shortcuts → Custom*, or with
`keyd`:

```
x = command(/usr/bin/env dic toggle)
```

A hotkey daemon usually runs as root with almost no environment, so make sure the command it runs
exports `WAYLAND_DISPLAY`, `DBUS_SESSION_BUS_ADDRESS`, `XDG_RUNTIME_DIR` and `YDOTOOL_SOCKET` for
your user, or the typing step will silently do nothing.

## Keys

Set whichever provider you want in the environment. Speech-to-text is tried in this order, and the
first one configured wins:

| Variable | Provider | Notes |
|---|---|---|
| `PARAKEET_BASE_URL` | Self-hosted NVIDIA Parakeet | No key. Nothing leaves your machine. |
| `XIAOMI_API_KEY` | MiMo ASR | Also the only provider for text-to-speech. |
| `OPENAI_API_KEY` | OpenAI Whisper | |
| `GROQ_API_KEY` | Groq Whisper | Fastest of the hosted options. |

Text-to-speech (`aura-mic speak`) needs `XIAOMI_API_KEY` specifically.

Put them in your shell profile, or somewhere a hotkey daemon can read — a file sourced by the
wrapper script works well. Don't commit them.

## Where it keeps things

Saved recordings go to `~/.aura/recordings`, shared with Aura Code if you have it. Set
`AURA_MIC_HOME` to keep them somewhere of their own.

## Library use

The transcription and speech functions are exported, so you can use them without the CLI:

```ts
import { transcribeFile, speakText, synthesizeSpeech } from 'aura-mic';

const text = await transcribeFile('/path/to/audio.wav');
await speakText('done');
```

## License

MIT


=== PRODUCT: powerboard (github.com/DusanCar-sudo/powerboard) ===

--- powerboard/README.md ---
# Powerboard

**C++20 terminal GPU power monitor with full system telemetry — btop++ style.**

Real-time hardware monitor for Linux. Samples GPU power consumption, CPU load & temp, RAM usage, disk usage, and system uptime every 100 ms, renders everything at smooth 60 FPS in your terminal.

Built by Dušan Milosavljević (Lean Progress IQ). The terminal counterpart to Aura Pulse — same telemetry, different rendering pipeline.


## Why

Aura Pulse gives you a windowed dashboard. Powerboard gives you the same data in your terminal — perfect for SSH sessions, servers, and headless boxes where no GUI exists.

## Features

- **GPU power tracking** — reads NVIDIA/AMD power sensors via sysfs, integrates cumulative kWh and cost
- **CPU monitoring** — load %, temperature (coretemp/k10temp/zenpower)
- **GPU monitoring** — load %, temperature, power draw
- **RAM tracking** — used / total GB with live sparkline
- **Disk usage** — used / total GB for root (`/`) with live sparkline
- **Uptime counter** — days, hours, minutes, seconds
- **Braille power graph** — overlapping traces for W, kWh, and cost over the last 5 minutes
- **CSV logging** — auto-rotating monthly files for historical analysis
- **Vim-like command bar** — `:q`, `:help`, `:graph`
- **Interactive Live GPU Power & Cost Calculator (Tab 4 / [F4])** — interactive real-time data center & home inference calculator (NVIDIA A100, H100, H200, B200, RTX 4090, dynamic GPU counts, % load, PUE overhead, $/kWh electricity tariffs, and one-key hardware presets)
- **Clipboard Vault & AI Copilot** — SQLite clipboard manager, multi-provider smart copilot (Ollama, LM Studio, OpenAI, Gemini, DeepSeek), token accounting, and recipe actions
- **System Optimizer & Hardware Benchmarks** — bare-metal memory bandwidth, bitwise MOPS, disk I/O, and kernel/power-profiles-daemon tuning
- **60 FPS FTXUI rendering** — smooth, no flicker, low CPU
- **SQLite telemetry store** — for trend analysis

## Quick Start

### Requirements

- Linux
- CMake ≥ 3.22
- C++20 compiler (GCC 10+ or Clang 12+)
- [vcpkg](https://vcpkg.io) for dependencies
- ftxui (installed via vcpkg)
- SQLite3

### Build

```bash
cmake -B build -S . -DCMAKE_TOOLCHAIN_FILE=/path/to/vcpkg.cmake
cmake --build build -j$(nproc)

# Run
./build/powerboard
```

## Screenshots

### Main Dashboard - Diagnostics
*Real-time telemetry with CPU frequency, temperature, load metrics, and system information*

### Benchmarking & Testing
*Hardware benchmark results and comprehensive system testing interface*

### Vault & Clipboard Manager
*Smart clipboard manager with AI integration and co-pilot answers*

### Full System Overview
*Complete system monitoring dashboard with all metrics at a glance*

## Live GPU Power & Cost Calculator (Tab 4 / [F4])

Interactive real-time data-center & home inference calculator. Tune GPU counts, % load, PUE overhead, and electricity tariffs, apply one-key hardware presets, and copy a cost breakdown.

### Key interaction fixes

- **Arrow-key focus isolation** — `[← / →]` no longer hijack global pane navigation. `[Tab]` / `[Shift+Tab]` exclusively switch panes (Clipboard Vault ↔ Live Calculator ↔ AI Copilot); `[← / →]` and `[+ / -]` tune the active field without losing focus.
- **Direct typing & smart overwrite** — select a field with `[↑ / ↓]` and type digits (`0-9`, `.`) to overwrite its value cleanly; `[Backspace]` deletes; `[Enter]` confirms and advances to the next parameter.
- **High-visibility cursor** — the active text box glows with a cyan/gold border, an active cursor prefix (`▌`), and a blinking text cursor (`_`).

### Cheat sheet

| Action | Key / Input |
|--------|-------------|
| Switch focus pane | `[Tab]` (Vault → Calculator → AI Copilot) |
| Select parameter | `[↑ / ↓]` |
| Direct type value | digits `0-9` or `.` |
| Step value up / down | `[← / →]` or `[+] / [-]` |
| Advance to next input | `[Enter]` |
| Apply hardware preset | `[1]` 20K A100 · `[2]` Home 2×4090 · `[3]` 8× H100 · `[4]` 1K H100 |
| Save & copy breakdown | `[c]` or `[Enter]` on the Save button |

## Architecture

- `src/main.cpp` — entry point, render loop
- `src/ai.h` — AI inference hooks
- `src/benchmarks.h` — hardware benchmark routines
- `src/clipboard.h` — clipboard integration
- `src/datalogger.h` — CSV logger + SQLite writer
- `src/scanner.h` — sysfs / hwmon scanner
- `src/types.h` — common data types
- `src/utils.h` — helpers
- `policy.yaml` — runtime configuration
- `C++rules.txt` — coding style guide

## Tech Stack

- C++20
- FTXUI (terminal UI framework)
- SQLite 3 (telemetry persistence)
- vcpkg (dependency management)
- CMake (build system)

## License

MIT — see [LICENSE](LICENSE).

## Author

Built by **Dušan Milosavljević** — see [OWNERSHIP.md](OWNERSHIP.md).


=== PRODUCT: aura-pulse (github.com/DusanCar-sudo/aura-pulse) ===

--- aura-pulse/README.md ---
# Aura Pulse

**System telemetry, AI clipboard vault & hardware benchmarks in a Tron-grade cockpit.**

Native desktop app — Tauri 2 + Rust core, web frontend. System health, clipboard intelligence, hardware benchmarks, and file vault, all in a single locally-installed binary.

Built by Dušan Milosavljević (Lean Progress IQ). Aura Pulse is the "lighter" companion to Aura Code: where Aura Code is the agent, Aura Pulse is the cockpit you run it from.


## Why

Most system tools show you numbers. Aura Pulse shows you a *picture* of how your machine is doing — what's hot, what's slow, what's eating memory, what's leaking, and what you can do about it. Plus:

- **AI clipboard vault** — captures and tags everything you copy, searchable later
- **Hardware benchmarks** — actual CPU/GPU/disk numbers, not estimates
- **File vault with audio AI** — ingest files, transcribe audio, search across everything
- **Optimization engine** — power profiles, CPU boost, cache dropping
- **Runs locally** — no telemetry leaves your machine

## Quick Start

```bash
# Install dependencies
npm install

# Development
npm run tauri:dev

# Production build
npm run tauri:build
```

Pre-built installers (Linux `.AppImage` / `.deb`, macOS `.dmg`, Windows NSIS `.exe` + MSI) ship on each [GitHub Release](https://github.com/DusanCar-sudo/aura-pulse/releases).

## Features

- **System telemetry dashboard** — CPU, GPU, memory, disk, network, temperatures, fans
- **Tron-grade cockpit UI** — high-contrast dark theme, gauges, sparklines
- **AI clipboard vault** — captures everything you copy, searchable, tags auto-applied
- **Hardware benchmarks** — CPU (single/multi), GPU compute, disk read/write, memory bandwidth
- **File vault with audio AI** — ingest text files and audio, transcribe, full-text search
- **Optimization engine** — power profiles, CPU boost, cache dropping, sysctl tweaks
- **100% local** — no network calls for telemetry, your data never leaves the machine
- **Cross-platform** — Linux, macOS (Apple Silicon), Windows installers
- **Self-test mode** — `selftest.ts` validates all subsystems on startup
- **CI-built releases** — parallel builds for all platforms, attached to one release

## Commands

```bash
npm install              # install dependencies
npm run tauri:dev        # development mode
npm run tauri:build      # production build
npm run build            # frontend only
npm run preview          # preview frontend
```

## Architecture

- `src-tauri/` — Rust backend (system probes, clipboard, file vault, benchmarks)
- `src/` — frontend (TypeScript + Vite, cockpit-style views)
- `src/views/` — dashboard modules
- `src/styles/` — Tron-grade theme
- `bin/` — build scripts
- `docs/` — design notes

## Tech Stack

- Tauri 2 (Rust + WebView)
- Rust (backend): `sysinfo`, `sysctl`, native probes
- TypeScript + Vite (frontend)
- Local SQLite for vault storage

## License

MIT — see [LICENSE](LICENSE).

## Author

Built by **Dušan Milosavljević** — see [OWNERSHIP.md](OWNERSHIP.md).

--- aura-pulse/docs/ROADMAP.md ---
# Project "Aura Pulse" (System & Clipboard Manager) - Development Roadmap

> **Note:** This is the original historical build brief, not a live task
> list — it does not reflect current status. See [CHANGELOG.md](../CHANGELOG.md)
> for what has actually shipped.

This document outlines the required features, enhancements, and architectural requirements for the "Aura Pulse" application. The project is an existing application that requires significant **additions** and **fixes** to reach its full potential as an integrated system monitor, AI-enhanced clipboard manager, and terminal workspace.

---

## 1. Core Architecture & Stack Recommendation
To handle the requirements (system-level access, high-performance UI, fluid graphics, and cross-platform compatibility), the **Developer Agent is requested to select the most appropriate language/framework stack**, balancing performance for hardware monitoring and ease of development for the UI.

* **Constraint:** **Electron is explicitly discarded.** Please propose alternative cross-platform frameworks (e.g., Tauri, Wails) that support native system-level access and high-performance UI rendering.
* **Performance Logic:** Use high-performance backends (e.g., Rust or Go) for hardware sensors, telemetry data fetching (CPU/GPU/Watts), and AI processing to ensure the UI remains fluid.

---

## 2. Feature Additions

### A. AI-Enhanced Clipboard Manager ("The Vault")
* **Clipboard Listener:** Maintain a history of up to 5,000 clips.
* **AI Processing:**
    * **OCR:** Extract text from image clips.
    * **Vision/Analysis:** Describe images (colors, shapes, environment).
    * **Generation:** Convert images into design files (JSON/configuration) or markdown.
* **Multi-Modal Input:** Tabs for Text, Audio (transcription/description), and Image.
* **Activity Log:** Global search functionality across the 5,000-clip history.
* **Persistence:** Local database with a "Wipe All" function.

### B. System Telemetry & Monitor ("Diagnostics")
* **Fluid Visualization:** High-frequency polling (0.1s intervals).
* **Metrics Tracking:**
    * **Hardware:** CPU/GPU/VRAM load, temperature, disk usage, swap space.
    * **Power:** Real-time wattage consumption (Shader usage).
    * **Cyberpunk Graphs:** Custom animated charts/pies (high fluidity).
* **Optimizations:**
    * System optimization toggles.
    * Power profiles: Performance, Balanced, Power Saver.
    * Hardware Benchmarking Suite (specifically for LLM/AI performance estimation).

### C. UI/UX: The "Tron/Cyberpunk" Aesthetic
* **Layout:** Retractable left sidebar containing settings and the "Global Sphere."
* **The Global Sphere:** An interactive, spinning sphere of nodes/dots, connected by lines to "pinging" satellites; color schemes must reflect a "breathing" effect.
* **Dashboard Tabs:** Top-level navigation: `Diagnostics`, `Benchmarks`, `Optimization`, `The Vault`.

### D. AI Configuration Hub
* **Provider Support:** OpenAI, Anthropic, Gemini, DeepSeek, Xiaomi, Mimo, and Local (Ollama/LM Studio).
* **Custom Local Endpoints:** Ability to set Base URL, Model Name, and Port mapping for local inferencing.

---

## 3. Necessary Fixes & Refinements

* **Performance:** Ensure high-frequency telemetry polling (0.1s) does not impact main-thread UI performance.
* **Stability:** Ensure local database integrity during massive backups.
* **Integration:** Resolve discrepancies between API provider settings and actual calls.

---

## 4. Development Agent Instructions
* **Focus:** Treat this as a refactoring and feature-expansion project.
* **Priority:** Select a high-performance framework (Non-Electron) that offers tight integration with OS-level hardware sensors.
* **Naming:** Maintain the "Tron/Cyberpunk" visual style across all components.

--- aura-pulse/docs/WINDOWS.md ---
# Building Aura Pulse for Windows 11

The codebase is cross-platform as of 0.3.0: the Rust backend compiles for
Windows with a `sysinfo`-based telemetry sampler, and the frontend hides the
Linux-only Optimization tab at runtime (`app_os` command).

## What works on Windows

| Feature | Status |
|---|---|
| The Vault (clipboard history, drag-drop, click-to-browse) | ✅ full — arboard supports Windows |
| AI Core hub (all providers) | ✅ full |
| AI enrichment (summarize / OCR / describe / markdown / design) | ✅ full |
| Audio transcription | ✅ Gemini path; whisper.cpp is found in `%USERPROFILE%\whisper.cpp` if built |
| Benchmarks (CPU / memory / disk / LLM estimate + Ollama & LM Studio probes) | ✅ full |
| Diagnostics | ⚠️ CPU %, per-core, memory, swap, disks, network, top processes, uptime work. CPU watts (RAPL), GPU sysfs telemetry and battery watts are Linux-only and read as 0 |
| Optimization tab (power profiles, boost, swappiness, AI modules) | ❌ hidden on Windows — pkexec / sysfs / power-profiles-daemon have no Windows counterpart yet |

## Option A — build on a Windows machine (recommended)

Prereqs (one-time):
1. Install [Node.js ≥ 18](https://nodejs.org), [Rust](https://rustup.rs) (stable-msvc, the default), and
   [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
   with the "Desktop development with C++" workload.
2. WebView2 runtime ships with Windows 11 — nothing to install.

Build:

```powershell
git clone <repo> aura-pulse && cd aura-pulse
npm ci
npm run tauri build
```

Installers land in:
- `src-tauri\target\release\bundle\nsis\Aura Pulse_<ver>_x64-setup.exe`  ← the one to distribute
- `src-tauri\target\release\bundle\msi\Aura Pulse_<ver>_x64_en-US.msi`

Both register Start-menu entries and an uninstaller.

## Option B — GitHub Actions (no Windows machine needed)

`.github/workflows/windows-build.yml` builds the NSIS `.exe` and `.msi` on a
real Windows runner:

- push a tag like `v0.3.0` → installers attach to the GitHub release, or
- run the workflow manually (workflow_dispatch) → download from the run's artifacts.

Setup: push this repo to GitHub, then `git tag v0.3.0 && git push --tags`.

## Option C — cross-compile from Linux (experimental)

Only the NSIS bundler works cross-platform, via the MSVC target and
`cargo-xwin` (downloads the Windows SDK headers):

```bash
rustup target add x86_64-pc-windows-msvc
cargo install cargo-xwin
sudo apt install nsis lld
npm run tauri build -- --runner cargo-xwin --target x86_64-pc-windows-msvc --bundles nsis
```

Known caveats: rusqlite's bundled SQLite and the `ring` crypto crate usually
build under xwin, but toolchain drift breaks this path regularly, and the
result can't be smoke-tested here. Prefer A or B for anything you distribute.

## Code signing (later)

The installers are unsigned; Windows SmartScreen will warn on first run
("More info → Run anyway"). For public distribution get a code-signing
certificate (EV for instant reputation) and configure
`tauri.conf.json > bundle > windows > certificateThumbprint`.


=== PRODUCT: aura-pulse-website (github.com/DusanCar-sudo/aura-pulse-website) ===

--- aura-pulse-website/README.md ---
# Aura Pulse Website

**Marketing site for Aura Pulse — the Tron-grade system telemetry desktop app.**

A static single-page site (HTML + inline React) built on the Aura design system. Showcases Aura Pulse's features: system telemetry, AI clipboard vault, hardware benchmarks, and the optimization engine.

Built by Dušan Milosavljević (Lean Progress IQ). Companion to the [aura-pulse](https://github.com/DusanCar-sudo/aura-pulse) desktop app.


## Quick Start

This is a static site — open `index.html` directly, or serve with any HTTP server:

```bash
# Python
python3 -m http.server 8000

# Or Node
npx serve .

# Or simply
xdg-open index.html
```

## Files

- `index.html` — single-page marketing site (inline React via CDN + Babel)
- `tweaks-panel.jsx` — React component source for the tweaks panel
- `assets/` — hero image, feature screenshots (diagnostics, optimization, vault)
- `_ds/` — Aura Design System bundle (tokens, fonts, components)

## Features

- **Single-page design** — everything in `index.html`, no build step required
- **React 18 via CDN** — uses `@babel/standalone` for in-browser JSX transform
- **Aura Design System** — consistent tokens (colors, typography, spacing)
- **Hero image + feature shots** — `aura-hero.jpg`, `shot-diagnostics.png`, `shot-optimization.png`, `shot-vault.png`
- **Screenshot showcase** — diagnostics, optimization engine, and AI vault UI

## License

MIT — see [LICENSE](LICENSE).

## Author

Built by **Dušan Milosavljević** — see [OWNERSHIP.md](OWNERSHIP.md).
