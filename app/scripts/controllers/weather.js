'use strict';

angular.module('youtubeTvApp')
  .controller('WeatherCtrl', function ($scope, $timeout, weather) {
    weather.get().then(function(data) {
      $scope.weather = data;
    });
  });
