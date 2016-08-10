/**
 * Created by Administrator on 2015/11/2.
 */
var msgApp=angular.module("indexApp.msg",[
    "ngCookies",
    "indexApp.msgService",
    'ui.bootstrap'
]);
msgApp.controller("msgCtrl",["$scope","$window","msg",function($scope,$window,msg){

    $scope.iosUrl='itms-services:///?action=download-manifest&url=https://dn-chop.qbox.me/test2.plist';
    $scope.httpsUrl='https://dn-chop.qbox.me/test2.plist';

    $scope.getCommentList=function(page,pageSize){
        console.log(page+'----'+pageSize);
        msg.getCommentList(page,pageSize).then(function(data){
            $scope.commentList=data.data.dataList;
            console.log(Math.ceil(data.data.count/pageSize));
            /****ui-bootstrap方式分页*****/
            $scope.allItems=data.data.count;//总个数；
            $scope.pages=Math.ceil(data.data.count/pageSize);//总页数；
            $scope.totalItems =data.data.count;//20;
            $scope.currentPage = page;//page;
            $scope.pageSize = pageSize;
            $scope.maxSize =5;
            $scope.pageChanged = function () {
                $scope.getCommentList($scope.currentPage, $scope.pageSize);
            };
        },function(err) {
            console.log(err);
        });
    };
    $scope.getCommentList(1,5);


    /***********重置应用信息的secretKey值*****************/
    var uuid='60a5d35c50234fdbb8006a6968211310';
    var appId='216';
    $scope.getNormalAppInfo=function(){
        msg.getSignalAppInfo(uuid,appId).then(function(data){
            console.log(data);
            if(data!=='error'){
                $scope.signalApp=data;//单个应用的基本信息；
            }
        },function(err){
            console.log(err);
        });
    };
    $scope.getNormalAppInfo();
    //重置秘钥
    $scope.resetAppSecretKey=function(){
        msg.resetSecretKey(uuid,appId).then(function(data){
            if(data.code==200){
                $scope.getNormalAppInfo();
            }else if(data.code=='ECONNREFUSED'){
                console.log(data.code);
            }else{
                swal("","重置secret失败","error");
            }
        },function(err){
            console.log(err);
        });
    }

}]);