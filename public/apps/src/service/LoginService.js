/**
 * Created by Administrator on 2015/11/2.
 */

var loginApp=angular.module("loginApp.service",[
    "ngCookies"
]);
loginApp.factory("user",function($http,$q,$cookies){
   return {
       login:function(user){
           var deferred=$q.defer();
           console.log(JSON.stringify(user));
           $http.post("/login",{user:user}).success(function(data){
               if(data.status=="200"){
                   $cookies.user=base64encode(JSON.stringify(user));
                   setCookie("userCookie",data.result,1);//设置cookie;
                   return deferred.resolve($cookies.user);
               }else{
                   return deferred.reject(data);
               }
           }).error(function(err){
               console.log(err);
               return deferred.reject(err);
           });
           return deferred.promise;
       }


   }
});
