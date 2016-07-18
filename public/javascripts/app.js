var app = angular.module('flapperNews', ['ui.router'])

app.config(['$stateProvider','$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/javascripts/templates/posts/index.html',
      controller: 'MainCtrl',
      resolve: {
        postPromise: ['postFactory', function(posts){
          return posts.getAll();
        }]
      }
    })
    .state('posts', {
    		url : '/posts/:id',
    		templateUrl : '/javascripts/templates/posts/show.html',
    		controller : 'PostsCtrl',
        resolve: {
          post: ['$stateParams','postFactory', function($stateParams, postFactory){
            return postFactory.get($stateParams.id);
          }]
        }
    	})
    .state('login', {
      url: '/login',
      templateUrl: '/javascripts/templates/users/login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'auth', function($state, auth){
        if(auth.isLoggedIn()){
          $state.go('home');
        }
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: '/javascripts/templates/users/register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'auth', function($state, auth){
        if(auth.isLoggedIn()){
          $state.go('home');
        }
      }]
    })

  $urlRouterProvider.otherwise('home');
}])
