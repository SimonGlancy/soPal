app.controller('JoinCtrl', [
'$scope', '$http',
function($scope, $http){
  $scope.newSubscription = function(email){
    console.log(email);
  };

}])
