'use strict';

/**
 * @ngdoc overview
 * @name weatherappApp
 * @description
 * # weatherappApp
 *
 * Main module of the application.
 */
 angular
   .module('weatherappApp', [
     'ngAnimate',
     'ngAria',
     'ngCookies',
     'ngMessages',
     'ngResource',
     'ngRoute',
     'ngSanitize',
     'ngStorage',
     'ngTouch'
   ])
   .config(function ($routeProvider) {
     $routeProvider
       .when('/', {
         templateUrl: 'views/main.html',
         controller: 'MainCtrl',
         controllerAs: 'main'
       })
       .when('/about', {
         templateUrl: 'views/about.html',
         controller: 'AboutCtrl',
         controllerAs: 'about'
       })
       .when('/current/:cityID', {
         templateUrl: 'views/current.html',
         controller: 'CurrentCtrl',
         controllerAs: 'current'
       })
       .when('/forecast/:cityID', {
         templateUrl: 'views/forecast.html',
         controller: 'ForecastCtrl',
         controllerAs: 'forecast'
       })
       .otherwise({
         redirectTo: '/'
       });
   });
