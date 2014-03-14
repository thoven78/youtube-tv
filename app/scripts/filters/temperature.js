'use strict';

angular.module('youtubeTvApp')
  .filter('temperature', function ($filter) {
    // private function
    var convert = function(degInCelcius) {
      return (degInCelcius * 1.8) + 32;
    };
    // public API
    return function (input, precision) {
      precision = (precision || 1);
      var numberFilter = $filter('number');
      return numberFilter(convert(input), precision) + '\u00B0F';
    };
  });
