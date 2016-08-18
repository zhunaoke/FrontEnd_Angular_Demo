/**
 * Created by Administrator on 2015/11/2.
 */
var msgApp=angular.module('indexApp.msgService',[
    'ngCookies'
]);
msgApp.factory('msg',['$http','$q','$cookies',function($http,$q,$cookies){
    return {
        getCommentList:function(page,pageSize){
            var deferred=$q.defer();
            $http.get('/api-products/comments',{params:{page:page,pageSize:pageSize}}).success(function(data){
                return deferred.resolve(data);
            }).error(function(err){
                return deferred.reject(err);
            });
            return deferred.promise;
        },
        //获取应用详情；
        getSignalAppInfo:function(uuid,appId){
            console.log(uuid+'---'+appId);
            var deferred= $q.defer();
            $http.get('/api-products/appInfo',{params:{uuid:uuid,appId:appId}}).success(function(data){
                if(data.id!=''){
//               console.log("返回的应用详情:"+JSON.stringify(data));
                    return deferred.resolve(data);
                }else{
                    return deferred.reject(data);
                }
            }).error(function(error){
                return deferred.reject(error);
            });
            return deferred.promise;
        },
        //重置应用的secretKey值；
        resetSecretKey:function(uuid,appId){
            var deferred= $q.defer();
            $http.put("/api-products/resetSecretKey",{uuid:uuid,appId:appId}).success(function(data){
                return deferred.resolve(data);
            }).error(function(err){
                return deferred.reject(err);
            });
            return deferred.promise;
        },
        //获取医生咨询详情
        getDoctorState:function(token){
            var deferred= $q.defer();
            $http.get("/api-products/modAvailableState",{params:{token:token}}).success(function(data){
                return deferred.resolve(data);
            }).error(function(err){
                return deferred.reject(err);
            });
            return deferred.promise;
        },
        //修改医生咨询状态
        modAvailableState:function(token,data,is_available){
            var deferred= $q.defer();
            $http.post("/api-products/modAvailableState",{token:token,data:data,is_available:is_available}).success(function(data){
                return deferred.resolve(data);
            }).error(function(err){
                return deferred.reject(err);
            });
            return deferred.promise;
        }
    };
}]);