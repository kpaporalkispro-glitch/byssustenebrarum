# Paiement réel — étape externe obligatoire

Le site est hébergé sur GitHub Pages, donc il est entièrement statique.

## Ne jamais faire
- Ne jamais mettre une clé secrète Stripe ou PayPal dans `app.js`, `checkout.html` ou un autre fichier public.
- Ne jamais collecter directement les numéros de carte dans le HTML du site.

## Solution recommandée
1. Créer un compte Stripe marchand.
2. Utiliser Stripe Checkout ou Stripe Payment Links.
3. Pour un vrai panier multi-produits, ajouter une fonction sécurisée (Cloudflare Workers, Netlify Functions, Vercel Functions, Supabase Edge Function, etc.).
4. Cette fonction reçoit les identifiants produits et quantités, vérifie les prix côté serveur et crée la session Stripe.
5. Après paiement, Stripe redirige vers `confirmation.html`.

PayPal peut être ajouté sur le même principe via son SDK marchand et une partie serveur adaptée.
