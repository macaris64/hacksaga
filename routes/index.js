var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('front/index', { title: 'hacksaga' });
});


router.get('/hackathon', function(req, res, next) {
  res.render('front/hackathon', { title: 'hacksaga' });
});

router.get('/course', function(req, res, next) {
  res.render('front/course', { title: 'hacksaga' });
});

router.get('/contact', function(req, res, next) {
  res.render('front/contact', { title: 'hacksaga' });
});

module.exports = router;
