'use strict';

angular.module('youtubeTvApp')
  .directive('clock', function ($timeout, $document, dateFilter) {
    return {
      template: '<span></span>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        // save timeouts so we can cancel the time updates
        var updateTimeoutId,
            hideTimeoutId,
            colon = '<span class="colon" style="opacity: 1;">:</span>'; // the seperation between the numbers
        // update the clock
        var updateLater = function() {
          updateTimeoutId = $timeout(function() {
            updateUI();
          }, 1000);
        };
        
        // show and hide the colon for 500ms repeat every second
        var hideColon = function() {
          hideTimeoutId = $timeout(function() {
            angular.element($document[0].querySelector('.colon')).css('opacity', 0);
          }, 500);
        };
        
        // update the UI clock
        var updateUI = function() {
          element.html(dateFilter(Date.now(), attrs.format).split(':').join(colon));
          hideColon();
          updateLater();
        };
        // listen on DOM destroy and cancel the next UI update
        element.bind('$destroy', function() {
          $timeout.cancel(updateTimeoutId);
          $timeout.cancel(hideTimeoutId);
        });
        
        // start process
        updateUI();
      }
    };
  });
