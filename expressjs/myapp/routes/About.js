var express = require('express');
var router = express.Router();

// About page route
router.get('/', function(req, res, next) {
    res.render('About', { title: 'About' }); // 'About' is the EJS template
});

module.exports = router;