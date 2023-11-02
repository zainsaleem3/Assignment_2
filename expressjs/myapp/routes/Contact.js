var express = require('express');
var router = express.Router();

// Contact page route
router.get('/', function(req, res, next) {
    res.render('Contact', { title: 'Contact' }); // 'Contact' is the EJS template
});

module.exports = router;