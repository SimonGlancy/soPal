app.service('songKickService', ['$http', function($http){
  const API_KEY = "tnIoiwzydaoUPOrR"
  const BAND_ID = "617842-escapists"
  const URL_PREFIX = "https://api.songkick.com/api/3.0/artists/"
  var pastShowsURL = URL_PREFIX + BAND_ID + "/gigography.json?apikey=" + API_KEY
  var upcomingShowsURL = URL_PREFIX + BAND_ID + "/calendar.json?apikey=" + API_KEY

  var self = this;
  self.pastShows = [];
  self.upcomingShows = [];

  self.getPastShows = function(callback){
    $http.get(pastShowsURL).success(function(res){
      callback(res);
    });
  };

  self.getUpcomingShows = function(callback){
    $http.get(upcomingShowsURL).then(function(res){
      callback(res);
    });
  };


}]);
