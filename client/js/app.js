/**
 * Created by tonyStark on 11/22/2016.
 */

var myApp = angular.module('myApp',['ngRoute','ui.bootstrap','ngResource','ngAnimate','btford.socket-io','ui.router'])

    /*.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $routeProvider.when('/home',
            {templateUrl: 'partials/home.html',
                controller: 'homeController'});
        $routeProvider.when('/about',
            {templateUrl: 'partials/about.html',
                controller: 'aboutController'});
        $routeProvider.when('/contact',
            {templateUrl: 'partials/contact.html',
                controller: 'contactController'});
        $routeProvider.when('/projects',{
            templateUrl:'/partials/projects.html',
            controller : 'projectsController'
        });

        $routeProvider.when('/customerApi',{
            templateUrl: '/partials/customer_api.html',
            controller : 'customerApiController'
        });
         $routeProvider.when('/chatService',{
            templateUrl: '/partials/chat_service.html',
            controller : 'chatController'
        });

        $routeProvider.otherwise({redirectTo :"/"});
        $locationProvider.html5Mode({enabled : true , requireBase : false});
    }])*/
    .config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/partials/home.html',
            controller : 'homeController'
        })
        .state('chat', {
            url: '/chat',
            templateUrl: '/partials/chat_service.html',
            controller : 'chatController'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/partials/about.html',
            controller : 'aboutController'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '/partials/contact.html',
            controller : 'contactController'
        })
        .state('projects', {
            url: '/projects',
            templateUrl: '/partials/projects.html',
            controller : 'projectsController'
        })
        .state('customerApi', {
            url: '/customerApi',
            templateUrl: '/partials/customer_api.html',
            controller : 'customerApiController'
        })
        //$locationProvider.html5Mode({enabled : true});
})
    
    .filter('startForm',function(){
        return function(data,start){
            return data.slice(start);
        }
    })
    .factory('socket', function (socketFactory) {
  return socketFactory();
})