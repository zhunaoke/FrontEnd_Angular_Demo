/**
 * Created by Administrator on 2015/11/2.
 */
var indexApp=angular.module("indexApp.index",[
    "ngCookies",
    "indexApp.indexService"
]);
indexApp.controller("indexCtrl",function($scope,$window,index,$cookies,$cookieStore){

    console.log("获得的user:"+$cookies.user);
    console.log("获得的user:"+$cookieStore.get('user2323'));
    $scope.user=JSON.parse(utf8to16(base64decode($cookies.user)));
    //$scope.productsList;//定义商品列表；
    $scope.getAllProducts=function(){
        index.getAllProducts().then(function(data){
            $scope.productsList=data.itemsArray;
        },function(err){
            console.log(err);
        });
    };
    $scope.getAllProducts();
});

//退出
indexApp.controller("logoutCtrl",function($scope,$window,$cookies,$cookieStore){
    $scope.uer=null;
    delete $cookies.user;
    $cookieStore.remove("user2323");
    clearCookie("userCookie");
    $window.location="/api/login";
});