/**
 * Created by Administrator on 2015/11/3.
 */
var express = require('express');
var request=require('request');
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
//修改医生状态
router.post('/modAvailableState', function(req, res) {
    var token=req.body.token;
    var data=req.body.data;
    var is_available=req.body.is_available;
    console.log(data+'-------------'+is_available);
    request.post({
        url: 'http://119.29.113.67:8036/psy/modAvailableState',
        headers: {
            'x-json-web-token':token,
            'content-type':'application/x-www-form-urlencoded'
        },
        form:{
            "data":JSON.stringify(data),
            "is_available":is_available
        }
       },function(err,response,body){
        console.log(JSON.stringify(body));
        res.send(body);
    });
});
//获取医生状态
router.get('/modAvailableState', function(req, res) {
    var token=req.query.token;
    request.get({
        url: 'http://119.29.113.67:8036/psy/getMyAvailableState',
        headers: {
            'x-json-web-token':token
        }
    },function(err,response,body){
        console.log(JSON.stringify(body));
        res.send(body);
    });
});
module.exports = router;
