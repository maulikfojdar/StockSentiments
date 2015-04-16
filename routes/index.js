var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { title: 'Stock Sentiments' });
});

/*router.get('/home', function(req, res) {
  res.render('contact', { title: 'Stock Sentiments' });
});

router.get('/:company', function(req, res) {
	  res.render('dashboard', { title: 'Stock Sentiments' });
	});

router.get('/project', function(req, res) {
	  res.render('project', { title: 'Stock Sentiments' });
	});*/

module.exports = router;
