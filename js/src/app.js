/*global angular*/
var services = angular.module('services', []);
var mainModule = angular.module('mainModule', ['services']);

var app = angular.module('87', ['ngRoute', 'services', 'mainModule']);

//router setup
app.config(function ($routeProvider, $locationProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/main.html'
        })
        .when('/social', {
            templateUrl: 'templates/social.html'
        })
        .when('/manifesto', {
            templateUrl: 'templates/manifesto.html'
        })
        .when('/charities', {
            templateUrl: 'templates/charities.html'
        })
        .when('/credits', {
            templateUrl: 'templates/credits.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
});