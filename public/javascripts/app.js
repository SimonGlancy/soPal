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
    	});

  $urlRouterProvider.otherwise('home');
}])
