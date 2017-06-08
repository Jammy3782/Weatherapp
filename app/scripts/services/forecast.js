'use strict';

/**
 * @ngdoc service
 * @name weatherappApp.forecast
 * @description
 * # forecast
 * Factory in the weatherappApp.
 */
angular.module('weatherappApp')
  .factory('forecast', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
