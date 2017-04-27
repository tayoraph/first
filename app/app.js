'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute']);

app.
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
   .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'loginCtrl'
            })

   	.when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'loginCtrl'
            })
   ;

  $routeProvider.otherwise({redirectTo: '/login'});
}]);
