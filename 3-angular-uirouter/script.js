
// create the module and name it scotchApp
var scotchApp = angular.module('myApp', ['ui.router']);


scotchApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider

        // route for the home page
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .state('about', {
            url: '/home',
            templateUrl: 'partials/about.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact.html',
            controller: 'contactController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

//manual bootstrap process 
angular.element(document).ready(function() {
    angular.bootstrap(document, ['myApp']);
});