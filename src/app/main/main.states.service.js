'use strict';

angular.module('mootrendFrontend')
  .factory('States', function($http) {
    return function(latitude, longitude) {
      return $http.get(['http://maps.googleapis.com/maps/api/geocode/json?latlng=', [latitude, longitude].join(',')].join(''));
    };
  });