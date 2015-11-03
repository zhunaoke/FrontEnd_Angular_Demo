/**
 * Created by Administrator on 2015/11/3.
 */
var express = require('express');
var router = express.Router();
var ModelProxy=require("./../proxy/DataProxy").DataProxy;
var productsModel=ModelProxy.create("taobao.*");


router.get('/', function(req, res, next) {

    productsModel.list().done(function(data){
        console.log(JSON.stringify(data));
        res.send(data);
    }).fail(function(err){
        res.send("error");
    });

});

module.exports = router;
