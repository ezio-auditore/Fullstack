/**
 * Created by tonyStark on 11/22/2016.
 */

var myApp = angular.module('myApp',['ngRoute','ui.bootstrap','ngResource','ngAnimate','btford.socket-io'])

    .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
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
            controller : 'customerApiController'
        });

        $routeProvider.otherwise({redirectTo :"/"});
        $locationProvider.html5Mode({enabled : true , requireBase : false});
    }])
    
    .filter('startForm',function(){
        return function(data,start){
            return data.slice(start);
        }
    })