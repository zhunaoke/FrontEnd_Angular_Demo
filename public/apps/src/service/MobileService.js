/**
 * Created by Administrator on 2015/11/2.
 */
var mobileApp=angular.module("indexApp.mobileService",[
    "ngCookies"
]);
//mobileApp.factory("mobile",function($http,$q,$cookies){
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
mobileApp.factory("mobile",["$http","$q","$cookies",function($http,$q,$cookies){
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