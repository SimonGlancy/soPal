app.controller('MainCtrl', [
'$scope', 'instaFactory', '$http', '$window', '$document', '$interval',
function($scope, instaFactory, $http, $window, $document, $interval){

  $scope.runBackgroundChange = function(interval,frames) {
    var int = 1;

    function backgroundChanger() {
        $document[0].body.id = "background"+int;
        int++;
        if(int === frames) { int = 1; }
    }

    $interval(backgroundChanger, interval)
  }

  // $scope.runBackgroundChange(800, 3);

}])
