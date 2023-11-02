var express = require('express');
var router = express.Router();

// Projects page route
router.get('/', function(req, res, next) {
    res.render('Projects', { title: 'Projects' }); // 'Projects' is the EJS template
});

module.exports = router;