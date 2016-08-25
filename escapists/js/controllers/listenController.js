app.controller('ListenCtrl', [
'$scope', '$http', 'spotifyService', 'ngAudio',
function($scope, $http, spotifyService, ngAudio){
  var self = this ;


  $scope.artist = "E S C A P I S T S"
  $scope.faceUp = true;
  $scope.playing = false;
  $scope.currentSong = "";


  self.init = function(){
    self.getAlbums().then(function(data){
      self.getAllAlbumDetails();
    })
  }



  self.getAlbums = function() {
    return spotifyService.getAlbums().then(function(res){
      $scope.albums = (res.data.items);
      // self.getDates();
      // self.sortForDates();

    })
  }

  self.getAlbumDetails = function(index) {
    return spotifyService.getAlbumDetails($scope.albums[index].id)
    .then(function(res){
      $scope.albums[index] = res.data
      $scope.albums[index].date = new Date(res.data.release_date)
    })
  }

  self.getAllAlbumDetails = function() {
    for (i = 0; i < $scope.albums.length; i++) {
      self.getAlbumDetails(i);
    }
  }

  $scope.playSong = function(previewUrl) {
    $scope.currentSong = ngAudio.load(previewUrl);
    $scope.currentSong.play()
  }

  $scope.pauseSong = function(previewUrl) {
    $scope.currentSong.pause()
  }

  self.sortForDates = function() {
    $scope.albums.sort(function(a,b){
      return b.date - a.date;
    })
  }

  self.init();

  // $scope.getAlbums();

}])
