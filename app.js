const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index');

// Configuration du moteur de template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});