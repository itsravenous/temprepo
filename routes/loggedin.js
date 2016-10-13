
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ message: 'welcome to books' }); 
});

module.exports = router;