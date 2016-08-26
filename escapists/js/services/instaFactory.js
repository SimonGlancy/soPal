
app.service('instaFactory', ['$http', function($http){

  const AUTH_TOKEN='22490782.8ba77f3.ac3432952da64337b9d685af87097789'
  var url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + AUTH_TOKEN + '&count=150&callback=JSON_CALLBACK'
  var self = this;
  self.posts = [];

  this.get = function(callback) {
    $http.jsonp(url).success(function(res){
      console.log(res);
      callback(res);
    });
  };

}])
