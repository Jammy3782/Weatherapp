'use strict';

/**
 * @ngdoc function
 * @name yourApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yourApp
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
