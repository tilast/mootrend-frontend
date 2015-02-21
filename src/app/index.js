'use strict';

angular.module('mootrendFrontend', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap', 'uiGmapgoogle-maps'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
          // key: 'AIzaSyBtZDeHxy8q8gYkF-T1UP773Od-43Qgtac',
          v: '3.17',
          libraries: 'weather,geometry,visualization'
      });
  })
;
