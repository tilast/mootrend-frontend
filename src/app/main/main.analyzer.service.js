'use strict';

angular.module('mootrendFrontend')
  .factory('Analyzer', function($http) {
    delete $http.defaults.headers.common["X-Requested-With"];
    $http.defaults.headers.common["Accept"] = "application/json";
    $http.defaults.headers.common["Content-Type"] = "application/json";

    return function(state) {
      return $http.get(['http://localhost:9292/api/v1/analyzer_items.json?state=', state].join(''), { header: {
        "X-Requested-With": '',
        "Accept": "application/json",
        "Content-Type": "application/json"
      }, withCredentials: false, useXDomain: false});
    };
  });