var app = angular.module('myApp', ['ngRoute','ngResource']);
app.config(function($routeProvider){
    $routeProvider
	    .when('/store',{
	        templateUrl: '/fresherangular/views/store.html',
	        controller: 'StoreController'
	    })
        .when('/users',{
            templateUrl: '/fresherangular/views/users.html',
            controller: 'usersController'
        })
        .when('/roles',{
            templateUrl: '/fresherangular/views/roles.html',
            controller: 'rolesController'
        })
        //Github service example
        .when('/main', {
            templateUrl: "/fresherangular/views/github/main.html",
            controller: "MainController"
          })
          .when("/user/:username", {
            templateUrl: "/fresherangular/views/github/user.html",
            controller: "UserController"
          })
          .when("/repo/:username/:reponame", {
            templateUrl: "/fresherangular/views/github/repo.html",
            controller: "RepoController"
          })
          .when("/store/:id", {
            templateUrl: "/fresherangular/views/detail-page.html",
            controller: "DetailController"
          })
          //End Github Service example
        .otherwise(
            { redirectTo: '/'}
        );
});

