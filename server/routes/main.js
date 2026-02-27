const express = require('express');
const router = express.Router();

const locals = {
        title: "egejpg's blog",
        description: "Simple blog created with Node.js, Express and MongoDB."
    }

// Routes
router.get('', (req, res) => {
    
    res.render('index', { locals });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;