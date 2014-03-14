'use strict';

angular.module('youtubeTvApp')
  .factory('youtube', function ($http, $q) {
    // Service logic
    var baseUrl = 'https://gdata.youtube.com/feeds/api/',
        offset  = 1,
        count   = 15;
    
    var formatDuration = function(timeInSeconds) {
      var secNumb    = parseInt(timeInSeconds),
          hours   = Math.floor(secNumb / 3600),
          minutes = Math.floor((secNumb - (hours * 3600)) / 60),
          seconds = secNumb - (hours * 3600) - (minutes * 60),
          time = minutes + ':' + seconds;
  
      if (minutes < 10 && hours !== 0) {
        minutes = '0' + minutes;
      }
      
      if (seconds < 10) {
        seconds = '0' + seconds;
      }

      if (hours !== 0) {
        time = hours + ':' + time;
      }
      return time;
    };

    // Public API here
    return {
      // Most popular recent videos
      query: function() {
        var deferred = $q.defer(),
            url = baseUrl + 'standardfeeds/most_viewed?time=today&start-index=' + offset + '&max-results=' + count + '&safeSearch=none&v=2&alt=json&callback=JSON_CALLBACK';

        $http.jsonp(url).success(function(resp) {
          deferred.resolve(resp.feed.entry);
        }).error(function(data, status) {
          deferred.reject(status);
        });
        return deferred.promise; // returning the data after the videos have been fetched
      },
      
      formatDuration: function(seconds) {
        return formatDuration(seconds);
      }
    };
  });
