// CompTIA A+ course — vanilla JS only. No frameworks, no dependencies.
// Handles: mobile nav, flashcards, quizzes, and localStorage progress tracking.

(function () {
  'use strict';

  var STORE_KEY = 'aplus-progress-v1';

  // ---------- Progress store ----------
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveProgress(data) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(data));
    } catch (e) { /* storage may be unavailable; degrade gracefully */ }
  }

  function markComplete(lessonId) {
    var p = loadProgress();
    p[lessonId] = { done: true, at: Date.now() };
    saveProgress(p);
  }

  function isComplete(lessonId) {
    var p = loadProgress();
    return !!(p[lessonId] && p[lessonId].done);
  }

  // ---------- Study stats (streak, quizzes, averages) ----------
  // Shared schema (also written by the final-exam page):
  // { visitDates:[YYYY-MM-DD...], quizzesTaken:n, scoreSum:n, examsTaken:n }
  var STATS_KEY = 'aplus-stats';
  function loadStats() {
    try { return JSON.parse(localStorage.getItem(STATS_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveStats(s) {
    try { localStorage.setItem(STATS_KEY, JSON.stringify(s)); } catch (e) {}
  }
  function todayStr() {
    var d = new Date();
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }
  function recordVisit() {
    var s = loadStats();
    s.visitDates = s.visitDates || [];
    var t = todayStr();
    if (s.visitDates.indexOf(t) === -1) { s.visitDates.push(t); s.visitDates.sort(); }
    saveStats(s);
    return s;
  }
  function recordQuiz(pct) {
    var s = loadStats();
    s.quizzesTaken = (s.quizzesTaken || 0) + 1;
    s.scoreSum = (s.scoreSum || 0) + pct;
    saveStats(s);
  }
  // expose so the standalone final-exam page can log into the same store
  window.AplusStats = { recordQuiz: recordQuiz, recordVisit: recordVisit };

  function dayBefore(str) {
    var p = str.split('-');
    var d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
    d.setDate(d.getDate() - 1);
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }
  function computeStreak(dates) {
    var set = {};
    dates.forEach(function (d) { set[d] = true; });
    var cur = 0, day = todayStr();
    while (set[day]) { cur++; day = dayBefore(day); }
    // longest run
    var sorted = dates.slice().sort();
    var longest = 0, run = 0, prev = null;
    sorted.forEach(function (d) {
      if (prev && dayBefore(d) === prev) run++;
      else run = 1;
      if (run > longest) longest = run;
      prev = d;
    });
    return { current: cur, longest: longest };
  }

  // ---------- Mobile nav ----------
  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---------- Theme (dark mode), injected into every nav ----------
  var THEME_KEY = 'aplus-theme';
  function applyTheme(theme) {
    if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
  }
  function initTheme() {
    var saved = 'light';
    try { saved = localStorage.getItem(THEME_KEY) || 'light'; } catch (e) {}
    applyTheme(saved);

    var nav = document.querySelector('.nav');
    if (!nav) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    function label() { btn.textContent = (saved === 'dark' ? '☀ Light' : '🌙 Dark'); }
    label();
    btn.addEventListener('click', function () {
      saved = (saved === 'dark') ? 'light' : 'dark';
      applyTheme(saved);
      try { localStorage.setItem(THEME_KEY, saved); } catch (e) {}
      label();
    });
    // place the toggle right before the hamburger so it's visible on mobile too
    var hamburger = nav.querySelector('.nav-toggle');
    if (hamburger) nav.insertBefore(btn, hamburger);
    else nav.appendChild(btn);
  }

  // ---------- Footer year ----------
  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  // ---------- Flashcards ----------
  // Markup: <div class="flashcard-deck" data-cards='[["front","back"],...]'></div>
  function initFlashcards() {
    var decks = document.querySelectorAll('.flashcard-deck');
    decks.forEach(function (deck) {
      var cards;
      try { cards = JSON.parse(deck.getAttribute('data-cards')); }
      catch (e) { return; }
      if (!cards || !cards.length) return;

      var i = 0, showingBack = false;

      var card = document.createElement('div');
      card.className = 'flashcard';

      var controls = document.createElement('div');
      controls.className = 'flash-controls';
      var prev = mkButton('← Prev', 'button secondary');
      var flip = mkButton('Flip', 'button');
      var next = mkButton('Next →', 'button secondary');
      var count = document.createElement('span');
      count.className = 'count';
      controls.appendChild(prev);
      controls.appendChild(flip);
      controls.appendChild(next);
      controls.appendChild(count);

      deck.appendChild(card);
      deck.appendChild(controls);

      function render() {
        var pair = cards[i];
        card.innerHTML = (showingBack ? pair[1] : pair[0]) +
          '<span class="hint">' + (showingBack ? 'answer' : 'tap to flip') + '</span>';
        count.textContent = (i + 1) + ' / ' + cards.length;
      }
      function flipCard() { showingBack = !showingBack; render(); }

      function goPrev() { i = (i - 1 + cards.length) % cards.length; showingBack = false; render(); }
      function goNext() { i = (i + 1) % cards.length; showingBack = false; render(); }

      card.addEventListener('click', flipCard);
      flip.addEventListener('click', flipCard);
      prev.addEventListener('click', goPrev);
      next.addEventListener('click', goNext);

      // Keyboard: ←/→ to move, Space/Enter to flip (only when a deck is in view)
      deck.tabIndex = 0;
      deck.setAttribute('aria-label', 'Flashcard deck. Use left and right arrows to navigate, space to flip.');
      deck.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); }
        else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipCard(); }
      });
      render();
    });
  }

  // ---------- Quiz ----------
  // Markup: <div class="quiz" data-quiz='[{ "q":"...", "options":[...], "answer":0, "explain":"..." }]'></div>
  function initQuizzes() {
    var quizzes = document.querySelectorAll('.quiz[data-quiz]');
    quizzes.forEach(function (quiz) {
      var items;
      try { items = JSON.parse(quiz.getAttribute('data-quiz')); }
      catch (e) { return; }
      if (!items || !items.length) return;

      var name = 'quiz-' + Math.random().toString(36).slice(2);

      items.forEach(function (item, qi) {
        var box = document.createElement('div');
        box.className = 'q';
        var stem = document.createElement('p');
        stem.className = 'stem';
        stem.textContent = (qi + 1) + '. ' + item.q;
        box.appendChild(stem);

        item.options.forEach(function (opt, oi) {
          var label = document.createElement('label');
          label.className = 'opt';
          var input = document.createElement('input');
          input.type = 'radio';
          input.name = name + '-' + qi;
          input.value = String(oi);
          label.appendChild(input);
          label.appendChild(document.createTextNode(opt));
          box.appendChild(label);
        });

        var explain = document.createElement('div');
        explain.className = 'explain';
        explain.innerHTML = '<strong>Answer:</strong> ' +
          item.options[item.answer] + '. ' + (item.explain || '');
        box.appendChild(explain);
        quiz.appendChild(box);
      });

      var submit = mkButton('Check answers', 'button');
      var result = document.createElement('div');
      result.className = 'quiz-result';
      quiz.appendChild(submit);
      quiz.appendChild(result);

      submit.addEventListener('click', function () {
        var score = 0;
        items.forEach(function (item, qi) {
          var picked = quiz.querySelector('input[name="' + name + '-' + qi + '"]:checked');
          var labels = quiz.querySelectorAll('.q')[qi].querySelectorAll('.opt');
          labels.forEach(function (l) { l.classList.remove('correct', 'wrong'); });
          var explain = quiz.querySelectorAll('.q')[qi].querySelector('.explain');
          explain.classList.add('show');
          labels[item.answer].classList.add('correct');
          if (picked) {
            var pi = parseInt(picked.value, 10);
            if (pi === item.answer) score++;
            else labels[pi].classList.add('wrong');
          }
        });
        var pct = Math.round((score / items.length) * 100);
        result.textContent = 'Score: ' + score + ' / ' + items.length + '  (' + pct + '%)';
        if (!quiz.dataset.counted) { recordQuiz(pct); quiz.dataset.counted = '1'; }

        var lessonId = quiz.getAttribute('data-lesson');
        if (lessonId && pct >= 70) {
          markComplete(lessonId);
          result.textContent += '  ✓ Lesson marked complete';
        }
      });
    });
  }

  // ---------- Mark-complete buttons ----------
  function initCompleteButtons() {
    document.querySelectorAll('[data-complete]').forEach(function (btn) {
      var id = btn.getAttribute('data-complete');
      function refresh() {
        if (isComplete(id)) {
          btn.textContent = '✓ Completed';
          btn.classList.add('secondary');
        }
      }
      btn.addEventListener('click', function () { markComplete(id); refresh(); });
      refresh();
    });
  }

  // ---------- Dashboard (home page) ----------
  // Markup: <div class="progress-dash" data-lessons='[["id","Label"],...]'></div>
  function initDashboard() {
    var dash = document.querySelector('.progress-dash');
    if (!dash) return;
    var lessons;
    try { lessons = JSON.parse(dash.getAttribute('data-lessons')); }
    catch (e) { return; }
    var p = loadProgress();
    var done = lessons.filter(function (l) { return p[l[0]] && p[l[0]].done; }).length;
    var pct = lessons.length ? Math.round((done / lessons.length) * 100) : 0;

    var wrap = document.createElement('div');
    wrap.className = 'progress-wrap';
    wrap.innerHTML =
      '<strong>Your progress:</strong> ' + done + ' of ' + lessons.length +
      ' lessons complete (' + pct + '%)' +
      '<div class="bar"><span style="width:' + pct + '%"></span></div>';

    var list = document.createElement('div');
    lessons.forEach(function (l) {
      var row = document.createElement('div');
      var ok = p[l[0]] && p[l[0]].done;
      row.innerHTML = (ok ? '<span class="done-pill">✓ </span>' : '○ ') + l[1];
      list.appendChild(row);
    });
    wrap.appendChild(list);

    var reset = mkButton('Reset progress', 'button secondary');
    reset.style.marginTop = '1rem';
    reset.addEventListener('click', function () {
      if (!window.confirm('Clear all lesson completion progress? This cannot be undone.')) return;
      saveProgress({});
      // re-render dashboard
      dash.innerHTML = '';
      initDashboard();
    });
    wrap.appendChild(reset);

    dash.appendChild(wrap);
  }

  // ---------- Study-stats panel (home page) ----------
  // Markup: <div class="study-stats" data-total-lessons="9"></div>
  function initStatsPanel() {
    var host = document.querySelector('.study-stats');
    if (!host) return;
    var s = loadStats();
    var streak = computeStreak(s.visitDates || []);
    var totalLessons = parseInt(host.getAttribute('data-total-lessons'), 10) || 9;
    var p = loadProgress();
    var done = Object.keys(p).filter(function (k) { return p[k] && p[k].done; }).length;
    var quizzes = s.quizzesTaken || 0;
    var avg = quizzes ? Math.round((s.scoreSum || 0) / quizzes) : 0;
    var exams = s.examsTaken || 0;

    function stat(num, label) {
      return '<div style="flex:1 1 7rem;min-width:7rem">' +
        '<div style="font-size:1.6rem;font-weight:800;color:var(--gold-dark)">' + num + '</div>' +
        '<div style="font-size:0.85rem;color:var(--muted)">' + label + '</div></div>';
    }
    var wrap = document.createElement('div');
    wrap.className = 'progress-wrap';
    wrap.innerHTML =
      '<strong>📊 Study stats</strong>' +
      '<div style="display:flex;flex-wrap:wrap;gap:1rem;margin-top:0.85rem">' +
        stat('🔥 ' + streak.current, 'Day streak') +
        stat(streak.longest, 'Longest streak') +
        stat(done + '/' + totalLessons, 'Lessons done') +
        stat(quizzes, 'Quizzes taken') +
        stat(avg + '%', 'Avg quiz score') +
        stat(exams, 'Final exams') +
      '</div>';
    host.appendChild(wrap);
  }

  // ---------- Achievement badges (home page) ----------
  function loadBest() {
    try { return JSON.parse(localStorage.getItem('aplus-best')) || {}; }
    catch (e) { return {}; }
  }
  function initBadges() {
    var host = document.querySelector('.badges');
    if (!host) return;
    var s = loadStats();
    var streak = computeStreak(s.visitDates || []);
    var p = loadProgress();
    var lessonsDone = Object.keys(p).filter(function (k) { return p[k] && p[k].done; }).length;
    var quizzes = s.quizzesTaken || 0;
    var avg = quizzes ? (s.scoreSum || 0) / quizzes : 0;
    var best = loadBest();
    var bestVals = Object.keys(best).map(function (k) { return best[k]; });
    var topBest = bestVals.length ? Math.max.apply(null, bestVals) : 0;

    var DEFS = [
      { icon: '🌱', name: 'First Steps', desc: 'Complete your first lesson', got: lessonsDone >= 1 },
      { icon: '📚', name: 'Halfway There', desc: 'Complete 5 lessons', got: lessonsDone >= 5 },
      { icon: '🎓', name: 'Course Complete', desc: 'Complete all 9 lessons', got: lessonsDone >= 9 },
      { icon: '🔥', name: 'On a Roll', desc: 'Reach a 3-day streak', got: streak.longest >= 3 },
      { icon: '⚡', name: 'Dedicated', desc: 'Reach a 7-day streak', got: streak.longest >= 7 },
      { icon: '✍️', name: 'Quiz Regular', desc: 'Take 10 quizzes', got: quizzes >= 10 },
      { icon: '🎯', name: 'Sharp Shooter', desc: 'Average 90%+ over 3+ quizzes', got: quizzes >= 3 && avg >= 90 },
      { icon: '🛡️', name: 'Exam Ready', desc: 'Score 75%+ on any exam mode', got: topBest >= 75 },
      { icon: '🏆', name: 'Perfectionist', desc: 'Score 100% on any exam mode', got: topBest >= 100 }
    ];
    var earned = DEFS.filter(function (d) { return d.got; }).length;

    var wrap = document.createElement('div');
    wrap.className = 'progress-wrap';
    var cards = DEFS.map(function (d) {
      return '<div style="flex:1 1 9rem;min-width:9rem;opacity:' + (d.got ? '1' : '0.4') +
        ';border:1px solid var(--line);border-radius:8px;padding:0.7rem">' +
        '<div style="font-size:1.5rem">' + d.icon + '</div>' +
        '<div style="font-weight:700;color:var(--ink)">' + d.name + (d.got ? ' ✓' : '') + '</div>' +
        '<div style="font-size:0.82rem;color:var(--muted)">' + d.desc + '</div></div>';
    }).join('');
    wrap.innerHTML = '<strong>🏅 Achievements</strong> <span style="color:var(--muted)">(' +
      earned + ' / ' + DEFS.length + ' unlocked)</span>' +
      '<div style="display:flex;flex-wrap:wrap;gap:0.6rem;margin-top:0.85rem">' + cards + '</div>';
    host.appendChild(wrap);
  }

  // ---------- Export / Import progress (home page) ----------
  var BACKUP_KEYS = ['aplus-progress-v1', 'aplus-stats', 'aplus-best', 'aplus-missed', 'aplus-theme'];
  function initBackup() {
    var host = document.querySelector('.backup-controls');
    if (!host) return;

    var exportBtn = mkButton('⬇ Export progress', 'button secondary');
    var importBtn = mkButton('⬆ Import progress', 'button secondary');
    var file = document.createElement('input');
    file.type = 'file';
    file.accept = 'application/json,.json';
    file.style.display = 'none';

    exportBtn.addEventListener('click', function () {
      var data = {};
      BACKUP_KEYS.forEach(function (k) {
        var v = localStorage.getItem(k);
        if (v !== null) data[k] = v;
      });
      var payload = JSON.stringify({ app: 'comptia-aplus-course', version: 1, data: data }, null, 2);
      var blob = new Blob([payload], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'aplus-progress-' + todayStr() + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });

    importBtn.addEventListener('click', function () { file.click(); });
    file.addEventListener('change', function () {
      var f = file.files && file.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var obj = JSON.parse(reader.result);
          var data = obj && obj.data;
          if (!data || typeof data !== 'object') throw new Error('bad file');
          if (!window.confirm('Import will overwrite your current progress on this device. Continue?')) return;
          BACKUP_KEYS.forEach(function (k) {
            if (k in data) localStorage.setItem(k, data[k]);
          });
          location.reload();
        } catch (e) {
          alert('That file could not be read as a valid A+ progress backup.');
        }
      };
      reader.readAsText(f);
    });

    var note = document.createElement('p');
    note.className = 'lede';
    note.style.cssText = 'margin:0 0 0.5rem;font-size:0.9rem';
    note.textContent = 'Your progress lives in this browser. Export a backup file to keep it safe or move it to another device.';
    host.appendChild(note);
    var row = document.createElement('div');
    row.className = 'lesson-actions';
    row.style.marginTop = '0';
    row.appendChild(exportBtn);
    row.appendChild(importBtn);
    host.appendChild(row);
    host.appendChild(file);
  }

  // ---------- helpers ----------
  function mkButton(text, cls) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = cls;
    b.textContent = text;
    return b;
  }

  // ---------- boot ----------
  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initTheme();
    initYear();
    initFlashcards();
    initQuizzes();
    initCompleteButtons();
    recordVisit();
    initStatsPanel();
    initBadges();
    initDashboard();
    initBackup();
  });
})();
