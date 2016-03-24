'use strict';
var core = angular.module('core');
// Setting up route
core.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');

        // Home state routing
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'j-core/views/j-core.home5.html',
                controller: 'HomeController'
            })
            .state('role', {
                url: '/core/roles',
                templateUrl: 'j-core/views/p3/role.html'
            })
            .state('featured', {
                url: '/core/featured',
                templateUrl: 'j-core/views/p3/featured.html'
            })
            .state('contact', {
                url: '/core/contact',
                templateUrl: 'j-core/views/p3/contact.html'
            })
            .state('hire-me', {
                url: '/core/hire-me',
                templateUrl: 'j-core/views/p3/hire-me.html',
                controller: 'HireController'
            })
            .state('blog', {
                url: '/blog/home',
                templateUrl: 'j-core/views/jblog.html'
            });
    }
]);

core.factory('myCache', ['$cacheFactory', function ($cacheFactory) {
    return $cacheFactory('myCache', {capacity: 3});
}]);



