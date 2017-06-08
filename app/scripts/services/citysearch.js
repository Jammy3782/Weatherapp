'use strict';

/**
 * @ngdoc service
 * @name weatherappApp.citysearch
 * @description
 * # citysearch
 * Factory in the weatherappApp.
 */
angular.module('weatherappApp')
  .factory('citysearch', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=f2db6ae4b7593127d74095711aacb98f', {}, {
        find: {
          method: 'GET',
          params: {
            query: 'seattle'
          },
          isArray: false
        }
      });
    });
