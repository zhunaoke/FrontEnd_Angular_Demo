/**
 * Created by Administrator on 2015/11/2.
 */
var indexApp=angular.module("indexApp.index",[
    "ngCookies",
    "indexApp.indexService"
]);

//indexApp.controller("indexCtrl",function($scope,$window,index,$cookies){
//
//    console.log("获得的user:"+$cookies.user);
//    $scope.user=JSON.parse(utf8to16(base64decode($cookies.user)));
//    //$scope.productsList;//定义商品列表；
//    $scope.getAllProducts=function(){
//        index.getAllProducts().then(function(data){
//            $scope.productsList=data.itemsArray;
//        },function(err){
//            console.log(err);
//        });
//    };
//    $scope.getAllProducts();
//});

//退出
//indexApp.controller("logoutCtrl",function($scope,$window,$cookies){
//    $scope.uer=null;
//    delete $cookies.user;
//    clearCookie("userCookie");
//    $window.location="/api-login";
//});

indexApp.controller("indexCtrl",["$scope","$window","index","$cookies",function($scope,$window,index,$cookies){
    $scope.footerHtml='/apps/views/include/footer.html';
    console.log("获得的user:"+$cookies.user);
    $scope.user=JSON.parse(utf8to16(base64decode($cookies.user)));
    $scope.productsList=[];//定义商品列表；
    $scope.getAllProducts=function(){
        index.getAllProducts().then(function(data){
            $scope.productsList=data.itemsArray;
        },function(err){
            console.log(err);
        });
    };
    $scope.getAllProducts();

    //用于测试单选按钮的checked属性
    $scope.radioChecked=true;
    $scope.checkedVal='ANDROID';
    $scope.printCheckedVal=function(){
        console.log('被选择的radio值：'+$scope.checkedVal);
    }
}]);
indexApp.controller("logoutCtrl",["$scope","$window","$cookies",function($scope,$window,$cookies){
    $scope.uer=null;
    delete $cookies.user;
    clearCookie("userCookie");
    $window.location="/api-login";
}]);