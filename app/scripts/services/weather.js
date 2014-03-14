'use strict';

angular.module('youtubeTvApp')
  .factory('weather', function ($http, $q) {
    var weather = {
      temp : {},
      clouds: null
    };

    // Public API here
    return {
      get: function(city) {
        city = (city || 'New York');
        var jsonUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',us&units=metric&callback=JSON_CALLBACK',
            deferred = $q.defer();
        
        $http.jsonp(jsonUrl).success(function (resp) {
          if(resp) {
            weather.icon = resp.weather[0].icon;
            weather.id = resp.weather[0].id;
            if(resp.main) {
              weather.temp.current = resp.main.temp;
              weather.temp.min = resp.main.temp_min;
              weather.temp.max = resp.main.temp_max;
            }
            weather.clouds = resp.clouds ? resp.clouds.all : undefined;
          }
          deferred.resolve(weather);
        }).error(function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }
    };
  });
