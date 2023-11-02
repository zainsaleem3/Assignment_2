var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' }); // 'index' is the EJS template
});

module.exports = router;