app.controller('PostsCtrl', [
'$scope',
'postFactory',
'post',
'auth',
function($scope, postFactory, post,auth){
  $scope.post = post;
  $scope.isLoggedIn = auth.isLoggedIn;

  $scope.addComment = function(){
    if($scope.body === ''){ return; }
    postFactory.addComment(post._id,{
      body: $scope.body
    }).success(function(comment){
      $scope.post.comments.push(comment);
    });
    $scope.body = '';
  }

  $scope.incrementUpvotes = function(comment) {
    postFactory.upvoteComment(post, comment);
  }
}]);
