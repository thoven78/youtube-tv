'use strict';

angular.module('youtubeTvApp')
  .directive('weatherIcon', function () {
    var icons = {
      // Day
      '01d' : 'icon-sun',
      '02d' : 'icon-cloud-sun',
      '03d' : 'icon-fog-sun',
      '04d' : 'icon-clouds',
      '09d' : 'icon-drizzle',
      '10d' : 'icon-rain',
      '11d' : 'icon-cloud-flash',
      '13d' : 'icon-snow-heavy',
      '50d' : 'icon-mist',
      
      // Night
      '01n' : 'icon-moon',
      '02n' : 'icon-cloud-moon',
      '03n' : 'icon-fog-moon',
      '04n' : 'icon-cloud',
      '09n' : 'icon-drizzle',
      '10n' : 'icon-rain',
      '11n' : 'icon-clouds-flash',
      '13n' : 'icon-snowflake',
      '50n' : 'icon-mist'
    };
    return {
      restrict: 'E',
      replace: true,
      scope: {
        icon: '@'
      },
      controller: function($scope) {
        $scope.cssClass = function() {
          return icons[$scope.icon];
        };
      },
      template: '<span class="{{ cssClass() }}"></span>'
    };
  });
