/**
 * Created by Administrator on 2015/11/2.
 */
var uiApp=angular.module("indexApp.uiService",[
    "ngCookies"
]);
//uiApp.factory("ui",function($http,$q,$cookies){
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

uiApp.factory("ui",["$http","$q","$cookies",function($http,$q,$cookies){
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