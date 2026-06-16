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
    initDashboard();
  });
})();
