'use strict';

/**
 * @ngdoc function
 * @name weatherappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherappApp
 */
 angular.module('weatherappApp')
   .controller('MainCtrl', function ($scope, citysearch) {
     $scope.citiesFound = citysearch.find();

     $scope.findCities = function(){
         $scope.citiesFound = citysearch.find({
             query: $scope.location
         });
         $scope.searchQuery = $scope.location;
     };
   });
