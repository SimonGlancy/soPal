app.service('spotifyService', ['$http', function($http){

  const ARTIST_ID='5hp8GdfyyLzroKRVdEfiDO'
  var artistUrl = 'https://api.spotify.com/v1/artists/' + ARTIST_ID + '/albums'
  var self = this;
  self.albums = [];

  self.getAlbums = function() {
    return $http.get(artistUrl);
  }

  self.getAlbumDetails = function(id) {
    return $http.get('https://api.spotify.com/v1/albums/' + id)
  }

  self.getAlbumDates = function(index) {
    $http.get('https://api.spotify.com/v1/albums/' + self.albums[index].id)
    .then(function(res){
      self.albums[index] = res.data
      self.albums[index].date = new Date(res.data.release_date)
    })
  }

  self.getDates = function() {
    for (i = 0; i < self.albums.length; i++) {
      self.getAlbumDates(i);
    }
  }

  self.sortForDates = function() {
    self.albums.sort(function(a,b){
      return b.date - a.date;
    })
  }


}])
