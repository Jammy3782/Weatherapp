'use strict';

/**
 * @ngdoc service
 * @name weatherappApp.forecast
 * @description
 * # forecast
 * Factory in the weatherappApp.
 */
 angular.module('weatherappApp')
   .factory('forecast', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=f2db6ae4b7593127d74095711aacb98f', {}, {
       query: {
         method:'GET',
         params:{
           cityID: '4717560' // Paris, France ID
         },
         isArray:false
       }
     });
   });
