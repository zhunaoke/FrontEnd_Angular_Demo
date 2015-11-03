/**
 * Created by Administrator on 2015/11/2.
 */
var lifeApp=angular.module("indexApp.lifeService",[
    "ngCookies"
]);
lifeApp.factory("life",function($http,$q,$cookies){
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