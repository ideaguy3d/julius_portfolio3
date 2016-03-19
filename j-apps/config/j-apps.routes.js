/**
 * Created by Julius Hernandez on 1/1/2016.
 */
angular.module('j-apps').config(function($stateProvider){
  $stateProvider.state('j-app-home', {
    url: '/demo-apps',
    templateUrl: 'j-apps/views/j-apps-home.html',
    controller: 'J-AppsCtrl'
  });
});
