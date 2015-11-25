/**
 * Created by Administrator on 2015/11/2.
 */
var msgApp=angular.module("indexApp.msgService",[
    "ngCookies"
]);
//msgApp.factory("msg",function($http,$q,$cookies){
//    return {
//        getUser:function(){
//            var deferred=$q.defer();
//            if(2==1){
//                return deferred.resolve("success");
//            }else{
//                return deferred.reject("error");
//            }
//            return deferred.promise;
//        }
//    }
//});
msgApp.factory("msg",["$http","$q","$cookies",function($http,$q,$cookies){
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
    };
}]);