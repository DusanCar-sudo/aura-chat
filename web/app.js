/*
 * app.js — Aura on Puter's desktop: chat + shared memory (docs/SHARED-MEMORY.md).
 *
 * Aura remembers by writing tags into her answer, which we strip and store:
 *   <remember tag="preference">Dusan wants answers in Serbian</remember>
 *   <remember tag="project" scope="local">…something private…</remember>
 *   <forget id="01J…"/>
 */
(function () {
  "use strict";
  var MODEL = "deepseek/deepseek-v4-flash";
  var M = window.AuraMemory;
  var $ = function (id) { return document.getElementById(id); };
  var log = $("log"), q = $("q"), send = $("send");

  var thread = { id: M.ulid(), title: "", turns: [] };   // turns stay in memory (transcripts are local-only)
  var sinceSummary = 0;

  function persona() {
    var mems = M.forPrompt().map(function (m) {
      return "- [" + m.id + "] (" + m.tag + (m.scope === "local" ? ", local" : "") + ") " + m.text;
    }).join("\n");
    return "You are Aura, a personal AI who is the same across the user's devices (web, phone, Telegram). " +
      "You are warm, direct and brief; you answer in the user's language.\n\n" +
      "You have a long-term memory. What you remember:\n" + (mems || "(nothing yet)") + "\n\n" +
      "To remember something new that will matter later (a preference, a person, a project, a todo), " +
      "add at the end of your answer: <remember tag=\"preference\">one fact, in your words</remember>. " +
      "Add scope=\"local\" when it is private (paths, keys, anything the user calls secret); local memories " +
      "never leave this device. To drop an outdated memory: <forget id=\"ID\"/>. Remember sparingly: " +
      "one fact per tag, never the whole conversation, never secrets in a cloud memory.";
  }

  // ── rendering ──────────────────────────────────────────────────────────
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }
  function md(t) {
    return String(t).split(/```[\w-]*\n?/).map(function (p, i) {
      return i % 2 ? "<pre><code>" + esc(p.replace(/\n$/, "")) + "</code></pre>"
                   : esc(p).replace(/`([^`\n]+)`/g, "<code>$1</code>");
    }).join("");
  }
  function add(cls, t) {
    var d = document.createElement("div");
    d.className = "m " + cls;
    d.innerHTML = md(t);
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
    return d;
  }
  function visible(t) {   // hide memory tags, also half-streamed ones
    return t.replace(/<remember\b[^>]*>[\s\S]*?(<\/remember>|$)/g, "")
            .replace(/<forget\b[^>]*\/?>/g, "").replace(/\s+$/, "");
  }

  // ── memory tags in Aura's answer ───────────────────────────────────────
  function applyTags(t) {
    var notes = [];
    t.replace(/<remember\b([^>]*)>([\s\S]*?)<\/remember>/g, function (_, attrs, body) {
      var tag = (attrs.match(/tag="([^"]*)"/) || [])[1];
      var scope = (attrs.match(/scope="([^"]*)"/) || [])[1];
      var m = M.remember(body, tag, scope, "web");
      if (m) notes.push((m.scope === "local" ? "remembered on this device: " : "remembered: ") + m.text);
    });
    t.replace(/<forget\s+id="([^"]+)"\s*\/?>/g, function (_, id) { M.forget(id); notes.push("forgot " + id); });
    if (notes.length) { add("sys", notes.join("\n")); drawSide(); }
  }

  // ── chat ───────────────────────────────────────────────────────────────
  $("f").onsubmit = async function (e) {
    e.preventDefault();
    var text = q.value.trim();
    if (!text || send.disabled) return;
    q.value = "";
    add("u", text);
    thread.turns.push({ role: "user", content: text });
    if (!thread.title) thread.title = text.slice(0, 60);
    var bubble = add("a", "…"), out = "";
    send.disabled = true;
    try {
      var msgs = [{ role: "system", content: persona() }].concat(thread.turns.slice(-16));
      var stream = await puter.ai.chat(msgs, { model: MODEL, stream: true });
      for await (var part of stream) {
        if (part && part.text) { out += part.text; bubble.innerHTML = md(visible(out)); log.scrollTop = log.scrollHeight; }
      }
      if (!out) throw new Error("empty answer");
      thread.turns.push({ role: "assistant", content: out });
      applyTags(out);
      if (++sinceSummary >= 3) summarize();
    } catch (err) {
      thread.turns.pop();
      bubble.innerHTML = md("Aura couldn't answer: " + ((err && (err.message || (err.error && err.error.message))) || err));
    } finally {
      send.disabled = false;
      q.focus();
    }
  };
  q.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("f").requestSubmit(); }
  });

  // A short summary of this chat goes to the cloud (decision 1); the transcript does not.
  async function summarize() {
    if (thread.turns.length < 2) return;
    sinceSummary = 0;
    try {
      var convo = thread.turns.slice(-20).map(function (t) { return t.role + ": " + visible(t.content); }).join("\n");
      var r = await puter.ai.chat([
        { role: "system", content: "Summarize this conversation in 2-4 sentences for your own future reference: what was discussed, what was decided, what is still open. No secrets, keys, passwords or file paths." },
        { role: "user", content: convo }], { model: MODEL });
      var s = (r && r.message && r.message.content) || String(r || "");
      if (s) { await M.saveThread(thread.id, thread.title, s); drawThreads(); }
    } catch (e) { /* next time */ }
  }

  $("new").onclick = async function () {
    await summarize();
    thread = { id: M.ulid(), title: "", turns: [] };
    log.innerHTML = "";
    greet();
  };

  // ── side panel ─────────────────────────────────────────────────────────
  function drawSide() {
    var mems = M.all();
    $("nmem").textContent = mems.length;
    $("mems").innerHTML = mems.map(function (m) {
      return '<div class="item"><span class="x" data-id="' + m.id + '" title="Forget">[x]</span>' +
        '<div class="t">' + esc(m.text) + '</div><div class="s"><span class="tag">' + esc(m.tag) + '</span> · ' +
        (m.scope === "local" ? '<span class="local">this device only</span>' : "synced") + ' · ' + esc(m.source) + '</div></div>';
    }).join("") || '<div class="item s">Aura remembers things here as you talk.</div>';
  }
  $("mems").onclick = function (e) {
    var id = e.target.dataset && e.target.dataset.id;
    if (id) { M.forget(id); drawSide(); }
  };
  async function drawThreads() {
    var ts = await M.threads();
    $("nthreads").textContent = ts.length;
    $("threads").innerHTML = ts.map(function (t) {
      return '<div class="item" title="' + esc(t.summary) + '"><div class="t">' + esc(t.title || "untitled") + '</div>' +
        '<div class="s">' + esc(t.source) + " · " + new Date(t.updatedAt).toLocaleString() + '</div></div>';
    }).join("") || '<div class="item s">Summaries of past chats, from every device.</div>';
  }
  $("menu").onclick = function () { $("side").classList.toggle("open"); };

  // ── start ──────────────────────────────────────────────────────────────
  function greet() { add("sys", "New chat. Aura knows " + M.all().length + " things about you."); }

  async function start() {
    var user = await puter.auth.getUser();
    $("who").textContent = user.username;
    $("gate").classList.remove("show");
    $("sync").textContent = "syncing…";
    try { await M.sync(); $("sync").textContent = "synced"; }
    catch (e) { $("sync").textContent = "offline"; }
    drawSide();
    drawThreads();
    greet();
    q.focus();
  }

  $("signin").onclick = async function () {
    try { await puter.auth.signIn(); await start(); }
    catch (e) { $("gate").querySelector("p").textContent = "Sign-in didn't finish (" + (e && e.message || e) + "). Allow pop-ups and try again."; }
  };
  window.addEventListener("focus", function () { if (puter.auth.isSignedIn()) M.sync().then(drawSide, function () {}); });
  window.addEventListener("beforeunload", function () { M.flush(); });

  drawSide();
  if (puter.auth.isSignedIn()) start(); else $("gate").classList.add("show");
})();
