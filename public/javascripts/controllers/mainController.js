app.controller('MainCtrl', [
'$scope','postFactory', 'auth',
function($scope, postFactory,auth){

  $scope.posts = postFactory.posts;
  $scope.isLoggedIn = auth.isLoggedIn;

  var length = $scope.posts.length


  console.log($scope.posts[length -1])

  $scope.addPost = function() {
    if(!$scope.title || $scope.title === '') { return; }
    postFactory.create({
      title: $scope.title,
      link: $scope.link
      })
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  }
}])
