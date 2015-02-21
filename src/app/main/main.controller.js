'use strict';

angular.module('mootrendFrontend')
  .controller('MainCtrl', function ($scope, uiGmapGoogleMapApi) {
    $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 4, layer: [{
      query: {
        select: 'geometry',
        from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
        where: "ISO_2DIGIT IN ('DE')"
      },
      styles: [{
        polygonOptions: {
          fillColor: '#FF00FF',
          fillOpacity: 0.3
        }
      }]
    }]};

    var countries = ['US', 'DE'];
    var de = 0;

    $scope.setCenter = function(lat, lng)
    {
        // $scope.map.zoom = 4;
        // $scope.refreshMap = false;
        // $scope.map.center.latitude += 5;
        $scope.map.zoom = 3;
        $scope.refreshMap = true;
        debugger;
        $scope.map.layer[0].query.where = "ISO_2DIGIT IN ('"+ countries[de > 0 ? de-- : de++] +"')";
        debugger;
    };
    $scope.options = {scrollwheel: false};
    $scope.showWeather = true;

    // uiGmapGoogleMapApi.then(function(maps) {
    //   debugger;
    //   var world_geometry = new maps.FusionTablesLayer({
        // query: {
        //   select: 'geometry',
        //   from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk'
        // },
    //     map: $scope.map,
    //     suppressInfoWindows: true
    //   });
    // });
  });
