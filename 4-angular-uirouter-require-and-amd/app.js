define([
    'angular',
    'angularAMD',
    'angular-ui-router'
], function(angular, angularAMD) {
    'use strict';
    // create the module and name it scotchApp
    var app = angular.module('myApp', ['ui.router',]);


    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider

            // route for the home page
            .state('home', angularAMD.route({
                url: '/home',
                templateUrl: 'partials/home.html',
                controller: 'homeController'
            }))

            // route for the about page
            .state('about', angularAMD.route({
                url: '/home',
                templateUrl: 'partials/about.html',
                controller: 'aboutController'
            }))

            // route for the contact page
            .state('contact', angularAMD.route({
                url: '/contact',
                templateUrl: 'partials/contact.html',
                controller: 'contactController'
            }));
    });


    //manual bootstrap process 
    //angular.element(document).ready(function() {
    //    return angular.bootstrap(document, ['myApp']);
    //});
    return angularAMD.bootstrap(app);
});