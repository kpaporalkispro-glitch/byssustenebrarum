// Byssus Tenebrarum — logique globale commune à toutes les pages
const BYSSUS_CONFIG={storageKeys:{cart:'byssus-cart',wishlist:'byssus-wishlist',customer:'byssus-customer',cartOptions:'byssus-cart-options',checkout:'byssus-checkout',lastOrder:'byssus-last-order',orders:'byssus-orders',promo:'byssus-promo',newsletter:'byssus-newsletter',recentlyViewed:'byssus-recently-viewed'},currency:'EUR',locale:'fr-FR'};

const readArray=k=>{try{const v=JSON.parse(localStorage.getItem(k)||'[]');return Array.isArray(v)?v:[]}catch{return[]}};
const readObject=k=>{try{const v=JSON.parse(localStorage.getItem(k)||'{}');return v&&typeof v==='object'&&!Array.isArray(v)?v:{}}catch{return{}}};
const writeStorage=(k,v)=>{localStorage.setItem(k,JSON.stringify(v));return v};

function pageName(){return document.body?.dataset.page||''}
function navLink(href,label,key,extra=''){return `<a href="${href}" class="${pageName()===key?'active ':''}${extra}">${label}</a>`}
function renderShell(){
  const header=document.getElementById('site-header');
  if(header) header.innerHTML=`
    <div class="topbar"><div class="wrap topbar-inner"><span>✦ Bijoux artisanaux en micro-macramé · Strasbourg</span><span>Pièces uniques · Petites séries · Sur-mesure</span><span>Livraison France & Europe</span></div></div>
    <header class="site-header luxury-header">
      <div class="wrap brand-row">
        <button class="header-tool search-trigger" type="button" onclick="openGlobalSearch()"><span>⌕</span><small>Rechercher</small></button>
        <a class="brand-logo-link" href="index.html"><img class="brand-logo" src="assets/images/logo-byssus.png" alt="Byssus Tenebrarum"></a>
        <div class="header-actions">
          <a class="header-tool" href="account.html"><span>♙</span><small>Compte</small></a>
          <a class="header-tool" href="account.html#favoris"><span>♡</span><small>Favoris</small></a>
          <a class="header-tool cart-link" href="cart.html"><span>◇</span><small>Panier</small><b class="cart-badge" data-cart-count>0</b></a>
        </div>
        <button class="mobile-nav-toggle" type="button" aria-label="Menu" aria-expanded="false">☰</button>
      </div>
      <div class="nav-row"><div class="wrap"><nav class="navlinks">
        ${navLink('index.html','Accueil','home')}
        ${navLink('shop.html','Boutique','shop')}
        ${navLink('collections.html','Collections','collections')}
        ${navLink('create.html','✦ Créer mon bijou','create','nav-highlight')}
        ${navLink('about.html','À propos','about')}
        ${navLink('journal.html','Journal','journal')}
        ${navLink('faq.html','FAQ','faq')}
        ${navLink('contact.html','Contact','contact')}
        <a href="create.html" class="nav-cta">Sur-mesure</a>
      </nav></div></div>
    </header>
    <div class="search-overlay" id="search-overlay"><div class="search-dialog"><button class="search-close" onclick="closeGlobalSearch()">×</button><div class="eyebrow">Recherche</div><h2>Que cherchez-vous ?</h2><form onsubmit="submitGlobalSearch(event)"><input class="form-control" id="global-search-input" type="search" placeholder="Collier, améthyste, Nyx…"><button class="btn btn-primary">Rechercher</button></form></div></div>`;
  const footer=document.getElementById('site-footer');
  if(footer) footer.innerHTML=`<footer class="footer"><div class="wrap footer-grid">
    <div><img class="footer-logo" src="assets/images/logo-byssus.png" alt="Byssus Tenebrarum"><p>Bijoux et parures corporelles artisanales en micro-macramé, imaginés et fabriqués à Strasbourg.</p></div>
    <div><h4>Boutique</h4><a href="shop.html">Tous les bijoux</a><a href="collections.html">Collections</a><a href="create.html">Sur-mesure</a><a href="cart.html">Panier</a></div>
    <div><h4>Aide</h4><a href="faq.html">FAQ</a><a href="contact.html">Contact</a><a href="legal.html">CGV & mentions</a><a href="legal.html#returns">Retours</a></div>
    <div><h4>La maison</h4><a href="about.html">Notre histoire</a><a href="about.html#atelier">L’atelier</a><a href="journal.html">Journal</a></div>
    <div><h4>Rejoignez l’univers</h4><form data-newsletter-form><input class="form-control" type="email" required placeholder="Votre e-mail"><button class="btn btn-primary" type="submit">S’inscrire</button></form></div>
  </div><div class="wrap footer-bottom">© 2026 Byssus Tenebrarum · Strasbourg · Créations artisanales</div></footer>`;
}

function initializeMobileNav(){const b=document.querySelector('.mobile-nav-toggle'),n=document.querySelector('.navlinks');if(!b||!n)return;b.onclick=()=>{const open=n.classList.toggle('mobile-open');b.textContent=open?'×':'☰';b.setAttribute('aria-expanded',String(open))};}
function openGlobalSearch(){document.getElementById('search-overlay')?.classList.add('open');setTimeout(()=>document.getElementById('global-search-input')?.focus(),50)}
function closeGlobalSearch(){document.getElementById('search-overlay')?.classList.remove('open')}
function submitGlobalSearch(e){e.preventDefault();const q=document.getElementById('global-search-input')?.value.trim();if(q)location.href=`shop.html?search=${encodeURIComponent(q)}`}

function getCart(){return readArray(BYSSUS_CONFIG.storageKeys.cart)}
function saveCart(cart){writeStorage(BYSSUS_CONFIG.storageKeys.cart,cart);updateCartBadge();document.dispatchEvent(new CustomEvent('byssus:cart-updated'))}
function addToCart(id,quantity=1){const p=getProductById(id);if(!p)return false;const cart=getCart();let item=cart.find(x=>x.id===id);let q=Math.max(1,Number(quantity)||1);if(item)item.quantity+=q;else cart.push({id,quantity:q});if(!p.madeToOrder&&p.stock>0){item=cart.find(x=>x.id===id);item.quantity=Math.min(item.quantity,p.stock)}saveCart(cart);showToast(`${p.name} ajouté au panier.`,'success');return true}
function removeFromCart(id){saveCart(getCart().filter(x=>x.id!==id));showToast('Produit retiré du panier.','info')}
function setCartQuantity(id,q){q=Number(q);if(q<=0)return removeFromCart(id);const cart=getCart(),item=cart.find(x=>x.id===id),p=getProductById(id);if(!item)return;if(p&&!p.madeToOrder&&p.stock>0)q=Math.min(q,p.stock);item.quantity=q;saveCart(cart)}
function clearCart(){saveCart([]);localStorage.removeItem(BYSSUS_CONFIG.storageKeys.cartOptions)}
function updateCartBadge(){const c=getCart().reduce((s,x)=>s+Number(x.quantity||0),0);document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=c)}

function getWishlist(){return readArray(BYSSUS_CONFIG.storageKeys.wishlist)}
function toggleWishlist(id,button){let list=getWishlist();const active=list.includes(id);list=active?list.filter(x=>x!==id):[...list,id];writeStorage(BYSSUS_CONFIG.storageKeys.wishlist,list);if(button)button.textContent=active?'♡':'♥';showToast(active?'Retiré des favoris.':'Ajouté aux favoris.',active?'info':'success');document.dispatchEvent(new CustomEvent('byssus:wishlist-updated'));return !active}
function isInWishlist(id){return getWishlist().includes(id)}

function showToast(message,type='info'){let c=document.getElementById('toast-container');if(!c){c=document.createElement('div');c.id='toast-container';document.body.appendChild(c)}const t=document.createElement('div');t.className=`toast toast-${type}`;t.textContent=message;c.appendChild(t);requestAnimationFrame(()=>t.classList.add('show'));setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),220)},2800)}
function initNewsletter(){document.querySelectorAll('[data-newsletter-form]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const input=f.querySelector('input[type=email]');if(!input?.value)return;const list=readArray(BYSSUS_CONFIG.storageKeys.newsletter);if(!list.includes(input.value.trim().toLowerCase()))list.push(input.value.trim().toLowerCase());writeStorage(BYSSUS_CONFIG.storageKeys.newsletter,list);input.value='';showToast('Inscription enregistrée.','success')}))}
function archiveOrder(order){if(!order?.orderId)return;let orders=readArray(BYSSUS_CONFIG.storageKeys.orders);if(!orders.some(o=>o.orderId===order.orderId))orders.unshift(order);writeStorage(BYSSUS_CONFIG.storageKeys.orders,orders);writeStorage(BYSSUS_CONFIG.storageKeys.lastOrder,order)}
function escapeHtml(v){return String(v??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;')}
function currentProductId(){return new URLSearchParams(location.search).get('id')}

window.BYSSUS_CONFIG=BYSSUS_CONFIG;window.readStorageArray=readArray;window.readStorageObject=readObject;window.writeStorage=writeStorage;
window.openGlobalSearch=openGlobalSearch;window.closeGlobalSearch=closeGlobalSearch;window.submitGlobalSearch=submitGlobalSearch;
window.getCart=getCart;window.saveCart=saveCart;window.addToCart=addToCart;window.removeFromCart=removeFromCart;window.setCartQuantity=setCartQuantity;window.clearCart=clearCart;window.updateCartBadge=updateCartBadge;
window.getWishlist=getWishlist;window.toggleWishlist=toggleWishlist;window.isInWishlist=isInWishlist;window.showToast=showToast;window.archiveOrder=archiveOrder;window.escapeHtml=escapeHtml;window.currentProductId=currentProductId;

document.addEventListener('DOMContentLoaded',()=>{renderShell();initializeMobileNav();updateCartBadge();initNewsletter();});
