# Byssus Tenebrarum — site GitHub Pages

Site statique complet pour la marque Byssus Tenebrarum.

## Mise en ligne GitHub Pages

1. Créer un dépôt GitHub, par exemple `byssus-tenebrarum`.
2. Envoyer **tout le contenu de ce dossier directement à la racine de la branche `main`**.
3. Dans GitHub : `Settings > Pages`.
4. Source : `Deploy from a branch`.
5. Branche : `main` ; dossier : `/ (root)`.
6. Enregistrer.

`index.html` doit rester à la racine.

## Structure principale

- `index.html` : accueil
- `shop.html` : boutique + filtres
- `product.html` : fiche produit dynamique
- `collections.html` : univers / collections
- `create.html` : configurateur sur mesure
- `cart.html` : panier
- `checkout.html` : commande de démonstration
- `confirmation.html` : confirmation
- `account.html` : profil, favoris, commandes
- `about.html`, `journal.html`, `faq.html`, `contact.html`, `legal.html`
- `assets/css/style.css` : style global
- `assets/js/products.js` : catalogue central
- `assets/js/app.js` : header/footer, panier, favoris, navigation, recherche

## Images produits

Toutes les images produits sont dans `assets/images/products/`.
Il existe exactement 10 emplacements par catégorie :

- `collier1.jpg` à `collier10.jpg`
- `pendentif1.jpg` à `pendentif10.jpg`
- `bracelet1.jpg` à `bracelet10.jpg`
- `boucles1.jpg` à `boucles10.jpg`
- `corps1.jpg` à `corps10.jpg`
- `couple1.jpg` à `couple10.jpg`

Pour remplacer un visuel sans modifier le code, remplacer simplement le fichier par une nouvelle photo portant **exactement le même nom**.

## Important paiement

La partie panier et commande fonctionne en local avec `localStorage`, mais aucun numéro de carte ne doit être saisi ou stocké dans GitHub Pages.
Pour encaisser réellement, connecter Stripe Checkout ou PayPal avec une partie serveur / fonction sécurisée. Voir `PAYMENT_SETUP.md`.
