/**
 * Created by Administrator on 2015/11/3.
 */
var express = require('express');
var router = express.Router();
var ModelProxy=require("./../proxy/DataProxy").DataProxy;
var productsModel=ModelProxy.create("taobao.*");


router.get('/', function(req, res, next) {

    productsModel.list().done(function(data){
        res.send(data);
    }).fail(function(err){
        res.send("error");
    });
});
router.get('/comments', function(req, res) {
    var page=req.query.page;
    var pageSize=req.query.pageSize;
    productsModel.commentList({content:'',state:'',page:page,pageSize:pageSize}).done(function(data){
        res.send(data);
    }).fail(function(err){
        res.send("error");
    });
});
router.get('/appInfo', function(req, res) {
    var uuid=req.query.uuid;
    var appId=req.query.appId;
    console.log("uuid="+uuid+"--appId--"+appId);
    productsModel.signalAppInfo({uuid:uuid,appId:appId}).done(function(data){
        console.log(JSON.stringify(data));
        res.send(data);
    }).fail(function(err){
        res.send('error');
    });
});
router.put('/resetSecretKey', function(req, res) {
    var uuid=req.body.uuid;
    var appId=req.body.appId;
    productsModel.resetSecretKey({uuid:uuid,appId:appId}).done(function(data){
        res.send(data);
    }).fail(function(err){
        res.send('error');
    })
});
module.exports = router;
