app.service('songKickService', ['$http', function($http){
  const API_KEY = "tnIoiwzydaoUPOrR"
  const BAND_ID = "617842-escapists"
  const URL_PREFIX = "http://api.songkick.com/api/3.0/artists/"
  var pastShowsURL = URL_PREFIX + BAND_ID + "/gigography.json?apikey=" + API_KEY
  var upcomingShowsURL = URL_PREFIX + BAND_ID + "/calendar.json?apikey=" + API_KEY

  var self = this;
  self.pastShows = [];
  self.upcomingShows = [];

  self.getPastShows = function(){
    $http.get(pastShowsURL).then(function(res){
      self.pastShows = self.accountForNoEntries(res.data.resultsPage);
    });
  };

  self.getUpcomingShows = function(){
    $http.get(upcomingShowsURL).then(function(res){
      self.pastShows = self.accountForNoEntries(res.data.resultsPage);
    });
  };

  self.accountForNoEntries = function(data){
    return data.totalEntries === 0 ? [] : data.results.event.reverse();
  };

}]);
