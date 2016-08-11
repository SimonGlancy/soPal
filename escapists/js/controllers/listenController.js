app.controller('ListenCtrl', [
'$scope', '$http', 'spotifyService', 'ngAudio',
function($scope, $http, spotifyService, ngAudio){
  var self = this ;

  $scope.albums = spotifyService.albums.sort(function(a,b){
    return b.date - a.date;
  })
  $scope.artist = "E S C A P I S T S"
  $scope.faceUp = true;
  $scope.playing = false;
  $scope.currentSong = "";

  $scope.getAlbums = function() {
    spotifyService.getAlbums();
  }

  $scope.playSong = function(previewUrl) {
    $scope.currentSong = ngAudio.load(previewUrl);
    $scope.currentSong.play()
  }

  $scope.pauseSong = function(previewUrl) {
    $scope.currentSong.pause()
  }

  $scope.sortForDates = function() {
    $scope.albums.sort(function(a,b){
      return b.date - a.date;
    })
  }

  $scope.getAlbums()

}])
