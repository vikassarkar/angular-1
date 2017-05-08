
// create the module and name it scotchApp
var app = angular.module('myApp', ['ngRoute', 'ngMessages']);


app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'contactController'
        })
        
        //default condition
        .otherwise({
            redirectTo: '/home'
        });
});

// // create the controller and inject Angular's $scope
// scotchApp.controller('mainController', function($scope) {
//     // create a message to display in our view
//     $scope.message = 'Everyone come and see how good I look!';
// });

// scotchApp.controller('aboutController', function($scope) {
//     $scope.message = 'Look! I am an about page.';
// });

// scotchApp.controller('contactController', function($scope) {
//     $scope.message = 'Contact us! JK. This is just a demo.';
// });

//manual bootstrap process 
angular.element(document).ready(function() {
    angular.bootstrap(document, ['myApp']);
});