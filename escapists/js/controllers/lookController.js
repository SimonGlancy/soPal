app.controller('LookCtrl', [
'$scope', 'instaFactory', '$interval',
function($scope, instaFactory, $interval){

  $scope.posts = instaFactory.posts
  $scope.faceUp = true;
  $scope.emptyHeart = true;
  $scope.artist = "E S C A P I S T S"

  $scope.getPosts = function(){
    instaFactory.get(function(res){
      $scope.posts = res.data;
    });
  }

  $scope.getLikes = function(){
    console.log($scope.posts[0])
  }

  $scope.addLike = function(index){
    $scope.posts[index].likes.count += 1
  }


  $scope.removeLike = function(index){
    $scope.posts[index].likes.count -= 1
  }


  $scope.runBackgroundChange = function(interval,frames) {
    var int = 1;

    function backgroundChanger() {
        $document[0].body.id = "background"+int;
        int++;
        if(int === frames) { int = 1; }
    }

    $interval(backgroundChanger, interval)
  }

  $scope.getPosts();
  // $scope.runBackgroundChange(800, 3);
}])
