'use strict';

/**
 * @ngdoc function
 * @name weatherappApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the weatherappApp
 */
 angular.module('weatherappApp')
   .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
     $scope.cityID = $routeParams.cityID;

     $scope.forecastData = forecast.query({
         cityID: $routeParams.cityID
     });
   });
