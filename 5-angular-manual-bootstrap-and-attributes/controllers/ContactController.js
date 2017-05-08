

var app = angular.module('myApp');

app.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    
    // function to submit the form after all validation has occurred            
        $scope.submitForm = function() {

            // check to make sure the form is completely valid
            if ($scope.userForm.$valid) {
                alert('our form is amazing');
            }

        };
    
    
});
