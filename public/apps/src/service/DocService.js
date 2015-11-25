/**
 * Created by Administrator on 2015/11/2.
 */
var docApp=angular.module("indexApp.docService",[
    "ngCookies"
]);
//docApp.factory("doc",function($http,$q,$cookies){
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

docApp.factory("doc",["$http","$q","$cookies",function($http,$q,$cookies){
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