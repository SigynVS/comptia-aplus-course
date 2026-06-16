// Shared exam engine. Reads window.EXAM_BANK (array of {d,q,o,a,e}).
// Optional window.EXAM_CONFIG = { missedKey, bestKey } to namespace storage per
// certification (defaults to the A+ keys for backward compatibility).
(function () {
  'use strict';
  var CFG = window.EXAM_CONFIG || {};
  var MISSED_KEY = CFG.missedKey || 'aplus-missed';
  var BEST_KEY = CFG.bestKey || 'aplus-best';

  var BANK = (window.EXAM_BANK || []).map(function (item, idx) {
    return { id: idx, d: item.d, q: item.q, o: item.o, a: item.a, e: item.e };
  });
  var PASS = 75; // percent
  var exam = [];
  var timerId = null;
  var remaining = 0;
  var currentScope = 'Full exam';

  function loadMissed() {
    try { return JSON.parse(localStorage.getItem(MISSED_KEY)) || []; }
    catch (e) { return []; }
  }
  function saveMissed(ids) {
    try { localStorage.setItem(MISSED_KEY, JSON.stringify(ids)); } catch (e) {}
  }
  function updateMissedBtn() {
    var n = loadMissed().length;
    var b = document.getElementById('missed-btn');
    b.textContent = 'Review missed (' + n + ')';
    b.disabled = n === 0;
    b.style.opacity = n === 0 ? '0.5' : '1';
  }

  function loadBest() {
    try { return JSON.parse(localStorage.getItem(BEST_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveBest(obj) {
    try { localStorage.setItem(BEST_KEY, JSON.stringify(obj)); } catch (e) {}
  }
  function recordBest(scope, pct) {
    var b = loadBest();
    var improved = !(scope in b) || pct > b[scope];
    if (improved) { b[scope] = pct; saveBest(b); }
    return improved;
  }
  function renderBestSummary() {
    var b = loadBest();
    var keys = Object.keys(b);
    var el = document.getElementById('best-summary');
    if (!el) return;
    if (!keys.length) { el.innerHTML = ''; return; }
    var rows = keys.sort().map(function (k) {
      return '<div>' + k + ': <strong>' + b[k] + '%</strong></div>';
    }).join('');
    el.innerHTML = '<p style="margin:0.75rem 0 0.25rem"><strong>Your best scores:</strong></p>' + rows;
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // nav toggle
  var t = document.querySelector('.nav-toggle');
  var m = document.getElementById('nav-menu');
  if (t && m) t.addEventListener('click', function () {
    var o = m.classList.toggle('open'); t.setAttribute('aria-expanded', String(o));
  });

  // theme (shared key with the rest of the site)
  var THEME_KEY = 'aplus-theme';
  var theme = 'light';
  try { theme = localStorage.getItem(THEME_KEY) || 'light'; } catch (e) {}
  function applyTheme(th) {
    if (th === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
  }
  applyTheme(theme);
  var nav = document.querySelector('.nav');
  if (nav) {
    var tb = document.createElement('button');
    tb.type = 'button';
    tb.className = 'theme-toggle';
    tb.setAttribute('aria-label', 'Toggle dark mode');
    function lbl() { tb.textContent = (theme === 'dark' ? '☀ Light' : '🌙 Dark'); }
    lbl();
    tb.addEventListener('click', function () {
      theme = (theme === 'dark') ? 'light' : 'dark';
      applyTheme(theme);
      try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
      lbl();
    });
    nav.insertBefore(tb, t || null);
  }

  // populate domain dropdown with counts
  var domains = {};
  BANK.forEach(function (q) { domains[q.d] = (domains[q.d] || 0) + 1; });
  var domainCount = Object.keys(domains).length;
  document.getElementById('bank-size').textContent =
    'Question bank: ' + BANK.length + ' questions across ' + domainCount + ' domains.';

  var sel = document.getElementById('domain-select');
  Object.keys(domains).sort().forEach(function (d) {
    var opt = document.createElement('option');
    opt.value = d;
    opt.textContent = d + ' (' + domains[d] + ')';
    sel.appendChild(opt);
  });

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function buildExam(source, len) {
    var pool = shuffle(source);
    if (len > 0) pool = pool.slice(0, len);
    return pool.map(function (item) {
      var idx = item.o.map(function (_, i) { return i; });
      var order = shuffle(idx);
      var options = order.map(function (i) { return item.o[i]; });
      var answer = order.indexOf(item.a);
      return { id: item.id, d: item.d, q: item.q, o: options, a: answer, e: item.e, picked: null };
    });
  }

  function startExam(source, len, timed, scope) {
    if (!source.length) { alert('No questions available for this selection.'); return; }
    currentScope = scope || 'Full exam';
    exam = buildExam(source, len);
    document.getElementById('setup').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    document.getElementById('exam').style.display = 'block';
    renderQuestions();
    updateProgress();

    if (timerId) { clearInterval(timerId); timerId = null; }
    var timerEl = document.getElementById('timer');
    if (timed) {
      remaining = exam.length * 90;
      tick();
      timerId = setInterval(function () {
        remaining--;
        tick();
        if (remaining <= 0) { clearInterval(timerId); timerId = null; finish(); }
      }, 1000);
    } else {
      timerEl.textContent = 'Untimed';
    }
    window.scrollTo(0, 0);
  }

  function tick() {
    var mm = Math.floor(remaining / 60), ss = remaining % 60;
    document.getElementById('timer').textContent =
      'Time ' + mm + ':' + (ss < 10 ? '0' : '') + ss;
  }

  function renderQuestions() {
    var wrap = document.getElementById('questions');
    wrap.innerHTML = '';
    exam.forEach(function (item, qi) {
      var box = document.createElement('div');
      box.className = 'q';
      var stem = document.createElement('p');
      stem.className = 'stem';
      stem.innerHTML = '<span style="color:var(--gold-dark)">' + escapeHtml(item.d) + '</span><br>' +
        (qi + 1) + '. ' + escapeHtml(item.q);
      box.appendChild(stem);
      item.o.forEach(function (opt, oi) {
        var label = document.createElement('label');
        label.className = 'opt';
        var input = document.createElement('input');
        input.type = 'radio';
        input.name = 'q' + qi;
        input.value = String(oi);
        input.addEventListener('change', function () {
          item.picked = oi; updateProgress();
        });
        label.appendChild(input);
        label.appendChild(document.createTextNode(opt));
        box.appendChild(label);
      });
      wrap.appendChild(box);
    });
  }

  function updateProgress() {
    var answered = exam.filter(function (i) { return i.picked !== null; }).length;
    document.getElementById('progress-text').textContent =
      answered + ' of ' + exam.length + ' answered';
  }

  function finish() {
    if (timerId) { clearInterval(timerId); timerId = null; }
    var correct = 0;
    var byDomain = {};
    var missed = loadMissed();
    exam.forEach(function (item) {
      byDomain[item.d] = byDomain[item.d] || { c: 0, n: 0 };
      byDomain[item.d].n++;
      var got = item.picked === item.a;
      if (got) {
        correct++; byDomain[item.d].c++;
        var at = missed.indexOf(item.id);
        if (at !== -1) missed.splice(at, 1);
      } else if (missed.indexOf(item.id) === -1) {
        missed.push(item.id);
      }
    });
    saveMissed(missed);
    updateMissedBtn();
    var pct = Math.round((correct / exam.length) * 100);

    // log a completed exam into the shared study-stats store
    try {
      var st = JSON.parse(localStorage.getItem('aplus-stats')) || {};
      st.examsTaken = (st.examsTaken || 0) + 1;
      localStorage.setItem('aplus-stats', JSON.stringify(st));
    } catch (e) {}

    document.getElementById('exam').style.display = 'none';
    var res = document.getElementById('results');
    res.style.display = 'block';

    var pass = pct >= PASS;
    var improved = recordBest(currentScope, pct);
    var best = loadBest()[currentScope];
    document.getElementById('score-line').textContent =
      (pass ? '✓ Pass — ' : '✗ Keep studying — ') + correct + ' / ' + exam.length +
      ' (' + pct + '%)  ·  ' + currentScope +
      (improved ? '  🏆 New best!' : '  · Best: ' + best + '%');
    document.getElementById('score-line').style.color = pass ? 'var(--good)' : 'var(--bad)';
    var bar = document.getElementById('score-bar');
    bar.style.width = pct + '%';
    bar.style.background = pass ? 'var(--good)' : 'var(--bad)';

    var bd = document.getElementById('domain-breakdown');
    bd.innerHTML = '<p style="margin:0.75rem 0 0.25rem"><strong>By domain:</strong></p>';
    Object.keys(byDomain).sort().forEach(function (d) {
      var o = byDomain[d];
      bd.innerHTML += '<div>' + escapeHtml(d) + ': ' + o.c + '/' + o.n + '</div>';
    });

    var rev = document.getElementById('review');
    rev.innerHTML = '';
    exam.forEach(function (item, qi) {
      var box = document.createElement('div');
      box.className = 'q';
      var ok = item.picked === item.a;
      box.innerHTML = '<p class="stem">' + (qi + 1) + '. ' + escapeHtml(item.q) + '</p>';
      item.o.forEach(function (opt, oi) {
        var cls = 'opt';
        if (oi === item.a) cls += ' correct';
        else if (oi === item.picked) cls += ' wrong';
        box.innerHTML += '<div class="' + cls + '">' + escapeHtml(opt) + '</div>';
      });
      box.innerHTML += '<div class="explain show"><strong>' +
        (ok ? 'Correct.' : (item.picked === null ? 'Unanswered.' : 'Incorrect.')) +
        '</strong> ' + escapeHtml(item.e) + '</div>';
      rev.appendChild(box);
    });
    window.scrollTo(0, 0);
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function timed() { return document.getElementById('timed').checked; }

  document.querySelectorAll('#setup [data-len]').forEach(function (b) {
    b.addEventListener('click', function () {
      var len = parseInt(b.getAttribute('data-len'), 10);
      var scope = len === 0 ? 'Full exam' : ('Full exam · ' + len + 'Q');
      startExam(BANK, len, timed(), scope);
    });
  });
  document.getElementById('drill-btn').addEventListener('click', function () {
    var d = document.getElementById('domain-select').value;
    startExam(BANK.filter(function (q) { return q.d === d; }), 0, timed(), 'Drill · ' + d);
  });
  document.getElementById('missed-btn').addEventListener('click', function () {
    var ids = loadMissed();
    startExam(BANK.filter(function (q) { return ids.indexOf(q.id) !== -1; }), 0, timed(), 'Missed review');
  });
  document.getElementById('clear-missed').addEventListener('click', function () {
    if (!confirm('Clear your missed-questions list?')) return;
    saveMissed([]); updateMissedBtn();
  });
  updateMissedBtn();
  renderBestSummary();

  document.getElementById('submitBtn').addEventListener('click', finish);
  document.getElementById('submitBtn2').addEventListener('click', finish);
  document.getElementById('retry').addEventListener('click', function () {
    document.getElementById('results').style.display = 'none';
    document.getElementById('setup').style.display = 'block';
    updateMissedBtn();
    renderBestSummary();
    window.scrollTo(0, 0);
  });
})();
