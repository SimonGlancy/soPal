var app = angular.module('escapists', ['ui.router'])

app.config(['$stateProvider','$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/js/templates/posts/index.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}])
