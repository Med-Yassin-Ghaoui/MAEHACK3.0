/* ============================================
   QUESTIFY — RUNTIME (state, animations, helpers)
   ============================================ */

const App = (() => {
  const KEY_XP = 'questify.v2.xp';
  const KEY_DONE = 'questify.v2.completed';

  // ---------- SVG icon library ----------
  // All icons use stroke="currentColor" so they inherit text color.
  // Width/height settable via parent CSS (em / svg attrs).
  const ICONS = {
    briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    crown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18l3-10 5 6 4-8 4 8 5-6 3 10z"/><path d="M2 21h20"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 12 15 16 10"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3 7 7.5.6-5.7 4.9 1.8 7.3L12 17.8 5.4 21.8l1.8-7.3L1.5 9.6 9 9z"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6M12 16v6M2 12h6M16 12h6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="6 4 20 12 6 20 6 4"/></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
    bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z"/></svg>',
    flower: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5"/><path d="M12 2a3 3 0 0 1 3 3v4a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/><path d="M12 22a3 3 0 0 0 3-3v-4a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3z"/><path d="M2 12a3 3 0 0 1 3-3h4a3 3 0 0 1 0 6H5a3 3 0 0 1-3-3z"/><path d="M22 12a3 3 0 0 0-3-3h-4a3 3 0 0 0 0 6h4a3 3 0 0 0 3-3z"/></svg>',
    gameController: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.59c-.14 1.42-.32 3.36-.32 4.41 0 1.05.18 2.99.32 4.41A4 4 0 0 0 6.68 21h10.64a4 4 0 0 0 3.98-3.59c.14-1.42.32-3.36.32-4.41 0-1.05-.18-2.99-.32-4.41A4 4 0 0 0 17.32 5z"/></svg>',
    rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    graduation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10l-10-5L2 10l10 5 10-5z"/><path d="M6 12v5a6 3 0 0 0 12 0v-5"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    quote: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M3 21h6V13H5c0-3 2-5 4-5V4C4 4 1 8 1 13v8h2zm12 0h6V13h-4c0-3 2-5 4-5V4c-5 0-8 4-8 9v8z"/></svg>',
    zap: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  };

  function icon(name, size = '1em') {
    const svg = ICONS[name];
    if (!svg) return '';
    return svg.replace('<svg ', `<svg width="${size}" height="${size}" `);
  }

  // ---------- State ----------
  function getXP() { return parseInt(localStorage.getItem(KEY_XP) || '0', 10); }
  function setXP(n) { localStorage.setItem(KEY_XP, String(Math.max(0, n))); renderXP(); }
  function addXP(amount) {
    const start = getXP();
    setXP(start + amount);
    rollNumberTo('.topbar .xp-num', start, start + amount, 800);
    const el = document.querySelector('.topbar .xp');
    if (el) {
      el.classList.remove('bump');
      void el.offsetWidth;
      el.classList.add('bump');
    }
  }

  function completedSet() {
    return new Set(JSON.parse(localStorage.getItem(KEY_DONE) || '[]'));
  }
  function markCompleted(id) {
    const s = completedSet();
    s.add(id);
    localStorage.setItem(KEY_DONE, JSON.stringify([...s]));
  }
  function isCompleted(id) { return completedSet().has(id); }

  function pathProgress(prefix, totalLevels = 5) {
    const set = completedSet();
    let count = 0;
    for (let i = 1; i <= totalLevels; i++) if (set.has(`${prefix}-l${i}`)) count++;
    return { count, total: totalLevels, ratio: count / totalLevels };
  }

  function nextUnlockedLevel(prefix, totalLevels = 5) {
    const set = completedSet();
    for (let i = 1; i <= totalLevels; i++) {
      if (!set.has(`${prefix}-l${i}`)) return i;
    }
    return totalLevels;
  }

  // ---------- Topbar ----------
  function renderTopbar({ back = '../index.html', title = '', progressTarget = null, assetsPrefix = '../' } = {}) {
    const bar = document.createElement('header');
    bar.className = 'topbar';
    bar.innerHTML = `
      <a href="${back}" class="back" aria-label="????">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </a>
      <span class="title">${title}</span>
      <div class="progress-wrap"><div class="progress-fill" id="progress-fill"></div></div>
      <div class="xp">
        <img class="xp-acorn" src="${assetsPrefix}assets/acorn.svg" alt=""/>
        <span class="xp-num">${getXP()}</span>
      </div>`;
    document.body.prepend(bar);
    if (progressTarget && typeof progressTarget === 'number') {
      requestAnimationFrame(() => {
        document.getElementById('progress-fill').style.width = (progressTarget * 100) + '%';
      });
    }
  }

  // ---------- Mascot ----------
  function injectMascot(assetsPrefix = '../') {
    if (document.querySelector('.mascot-corner')) return;
    const m = document.createElement('div');
    m.className = 'mascot-corner';
    m.innerHTML = `<img src="${assetsPrefix}assets/squirrel-mascot.svg" alt=""/>`;
    document.body.appendChild(m);
  }
  function mascot(mood = 'happy') {
    const el = document.querySelector('.mascot-corner');
    if (!el) return;
    el.classList.remove('happy', 'sad', 'flip');
    void el.offsetWidth;
    el.classList.add(mood);
    setTimeout(() => el.classList.remove(mood), 900);
  }
  function renderXP() {
    const el = document.querySelector('.topbar .xp-num');
    if (el) el.textContent = getXP();
  }

  function pulseProgress() {
    const f = document.getElementById('progress-fill');
    if (!f) return;
    f.classList.remove('pulse');
    void f.offsetWidth;
    f.classList.add('pulse');
  }

  // ---------- Number roll ----------
  function rollNumberTo(selector, from, to, dur = 800) {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!el) return;
    const start = performance.now();
    const fmt = (n) => Number.isInteger(to) ? String(Math.round(n)) : n.toFixed(2);
    function tick(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      el.textContent = fmt(from + (to - from) * eased);
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = fmt(to);
    }
    requestAnimationFrame(tick);
  }

  // ---------- Confetti ----------
  function confettiBurst(x, y, count = 12) {
    const layer = document.createElement('div');
    layer.className = 'confetti-layer';
    document.body.appendChild(layer);
    const colors = [
      getComputedStyle(document.documentElement).getPropertyValue('--confetti-1').trim() || '#1D9E75',
      getComputedStyle(document.documentElement).getPropertyValue('--confetti-2').trim() || '#378ADD',
      getComputedStyle(document.documentElement).getPropertyValue('--confetti-3').trim() || '#EF9F27',
      getComputedStyle(document.documentElement).getPropertyValue('--confetti-4').trim() || '#D85A30',
    ];
    for (let i = 0; i < count; i++) {
      const d = document.createElement('div');
      d.className = 'confetti-dot';
      const size = 6 + Math.random() * 4;
      d.style.width = size + 'px';
      d.style.height = size + 'px';
      d.style.background = colors[Math.floor(Math.random()*colors.length)];
      d.style.left = x + 'px';
      d.style.top = y + 'px';
      const dx = (Math.random() - 0.5) * 220;
      const dy = -60 - Math.random() * 140;
      const dur = 600 + Math.random() * 200;
      d.animate(
        [
          { transform: 'translate(0,0) scale(1)', opacity: 1 },
          { transform: `translate(${dx}px, ${dy + 120}px) scale(0.6)`, opacity: 0 }
        ],
        { duration: dur, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' }
      );
      layer.appendChild(d);
    }
    setTimeout(() => layer.remove(), 1200);
  }

  function celebrateElement(el) {
    if (!el) return;
    el.classList.remove('flash-success');
    void el.offsetWidth;
    el.classList.add('flash-success');
    const r = el.getBoundingClientRect();
    confettiBurst(r.left + r.width / 2, r.top + r.height / 2, 12);
    mascot('happy');
  }

  function shakeElement(el) {
    if (!el) return;
    el.classList.remove('shake', 'flash-danger', 'border-danger');
    void el.offsetWidth;
    el.classList.add('shake', 'flash-danger', 'border-danger');
    setTimeout(() => el.classList.remove('border-danger'), 500);
    mascot('sad');
  }

  // ---------- Toast ----------
  let toastTimer = null;
  function toast(msg, variant = '') {
    let el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.className = 'toast ' + variant + ' show';
    el.textContent = msg;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
  }

  // ---------- Stagger ----------
  function staggerIn(selector, parent = document) {
    const els = parent.querySelectorAll(selector);
    els.forEach((el, i) => {
      el.classList.add('animate-in');
      el.style.setProperty('--i', i);
    });
  }

  // ---------- Level complete screen ----------
  function showLevelComplete({ levelId, xpEarned, stars = 3, insight, onContinue, nextHref }) {
    markCompleted(levelId);
    const overlay = document.createElement('div');
    overlay.className = 'level-complete';
    overlay.innerHTML = `
      <div class="eyebrow">????? terminé</div>
      <h1 class="h1">Bravo !</h1>
      <div class="stars">
        ${Array.from({length:3}).map((_,i) => `<span class="star">${i < stars ? '★' : '☆'}</span>`).join('')}
      </div>
      <p class="lead" style="max-width: 460px; margin-bottom: 8px;">${insight || ''}</p>
      <div class="badge badge-success" style="margin: 16px 0 32px;">+${xpEarned} XP gagnés</div>
      <button class="btn btn-primary btn-pulse" id="lc-continue">Continuer →</button>
    `;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('open'));
    pulseProgress();
    addXP(xpEarned);
    confettiBurst(window.innerWidth/2, window.innerHeight/2, 24);

    document.getElementById('lc-continue').addEventListener('click', () => {
      if (onContinue) onContinue();
      else if (nextHref) location.href = nextHref;
      else location.href = '../index.html';
    });
  }

  // ---------- Drag & drop helpers (HTML5) ----------
  function makeDraggable(el, payload) {
    el.draggable = true;
    el.classList.add('draggable');
    el.addEventListener('dragstart', e => {
      el.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', JSON.stringify(payload));
    });
    el.addEventListener('dragend', () => el.classList.remove('dragging'));
  }
  function makeDropZone(el, onDrop) {
    el.classList.add('drop-zone');
    el.addEventListener('dragover', e => { e.preventDefault(); el.classList.add('active'); });
    el.addEventListener('dragleave', () => el.classList.remove('active'));
    el.addEventListener('drop', e => {
      e.preventDefault();
      el.classList.remove('active');
      try {
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));
        onDrop(data, el);
      } catch (err) {}
    });
  }

  return {
    getXP, setXP, addXP,
    markCompleted, isCompleted, completedSet, pathProgress, nextUnlockedLevel,
    renderTopbar, pulseProgress, injectMascot, mascot,
    rollNumberTo, confettiBurst, celebrateElement, shakeElement,
    toast, staggerIn, showLevelComplete,
    makeDraggable, makeDropZone,
    icon, ICONS,
  };
})();

window.App = App;
