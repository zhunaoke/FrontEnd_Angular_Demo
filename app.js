var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs=require("ejs");//引入ejs模块！

var routes = require('./routes/index');
var users = require('./routes/users');
var products = require('./routes/products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
//将ejs引擎换为html模板；
app.engine('.html', ejs.__express);
app.set('view engine', 'html');



// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//登录拦截器
app.use(function (req, res, next) {
  console.log("获取的cookie是： "+req.cookies.userCookie);
  var url = req.originalUrl;
  console.log("origin-url:"+url);
  var userCookie=req.cookies.userCookie;
  if(url=='/api/login'&&!(userCookie==undefined)){
    return res.redirect('/');
  }
  next();
});




/**
 * 配置nodejs端路由
 */
app.use('/', routes);
app.use('/api-login', users);
app.use('/api-products', products);
//控制将路由转向哪里
app.use(function(req,res,next){
  console.log("路径："+req.path);
  if(req.path.indexOf('/api')>=0){//表示是nodejs中控制的路由
    next();
  }else{ //angularjs路由页面
    res.render("index");
  }
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
