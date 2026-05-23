/* ============================================
   QUESTIFY — i18n (Arabic / Tunisian Darija + French)
   ============================================ */

const I18N = (() => {
  const KEY = 'questify.lang';
  const DEFAULT = 'ar';
  let current = localStorage.getItem(KEY) || DEFAULT;

  // ---------- Flag SVGs ----------
  const FLAGS = {
    tn: `<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="tn-crescent">
          <rect width="60" height="40" fill="white"/>
          <circle cx="33" cy="20" r="5.2" fill="black"/>
        </mask>
      </defs>
      <rect width="60" height="40" fill="#E70013"/>
      <circle cx="30" cy="20" r="9.5" fill="white"/>
      <circle cx="31" cy="20" r="6.5" fill="#E70013" mask="url(#tn-crescent)"/>
      <polygon points="30,15.5 30.7,17.6 32.9,17.6 31.1,18.9 31.8,21 30,19.7 28.2,21 28.9,18.9 27.1,17.6 29.3,17.6" fill="#E70013"/>
    </svg>`,
    fr: `<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="20" height="40" fill="#002654"/>
      <rect x="20" y="0" width="20" height="40" fill="#FFFFFF"/>
      <rect x="40" y="0" width="20" height="40" fill="#ED2939"/>
    </svg>`,
  };

  // ---------- Dictionary (UI shell strings) ----------
  // Tunisian Darija (informal Arabic) + French
  const DICT = {
    'nav.paths':       { ar: 'المسارات',       fr: 'Parcours' },
    'nav.how':         { ar: 'كيفاش يخدم',     fr: 'Comment ça marche' },
    'nav.testimonials':{ ar: 'الشهادات',      fr: 'Témoignages' },
    'nav.why':         { ar: 'علاش',          fr: 'Pourquoi' },
    'nav.login':       { ar: 'دخول',          fr: 'Se connecter' },
    'nav.start':       { ar: 'إبدا',          fr: 'Commencer' },

    'hero.eyebrow':    { ar: 'لتلامذة الثانوي التوانسة · 15-18 سنة', fr: 'Pour les lycéens tunisiens · 15-18 ans' },
    'hero.title':      { ar: 'تعلّم اللي', fr: 'Apprends ce que' },
    'hero.title2':     { ar: 'المدرسة',         fr: "l'école" },
    'hero.title3':     { ar: 'ما تقرّيوش',      fr: "n'enseigne" },
    'hero.title4':     { ar: 'ليك.',            fr: 'pas.' },
    'hero.sub':        {
      ar: 'ما فمّاش دروس مملّة. ما فمّاش تيوريّة. تعيش محاكاة تفاعلية — تطلق ماركة، تحلّل بيوعات، تقرى رسم بياني — و تتعلّم وأنت تقرّر.',
      fr: "Pas de cours. Pas de théorie sèche. Tu vis des simulations interactives — lancer une marque, analyser des ventes, lire un graphique — et tu apprends en décidant."
    },
    'hero.cta.start':  { ar: 'إبدا مجاناً',     fr: 'Commencer gratuitement' },
    'hero.cta.how':    { ar: 'شوف كيفاش يخدم',  fr: 'Voir comment ça marche' },
    'hero.meta.free':  { ar: 'مجاني للأبد',     fr: 'Gratuit à vie' },
    'hero.meta.nosignup': { ar: 'بلا تسجيل',    fr: 'Sans inscription' },
    'hero.meta.lang':  { ar: 'بالدارجة التونسية', fr: 'En français' },

    'social.paths':    { ar: 'مسارات متاحة',    fr: 'Parcours actifs' },
    'social.levels':   { ar: 'مستوى تفاعلي',     fr: 'Niveaux interactifs' },
    'social.minutes':  { ar: 'دقايق في الدرس',    fr: 'Par leçon' },
    'social.free':     { ar: 'مجاني، بلا إشهار',  fr: 'Gratuit, sans pub' },

    'why.tag':         { ar: 'علاش Questify',   fr: 'Pourquoi Questify' },
    'why.title':       { ar: 'التعلّم اللي يشبه لعبة فيديو في الأخير.', fr: "L'apprentissage qui ressemble enfin à un jeu vidéo." },
    'why.sub':         { ar: 'بصّينا كيفاش أحسن ألعاب الفيديو يخلّيو الناس مدمنين، و حوّلنا الميكانيكات هاذي لدروس حقيقية في الحياة.', fr: "On a regardé comment les meilleurs jeux retiennent les ados pendant des heures, et on a transformé ces mécaniques en vrais cours de vie." },
    'why.1.title':     { ar: 'تلعب، تتعلّم.',   fr: 'Tu joues, tu apprends.' },
    'why.1.text':      { ar: 'ما فمّاش قراية مملّة. تقرّر، تشوف النتيجة، و تصحّح. هاكا كيفاش مخّك يتعلّم بسرعة.', fr: 'Aucune lecture passive. Tu fais des choix, tu vois les conséquences, et tu corriges. C\'est exactement comme ça que ton cerveau apprend le mieux.' },
    'why.2.title':     { ar: 'مهارات حقيقية.', fr: 'Vraies compétences.' },
    'why.2.text':      { ar: 'تسيير الفلوس، قراية رسم بياني، تحديد ثمن، تلقّى الغلطات. حاجات الحياة بش تسقسيك فيهم، و المدرسة ما تعطيهملكش.', fr: "Gérer un budget, lire un graphique, fixer un prix, repérer des erreurs. Des choses que la vie te demandera, et que l'école n'enseigne pas vraiment." },
    'why.3.title':     { ar: 'خمسة دقايق يكفيو.', fr: '5 minutes suffisent.' },
    'why.3.text':      { ar: 'كل مستوى يتفكّ في 3 لـ 5 دقايق. مناسب في الراحة، قبل ما ترقد، ولاّ في الترانسبور.', fr: "Chaque niveau se boucle en 3 à 5 minutes. Idéal pendant la récré, avant de dormir, ou dans les transports." },

    'paths.tag':       { ar: 'مساراتنا',       fr: 'Nos parcours' },
    'paths.title':     { ar: 'اختار طريقك.',   fr: 'Choisis ton chemin.' },
    'paths.sub':       { ar: 'مسارين متاحين توا — أخرين بش يجيو. كل مسار يفهّمك من الزيرو حتى لتحدي الپوس.', fr: "Deux parcours actifs aujourd'hui — d'autres arrivent. Chaque parcours te fait progresser de la perception simple jusqu'à un défi boss." },
    'paths.business.title':  { ar: 'بيزنس و إنتربرونوريا', fr: 'Business & Entrepreneuriat' },
    'paths.business.desc':   { ar: 'من أوّل بوتيلة حتى للإطلاق الحقيقي. التكاليف، الثمن، الهامش، الميزانية — كل شي تعلمو وأنت تطلق ماركة العطر متاعك.', fr: "Du premier flacon au lancement réel. Coûts, prix, marges, budgets — appris en lançant ta propre marque de parfum." },
    'paths.data.title':      { ar: 'داتا و تحليل',     fr: 'Data & Analyse' },
    'paths.data.desc':       { ar: 'تولّي المحلّل متاع سامي، عطّار في سيتي الخضراء. تقرى البيوعات، تقارن الشهرة، تلقى الغلطات، تكتبلو الرابور.', fr: "Tu deviens l'analyste de Sami, épicier à Cité El Khadra. Lire ses ventes, comparer ses mois, repérer ses erreurs, écrire son rapport." },
    'paths.start':     { ar: 'إبدا المسار',    fr: 'Commencer le parcours' },

    'how.tag':         { ar: 'كيفاش يخدم',     fr: 'Comment ça marche' },
    'how.title':       { ar: 'ثلاث خطوات. هاكا الكل.', fr: 'Trois étapes. C\'est tout.' },
    'how.1.title':     { ar: 'اختار مسار',     fr: 'Choisis un parcours' },
    'how.1.text':      { ar: 'بيزنس باش تطلق ماركتك. داتا باش تعاون سامي. مسارات أخرى بش تجي قريب.', fr: "Business pour lancer ta marque. Data pour aider Sami. Plus d'options arrivent bientôt." },
    'how.2.title':     { ar: 'حلّ تحديات تفاعلية', fr: 'Résous des défis interactifs' },
    'how.2.text':      { ar: '5 مستويات في كل مسار. كل مستوى يفهّمك مفهوم وأنت تطبّقو — مش وأنت تقرى فيه.', fr: '5 niveaux par parcours. Chaque niveau te fait découvrir un concept en le pratiquant — pas en le lisant.' },
    'how.3.title':     { ar: 'إربح حبّات الجوز و ارتقي', fr: 'Gagne des nuts, monte de niveau' },
    'how.3.text':      { ar: 'كل إجابة صحيحة تجيبلك حبّات جوز. كمّل المستوى، اطلق اللي بعدو. كيما في لعبة حقيقية.', fr: 'Chaque bonne réponse te rapporte des nuts. Termine un niveau, débloque le suivant. Comme dans un vrai jeu.' },

    'test.tag':        { ar: 'شنوّا قالوا',     fr: 'Ce qu\'ils en disent' },
    'test.title':      { ar: 'أوّل ردود الفعل.', fr: 'Les premiers retours.' },
    'test.1.text':     { ar: '"فهمت في 15 دقيقة اللي الأستاذة متاعي ما نجمتش تفهمهولي على مدى ثلاثي. المستوى متاع الهامش، مزيان بالباهي."', fr: '"J\'ai compris en 15 minutes ce que ma prof n\'a pas réussi à m\'expliquer en un trimestre. Le niveau sur la marge brute, c\'est juste génial."' },
    'test.1.name':     { ar: 'ياسمين أ.',       fr: 'Yasmine A.' },
    'test.1.sub':      { ar: '17 سنة · تونس',   fr: '17 ans · Tunis' },
    'test.2.text':     { ar: '"ولدي عمرو ما حلّ كتاب في البيزنس. توا يحكيلي على التكاليف الثابتة و الهوامش في العشاء. ما عاد نعرف شنوّا نقول."', fr: '"Mon fils n\'avait jamais ouvert un livre de business. Maintenant il me parle de coûts fixes et de marges au dîner. Je ne sais plus quoi penser."' },
    'test.2.name':     { ar: 'سامية ك.',       fr: 'Samia K.' },
    'test.2.sub':      { ar: 'ماما، المرسى',   fr: 'Maman, La Marsa' },
    'test.3.text':     { ar: '"المستوى متاع كشف الغلطات يدخّل الإدمان. و اللي مهم، نستعمل اللي نتعلّمو في المشاريع متاعي. بدّل لي كل شي."', fr: '"Le niveau de détection d\'anomalies est addictif. Et surtout, j\'utilise vraiment ce que j\'apprends dans mes projets perso. Ça change tout."' },
    'test.3.name':     { ar: 'مهدي ح.',         fr: 'Mehdi H.' },
    'test.3.sub':      { ar: '16 سنة · سوسة',  fr: '16 ans · Sousse' },

    'cta.title':       { ar: 'محضّر تولّي\nأكثر مستقل ؟', fr: 'Prêt à devenir\nplus autonome ?' },
    'cta.sub':         { ar: 'بلا تسجيل. بلا كارت بنك. كليك واحد و مسار يشبهلك.', fr: "Pas d'inscription. Pas de carte bancaire. Juste un clic et un parcours qui te ressemble." },
    'cta.btn':         { ar: 'إبدا أوّل مستوى متاعي', fr: 'Commencer mon premier niveau' },

    'footer.tagline':  { ar: 'طريق ملعوب نحو الإستقلالية، مصمّم للتلامذة التوانسة.', fr: "Un chemin gamifié vers l'autonomie, pensé pour les lycéens tunisiens." },
    'footer.product':  { ar: 'المنتوج',         fr: 'Produit' },
    'footer.learn':    { ar: 'تعلّم',           fr: 'Apprendre' },
    'footer.about':    { ar: 'علينا',           fr: 'À propos' },
    'footer.mission':  { ar: 'مهمّتنا',         fr: 'Notre mission' },
    'footer.teachers': { ar: 'للأساتذة',       fr: 'Pour les enseignants' },
    'footer.contact':  { ar: 'تواصل',          fr: 'Contact' },
    'footer.legal':    { ar: 'الشروط القانونية', fr: 'Mentions légales' },
    'footer.copy':     { ar: 'Questify · مفكّر في تونس، لتونس.', fr: 'Questify · Pensé en Tunisie, pour la Tunisie.' },

    'soon.title':      { ar: 'مسارات جدد قريب', fr: 'Bientôt — d\'autres parcours' },
    'soon.sub':        { ar: 'كل مسار 5 مستويات باش يحوّل المهارة من حاجة ضبابية لـ ريفلكس مفيد.', fr: 'Chaque parcours, c\'est 5 niveaux pour transformer une compétence floue en réflexe utile.' },
    'soon.finance':    { ar: 'إدارة المال الشخصي', fr: 'Finance personnelle' },
    'soon.negotiation':{ ar: 'التفاوض',          fr: 'Négociation' },
    'soon.code':       { ar: 'برمجة أساسية',     fr: 'Code basique' },
    'soon.comm':       { ar: 'التواصل',          fr: 'Communication' },
    'soon.photo':      { ar: 'تصوير',           fr: 'Photographie' },
    'soon.cooking':    { ar: 'طبخ',             fr: 'Cuisine' },
    'soon.electronics':{ ar: 'الإلكترونيات',     fr: 'Électronique' },

    // Topbar / level pages
    'topbar.home':     { ar: 'الرئيسية',       fr: 'Accueil' },
    'topbar.back':     { ar: 'رجوع',            fr: 'Retour' },
    'topbar.xp':       { ar: 'حبّات جوز',       fr: 'XP' },

    'common.next':     { ar: 'اللي بعدو',      fr: 'Suivant' },
    'common.previous': { ar: 'اللي قبلو',      fr: 'Précédent' },
    'common.continue': { ar: 'كمّل',           fr: 'Continuer' },
    'common.cancel':   { ar: 'إلغاء',          fr: 'Annuler' },
    'common.exit':     { ar: 'أخرج',           fr: 'Quitter' },
    'common.check':    { ar: 'تأكّد',          fr: 'Vérifier' },
    'common.validate': { ar: 'صحّح',           fr: 'Valider' },
    'common.submit':   { ar: 'إرسل',           fr: 'Soumettre' },
    'common.tryagain': { ar: 'حاول مرة أخرى',   fr: 'Réessayer' },
    'common.claim':    { ar: 'إستلم حبّات الجوز', fr: 'Réclamer mes XP' },
    'common.finish':   { ar: 'سدّ',             fr: 'Terminer' },
    'common.boss':     { ar: 'بوس',             fr: 'Boss' },
    'common.locked':   { ar: 'مقفول',           fr: 'Verrouillé' },
    'common.completed':{ ar: 'كمّلتو',          fr: 'Complété' },
    'common.current':  { ar: 'دورك',            fr: 'À toi de jouer' },
    'common.level':    { ar: 'مستوى',           fr: 'Niveau' },
    'common.points':   { ar: 'نقطة',            fr: 'point' },
    'common.locked_msg': { ar: 'كمّل اللي قبلو لول', fr: "Termine le niveau précédent d'abord." },
    'common.complete_title': { ar: 'مبروك !',  fr: 'Bravo !' },
    'common.complete_sub':   { ar: 'مستوى سدّيتو',  fr: 'Niveau terminé' },
    'common.xp_earned':      { ar: 'حبة جوز ربحت', fr: 'XP gagnés' },

    // Float cards (home hero)
    'float.completed':   { ar: 'مستوى 1 سدّيتو', fr: 'Niveau 1 complété' },
    'float.totalEarned': { ar: 'مجموع المربوح',   fr: 'Total gagné' },
    'float.margin':      { ar: 'الهامش الإجمالي', fr: 'Marge brute' },
    'float.nuts':        { ar: 'حبّة جوز',       fr: 'nuts' },
  };

  // ---------- Core ----------
  function getLang() { return current; }
  function isRTL() { return current === 'ar'; }

  function t(key) {
    const entry = DICT[key];
    if (!entry) return key;
    return entry[current] || entry.fr || entry.ar || key;
  }

  function setLang(lang) {
    if (lang === current) return;
    current = lang;
    localStorage.setItem(KEY, lang);
    applyTo(document);
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    // Update mascot position class (RTL flips)
    document.dispatchEvent(new CustomEvent('lang:changed', { detail: { lang } }));
  }

  function applyTo(root = document) {
    const html = document.documentElement;
    html.lang = current;
    html.dir = current === 'ar' ? 'rtl' : 'ltr';

    // Replace text content for [data-i18n]
    root.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    // Replace innerHTML for [data-i18n-html]
    root.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    // Replace attribute values for [data-i18n-attr] (format: "attr1:key1; attr2:key2")
    root.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split(';').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });
  }

  function init() {
    applyTo();
  }

  // ---------- Language switcher ----------
  function makeSwitcher(opts = {}) {
    const wrap = document.createElement('div');
    wrap.className = 'lang-switch';
    wrap.innerHTML = `
      <button class="lang-btn ${current === 'ar' ? 'active' : ''}" data-lang="ar" aria-label="عربي">
        <span class="flag">${FLAGS.tn}</span>
        <span>AR</span>
      </button>
      <button class="lang-btn ${current === 'fr' ? 'active' : ''}" data-lang="fr" aria-label="Français">
        <span class="flag">${FLAGS.fr}</span>
        <span>FR</span>
      </button>
    `;
    wrap.addEventListener('click', e => {
      const btn = e.target.closest('.lang-btn');
      if (!btn) return;
      setLang(btn.dataset.lang);
    });
    return wrap;
  }

  function injectSwitcher(container) {
    if (!container) return;
    const sw = makeSwitcher();
    container.appendChild(sw);
  }

  return { t, getLang, setLang, isRTL, init, applyTo, makeSwitcher, injectSwitcher, FLAGS, DICT };
})();

window.I18N = I18N;
