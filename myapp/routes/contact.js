var express = require('express');
var router = express.Router();

// Contact page route
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' }); // 'contact' is the corrected EJS template name
});

module.exports = router;