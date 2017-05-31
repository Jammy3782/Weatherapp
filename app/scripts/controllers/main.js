'use strict';

/**
 * @ngdoc function
 * @name weatherappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherappApp
 */
 angular.module('weatherappApp')
   .controller('MainCtrl', function ($scope, current) {
     $scope.current = current.query();

     $scope.refreshCurrent = function(){
            $scope.current = current.query({
                location: $scope.location
            });
        };
      });
