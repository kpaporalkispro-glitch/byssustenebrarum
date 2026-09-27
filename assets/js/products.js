// ======================================================
// BYSSUS TENEBRARUM
// PRODUCTS.JS
// ======================================================
//
// Catalogue central du site.
//
// DOSSIER DES IMAGES :
//
// assets/images/products/
//
// IMPORTANT :
// toutes les images sont en .png.
//
// Chaque catégorie possède exactement 10 images :
//
// COLLIERS
// collier1.png
// collier2.png
// collier3.png
// collier4.png
// collier5.png
// collier6.png
// collier7.png
// collier8.png
// collier9.png
// collier10.png
//
// PENDENTIFS
// pendentif1.png
// ...
// pendentif10.png
//
// BRACELETS
// bracelet1.png
// ...
// bracelet10.png
//
// BOUCLES
// boucles1.png
// ...
// boucles10.png
//
// BIJOUX DE CORPS
// corps1.png
// ...
// corps10.png
//
// COUPLES
// couple1.png
// ...
// couple10.png
//
// ======================================================



// ======================================================
// IMAGES PAR CATÉGORIE
// ======================================================
//
// Cette partie permet de centraliser les images.
//
// Avantage :
// si un jour tu modifies l'organisation des images,
// tu peux le faire ici sans rechercher chaque chemin.
//
// ======================================================

const CATEGORY_IMAGES = {

  colliers: [
    "assets/images/products/collier1.png",
    "assets/images/products/collier2.png",
    "assets/images/products/collier3.png",
    "assets/images/products/collier4.png",
    "assets/images/products/collier5.png",
    "assets/images/products/collier6.png",
    "assets/images/products/collier7.png",
    "assets/images/products/collier8.png",
    "assets/images/products/collier9.png",
    "assets/images/products/collier10.png"
  ],


  pendentifs: [
    "assets/images/products/pendentif1.png",
    "assets/images/products/pendentif2.png",
    "assets/images/products/pendentif3.png",
    "assets/images/products/pendentif4.png",
    "assets/images/products/pendentif5.png",
    "assets/images/products/pendentif6.png",
    "assets/images/products/pendentif7.png",
    "assets/images/products/pendentif8.png",
    "assets/images/products/pendentif9.png",
    "assets/images/products/pendentif10.png"
  ],


  bracelets: [
    "assets/images/products/bracelet1.png",
    "assets/images/products/bracelet2.png",
    "assets/images/products/bracelet3.png",
    "assets/images/products/bracelet4.png",
    "assets/images/products/bracelet5.png",
    "assets/images/products/bracelet6.png",
    "assets/images/products/bracelet7.png",
    "assets/images/products/bracelet8.png",
    "assets/images/products/bracelet9.png",
    "assets/images/products/bracelet10.png"
  ],


  boucles: [
    "assets/images/products/boucles1.png",
    "assets/images/products/boucles2.png",
    "assets/images/products/boucles3.png",
    "assets/images/products/boucles4.png",
    "assets/images/products/boucles5.png",
    "assets/images/products/boucles6.png",
    "assets/images/products/boucles7.png",
    "assets/images/products/boucles8.png",
    "assets/images/products/boucles9.png",
    "assets/images/products/boucles10.png"
  ],


  corps: [
    "assets/images/products/corps1.png",
    "assets/images/products/corps2.png",
    "assets/images/products/corps3.png",
    "assets/images/products/corps4.png",
    "assets/images/products/corps5.png",
    "assets/images/products/corps6.png",
    "assets/images/products/corps7.png",
    "assets/images/products/corps8.png",
    "assets/images/products/corps9.png",
    "assets/images/products/corps10.png"
  ],


  couples: [
    "assets/images/products/couple1.png",
    "assets/images/products/couple2.png",
    "assets/images/products/couple3.png",
    "assets/images/products/couple4.png",
    "assets/images/products/couple5.png",
    "assets/images/products/couple6.png",
    "assets/images/products/couple7.png",
    "assets/images/products/couple8.png",
    "assets/images/products/couple9.png",
    "assets/images/products/couple10.png"
  ]

};



// ======================================================
// CATALOGUE PRODUITS
// ======================================================

const PRODUCTS = [

  // ======================================================
  // COLLIERS
  // ======================================================

  {
    id: "collier-elise",

    slug: "collier-elise",

    name: "Collier Élise",

    shortName: "Élise",

    category: "colliers",

    categoryLabel: "Colliers",

    audience: [
      "femme",
      "unisexe"
    ],

    collection:
      "gothique-romantique",

    univers: [
      "gothique",
      "romantique",
      "rituel"
    ],

    price: 89,

    compareAtPrice: null,

    currency: "EUR",

    stone:
      "Améthyste",

    stones: [
      "Améthyste"
    ],

    colors: [
      "Noir",
      "Violet profond",
      "Bronze antique"
    ],

    materials: [
      "Fil micro-macramé",
      "Améthyste naturelle",
      "Perles finition bronze antique"
    ],

    stock: 3,

    availability:
      "in-stock",

    madeToOrder:
      false,

    featured:
      true,

    bestseller:
      true,

    new:
      false,

    adjustable:
      true,

    size:
      "Ajustable",

    leadTime:
      "Expédition sous 2 à 4 jours ouvrés",

    description:
      "Un collier en micro-macramé noir centré sur une améthyste, pensé comme une parure sombre, élégante et facile à porter.",

    symbolism:
      "Élise évoque une élégance nocturne, romantique et mystérieuse.",

    care:
      "Éviter l’eau prolongée, le parfum direct et les frottements abrasifs. Ranger à plat dans son pochon.",

    mainImage:
      CATEGORY_IMAGES.colliers[0],

    images: [
      CATEGORY_IMAGES.colliers[0],
      CATEGORY_IMAGES.colliers[1],
      CATEGORY_IMAGES.colliers[2]
    ],

    tags: [
      "amethyste",
      "collier",
      "gothique",
      "romantique",
      "fait-main"
    ]
  },


  {
    id: "collier-nyx",

    slug: "collier-nyx",

    name: "Collier Nyx",

    shortName: "Nyx",

    category: "colliers",

    categoryLabel: "Colliers",

    audience: [
      "femme",
      "unisexe"
    ],

    collection:
      "gothique-nocturne",

    univers: [
      "gothique",
      "mythologique",
      "rituel"
    ],

    price: 72,

    compareAtPrice: null,

    currency: "EUR",

    stone:
      "Améthyste",

    stones: [
      "Améthyste"
    ],

    colors: [
      "Noir",
      "Violet profond",
      "Bronze antique"
    ],

    materials: [
      "Fil micro-macramé",
      "Améthyste naturelle",
      "Perles finition bronze antique"
    ],

    stock: 4,

    availability:
      "in-stock",

    madeToOrder:
      false,

    featured:
      true,

    bestseller:
      true,

    new:
      false,

    adjustable:
      true,

    size:
      "Ajustable",

    leadTime:
      "Expédition sous 2 à 4 jours ouvrés",

    description:
      "Un ras-de-cou sombre et équilibré inspiré de la nuit et des silhouettes gothiques contemporaines.",

    symbolism:
      "Nyx s’inspire de la nuit comme espace de mystère, d’intimité et de transformation.",

    care:
      "Nettoyer délicatement avec un chiffon sec. Ne pas immerger.",

    mainImage:
      CATEGORY_IMAGES.colliers[3],

    images: [
      CATEGORY_IMAGES.colliers[3],
      CATEGORY_IMAGES.colliers[4],
      CATEGORY_IMAGES.colliers[5]
    ],

    tags: [
      "amethyste",
      "ras-de-cou",
      "nyx",
      "gothique"
    ]
  },


  {
    id: "collier-luna",

    slug: "collier-luna",

    name: "Collier Luna",

    shortName: "Luna",

    category: "colliers",

    categoryLabel: "Colliers",

    audience: [
      "femme",
      "unisexe"
    ],

    collection:
      "lunaire",

    univers: [
      "mystique",
      "romantique",
      "mythologique"
    ],

    price: 79,

    compareAtPrice: null,

    currency: "EUR",

    stone:
      "Labradorite",

    stones: [
      "Labradorite",
      "Améthyste"
    ],

    colors: [
      "Noir",
      "Violet",
      "Bronze antique"
    ],

    materials: [
      "Fil micro-macramé",
      "Labradorite naturelle",
      "Améthyste",
      "Perles finition bronze antique"
    ],

    stock: 2,

    availability:
      "in-stock",

    madeToOrder:
      false,

    featured:
      true,

    bestseller:
      false,

    new:
      true,

    adjustable:
      true,

    size:
      "Ajustable",

    leadTime:
      "Expédition sous 2 à 4 jours ouvrés",

    description:
      "Collier artisanal construit autour d’une labradorite aux reflets bleus et dorés.",

    symbolism:
      "Luna joue sur les contrastes entre ombre, lumière et reflets changeants.",

    care:
      "Éviter l’humidité prolongée. Ranger à l’abri de la lumière directe.",

    mainImage:
      CATEGORY_IMAGES.colliers[6],

    images: [
      CATEGORY_IMAGES.colliers[6],
      CATEGORY_IMAGES.colliers[7],
      CATEGORY_IMAGES.colliers[8],
      CATEGORY_IMAGES.colliers[9]
    ],

    tags: [
      "labradorite",
      "lunaire",
      "mystique",
      "collier"
    ]
  },



  // ======================================================
  // PENDENTIFS
  // ======================================================

  {
    id: "pendentif-luna",

    slug: "pendentif-luna",

    name: "Pendentif Luna",

    shortName: "Luna",

    category:
      "pendentifs",

    categoryLabel:
      "Pendentifs",

    audience: [
      "femme",
      "homme",
      "unisexe"
    ],

    collection:
      "lunaire",

    univers: [
      "mystique",
      "minimal",
      "symbolique"
    ],

    price: 59,

    compareAtPrice:
      null,

    currency:
      "EUR",

    stone:
      "Pierre de lune",

    stones: [
      "Pierre de lune"
    ],

    colors: [
      "Noir",
      "Bronze antique"
    ],

    materials: [
      "Fil micro-macramé",
      "Pierre de lune",
      "Perles finition bronze"
    ],

    stock: 5,

    availability:
      "in-stock",

    madeToOrder:
      false,

    featured:
      true,

    bestseller:
      false,

    new:
      false,

    adjustable:
      true,

    size:
      "Cordon ajustable",

    leadTime:
      "Expédition sous 2 à 4 jours ouvrés",

    description:
      "Un pendentif simple et lumineux, pensé comme une porte d’entrée dans l’univers de Byssus Tenebrarum.",

    symbolism:
      "Une pièce douce et nocturne centrée sur la lumière opalescente de la pierre.",

    care:
      "Éviter eau, parfum et produits chimiques.",

    mainImage:
      CATEGORY_IMAGES.pendentifs[0],

    images: [
      CATEGORY_IMAGES.pendentifs[0],
      CATEGORY_IMAGES.pendentifs[1],
      CATEGORY_IMAGES.pendentifs[2],
      CATEGORY_IMAGES.pendentifs[3],
      CATEGORY_IMAGES.pendentifs[4]
    ],

    tags: [
      "pierre-de-lune",
      "pendentif",
      "unisexe",
      "minimal"
    ]
  },


  {
    id: "pendentif-nebuleuse",

    slug:
      "pendentif-nebuleuse",

    name:
      "Pendentif Nébuleuse",

    shortName:
      "Nébuleuse",

    category:
      "pendentifs",

    categoryLabel:
      "Pendentifs",

    audience: [
      "femme",
      "homme",
      "unisexe"
    ],

    collection:
      "cosmique",

    univers: [
      "mystique",
      "mythologique",
      "symbolique"
    ],

    price: 79,

    compareAtPrice:
      null,

    currency:
      "EUR",

    stone:
      "Labradorite",

    stones: [
      "Labradorite",
      "Améthyste"
    ],

    colors: [
      "Noir",
      "Bronze antique"
    ],

    materials: [
      "Fil micro-macramé",
      "Labradorite naturelle",
      "Améthyste",
      "Perles finition bronze"
    ],

    stock: 2,

    availability:
      "in-stock",

    madeToOrder:
      false,

    featured:
      true,

    bestseller:
      true,

    new:
      false,

    adjustable:
      true,

    size:
      "Cordon ajustable",

    leadTime:
      "Expédition sous 2 à 4 jours ouvrés",

    description:
      "Une labradorite centrale sertie en micro-macramé noir dans une construction verticale et équilibrée.",

    symbolism:
      "Nébuleuse évoque les reflets changeants, l’espace et les zones de passage entre ombre et lumière.",

    care:
      "Essuyer avec un chiffon doux et conserver au sec.",

    mainImage:
      CATEGORY_IMAGES.pendentifs[5],

    images: [
      CATEGORY_IMAGES.pendentifs[5],
      CATEGORY_IMAGES.pendentifs[6],
      CATEGORY_IMAGES.pendentifs[7],
      CATEGORY_IMAGES.pendentifs[8],
      CATEGORY_IMAGES.pendentifs[9]
    ],

    tags: [
      "labradorite",
      "amethyste",
      "pendentif",
      "cosmique"
    ]
  },



  // ======================================================
  // BRACELETS
  // ======================================================

  {
    id:
      "bracelet-selene",

    slug:
      "bracelet-selene",

    name:
      "Bracelet Séléné",

    shortName:
      "Séléné",

    category:
      "bracelets",

    categoryLabel:
      "Bracelets",

    audience: [
      "femme",
      "unisexe"
    ],

    collection:
      "lunaire",

    univers: [
      "mystique",
      "romantique",
      "symbolique"
    ],

    price: 49,

    compareAtPrice:
      null,

    currency:
      "EUR",

    stone:
      "Pierre de lune",

    stones: [
      "Pierre de lune"
    ],

    colors: [
      "Noir",
      "Bronze antique"
    ],

    materials: [
      "Fil micro-macramé",
      "Pierre de lune",
      "Perles finition bronze"
    ],

    stock: 6,

    availability:
      "in-stock",

    madeToOrder:
      false,

    featured:
      true,

    bestseller:
      true,

    new:
      false,

    adjustable:
      true,

    size:
      "Ajustable",

    leadTime:
      "Expédition sous 2 à 4 jours ouvrés",

    description:
      "Bracelet noir à pierre de lune, souple, ajustable et facile à porter au quotidien.",

    symbolism:
      "Séléné puise son inspiration dans les formes lunaires.",

    care:
      "Retirer avant douche, baignade ou sport.",

    mainImage:
      CATEGORY_IMAGES.bracelets[0],

    images: [
      CATEGORY_IMAGES.bracelets[0],
      CATEGORY_IMAGES.bracelets[1],
      CATEGORY_IMAGES.bracelets[2]
    ],

    tags: [
      "pierre-de-lune",
      "bracelet",
      "lunaire",
      "ajustable"
    ]
  },


  {
    id:
      "bracelet-astra",

    slug:
      "bracelet-astra",

    name:
      "Bracelet Astra",

    shortName:
      "Astra",

    category:
      "bracelets",

    categoryLabel:
      "Bracelets",

    audience: [
      "femme",
      "unisexe"
    ],

    collection:
      "cosmique",

    univers: [
      "gothique",
      "mystique",
      "symbolique"
    ],

    price: 49,

    compareAtPrice:
      null,

    currency:
      "EUR",

    stone:
      "Améthyste",

    stones: [
      "Améthyste"
    ],

    colors: [
      "Noir",
      "Violet",
      "Bronze antique"
    ],

    materials: [
      "Fil micro-macramé",
      "Améthyste naturelle",
      "Perles finition bronze"
    ],

    stock: 4,

    availability:
      "in-stock",

    madeToOrder:
      false,

    featured:
      true,

    bestseller:
      false,

    new:
      true,

    adjustable:
      true,

    size:
      "Ajustable",

    leadTime:
      "Expédition sous 2 à 4 jours ouvrés",

    description:
      "Bracelet en micro-macramé noir avec pierre violette centrale et détails bronze.",

    symbolism:
      "Astra reprend une esthétique céleste sobre et facilement portable.",

    care:
      "Éviter l’immersion prolongée.",

    mainImage:
      CATEGORY_IMAGES.bracelets[3],

    images: [
      CATEGORY_IMAGES.bracelets[3],
      CATEGORY_IMAGES.bracelets[4],
      CATEGORY_IMAGES.bracelets[5]
    ],

    tags: [
      "amethyste",
      "bracelet",
      "gothique",
      "astral"
    ]
  },


  {
    id:
      "bracelet-orphee",

    slug:
      "bracelet-orphee",

    name:
      "Bracelet Orphée",

    shortName:
      "Orphée",

    category:
      "bracelets",

    categoryLabel:
      "Bracelets",

    audience: [
      "homme",
      "femme",
      "unisexe"
    ],

    collection:
      "gothique-nocturne",

    univers: [
      "gothique",
      "mythologique",
      "sombre"
    ],

    price: 52,

    compareAtPrice:
      null,

    currency:
      "EUR",

    stone:
      "Onyx noir",

    stones: [
      "Onyx noir",
      "Améthyste"
    ],

    colors: [
      "Noir",
      "Bronze antique"
    ],

    materials: [
      "Fil micro-macramé",
      "Onyx noir",
      "Améthyste",
      "Perles finition bronze"
    ],

    stock: 4,

    availability:
      "in-stock",

    madeToOrder:
      false,

    featured:
      true,

    bestseller:
      true,

    new:
      false,

    adjustable:
      true,

    size:
      "Ajustable",

    leadTime:
      "Expédition sous 2 à 4 jours ouvrés",

    description:
      "Un bracelet plus sombre et unisexe articulé autour d’un onyx noir brillant.",

    symbolism:
      "Orphée joue sur l’idée de passage, de musique sombre et de profondeur.",

    care:
      "Nettoyer au chiffon doux et ranger au sec.",

    mainImage:
      CATEGORY_IMAGES.bracelets[6],

    images: [
      CATEGORY_IMAGES.bracelets[6],
      CATEGORY_IMAGES.bracelets[7],
      CATEGORY_IMAGES.bracelets[8],
      CATEGORY_IMAGES.bracelets[9]
    ],

    tags: [
      "onyx",
      "bracelet",
      "homme",
      "unisexe",
      "gothique"
    ]
  },



  // ======================================================
  // BOUCLES D’OREILLES
  // ======================================================

  {
    id:
      "boucles-aurore",

    slug:
      "boucles-aurore",

    name:
      "Boucles Aurore",

    shortName:
      "Aurore",

    category:
      "boucles-oreilles",

    categoryLabel:
      "Boucles d’oreilles",

    audience: [
      "femme",
      "unisexe"
    ],

    collection:
      "gothique-romantique",

    univers: [
      "romantique",
      "mystique",
      "gothique"
    ],

    price: 45,

    compareAtPrice:
      null,

    currency:
      "EUR",

    stone:
      "Améthyste",

    stones: [
      "Améthyste"
    ],

    colors: [
      "Violet",
      "Bronze antique",
      "Noir"
    ],

    materials: [
      "Fil micro-macramé",
      "Améthyste",
      "Crochets finition bronze"
    ],

    stock: 4,

    availability:
      "in-stock",

    madeToOrder:
      false,

    featured:
      true,

    bestseller:
      false,

    new:
      false,

    adjustable:
      false,

    size:
      "Paire",

    leadTime:
      "Expédition sous 2 à 4 jours ouvrés",

    description:
      "Boucles pendantes en micro-macramé avec pierre violette et finition bronze.",

    symbolism:
      "Aurore apporte une lecture plus lumineuse et romantique de l’univers sombre de la marque.",

    care:
      "Retirer avant douche et sommeil.",

    mainImage:
      CATEGORY_IMAGES.boucles[0],

    images: [
      CATEGORY_IMAGES.boucles[0],
      CATEGORY_IMAGES.boucles[1],
      CATEGORY_IMAGES.boucles[2],
      CATEGORY_IMAGES.boucles[3],
      CATEGORY_IMAGES.boucles[4]
    ],

    tags: [
      "boucles",
      "amethyste",
      "romantique",
      "gothique"
    ]
  },


  {
    id:
      "boucles-vesper",

    slug:
      "boucles-vesper",

    name:
      "Boucles Vesper",

    shortName:
      "Vesper",

    category:
      "boucles-oreilles",

    categoryLabel:
      "Boucles d’oreilles",

    audience: [
      "femme",
      "unisexe"
    ],

    collection:
      "gothique-nocturne",

    univers: [
      "gothique",
      "sombre",
      "rituel"
    ],

    price: 42,

    compareAtPrice:
      null,

    currency:
      "EUR",

    stone:
      "Améthyste",

    stones: [
      "Améthyste"
    ],

    colors: [
      "Noir",
      "Violet sombre",
      "Bronze antique"
    ],

    materials: [
      "Fil micro-macramé",
      "Améthyste",
      "Crochets finition bronze"
    ],

    stock: 3,

    availability:
      "in-stock",

    madeToOrder:
      false,

    featured:
      false,

    bestseller:
      false,

    new:
      true,

    adjustable:
      false,

    size:
      "Paire",

    leadTime:
      "Expédition sous 2 à 4 jours ouvrés",

    description:
      "Boucles pendantes plus sombres, fines et nocturnes, avec une construction artisanale légère.",

    symbolism:
      "Vesper s’inspire du soir, du silence et des lumières basses.",

    care:
      "Conserver à l’abri de l’humidité.",

    mainImage:
      CATEGORY_IMAGES.boucles[5],

    images: [
      CATEGORY_IMAGES.boucles[5],
      CATEGORY_IMAGES.boucles[6],
      CATEGORY_IMAGES.boucles[7],
      CATEGORY_IMAGES.boucles[8],
      CATEGORY_IMAGES.boucles[9]
    ],

    tags: [
      "boucles",
      "amethyste",
      "vesper",
      "nocturne"
    ]
  },



  // ======================================================
  // BIJOUX DE CORPS
  // ======================================================

  {
    id:
      "chaine-taille-nyx",

    slug:
      "chaine-taille-nyx",

    name:
      "Chaîne de taille Nyx",

    shortName:
      "Nyx Taille",

    category:
      "bijoux-corps",

    categoryLabel:
      "Bijoux de corps",

    subcategory:
      "chaine-taille",

    audience: [
      "femme",
      "unisexe"
    ],

    collection:
      "gothique-nocturne",

    univers: [
      "gothique",
      "sensuel",
      "shibari-inspire"
    ],

    price: 69,

    compareAtPrice:
      null,

    currency:
      "EUR",

    stone:
      "Pierre de lune",

    stones: [
      "Pierre de lune"
    ],

    colors: [
      "Noir",
      "Bronze antique"
    ],

    materials: [
      "Fil micro-macramé",
      "Chaîne décorative",
      "Pierre naturelle",
      "Connecteurs finition bronze"
    ],

    stock: 1,

    availability:
      "made-to-order",

    madeToOrder:
      true,

    featured:
      true,

    bestseller:
      false,

    new:
      true,

    adjustable:
      true,

    size:
      "Sur mesure / ajustable",

    leadTime:
      "Fabrication sous 7 à 14 jours",

    description:
      "Parure de taille légère combinant micro-macramé et lignes décoratives inspirées du travail de la corde.",

    symbolism:
      "Une pièce pensée pour suivre les lignes du corps sans devenir un accessoire de contrainte.",

    care:
      "Port décoratif uniquement. Retirer avant activité sportive, douche ou sommeil.",

    mainImage:
      CATEGORY_IMAGES.corps[0],

    images: [
      CATEGORY_IMAGES.corps[0],
      CATEGORY_IMAGES.corps[1],
      CATEGORY_IMAGES.corps[2],
      CATEGORY_IMAGES.corps[3],
      CATEGORY_IMAGES.corps[4]
    ],

    tags: [
      "taille",
      "corps",
      "sensuel",
      "gothique"
    ]
  },


  {
    id:
      "bijou-corps-eclipse",

    slug:
      "bijou-corps-eclipse",

    name:
      "Bijou de corps Éclipse",

    shortName:
      "Éclipse",

    category:
      "bijoux-corps",

    categoryLabel:
      "Bijoux de corps",

    subcategory:
      "harnais-simple",

    audience: [
      "femme",
      "homme",
      "unisexe"
    ],

    collection:
      "eclipse",

    univers: [
      "gothique",
      "sensuel",
      "rituel",
      "shibari-inspire"
    ],

    price: 98,

    compareAtPrice:
      null,

    currency:
      "EUR",

    stone:
      "Onyx noir",

    stones: [
      "Onyx noir"
    ],

    colors: [
      "Noir",
      "Bronze antique"
    ],

    materials: [
      "Fil micro-macramé",
      "Onyx noir",
      "Connecteurs décoratifs",
      "Fermetures ajustables"
    ],

    stock: 0,

    availability:
      "made-to-order",

    madeToOrder:
      true,

    featured:
      true,

    bestseller:
      false,

    new:
      true,

    adjustable:
      true,

    size:
      "Sur mesure",

    leadTime:
      "Fabrication sous 10 à 21 jours",

    description:
      "Une parure corporelle simple et structurée inspirée par les lignes de corde et pensée comme un bijou décoratif.",

    symbolism:
      "Éclipse place le fil au centre du dessin du corps, entre ombre et lumière.",

    care:
      "Port décoratif uniquement. Non conçu pour supporter une charge ou servir à l’immobilisation.",

    mainImage:
      CATEGORY_IMAGES.corps[5],

    images: [
      CATEGORY_IMAGES.corps[5],
      CATEGORY_IMAGES.corps[6],
      CATEGORY_IMAGES.corps[7],
      CATEGORY_IMAGES.corps[8],
      CATEGORY_IMAGES.corps[9]
    ],

    tags: [
      "body-jewelry",
      "harnais",
      "onyx",
      "unisexe"
    ]
  },



  // ======================================================
  // COUPLES
  // ======================================================

  {
    id:
      "duo-ames-soeurs",

    slug:
      "duo-ames-soeurs",

    name:
      "Duo Âmes Sœurs",

    shortName:
      "Âmes Sœurs",

    category:
      "couples",

    categoryLabel:
      "Couples",

    audience: [
      "couple"
    ],

    collection:
      "liens",

    univers: [
      "romantique",
      "symbolique",
      "rituel"
    ],

    price: 120,

    compareAtPrice:
      null,

    currency:
      "EUR",

    stone:
      "Onyx & Labradorite",

    stones: [
      "Onyx noir",
      "Labradorite"
    ],

    colors: [
      "Noir",
      "Bronze antique"
    ],

    materials: [
      "Fil micro-macramé",
      "Onyx noir",
      "Labradorite",
      "Perles finition bronze"
    ],

    stock: 0,

    availability:
      "made-to-order",

    madeToOrder:
      true,

    featured:
      true,

    bestseller:
      true,

    new:
      true,

    adjustable:
      true,

    size:
      "Duo ajustable",

    leadTime:
      "Fabrication sous 7 à 14 jours",

    description:
      "Deux bijoux complémentaires pensés pour fonctionner ensemble sans être identiques.",

    symbolism:
      "Une lecture du lien, de la dualité et de la complémentarité à travers deux pièces coordonnées.",

    care:
      "Conserver séparément dans les pochons fournis.",

    mainImage:
      CATEGORY_IMAGES.couples[0],

    images: [
      CATEGORY_IMAGES.couples[0],
      CATEGORY_IMAGES.couples[1],
      CATEGORY_IMAGES.couples[2],
      CATEGORY_IMAGES.couples[3],
      CATEGORY_IMAGES.couples[4],
      CATEGORY_IMAGES.couples[5],
      CATEGORY_IMAGES.couples[6],
      CATEGORY_IMAGES.couples[7],
      CATEGORY_IMAGES.couples[8],
      CATEGORY_IMAGES.couples[9]
    ],

    tags: [
      "couple",
      "duo",
      "onyx",
      "labradorite",
      "symbolique"
    ]
  }

];



// ======================================================
// FILTRES
// ======================================================

const PRODUCT_FILTERS = {

  categories: [

    {
      id: "colliers",
      label: "Colliers"
    },

    {
      id: "pendentifs",
      label: "Pendentifs"
    },

    {
      id: "bracelets",
      label: "Bracelets"
    },

    {
      id: "boucles-oreilles",
      label: "Boucles d’oreilles"
    },

    {
      id: "bijoux-corps",
      label: "Bijoux de corps"
    },

    {
      id: "couples",
      label: "Couples"
    }

  ],


  audiences: [

    {
      id: "femme",
      label: "Femme"
    },

    {
      id: "homme",
      label: "Homme"
    },

    {
      id: "unisexe",
      label: "Unisexe"
    },

    {
      id: "couple",
      label: "Couple"
    }

  ],


  univers: [

    {
      id: "gothique",
      label: "Gothique"
    },

    {
      id: "romantique",
      label: "Romantique"
    },

    {
      id: "mystique",
      label: "Mystique"
    },

    {
      id: "mythologique",
      label: "Mythologique"
    },

    {
      id: "rituel",
      label: "Rituel"
    },

    {
      id: "symbolique",
      label: "Symbolique"
    },

    {
      id: "sensuel",
      label: "Sensuel"
    },

    {
      id: "shibari-inspire",
      label: "Inspiré du shibari"
    }

  ],


  stones: [

    "Améthyste",
    "Labradorite",
    "Pierre de lune",
    "Onyx noir"

  ],


  availability: [

    {
      id: "in-stock",
      label: "En stock"
    },

    {
      id: "made-to-order",
      label: "Sur commande"
    }

  ]

};



// ======================================================
// RÉCUPÉRER UN PRODUIT PAR ID
// ======================================================

function getProductById(id) {

  return PRODUCTS.find(
    product =>
      product.id === id
  )
  ||
  null;

}



// ======================================================
// RÉCUPÉRER UN PRODUIT PAR SLUG
// ======================================================

function getProductBySlug(slug) {

  return PRODUCTS.find(
    product =>
      product.slug === slug
  )
  ||
  null;

}



// ======================================================
// PRODUITS PAR CATÉGORIE
// ======================================================

function getProductsByCategory(category) {

  return PRODUCTS.filter(
    product =>
      product.category === category
  );

}



// ======================================================
// PRODUITS PAR PUBLIC
// ======================================================

function getProductsByAudience(audience) {

  return PRODUCTS.filter(
    product =>
      product.audience.includes(
        audience
      )
  );

}



// ======================================================
// PRODUITS PAR UNIVERS
// ======================================================

function getProductsByUniverse(universe) {

  return PRODUCTS.filter(
    product =>
      product.univers.includes(
        universe
      )
  );

}



// ======================================================
// PRODUITS PAR PIERRE
// ======================================================

function getProductsByStone(stone) {

  return PRODUCTS.filter(
    product =>
      product.stones.includes(
        stone
      )
  );

}



// ======================================================
// PRODUITS MIS EN AVANT
// ======================================================

function getFeaturedProducts() {

  return PRODUCTS.filter(
    product =>
      product.featured
  );

}



// ======================================================
// BEST-SELLERS
// ======================================================

function getBestsellers() {

  return PRODUCTS.filter(
    product =>
      product.bestseller
  );

}



// ======================================================
// NOUVEAUTÉS
// ======================================================

function getNewProducts() {

  return PRODUCTS.filter(
    product =>
      product.new
  );

}



// ======================================================
// PRODUITS EN STOCK
// ======================================================

function getProductsInStock() {

  return PRODUCTS.filter(
    product =>
      product.availability ===
      "in-stock"
  );

}



// ======================================================
// PRODUITS SUR COMMANDE
// ======================================================

function getMadeToOrderProducts() {

  return PRODUCTS.filter(
    product =>
      product.availability ===
      "made-to-order"
  );

}



// ======================================================
// IMAGES D'UNE CATÉGORIE
// ======================================================

function getCategoryImages(category) {

  return CATEGORY_IMAGES[
    category
  ]
  ||
  [];

}



// ======================================================
// FILTRE MULTI-CRITÈRES
// ======================================================

function filterProducts({

  category = null,

  audience = null,

  universe = null,

  stone = null,

  availability = null,

  minPrice = null,

  maxPrice = null

} = {}) {


  return PRODUCTS.filter(
    product => {


      if (
        category
        &&
        product.category !==
        category
      ) {

        return false;

      }


      if (
        audience
        &&
        !product.audience.includes(
          audience
        )
      ) {

        return false;

      }


      if (
        universe
        &&
        !product.univers.includes(
          universe
        )
      ) {

        return false;

      }


      if (
        stone
        &&
        !product.stones.includes(
          stone
        )
      ) {

        return false;

      }


      if (
        availability
        &&
        product.availability !==
        availability
      ) {

        return false;

      }


      if (
        minPrice !== null
        &&
        Number(
          product.price
        )
        <
        Number(
          minPrice
        )
      ) {

        return false;

      }


      if (
        maxPrice !== null
        &&
        Number(
          product.price
        )
        >
        Number(
          maxPrice
        )
      ) {

        return false;

      }


      return true;

    }
  );

}



// ======================================================
// RECHERCHE TEXTE
// ======================================================

function searchProducts(query) {

  if (!query) {

    return PRODUCTS;

  }


  const normalizedQuery =
    normalizeSearchText(
      query
    );


  return PRODUCTS.filter(
    product => {


      const searchableText = [

        product.name,

        product.shortName,

        product.category,

        product.categoryLabel,

        product.collection,

        product.stone,

        product.description,

        product.symbolism,

        ...(product.stones || []),

        ...(product.univers || []),

        ...(product.audience || []),

        ...(product.tags || [])

      ]
        .join(" ");


      return normalizeSearchText(
        searchableText
      )
        .includes(
          normalizedQuery
        );

    }
  );

}



// ======================================================
// NORMALISATION DE RECHERCHE
// ======================================================

function normalizeSearchText(value) {

  return String(
    value || ""
  )
    .toLowerCase()
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    );

}



// ======================================================
// FORMAT PRIX
// ======================================================

function formatPrice(price) {

  return new Intl.NumberFormat(
    "fr-FR",
    {

      style:
        "currency",

      currency:
        "EUR"

    }
  )
    .format(
      Number(
        price || 0
      )
    );

}



// ======================================================
// EXPORTS GLOBAUX
// ======================================================
//
// Ces fonctions deviennent accessibles
// depuis toutes les pages HTML.
//
// ======================================================

window.CATEGORY_IMAGES =
  CATEGORY_IMAGES;


window.PRODUCTS =
  PRODUCTS;


window.PRODUCT_FILTERS =
  PRODUCT_FILTERS;


window.getProductById =
  getProductById;


window.getProductBySlug =
  getProductBySlug;


window.getProductsByCategory =
  getProductsByCategory;


window.getProductsByAudience =
  getProductsByAudience;


window.getProductsByUniverse =
  getProductsByUniverse;


window.getProductsByStone =
  getProductsByStone;


window.getFeaturedProducts =
  getFeaturedProducts;


window.getBestsellers =
  getBestsellers;


window.getNewProducts =
  getNewProducts;


window.getProductsInStock =
  getProductsInStock;


window.getMadeToOrderProducts =
  getMadeToOrderProducts;


window.getCategoryImages =
  getCategoryImages;


window.filterProducts =
  filterProducts;


window.searchProducts =
  searchProducts;


window.normalizeSearchText =
  normalizeSearchText;


window.formatPrice =
  formatPrice;
