// Questify shared runtime: nut state, mascot, toasts, topbar injection.

const Q = {
  KEY: 'questify.nuts',
  COMPLETED_KEY: 'questify.completed',

  getNuts() {
    return parseInt(localStorage.getItem(this.KEY) || '0', 10);
  },
  setNuts(n) {
    localStorage.setItem(this.KEY, String(n));
    this.renderNutCounter();
  },
  addNuts(n, opts = {}) {
    const cur = this.getNuts();
    this.setNuts(cur + n);
    this.popCounter();
    if (n >= 50) this.rainNuts(Math.min(n / 3, 24));
    this.mascot(opts.mood || 'happy');
    this.toast(`+${n} nuts!`, 'win');
  },
  loseNuts(n) {
    const cur = this.getNuts();
    this.setNuts(Math.max(0, cur - n));
    this.mascot('sad');
  },
  markCompleted(slug) {
    const set = new Set(JSON.parse(localStorage.getItem(this.COMPLETED_KEY) || '[]'));
    set.add(slug);
    localStorage.setItem(this.COMPLETED_KEY, JSON.stringify([...set]));
  },
  isCompleted(slug) {
    const set = new Set(JSON.parse(localStorage.getItem(this.COMPLETED_KEY) || '[]'));
    return set.has(slug);
  },

  popCounter() {
    const el = document.querySelector('.nut-counter');
    if (!el) return;
    el.classList.add('pop');
    setTimeout(() => el.classList.remove('pop'), 220);
  },

  renderNutCounter() {
    const el = document.querySelector('.nut-counter span');
    if (el) el.textContent = this.getNuts();
  },

  rainNuts(count = 14) {
    const wrap = document.createElement('div');
    wrap.className = 'nut-rain';
    document.body.appendChild(wrap);
    for (let i = 0; i < count; i++) {
      const n = document.createElement('img');
      n.src = (window.ASSETS_PREFIX || '') + 'assets/acorn.svg';
      n.className = 'falling';
      n.style.left = Math.random() * 100 + 'vw';
      n.style.animationDuration = (1.5 + Math.random() * 1.5) + 's';
      n.style.animationDelay = (Math.random() * 0.5) + 's';
      wrap.appendChild(n);
    }
    setTimeout(() => wrap.remove(), 3500);
  },

  toast(message, variant = '') {
    let el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.className = 'toast ' + variant + ' show';
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
  },

  mascot(mood = 'happy') {
    const el = document.querySelector('.mascot-corner');
    if (!el) return;
    el.classList.remove('happy', 'sad', 'flip');
    // force reflow so animation re-runs
    void el.offsetWidth;
    el.classList.add(mood);
    setTimeout(() => el.classList.remove(mood), 1000);
  },

  injectTopbar(opts = {}) {
    const prefix = window.ASSETS_PREFIX || '';
    const showBack = opts.back !== false;
    const bar = document.createElement('header');
    bar.className = 'topbar';
    bar.innerHTML = `
      <div style="display:flex; align-items:center; gap:14px;">
        ${showBack ? `<a href="${prefix}index.html" class="btn-ghost btn" style="padding:8px 12px;">← Home</a>` : ''}
        <a href="${prefix}index.html" class="logo" aria-label="Questify home">
          <img src="${prefix}assets/logo.svg" alt="Questify"/>
        </a>
      </div>
      <div class="nut-counter" title="Your nuts">
        <img src="${prefix}assets/acorn.svg" alt=""/>
        <span>${this.getNuts()}</span>
      </div>
    `;
    document.body.prepend(bar);
  },

  injectMascot() {
    const prefix = window.ASSETS_PREFIX || '';
    const m = document.createElement('div');
    m.className = 'mascot-corner';
    m.innerHTML = `<img src="${prefix}assets/squirrel-mascot.svg" alt="" style="width:100%; height:100%;"/>`;
    document.body.appendChild(m);
  },

  init(opts = {}) {
    this.injectTopbar(opts);
    if (opts.mascot !== false) this.injectMascot();
  },
};

window.Q = Q;
