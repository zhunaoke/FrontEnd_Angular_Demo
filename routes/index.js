var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.cookies.userCookie) {//没有登录时；
    return res.redirect('/api-login');
  } else {//登录后
    res.render('index');
  }
});

router.get('/test',function(req,res){
   res.render('test');
});
router.get('/test1',function(req,res){
    res.render('test1');
});
router.get('/demo',function(req,res){
    res.render('demo');
});
module.exports = router;
