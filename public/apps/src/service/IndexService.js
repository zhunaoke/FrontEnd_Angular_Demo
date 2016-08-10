/**
 * Created by Administrator on 2015/11/2.
 */
var indexApp=angular.module("indexApp.indexService",[
    "ngCookies"
]);
indexApp.factory("index",["$http","$q","$cookies",function($http,$q,$cookies){
    return {
        getAllProducts:function(){
            var deferred=$q.defer();
            $http.get("/api-products").success(function(data){
                return deferred.resolve(data);
            }).error(function(err){
                return deferred.reject(err);
            });
            return deferred.promise;
        }
    };
}]);