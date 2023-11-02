var express = require('express');
var router = express.Router();

// About page route
router.get('/', function(req, res, next) {
    res.render('about', { title: 'About' }); // 'about' is the corrected EJS template name
});

module.exports = router;