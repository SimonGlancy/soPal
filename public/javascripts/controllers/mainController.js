app.controller('MainCtrl', [
'$scope','postFactory',
function($scope, postFactory){

  $scope.posts = postFactory.posts;


  $scope.addPost = function() {
    if(!$scope.title || $scope.title === '') { return; }
    postFactory.create({
      title: $scope.title,
      link: $scope.link,
      })
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  }
}])
