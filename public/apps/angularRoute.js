var indexApp=angular.module("indexApp",[
    'ui.router',
    'indexApp.index',
    'indexApp.indexService',
    'indexApp.mobile',
    'indexApp.mobileService',
    'indexApp.web',
    'indexApp.webService',
    'indexApp.ui',
    'indexApp.uiService',
    'indexApp.doc',
    'indexApp.docService',
    'indexApp.life',
    'indexApp.lifeService',
    'indexApp.about',
    'indexApp.aboutService',
    'indexApp.msg',
    'indexApp.msgService',
]);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
indexApp.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
indexApp.config(function ($stateProvider, $urlRouterProvider,$httpProvider,$locationProvider) {
    /**
     * 清除angularjs在IE下的缓存；
     */
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    /**
     * 设置html5历史记录功能,消除angularjs路由中的#号
     */
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: '/apps/views/index.html',
            controller: 'indexCtrl'
        })
        .state('logout',{
            url:'/logout',
            controller:"logoutCtrl"
        })
        .state('mobile', {
            url: '/mobile',
            templateUrl: '/apps/views/mobile.html',
            controller: 'mobileCtrl'
        })
        .state('web', {
            url: '/web',
            templateUrl: '/apps/views/web.html',
            controller: 'webCtrl'
        })
        .state('ui', {
            url: '/ui',
            templateUrl: '/apps/views/ui.html',
            controller: 'uiCtrl'
        })
        .state('doc', {
            url: '/doc',
            templateUrl: '/apps/views/doc.html',
            controller: 'docCtrl'
        })
        .state('life', {
            url: '/life',
            templateUrl: '/apps/views/life.html',
            controller: 'lifeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/apps/views/about.html',
            controller: 'aboutCtrl'
        })
        .state('msg', {
            url: '/msg',
            templateUrl: '/apps/views/msg.html',
            controller: 'msgCtrl'
        })

});

