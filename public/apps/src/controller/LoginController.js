/**
 * Created by Administrator on 2015/11/2.
 */
var loginApp=angular.module("loginApp",[
    "ngCookies",
    "loginApp.service"
]);

loginApp.controller("LoginController",function($scope,$location,$window,user,$cookies){
    $scope.user={
        loginName:"",
        passWord:""
    }
    $scope.login=function(){
        user.login($scope.user).then(function(data){
            console.log($cookies.user);
            console.log("成功！");
            $window.location="/#/";
        },function(err){
            alert(err.msg);
            console.log("登陆失败!")
        })
    }
});
