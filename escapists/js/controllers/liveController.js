
app.controller('LiveCtrl', [
'$scope', '$http', 'songKickService',
function($scope, $http, songKickService){

  $scope.upcomingShows = songKickService.upcomingShows;
  $scope.pastShows = songKickService.pastShows;
  $scope.showUpcoming = false;
  $scope.showPast = false;

  $scope.getPastShows = function(){
    songKickService.getPastShows();
    $scope.pastShows = songKickService.pastShows;
  }

  $scope.getUpcomingShows = function(){
    songKickService.getUpcomingShows();
    $scope.upcomingShows = songKickService.upcomingShows;
  }

  $scope.parseDateData = function(data){
    var date = new Date(data)
    // var dateString = date.getDate + " " +
    return date.toDateString();
  }

  $scope.getPastShows();
  $scope.getUpcomingShows();
}]);
