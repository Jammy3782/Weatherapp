'use strict';

/**
 * @ngdoc function
 * @name weatherappApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the weatherappApp
 */
 angular.module('weatherappApp')
   .controller('CurrentCtrl', function ($scope, $routeParams, current) {
     $scope.cityID = $routeParams.cityID;

     $scope.currentWeather = current.query({
         cityID: $routeParams.cityID
     });
   });
