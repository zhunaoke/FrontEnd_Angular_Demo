/**
 * Created by Administrator on 2015/11/2.
 */
var webApp=angular.module("indexApp.webService",[
    "ngCookies"
]);
webApp.factory("web",function($http,$q,$cookies){
    return {
        getUser:function(){
            var deferred=$q.defer();
            if(2==1){
                return deferred.resolve("success");
            }else{
                return deferred.reject("error");
            }
            return deferred.promise;
        }
    }
});