/*
 * memory.js — Aura's shared memory on Puter KV (docs/SHARED-MEMORY.md).
 *
 * cloud memories sync through puter.kv under aura:v1:; local ones stay in
 * this browser (localStorage) and are never uploaded. The deny filter
 * turns a would-be cloud write into a local one when the text looks like a
 * secret, a private address, a home path, or mentions Imprint.
 */
(function (global) {
  "use strict";

  var NS = "aura:v1:";
  var LOCAL = "aura-mem-v1";          // localStorage: every memory we know, cloud + local
  var QUEUE = "aura-mem-queue-v1";    // localStorage: ids waiting to upload
  var TOMBSTONE_DAYS = 30;
  var MAX_TEXT = 500;
  var PROMPT_BUDGET = 40;

  var DENY = [
    /\bsk-[A-Za-z0-9_-]{12,}/,                        // API keys
    /\b(?:ghp|gho|github_pat|xox[abp])_[A-Za-z0-9_]{10,}/,
    /\b[A-Fa-f0-9]{32,}\b/,                            // long hex
    /\b[A-Za-z0-9+/]{40,}={0,2}(?![A-Za-z0-9+/])/,     // long base64
    /\b(?:password|passphrase|passwd|lozinka|šifra)\b/i,
    /\b100\.(?:6[4-9]|[7-9]\d|1[01]\d|12[0-7])\.\d{1,3}\.\d{1,3}\b/, // Tailscale
    /\b(?:10|127)\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/,
    /\b192\.168\.\d{1,3}\.\d{1,3}\b/,
    /\b172\.(?:1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3}\b/,
    /(?:^|\s)(?:\/home\/|\/Users\/|~\/|[A-Z]:\\Users\\)/,
    /\bimprint\b/i,
  ];

  function denied(text) {
    for (var i = 0; i < DENY.length; i++) if (DENY[i].test(text)) return DENY[i].source;
    return null;
  }

  // ULID: 48-bit time + 80 random bits, Crockford base32. Sortable, offline-safe.
  var B32 = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
  function ulid(now) {
    var t = now || Date.now(), s = "";
    for (var i = 0; i < 10; i++) { s = B32[t % 32] + s; t = Math.floor(t / 32); }
    var r = new Uint8Array(16);
    crypto.getRandomValues(r);
    for (var j = 0; j < 16; j++) s += B32[r[j] % 32];
    return s;
  }

  function load(key, dflt) {
    try { return JSON.parse(localStorage.getItem(key)) || dflt; } catch (e) { return dflt; }
  }
  function save(key, v) {
    try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) { /* private mode: memory lives this tab only */ }
  }

  var mems = load(LOCAL, {});       // id -> memory
  var queue = load(QUEUE, []);      // ids to upload
  var log = [];                     // refused cloud writes, for the UI

  function persist() { save(LOCAL, mems); save(QUEUE, queue); }

  function kv() { return global.puter && global.puter.kv; }
  function signedIn() {
    try { return !!(global.puter && global.puter.auth && global.puter.auth.isSignedIn()); } catch (e) { return false; }
  }

  function enqueue(m) {
    if (m.scope !== "cloud") return;
    if (queue.indexOf(m.id) < 0) queue.push(m.id);
  }

  /** Remember one fact. Returns the memory (scope may be downgraded to local). */
  function remember(text, tag, scope, source) {
    text = String(text || "").trim().slice(0, MAX_TEXT);
    if (!text) return null;
    var now = Date.now();
    var m = {
      id: ulid(now), text: text, tag: tag || "note", scope: scope === "local" ? "local" : "cloud",
      createdAt: now, updatedAt: now, lastUsedAt: now, useCount: 0,
      source: source || "web", deleted: false,
    };
    var why = m.scope === "cloud" && denied(text);
    if (why) { m.scope = "local"; log.push({ id: m.id, text: text, why: why, at: now }); }
    mems[m.id] = m;
    enqueue(m);
    persist();
    flush();
    return m;
  }

  function forget(id) {
    var m = mems[id];
    if (!m || m.deleted) return;
    m.deleted = true;
    m.updatedAt = Date.now();
    if (m.scope === "local") delete mems[id]; else enqueue(m);
    persist();
    flush();
  }

  /** Upload queued cloud writes. Safe to call often; no-ops offline or signed out. */
  var flushing = null;
  function flush() {
    if (flushing || !queue.length || !kv() || !signedIn()) return flushing || Promise.resolve();
    flushing = (async function () {
      while (queue.length) {
        var id = queue[0], m = mems[id];
        if (m && m.scope === "cloud") await kv().set(NS + "mem:" + id, JSON.stringify(m));
        queue.shift();
        persist();
      }
    })().catch(function () { /* offline: keep the queue */ }).finally(function () { flushing = null; });
    return flushing;
  }

  /** Pull cloud memories; last write wins by updatedAt. */
  async function sync() {
    if (!kv() || !signedIn()) return;
    await flush();
    var rows = await kv().list(NS + "mem:*", true);
    var cutoff = Date.now() - TOMBSTONE_DAYS * 864e5;
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i], m;
      try { m = typeof r.value === "string" ? JSON.parse(r.value) : r.value; } catch (e) { continue; }
      if (!m || !m.id) continue;
      if (m.deleted && m.updatedAt < cutoff) { kv().del(r.key).catch(function () {}); delete mems[m.id]; continue; }
      var mine = mems[m.id];
      if (!mine || m.updatedAt > mine.updatedAt) {
        // keep our local usage counters; they are not part of the conflict
        if (mine) { m.lastUsedAt = Math.max(m.lastUsedAt, mine.lastUsedAt); m.useCount = Math.max(m.useCount, mine.useCount); }
        mems[m.id] = m;
      }
    }
    persist();
    await kv().set(NS + "device:web", JSON.stringify({ lastSeen: Date.now(), client: "aura-web 1" }));
    if (!(await kv().get(NS + "meta"))) await kv().set(NS + "meta", JSON.stringify({ schema: 1 }));
  }

  /** The memories that go into the prompt, most used first. Marks them used (locally). */
  function forPrompt() {
    var list = Object.keys(mems).map(function (k) { return mems[k]; })
      .filter(function (m) { return !m.deleted; })
      .sort(function (a, b) { return (b.lastUsedAt - a.lastUsedAt) || (b.useCount - a.useCount); })
      .slice(0, PROMPT_BUDGET);
    var now = Date.now();
    list.forEach(function (m) { m.lastUsedAt = now; m.useCount++; });
    persist();
    return list;
  }

  function all() {
    return Object.keys(mems).map(function (k) { return mems[k]; })
      .filter(function (m) { return !m.deleted; })
      .sort(function (a, b) { return b.createdAt - a.createdAt; });
  }

  /** Conversation summary (cloud, per decision 1). */
  async function saveThread(id, title, summary) {
    if (!kv() || !signedIn()) return;
    var text = String(summary).slice(0, 2000);
    if (denied(text)) return;   // a summary with secrets in it stays on this device
    await kv().set(NS + "thread:" + id, JSON.stringify({ id: id, title: title, summary: text, updatedAt: Date.now(), source: "web" }));
  }

  async function threads() {
    if (!kv() || !signedIn()) return [];
    var rows = await kv().list(NS + "thread:*", true);
    return rows.map(function (r) { try { return typeof r.value === "string" ? JSON.parse(r.value) : r.value; } catch (e) { return null; } })
      .filter(Boolean).sort(function (a, b) { return b.updatedAt - a.updatedAt; });
  }

  global.AuraMemory = {
    remember: remember, forget: forget, sync: sync, flush: flush, forPrompt: forPrompt,
    all: all, saveThread: saveThread, threads: threads, ulid: ulid, denied: denied,
    refused: function () { return log.slice(); },
  };
})(window);
