
app.controller('LiveCtrl', [
'$scope', '$http', 'songKickService',
function($scope, $http, songKickService){


  $scope.showUpcoming = false;
  $scope.showPast = false;
  var self = this;

  $scope.getPastShows = function(){
    songKickService.getPastShows(function(res){
      $scope.pastShows = self.accountForNoEntries(res);
    });
  };

  $scope.getUpcomingShows = function(){
    songKickService.getUpcomingShows(function(res){
      $scope.upcomingShows = self.accountForNoEntries(res)
    });
  }

  $scope.parseDateData = function(data){
    var date = new Date(data)
    return date.toDateString();
  }

  self.accountForNoEntries = function(res){
    var outPut = res.resultsPage
    return outPut === undefined ? [] : outPut.results.event.reverse();
  };

  $scope.getPastShows();
  $scope.getUpcomingShows();
}]);
