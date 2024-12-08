const express = require('express');
const router = express.Router();

// Route principale
router.get('/', (req, res) => {
    res.render('index', { title: 'Mon Blog de Recettes' });
});

module.exports = router;