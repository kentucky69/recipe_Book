==== INITIALISATION DU PROJET🙉 =====

npm init -y
npm install express ejs
npm install ejs

==== STRUCTURE DU PROJET  =====

mkdir public views views/partials
mkdir public/css public/js public/images
touch app.js
touch views/index.ejs views/boutique.ejs views/guide-entretien.ejs views/contact.ejs
touch views/partials/header.ejs views/partials/footer.ejs
touch public/css/style.css
touch public/js/main.js

mon-site-vitrine/
  ├── public/
  │   ├── css/
  │   │   └── style.css
  │   ├── images/
  │   └── js/
  │       └── main.js
  ├── views/
  │   ├── partials/
  │   │   ├── header.ejs
  │   │   └── footer.ejs
  │   ├── index.ejs
  │   ├── boutique.ejs
  │   ├── guide-entretien.ejs
  │   └── contact.ejs
  ├── app.js
  └── package.json



==== STRUCTURE DOSSIERS COMPLETES ====

e-commerce/
├── node_modules/
├── public/
│   ├── css/
│   │   ├── abstracts/
│   │   │   ├── _variables.css
│   │   │   └── _mixins.css
│   │   ├── base/
│   │   │   ├── _reset.css
│   │   │   └── _typography.css
│   │   ├── components/
│   │   │   ├── _buttons.css
│   │   │   ├── _cards.css
│   │   │   ├── _forms.css
│   │   │   └── _navbar.css
│   │   ├── layouts/
│   │   │   ├── _header.css
│   │   │   ├── _footer.css
│   │   │   └── _grid.css
│   │   └── main.css
│   ├── images/
│   │   ├── products/
│   │   ├── banners/
│   │   └── icons/
│   └── js/
│       ├── components/
│       └── main.js
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── Product.js
│   │   ├── User.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── utils/
│   │   └── helpers.js
│   └── config/
│       └── database.js
├── views/
│   ├── layouts/
│   │   └── main.ejs
│   ├── partials/
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   ├── pages/
│   │   ├── home.ejs
│   │   ├── products/
│   │   │   ├── index.ejs
│   │   │   └── show.ejs
│   │   └── auth/
│   │       ├── login.ejs
│   │       └── register.ejs
│   └── components/
│       ├── product-card.ejs
│       └── cart-item.ejs
├── tests/
│   ├── unit/
│   └── integration/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js

Explications des dossiers principaux :

1. public/ : Fichiers statiques
   # css/ : Styles organisés par modules
   # images/ : Images optimisées
   # js/ : Scripts côté client
2. src/ : Code source principal
   # controllers/ : Logique métier
   # models/ : Modèles de données
   # routes/ : Routes de l'API
   # middleware/ : Middlewares Express
   # utils/ : Fonctions utilitaires
   # config/ : Configurations
3. views/ : Templates EJS
   # layouts/ : Layouts principaux
   # partials/ : Éléments réutilisables
   # pages/ : Pages principales
   # components/ : Composants réutilisables
4. Fichiers racine
   # .env : Variables d'environnement
   # .gitignore : Fichiers à ignorer
   # package.json : Dépendances et scripts
   # server.js : Point d'entrée




