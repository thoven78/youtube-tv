'use strict';

angular.module('youtubeTvApp')
  .controller('MainCtrl', function ($scope, youtube, $document, $timeout) {
    youtube.query().then(function(data) {
      $scope.videos = data;
    });
    
    $scope.streamingToggle = function(video) {
      var url = 'https://www.youtube.com/v/' + video.media$group.yt$videoid.$t + '&autoplay=1',
          iframe = $document[0].querySelector('iframe');
      angular.element($document[0].querySelector('.video-overlay')).css('display', 'block');
      $timeout(function() {
        iframe.src = url;
      }, 500);
    };
    
    $scope.closeVideo = function() {
      var iframe = $document[0].querySelector('iframe');
      $timeout(function() {
        iframe.src = '';
        angular.element($document[0].querySelector('.video-overlay')).css('display', 'none');
      }, 500);
    };
    
    $scope.formatDuration = function(seconds) {
      return youtube.formatDuration(seconds);
    };
  });
