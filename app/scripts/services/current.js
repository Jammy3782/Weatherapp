'use strict';

/**
 * @ngdoc service
 * @name weatherappApp.current
 * @description
 * # current
 * Factory in the weatherappApp.
 */
 angular.module('weatherappApp')
   .factory('current', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=f2db6ae4b7593127d74095711aacb98f', {}, {
       query: {
         method:'GET',
         params:{
           location: 'Seattle,us',
           bogus: null
         },
         isArray:false
       }
     });
   });
