/* ============================================
   QUESTIFY — LEVEL CONTENT (Business + Data)
   Bilingual (Tunisian Darija + French)
   ============================================ */

// Helper: returns the current-language string from a {ar, fr} object
//         OR the string as-is if it's already a plain string.
function T(value) {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    if (window.I18N) return value[I18N.getLang()] || value.fr || value.ar || '';
    return value.ar || value.fr || '';
}
window.T = T;

const PATHS = {
    business: {
        id: 'business',
        title: { ar: 'بيزنس و إنتربرونوريا', fr: 'Business & Entrepreneuriat' },
        short: { ar: 'بيزنس', fr: 'Business' },
        tagline: { ar: 'إطلق ماركة العطر متاعك.', fr: 'Lance ta marque de parfum.' },
        description: { ar: 'خمس مستويات باش تفهم التكاليف، الأثمنة، الهامش — و باش تطلق منتوج يربّحلك بصحيح.', fr: 'Cinq niveaux pour comprendre les coûts, les prix, la marge — et lancer un produit qui rapporte vraiment.' },
        badgeClass: 'badge-business',
        cardClass: 'business',
        levels: [
            { num: 1, title: { ar: 'شنوّا هي التكلفة ؟', fr: "C'est quoi un coût ?" }, desc: { ar: 'لقى اللي يكلّفك بصحيح كي تنتج.', fr: "Repère ce qui coûte vraiment quand tu fabriques." }, xp: 10 },
            { num: 2, title: { ar: 'ثابت ولاّ متغيّر ؟', fr: 'Coût fixe vs variable' }, desc: { ar: 'صنّف كل تكلفة حسب كيفاش تتبدّل.', fr: "Classe chaque charge selon comment elle évolue." }, xp: 15 },
            { num: 3, title: { ar: 'إحسب سعر التكلفة', fr: 'Calculer un prix de revient' }, desc: { ar: 'إجمع، إقسم، لقى الثمن المناسب.', fr: 'Additionne, divise, trouve le bon prix.' }, xp: 20 },
            { num: 4, title: { ar: 'الهامش الإجمالي', fr: 'La marge brute' }, desc: { ar: 'أنا ثمن يخلّيك تعيش بهامش معقول ؟', fr: 'Quel prix te donne assez de marge pour vivre ?' }, xp: 25 },
            { num: 5, title: { ar: 'إطلق ماركتك (بوس)', fr: 'Lancer ta marque (Boss)' }, desc: { ar: 'وزّع 500 دينار، إعمل ربح. بلا تفسير.', fr: 'Alloue 500 TND, fais un profit. Pas de tutoriel.' }, xp: 50 },
        ]
    },
    data: {
        id: 'data',
        title: { ar: 'داتا و تحليل', fr: 'Data & Analyse' },
        short: { ar: 'داتا', fr: 'Data' },
        tagline: { ar: 'عاون سامي يدبّر العطّارية متاعو.', fr: 'Aide Sami à mieux gérer son épicerie.' },
        description: { ar: 'خمس مستويات باش تقرى الرسومات، تقارن الشهور، تحسب التغيّرات و تكتب توصيات بصحيح.', fr: 'Cinq niveaux pour lire les graphiques, comparer des périodes, calculer des variations et écrire de vraies recommandations.' },
        badgeClass: 'badge-data',
        cardClass: 'data',
        levels: [
            { num: 1, title: { ar: 'إقرى رسم بياني', fr: 'Lire un graphique à barres' }, desc: { ar: 'لقى القمم، الفجوات، الفروقات.', fr: 'Identifie les pics, les creux, les écarts.' }, xp: 10 },
            { num: 2, title: { ar: 'قارن جوج فترات', fr: 'Comparer deux périodes' }, desc: { ar: 'جانفي مقابل فيفري — شكون طلع، شكون هبط ؟', fr: 'Janvier vs Février — qui monte, qui chute ?' }, xp: 15 },
            { num: 3, title: { ar: 'إحسب نسبة التغيّر', fr: 'Calculer une variation en %' }, desc: { ar: 'بش تخترع الفورمول وحدك.', fr: 'Tu vas réinventer la formule toi-même.' }, xp: 20 },
            { num: 4, title: { ar: 'لقى الأخطاء', fr: 'Détecter des anomalies' }, desc: { ar: '4 غلطات مخبية في الداتا. لقاهم.', fr: '4 erreurs cachées dans les données. Trouve-les.' }, xp: 25 },
            { num: 5, title: { ar: 'رابور لسامي (بوس)', fr: 'Rapport pour Sami (Boss)' }, desc: { ar: 'ثلاث أسئلة. جاوب كيما المحترف.', fr: 'Trois questions urgentes. Réponds comme un pro.' }, xp: 50 },
        ]
    }
};

// ============ BUSINESS LEVEL CONTENT ============
const BUSINESS_L1 = {
    intro: "تحب تطلق بارفان متاعك. قبل ما تحدد السوم، لازم تعرف قداش تتكلّفلك باش تصنع دبوزة وحدة بالرسمي.",
    question: "انزل على أي حاجة تتسمى تكلفة تصنيع :",
    elements: [
        { nom: "ماء ورد", estUnCout: true, explication: "هذي مادة أولية — تخلصها على كل دبوزة تصنعها." },
        { nom: "دبوزة بلار", estUnCout: true, explication: "التلفيف عندو تكلفة مباشرة على كل كعبة تتصنع." },
        { nom: "تيكي مطبوعة", estUnCout: true, explication: "حتى تيكي صغيرة تتكلف حاجة باش تتصنع." },
        { nom: "كراء المحل", estUnCout: true, explication: "حتى كان ما تصنع شيء هالشهر، راك باش تخلص الكراء." },
        { nom: "فكرة المؤسس", estUnCout: false, explication: "الفكرة ما عندهاش تكلفة تصنيع مباشرة — هذي قيمة فكرية مش مصروف." },
        { nom: "إسم الماركة", estUnCout: false, explication: "الإسم في حد ذاته ما يتكلف شيء باش يتصنع — إلا إذا سجلتو قانونيا (ووقتها تولي تكلفة قانونية مش تصنيع)." }
    ],
    feedbackSucces: "بالضبط. أي حاجة تستهلك موارد باش تتصنع = تكلفة.",
    feedbackEchec: "لا مش هكاكا. خمم في الحاجات اللي تستهلكها ولا تنقص كي تصنع دبوزة."
};

const BUSINESS_L2 = {
    scenario: "جيت تصنع 10 دبابز، ومن بعد قررت باش تصنع 100. حط كل مصروف في البلاصة الصحيحة متاعو.",
    charges: [
        { nom: "كراء اللابو", montant: "400 دينار/الشهر", type: "fixe", explication: "تصنع 1 ولا 1000، باش تخلص 400. هذي تكلفة ثابتة." },
        { nom: "زيت الياسمين", montant: "3.5 دينار الدبوزة", type: "variable", explication: "قد ما تصنع أكثر، قد ما تشري أكثر. المجموع يتبدل مع الكمية." },
        { nom: "دبابز بلار", montant: "5 دينار الكعبة", type: "variable", explication: "1 دبوزة = 1 دبوزة بلار. التكلفة تكبر مع الإنتاج." },
        { nom: "تيكيات", montant: "0.8 دينار الكعبة", type: "variable", explication: "تكلفة مباشرة على الكعبة." },
        { nom: "اشتراك لوجيسيال المحاسبة", montant: "35 دينار/الشهر", type: "fixe", explication: "تخلص هالمبلغ مهما كانت الكمية اللي تصنعها." },
        { nom: "ضوء اللابو", montant: "يتبدل حسب الاستعمال", type: "variable", piege: true, explication: "فخ! الضوء يظهر ثابت أما هو يزيد كي تخدم الماكينات أكثر. يتسمى تكلفة متغيرة (أو شبه متغيرة)." },
        { nom: "شهرية المساعد متاعك", montant: "800 دينار/الشهر", type: "fixe", explication: "شهرية قارة ما تتبدلش مع الكمية اللي تصنعها." },
        { nom: "تغليف كادو", montant: "2 دينار عالكوموند", type: "variable", explication: "تتصرف كان كي الكليون يطلبها — تكلفة متغيرة مع الطلبية." }
    ],
    regleARetenir: "تكلفة ثابتة = ما تتبدلش مع الكمية. تكلفة متغيرة = تكبر مع كل كعبة تصنعها."
};

const BUSINESS_L3 = {
    donnees: {
        lot: 50,
        couts: [
            { nom: "زيت أساسي", total: 175, unitaire: 3.5 },
            { nom: "دبابز", total: 250, unitaire: 5 },
            { nom: "تيكيات", total: 40, unitaire: 0.8 },
            { nom: "باي الكراء", total: 80, unitaire: 1.6 },
            { nom: "تغليف", total: 60, unitaire: 1.2 }
        ],
        totalLot: 605,
        coutUnitaire: 12.1
    },
    questions: [{
            enonce: "قداش التكلفة الجملية باش تصنع 50 دبوزة ?",
            reponseCorrecte: 605,
            feedbackErreur: "اجمع كل التكاليف الكلها. ومعاهم الكراء عاد !",
            feedbackSucces: "هايل. 605 دينار لـ 50 دبوزة."
        },
        {
            enonce: "بقداش تطلّعلك الدبوزة الواحدة ؟ (prix de revient)",
            reponseCorrecte: 12.1,
            feedbackErreur: "اقسم التكلفة الجملية على عدد الدبابز : 605 ÷ 50.",
            feedbackSucces: "بالضبط. 12,1 دينار للدبوزة."
        },
        {
            enonce: "من ضمن ها 3 أثمان، شكون فيهم يخليلك على الأقل 30% هامش ربح (marge) ?",
            choix: [
                { prix: 14, marge: "13,6%", correct: false },
                { prix: 18, marge: "32,6%", correct: true },
                { prix: 16, marge: "24,2%", correct: false }
            ],
            feedbackSucces: "إي نعم. بـ 18 دينار، هامش الربح متاعك (18-12,1)/12,1 = 32,6%. فوق الـ 30%."
        }
    ],
    piegeClassique: "تنسى باش تقسم على عدد الكعبات — هكاكة تلقى تكلفة اللو كامل، مش تكلفة الكعبة."
};

const BUSINESS_L4 = {
    prixRevient: 22,
    contextMarche: "Des parfums similaires se vendent entre 45 et 65 TND à Tunis.",
    seuils: { tropSerre: 30, viable: 50, excellent: 65 },
    verdicts: {
        tropSerre: "Trop serré — tu risques de perdre de l'argent dès que tu as une dépense imprévue.",
        viable: "Viable — tu couvres tes coûts et tu gagnes quelque chose.",
        excellent: "Excellent — marge confortable, tu peux investir dans la croissance."
    },
    scenarios: [
        { nom: "Prix low-cost", prixVente: 28, commentaire: "Tu vends moins cher que tout le monde. Mais est-ce que ça vaut le coup ?" },
        { nom: "Prix marché", prixVente: 55, commentaire: "Dans la moyenne de Tunis. Confortable mais sans différenciation." },
        { nom: "Prix premium", prixVente: 72, commentaire: "Tu te positionnes comme une marque de luxe artisanale." }
    ],
    questionFinale: "Tu veux exactement 40% de marge. Quel prix dois-tu fixer ?",
    reponseFinale: 36.67,
    formule: "Prix = Prix de revient ÷ (1 - marge souhaitée) = 22 ÷ 0.6 = 36,67 TND"
};

const BUSINESS_L5 = {
    budget: 500,
    categories: [{
            nom: "Matières premières",
            options: [
                { description: "Formule basique (eau florale + fragrance synthétique)", cout: 80, unitesProduites: 15, qualite: 1 },
                { description: "Formule mid-range (huile essentielle de jasmin tunisien)", cout: 150, unitesProduites: 20, qualite: 2 },
                { description: "Formule premium (huile de rose + oud)", cout: 240, unitesProduites: 18, qualite: 3 }
            ]
        },
        {
            nom: "Emballage",
            options: [
                { description: "Flacon plastique + étiquette simple", cout: 30, bonusPrix: 0, qualite: 1 },
                { description: "Flacon verre + étiquette dorée", cout: 90, bonusPrix: 15, qualite: 2 },
                { description: "Coffret cadeau premium", cout: 150, bonusPrix: 30, qualite: 3 }
            ]
        },
        {
            nom: "Marketing",
            options: [
                { description: "Bouche à oreille uniquement", cout: 0, tauxVente: 0.60 },
                { description: "Posts Instagram + stories", cout: 60, tauxVente: 0.75 },
                { description: "Campagne influenceur local Tunis", cout: 120, tauxVente: 0.88 }
            ]
        },
        {
            nom: "Stock de sécurité",
            options: [
                { description: "Aucun stock de sécurité", cout: 0, risque: "Élevé" },
                { description: "10% de stock tampon", cout: 40, risque: "Moyen" },
                { description: "25% de stock tampon", cout: 80, risque: "Faible" }
            ]
        }
    ],
    prixMarcheDefaut: 55,
    questionsReflexion: [
        "Si tu refaisais ce choix avec 800 TND de budget, qu'est-ce que tu changerais en premier ?",
        "Tu as fait X TND de bénéfice. Ton voisin a fait le même produit et gagné 40% de plus. Qu'a-t-il probablement fait différemment ?"
    ]
};

// ============ DATA LEVEL CONTENT ============
const DATA_L1 = {
    magasin: "Chez Sami — Épicerie, Cité El Khadra, Tunis",
    mois: "Janvier",
    donnees: [
        { produit: "Harissa Conserve", ventes: 142 },
        { produit: "Huile d'olive", ventes: 89 },
        { produit: "Couscous 1kg", ventes: 210 },
        { produit: "Lben (fermenté)", ventes: 67 },
        { produit: "Pain de mie", ventes: 178 }
    ],
    questions: [{
            enonce: "Quel produit s'est le plus vendu en janvier ?",
            choix: ["Harissa Conserve", "Huile d'olive", "Couscous 1kg", "Pain de mie"],
            reponseCorrecte: "Couscous 1kg",
            explication: "210 unités — c'est le plus grand bar sur le graphique."
        },
        {
            enonce: "Quel produit s'est le moins vendu ?",
            choix: ["Huile d'olive", "Lben (fermenté)", "Harissa Conserve", "Pain de mie"],
            reponseCorrecte: "Lben (fermenté)",
            explication: "67 unités seulement. C'est clairement la barre la plus courte."
        },
        {
            enonce: "Combien d'unités séparent le 1er et le dernier ?",
            choix: [130, 143, 155, 121],
            reponseCorrecte: 143,
            explication: "210 - 67 = 143 unités d'écart."
        },
        {
            enonce: "Si Sami arrête de vendre le Lben, quel est le nouveau total ?",
            choix: [609, 619, 629, 599],
            reponseCorrecte: 619,
            explication: "142 + 89 + 210 + 178 = 619 (on retire les 67 du Lben)."
        }
    ]
};

const DATA_L2 = {
    donnees: [
        { produit: "Harissa Conserve", janv: 142, fevr: 168, prixUnitaire: 3.5 },
        { produit: "Huile d'olive", janv: 89, fevr: 61, prixUnitaire: 18 },
        { produit: "Couscous 1kg", janv: 210, fevr: 210, prixUnitaire: 4.2 },
        { produit: "Lben (fermenté)", janv: 67, fevr: 95, prixUnitaire: 1.8 },
        { produit: "Pain de mie", janv: 178, fevr: 134, prixUnitaire: 2.1 }
    ],
    casContreIntuitif: {
        produit: "Huile d'olive",
        explication: "L'huile a moins vendu en février (61 vs 89 unités) MAIS a généré plus de revenus car son prix a augmenté. Volume en baisse, revenus en hausse."
    },
    questions: [{
            enonce: "Quel produit a le plus progressé en volume ?",
            choix: ["Harissa Conserve", "Lben (fermenté)", "Couscous 1kg", "Pain de mie"],
            reponseCorrecte: "Lben (fermenté)",
            explication: "+28 unités. Tous les autres ont moins progressé."
        },
        {
            enonce: "Quel produit a le plus chuté en volume ?",
            choix: ["Huile d'olive", "Pain de mie", "Harissa Conserve", "Lben"],
            reponseCorrecte: "Pain de mie",
            explication: "-44 unités. C'est la plus grosse baisse en valeur absolue."
        },
        {
            enonce: "Lequel est resté stable ?",
            choix: ["Huile d'olive", "Couscous 1kg", "Lben", "Pain de mie"],
            reponseCorrecte: "Couscous 1kg",
            explication: "210 unités en janvier ET en février. Stable."
        },
        {
            enonce: "L'huile d'olive a moins vendu — mais Sami a-t-il gagné plus ou moins d'argent dessus ?",
            choix: ["Plus", "Moins", "Pareil"],
            reponseCorrecte: "Plus",
            explication: "Volume baisse, mais prix augmente. Revenu en hausse. C'est le cas contre-intuitif."
        }
    ]
};

const DATA_L3 = {
    etapes: [{
            type: "observation",
            enonce: "La Harissa est passée de 142 unités en janvier à 168 en février. De combien d'unités ça a augmenté ?",
            aide: "Soustraction simple.",
            reponseCorrecte: 26,
            feedback: "Parfait. 168 - 142 = 26 unités de plus."
        },
        {
            type: "ratio",
            enonce: "Ces 26 unités, c'est combien par rapport aux 142 du départ ?",
            aide: "Divise le changement par la valeur de départ. Arrondis à 3 chiffres après la virgule.",
            reponseCorrecte: 0.183,
            tolerance: 0.01,
            feedback: "26 ÷ 142 = 0,183. Tu viens d'inventer le taux de variation !"
        },
        {
            type: "formule",
            enonce: "En pourcentage, ça donne quoi ?",
            reponseCorrecte: 18.3,
            tolerance: 0.5,
            feedback: "0,183 × 100 = 18,3%. La Harissa a progressé de 18,3%."
        },
        {
            type: "application",
            enonce: "Applique la même formule : Huile d'olive — 89 unités en janvier, 61 en février. Variation en % ?",
            reponseCorrecte: -31.5,
            tolerance: 1,
            feedback: "(61-89) ÷ 89 × 100 = -31,5%. Le signe négatif = une baisse."
        },
        {
            type: "piege",
            enonce: "Le Pain de mie est passé de 178 à 134. Un client dit 'c'est une baisse de 44'. A-t-il raison ?",
            choix: [
                { texte: "Totalement raison", correct: false },
                { texte: "Partiellement raison", correct: true },
                { texte: "Totalement faux", correct: false }
            ],
            feedback: "44 c'est la variation absolue. La variation relative (%) c'est -24,7%. Les deux sont vrais — mais le % permet de comparer des produits de volumes différents."
        }
    ],
    formuleRevee: "(Nouvelle valeur − Ancienne valeur) ÷ Ancienne valeur × 100"
};

const DATA_L4 = {
    instructions: "Sami t'envoie ses données brutes du mois. Quelque chose ne va pas. Trouve les 4 erreurs avant que le timer expire.",
    timer: 180,
    entrees: [
        { id: 1, date: "03/01", produit: "Harissa Conserve", quantite: 12, prixUnitaire: 3.5, total: 42, anomalie: false },
        { id: 2, date: "03/01", produit: "Couscous 1kg", quantite: 25, prixUnitaire: 4.2, total: 105, anomalie: false },
        { id: 3, date: "04/01", produit: "Huile d'olive", quantite: -8, prixUnitaire: 18, total: -144, anomalie: true, type: "Valeur impossible", explication: "Une quantité vendue ne peut pas être négative. C'est probablement un retour mal enregistré." },
        { id: 4, date: "04/01", produit: "Pain de mie", quantite: 18, prixUnitaire: 2.1, total: 37.8, anomalie: false },
        { id: 5, date: "05/01", produit: "Lben", quantite: 9, prixUnitaire: 1.8, total: 16.2, anomalie: false },
        { id: 6, date: "05/01", produit: "Harissa Conserve", quantite: 14, prixUnitaire: 3.5, total: 49, anomalie: false },
        { id: 7, date: "06/01", produit: "Couscous 1kg", quantite: "vingt", prixUnitaire: 4.2, total: 84, anomalie: true, type: "Type incohérent", explication: "La quantité doit être un nombre, pas du texte." },
        { id: 8, date: "06/01", produit: "Pain de mie", quantite: 22, prixUnitaire: 2.1, total: 46.2, anomalie: false },
        { id: 9, date: "07/01", produit: "Huile d'olive", quantite: 7, prixUnitaire: 18, total: 126, anomalie: false },
        { id: 10, date: "07/01", produit: "Lben", quantite: 11, prixUnitaire: 1.8, total: 19.8, anomalie: false },
        { id: 11, date: "08/01", produit: "Harissa Conserve", quantite: 16, prixUnitaire: 3.5, total: 56, anomalie: false },
        { id: 12, date: "08/01", produit: "Couscous 1kg", quantite: 19, prixUnitaire: 4.2, total: 79.8, anomalie: false },
        { id: 13, date: "08/01", produit: "Harissa Conserve", quantite: 17, prixUnitaire: 3.5, total: 59.5, anomalie: true, type: "Duplication", explication: "Le 08/01, la Harissa apparaît deux fois avec des quantités légèrement différentes. Probable double saisie." },
        { id: 14, date: "09/01", produit: "Pain de mie", quantite: 20, prixUnitaire: 2.1, total: 42, anomalie: false },
        { id: 15, date: "09/01", produit: "Lben", quantite: 8, prixUnitaire: 1.8, total: 14.4, anomalie: false },
        { id: 16, date: "10/01", produit: "Couscous 1kg", quantite: 850, prixUnitaire: 4.2, total: 3570, anomalie: true, type: "Valeur aberrante", explication: "850 kg en une journée pour une épicerie de quartier ? C'est 10x la normale. Probable faute de frappe." },
        { id: 17, date: "10/01", produit: "Huile d'olive", quantite: 6, prixUnitaire: 18, total: 108, anomalie: false },
        { id: 18, date: "11/01", produit: "Harissa Conserve", quantite: 13, prixUnitaire: 3.5, total: 45.5, anomalie: false },
        { id: 19, date: "11/01", produit: "Pain de mie", quantite: 17, prixUnitaire: 2.1, total: 35.7, anomalie: false },
        { id: 20, date: "12/01", produit: "Lben", quantite: 10, prixUnitaire: 1.8, total: 18, anomalie: false }
    ]
};

const DATA_L5 = {
    scenario: "Sami t'a confié 3 mois de données. Il a 3 questions urgentes avant de passer sa commande fournisseur demain.",
    produits: ["Harissa Conserve", "Huile d'olive", "Couscous 1kg", "Lben", "Pain de mie", "Biscuits Samira", "Eau Safia 1.5L", "Café Ezzoubeidi"],
    mois: ["Novembre", "Décembre", "Janvier"],
    ventes: {
        "Harissa Conserve": [98, 145, 142],
        "Huile d'olive": [102, 88, 89],
        "Couscous 1kg": [189, 220, 210],
        "Lben": [45, 38, 67],
        "Pain de mie": [155, 162, 178],
        "Biscuits Samira": [67, 201, 34],
        "Eau Safia 1.5L": [310, 289, 305],
        "Café Ezzoubeidi": [88, 91, 87]
    },
    marges: {
        "Harissa Conserve": 0.35,
        "Huile d'olive": 0.22,
        "Couscous 1kg": 0.18,
        "Lben": 0.28,
        "Pain de mie": 0.15,
        "Biscuits Samira": 0.42,
        "Eau Safia 1.5L": 0.12,
        "Café Ezzoubeidi": 0.38
    },
    questions: [{
            enonce: "Quel produit Sami devrait-il arrêter de commander ?",
            reponses: [
                { choix: "Lben", justification: "Ventes faibles", correct: false },
                { choix: "Huile d'olive", justification: "Tendance baissière", correct: false },
                { choix: "Aucun — ajuster les Biscuits", justification: "Pic en décembre = saisonnier. Marge à 42% = très rentable. Ajuster, pas supprimer.", correct: true }
            ],
            nuance: "Les Biscuits Samira ont une marge de 42%. Le pic en décembre est saisonnier (fêtes). Il faut adapter, pas supprimer."
        },
        {
            enonce: "Quel produit mettre en promotion ce mois ?",
            reponses: [
                { choix: "Eau Safia 1.5L", justification: "Le plus vendu en volume", correct: false },
                { choix: "Café Ezzoubeidi", justification: "Marge 38% + ventes stables = promo sans risque", correct: true },
                { choix: "Couscous 1kg", justification: "Produit populaire", correct: false }
            ],
            nuance: "L'Eau a la marge la plus faible (12%). Le Café offre le meilleur équilibre marge × stabilité."
        },
        {
            enonce: "Que dire à Sami sur les Biscuits Samira ?",
            reponses: [
                { choix: "C'est un mauvais produit, arrête.", justification: "Janvier a chuté à 34", correct: false },
                { choix: "Stocke plus pour décembre prochain.", justification: "Pic saisonnier = opportunité ratée", correct: true },
                { choix: "Augmente le prix.", justification: "Plus de marge", correct: false }
            ],
            nuance: "Si Sami avait eu plus de stock en décembre, il aurait pu faire +800 TND. La saisonnalité est une opportunité."
        }
    ]
};

window.PATHS = PATHS;
window.LEVELS = {
    'business-l1': BUSINESS_L1,
    'business-l2': BUSINESS_L2,
    'business-l3': BUSINESS_L3,
    'business-l4': BUSINESS_L4,
    'business-l5': BUSINESS_L5,
    'data-l1': DATA_L1,
    'data-l2': DATA_L2,
    'data-l3': DATA_L3,
    'data-l4': DATA_L4,
    'data-l5': DATA_L5,
};