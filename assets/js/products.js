// Byssus Tenebrarum — catalogue central
// Les visuels produits suivent une règle unique : categorie + numéro (1 à 10).
// Dossier : assets/images/products/

const productImages = (prefix, numbers) => numbers.map(n => `assets/images/products/${prefix}${n}.jpg`);

const PRODUCTS = [
  {
    id:'collier-elise', slug:'collier-elise', name:'Collier Élise', category:'colliers', categoryLabel:'Colliers', imagePrefix:'collier',
    audience:['femme','unisexe'], collection:'gothique-romantique', univers:['gothique','romantique','rituel'],
    price:89, currency:'EUR', stone:'Améthyste', stones:['Améthyste'], colors:['Noir','Violet profond','Bronze antique'],
    materials:['Fil micro-macramé','Améthyste naturelle','Perles finition bronze antique'], stock:3, availability:'in-stock', madeToOrder:false,
    featured:true, bestseller:true, new:false, adjustable:true, size:'Ajustable', leadTime:'Expédition sous 2 à 4 jours ouvrés',
    description:'Un collier en micro-macramé noir centré sur une améthyste, pensé comme une parure sombre, élégante et facile à porter.',
    symbolism:'Élise évoque une élégance nocturne, romantique et mystérieuse.',
    care:'Éviter l’eau prolongée, le parfum direct et les frottements abrasifs. Ranger à plat dans son pochon.',
    images:productImages('collier',[1,2,3]), tags:['amethyste','choker','gothique','fait-main']
  },
  {
    id:'collier-nyx', slug:'collier-nyx', name:'Collier Nyx', category:'colliers', categoryLabel:'Colliers', imagePrefix:'collier',
    audience:['femme','unisexe'], collection:'gothique-nocturne', univers:['gothique','mythologique','rituel'],
    price:72, currency:'EUR', stone:'Améthyste', stones:['Améthyste'], colors:['Noir','Violet profond','Bronze antique'],
    materials:['Fil micro-macramé','Améthyste naturelle','Perles finition bronze'], stock:4, availability:'in-stock', madeToOrder:false,
    featured:true, bestseller:true, new:false, adjustable:true, size:'Ajustable', leadTime:'Expédition sous 2 à 4 jours ouvrés',
    description:'Un ras-de-cou sombre et équilibré, inspiré de la nuit et des silhouettes gothiques contemporaines.',
    symbolism:'Nyx s’inspire de la nuit comme espace de mystère, d’intimité et de transformation.',
    care:'Nettoyer délicatement avec un chiffon sec. Ne pas immerger.',
    images:productImages('collier',[4,5,6]), tags:['amethyste','ras-de-cou','nyx','gothique']
  },
  {
    id:'collier-luna', slug:'collier-luna', name:'Collier Luna', category:'colliers', categoryLabel:'Colliers', imagePrefix:'collier',
    audience:['femme','unisexe'], collection:'lunaire', univers:['mystique','romantique','mythologique'],
    price:79, currency:'EUR', stone:'Labradorite', stones:['Labradorite','Améthyste'], colors:['Noir','Violet','Bronze antique'],
    materials:['Fil micro-macramé','Labradorite naturelle','Améthyste','Perles finition bronze antique'], stock:2, availability:'in-stock', madeToOrder:false,
    featured:true, bestseller:false, new:true, adjustable:true, size:'Ajustable', leadTime:'Expédition sous 2 à 4 jours ouvrés',
    description:'Collier artisanal construit autour d’une labradorite aux reflets bleus et dorés, rehaussée d’un accent violet.',
    symbolism:'Luna joue sur les contrastes entre ombre, lumière et reflets changeants.',
    care:'Éviter l’humidité prolongée. Ranger à l’abri de la lumière directe.',
    images:productImages('collier',[7,8,9,10]), tags:['labradorite','lunaire','mystique','collier']
  },
  {
    id:'pendentif-luna', slug:'pendentif-luna', name:'Pendentif Luna', category:'pendentifs', categoryLabel:'Pendentifs', imagePrefix:'pendentif',
    audience:['femme','homme','unisexe'], collection:'lunaire', univers:['mystique','minimal','symbolique'],
    price:59, currency:'EUR', stone:'Pierre de lune', stones:['Pierre de lune'], colors:['Noir','Bronze antique'],
    materials:['Fil micro-macramé','Pierre de lune','Perles finition bronze'], stock:5, availability:'in-stock', madeToOrder:false,
    featured:true, bestseller:false, new:false, adjustable:true, size:'Cordon ajustable', leadTime:'Expédition sous 2 à 4 jours ouvrés',
    description:'Un pendentif simple et lumineux, pensé comme une porte d’entrée dans l’univers de la marque.',
    symbolism:'Une pièce douce et nocturne, centrée sur la lumière opalescente de la pierre.',
    care:'Éviter eau, parfum et produits chimiques.',
    images:productImages('pendentif',[1,2,3,4,5]), tags:['pierre-de-lune','pendentif','unisexe','minimal']
  },
  {
    id:'pendentif-nebuleuse', slug:'pendentif-nebuleuse', name:'Pendentif Nébuleuse', category:'pendentifs', categoryLabel:'Pendentifs', imagePrefix:'pendentif',
    audience:['femme','homme','unisexe'], collection:'cosmique', univers:['mystique','mythologique','symbolique'],
    price:79, currency:'EUR', stone:'Labradorite', stones:['Labradorite','Améthyste'], colors:['Noir','Bronze antique'],
    materials:['Fil micro-macramé','Labradorite naturelle','Améthyste','Perles finition bronze'], stock:2, availability:'in-stock', madeToOrder:false,
    featured:true, bestseller:true, new:false, adjustable:true, size:'Cordon ajustable', leadTime:'Expédition sous 2 à 4 jours ouvrés',
    description:'Une labradorite centrale sertie en micro-macramé noir dans une construction verticale et équilibrée.',
    symbolism:'Nébuleuse évoque les reflets changeants, l’espace et les zones de passage entre ombre et lumière.',
    care:'Essuyer avec un chiffon doux et conserver au sec.',
    images:productImages('pendentif',[6,7,8,9,10]), tags:['labradorite','amethyste','pendentif','cosmique']
  },
  {
    id:'bracelet-selene', slug:'bracelet-selene', name:'Bracelet Séléné', category:'bracelets', categoryLabel:'Bracelets', imagePrefix:'bracelet',
    audience:['femme','unisexe'], collection:'lunaire', univers:['mystique','romantique','symbolique'],
    price:49, currency:'EUR', stone:'Pierre de lune', stones:['Pierre de lune'], colors:['Noir','Bronze antique'],
    materials:['Fil micro-macramé','Pierre de lune','Perles finition bronze'], stock:6, availability:'in-stock', madeToOrder:false,
    featured:true, bestseller:true, new:false, adjustable:true, size:'Ajustable', leadTime:'Expédition sous 2 à 4 jours ouvrés',
    description:'Bracelet noir à pierre de lune, souple, ajustable et facile à porter au quotidien.', symbolism:'Séléné puise son inspiration dans les formes lunaires et les contrastes doux.',
    care:'Retirer avant douche, baignade ou sport.', images:productImages('bracelet',[1,2,3]), tags:['pierre-de-lune','bracelet','lunaire','ajustable']
  },
  {
    id:'bracelet-astra', slug:'bracelet-astra', name:'Bracelet Astra', category:'bracelets', categoryLabel:'Bracelets', imagePrefix:'bracelet',
    audience:['femme','unisexe'], collection:'cosmique', univers:['gothique','mystique','symbolique'],
    price:49, currency:'EUR', stone:'Améthyste', stones:['Améthyste'], colors:['Noir','Violet','Bronze antique'],
    materials:['Fil micro-macramé','Améthyste naturelle','Perles finition bronze'], stock:4, availability:'in-stock', madeToOrder:false,
    featured:true, bestseller:false, new:true, adjustable:true, size:'Ajustable', leadTime:'Expédition sous 2 à 4 jours ouvrés',
    description:'Bracelet en micro-macramé noir avec pierre violette centrale et détails bronze.', symbolism:'Astra reprend une esthétique céleste sobre, pensée pour rester facilement portable.',
    care:'Éviter l’immersion prolongée.', images:productImages('bracelet',[4,5,6]), tags:['amethyste','bracelet','gothique','astral']
  },
  {
    id:'bracelet-orphee', slug:'bracelet-orphee', name:'Bracelet Orphée', category:'bracelets', categoryLabel:'Bracelets', imagePrefix:'bracelet',
    audience:['homme','femme','unisexe'], collection:'gothique-nocturne', univers:['gothique','mythologique','sombre'],
    price:52, currency:'EUR', stone:'Onyx noir', stones:['Onyx noir','Améthyste'], colors:['Noir','Bronze antique'],
    materials:['Fil micro-macramé','Onyx noir','Améthyste','Perles finition bronze'], stock:4, availability:'in-stock', madeToOrder:false,
    featured:true, bestseller:true, new:false, adjustable:true, size:'Ajustable', leadTime:'Expédition sous 2 à 4 jours ouvrés',
    description:'Un bracelet plus sombre et unisexe, articulé autour d’un onyx noir brillant.', symbolism:'Orphée joue sur l’idée de passage, de musique sombre et de profondeur.',
    care:'Nettoyer au chiffon doux, ranger au sec.', images:productImages('bracelet',[7,8,9,10]), tags:['onyx','bracelet','homme','unisexe','gothique']
  },
  {
    id:'boucles-aurore', slug:'boucles-aurore', name:'Boucles Aurore', category:'boucles-oreilles', categoryLabel:'Boucles d’oreilles', imagePrefix:'boucles',
    audience:['femme','unisexe'], collection:'gothique-romantique', univers:['romantique','mystique','gothique'],
    price:45, currency:'EUR', stone:'Améthyste', stones:['Améthyste'], colors:['Violet','Bronze antique','Noir'],
    materials:['Fil micro-macramé','Améthyste','Crochets finition bronze'], stock:4, availability:'in-stock', madeToOrder:false,
    featured:true, bestseller:false, new:false, adjustable:false, size:'Paire', leadTime:'Expédition sous 2 à 4 jours ouvrés',
    description:'Boucles pendantes en micro-macramé avec pierre violette et finition bronze.', symbolism:'Aurore apporte une lecture plus lumineuse et romantique de l’univers sombre de la marque.',
    care:'Retirer avant douche et sommeil. Ranger séparément.', images:productImages('boucles',[1,2,3,4,5]), tags:['boucles','amethyste','romantique','gothique']
  },
  {
    id:'boucles-vesper', slug:'boucles-vesper', name:'Boucles Vesper', category:'boucles-oreilles', categoryLabel:'Boucles d’oreilles', imagePrefix:'boucles',
    audience:['femme','unisexe'], collection:'gothique-nocturne', univers:['gothique','sombre','rituel'],
    price:42, currency:'EUR', stone:'Améthyste', stones:['Améthyste'], colors:['Noir','Violet sombre','Bronze antique'],
    materials:['Fil micro-macramé','Améthyste','Crochets finition bronze'], stock:3, availability:'in-stock', madeToOrder:false,
    featured:false, bestseller:false, new:true, adjustable:false, size:'Paire', leadTime:'Expédition sous 2 à 4 jours ouvrés',
    description:'Boucles pendantes plus sombres, fines et nocturnes, avec une construction artisanale légère.', symbolism:'Vesper s’inspire du soir, du silence et des lumières basses.',
    care:'Conserver à l’abri de l’humidité.', images:productImages('boucles',[6,7,8,9,10]), tags:['boucles','amethyste','vesper','nocturne']
  },
  {
    id:'chaine-taille-nyx', slug:'chaine-taille-nyx', name:'Chaîne de taille Nyx', category:'bijoux-corps', categoryLabel:'Bijoux de corps', imagePrefix:'corps', subcategory:'chaine-taille',
    audience:['femme','unisexe'], collection:'gothique-nocturne', univers:['gothique','sensuel','shibari-inspire'],
    price:69, currency:'EUR', stone:'Pierre de lune', stones:['Pierre de lune'], colors:['Noir','Bronze antique'],
    materials:['Fil micro-macramé','Chaîne décorative','Pierre naturelle','Connecteurs finition bronze'], stock:1, availability:'made-to-order', madeToOrder:true,
    featured:true, bestseller:false, new:true, adjustable:true, size:'Sur mesure / ajustable', leadTime:'Fabrication sous 7 à 14 jours',
    description:'Parure de taille légère combinant micro-macramé et lignes de chaîne décoratives.', symbolism:'Une pièce pensée pour suivre les lignes du corps sans devenir un accessoire de contrainte.',
    care:'Port décoratif uniquement. Retirer avant activité sportive, douche ou sommeil.', images:productImages('corps',[1,2,3,4,5]), tags:['taille','corps','sensuel','gothique']
  },
  {
    id:'bijou-corps-eclipse', slug:'bijou-corps-eclipse', name:'Bijou de corps Éclipse', category:'bijoux-corps', categoryLabel:'Bijoux de corps', imagePrefix:'corps', subcategory:'harnais-simple',
    audience:['femme','homme','unisexe'], collection:'eclipse', univers:['gothique','sensuel','rituel','shibari-inspire'],
    price:98, currency:'EUR', stone:'Onyx noir', stones:['Onyx noir'], colors:['Noir','Bronze antique'],
    materials:['Fil micro-macramé','Onyx noir','Connecteurs décoratifs','Fermetures ajustables'], stock:0, availability:'made-to-order', madeToOrder:true,
    featured:true, bestseller:false, new:true, adjustable:true, size:'Sur mesure', leadTime:'Fabrication sous 10 à 21 jours',
    description:'Une parure corporelle simple et structurée, inspirée par les lignes de corde et pensée comme un bijou décoratif.', symbolism:'Éclipse place le fil au centre du dessin du corps, entre ombre et lumière.',
    care:'Port décoratif uniquement. Non conçu pour supporter une charge ou servir à l’immobilisation.', images:productImages('corps',[6,7,8,9,10]), tags:['body-jewelry','harnais','onyx','unisexe']
  },
  {
    id:'duo-ames-soeurs', slug:'duo-ames-soeurs', name:'Duo Âmes Sœurs', category:'couples', categoryLabel:'Couples', imagePrefix:'couple',
    audience:['couple'], collection:'liens', univers:['romantique','symbolique','rituel'],
    price:120, currency:'EUR', stone:'Onyx & Labradorite', stones:['Onyx noir','Labradorite'], colors:['Noir','Bronze antique'],
    materials:['Fil micro-macramé','Onyx noir','Labradorite','Perles finition bronze'], stock:0, availability:'made-to-order', madeToOrder:true,
    featured:true, bestseller:true, new:true, adjustable:true, size:'Duo ajustable', leadTime:'Fabrication sous 7 à 14 jours',
    description:'Deux bijoux complémentaires pensés pour fonctionner ensemble sans être identiques.', symbolism:'Une lecture du lien, de la dualité et de la complémentarité à travers deux pièces coordonnées.',
    care:'Conserver séparément dans les pochons fournis.', images:productImages('couple',[1,2,3,4,5,6,7,8,9,10]), tags:['couple','duo','onyx','labradorite','symbolique']
  }
];

PRODUCTS.forEach(p => { p.mainImage = p.images[0]; });

const PRODUCT_FILTERS = {
  categories:[
    {id:'colliers',label:'Colliers'}, {id:'pendentifs',label:'Pendentifs'}, {id:'bracelets',label:'Bracelets'},
    {id:'boucles-oreilles',label:'Boucles d’oreilles'}, {id:'bijoux-corps',label:'Bijoux de corps'}, {id:'couples',label:'Couples'}
  ],
  audiences:[{id:'femme',label:'Femme'},{id:'homme',label:'Homme'},{id:'unisexe',label:'Unisexe'},{id:'couple',label:'Couple'}],
  univers:[
    {id:'gothique',label:'Gothique'}, {id:'romantique',label:'Romantique'}, {id:'mystique',label:'Mystique'},
    {id:'mythologique',label:'Mythologique'}, {id:'rituel',label:'Rituel'}, {id:'symbolique',label:'Symbolique'},
    {id:'sensuel',label:'Sensuel'}, {id:'shibari-inspire',label:'Inspiré du shibari'}
  ],
  stones:['Améthyste','Labradorite','Pierre de lune','Onyx noir'],
  availability:[{id:'in-stock',label:'En stock'},{id:'made-to-order',label:'Sur commande'}]
};

const getProductById = id => PRODUCTS.find(p => p.id === id) || null;
const getProductBySlug = slug => PRODUCTS.find(p => p.slug === slug) || null;
const getProductsByCategory = category => PRODUCTS.filter(p => p.category === category);
const getProductsByAudience = audience => PRODUCTS.filter(p => p.audience.includes(audience));
const getProductsByUniverse = universe => PRODUCTS.filter(p => p.univers.includes(universe));
const getProductsByStone = stone => PRODUCTS.filter(p => p.stones.includes(stone));
const getFeaturedProducts = () => PRODUCTS.filter(p => p.featured);
const getBestsellers = () => PRODUCTS.filter(p => p.bestseller);
const getNewProducts = () => PRODUCTS.filter(p => p.new);
const formatPrice = price => new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR'}).format(Number(price || 0));

function searchProducts(query='') {
  const q = String(query).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  if (!q) return [...PRODUCTS];
  return PRODUCTS.filter(p => [p.name,p.categoryLabel,p.stone,...p.stones,...p.univers,...p.tags].join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').includes(q));
}

window.PRODUCTS=PRODUCTS;
window.PRODUCT_FILTERS=PRODUCT_FILTERS;
window.getProductById=getProductById;
window.getProductBySlug=getProductBySlug;
window.getProductsByCategory=getProductsByCategory;
window.getProductsByAudience=getProductsByAudience;
window.getProductsByUniverse=getProductsByUniverse;
window.getProductsByStone=getProductsByStone;
window.getFeaturedProducts=getFeaturedProducts;
window.getBestsellers=getBestsellers;
window.getNewProducts=getNewProducts;
window.searchProducts=searchProducts;
window.formatPrice=formatPrice;
