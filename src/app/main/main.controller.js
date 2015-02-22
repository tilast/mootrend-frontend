'use strict';

angular.module('mootrendFrontend')
  .controller('MainCtrl', function ($scope, uiGmapGoogleMapApi, States, Analyzer) {
    $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 4};

    $scope.options = {scrollwheel: false};
    $scope.showWeather = true;

    $scope.map.events = {
      click: function(mapModel, eventName, originalEventArgs) {
        States(originalEventArgs[0].latLng.k, originalEventArgs[0].latLng.C).then(function(result) {
          debugger;
          result.data.results.filter(function(res) {
            return res.address_components.every(function(address_component) {
              return address_component.types.every(function(type) {
                if(type === 'administrative_area_level_1') {
                  Analyzer(address_component.long_name).then(function(result) {
                    
                  });

                  return false;
                } else {
                  return true;
                }
              });
            });
          });
        });
      }
    };
  });
