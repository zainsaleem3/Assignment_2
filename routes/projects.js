var express = require('express');
var router = express.Router();

// Projects page route
router.get('/', function(req, res, next) {
    res.render('projects', { title: 'Projects' }); // 'projects' is the EJS template
});

module.exports = router;