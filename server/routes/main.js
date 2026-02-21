const express = require('express');
const router = express.Router();

// Routes
router.get('', (req, res) => {
    const locals = {
        title : "egejpg's blog",
        description : "Simple blog made with Node.js, Express and MongoDB."
    }

    res.render('index', { locals });
});

module.exports = router;