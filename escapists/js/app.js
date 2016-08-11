var app = angular.module('escapists', ['ui.router','ngAudio'])

app.config(['$httpProvider','$stateProvider','$urlRouterProvider',
function($httpProvider,$stateProvider, $urlRouterProvider) {


  $stateProvider.state('home', {
    url: '/home',
    templateUrl: '/escapists/js/templates/home.html',
    controller: 'MainCtrl'
  });
  $stateProvider.state('look', {
    url: '/look',
    templateUrl: '/escapists/js/templates/look.html',
    controller: 'LookCtrl'
  })
  $stateProvider.state('listen', {
    url: '/listen',
    templateUrl: '/escapists/js/templates/listen.html',
    controller: 'ListenCtrl'
  })
  $stateProvider.state('live', {
    url: '/live',
    templateUrl: '/escapists/js/templates/live.html',
    controller: 'LiveCtrl'
  });


  $urlRouterProvider.otherwise('home');
}])
