
var app = angular.module('myApp');

app.controller('homeController',
    function($scope, $rootScope, $timeout) {
        $scope.message = 'Everyone come and see how good I look!'

        // sample data we would get back from an api
        var users = [
            {
                name: 'Chris',
                email: ''
            },
            {
                name: 'Holly',
                email: ''
            }
        ];

        // assign this data to an object to store all our form data
        $scope.formData = {};
        $scope.formData.users = users;
        $scope.footerarea = "MY FOOTER";
        
        //timeout event
        $timeout(function(){
            alert("i am in time out mode this is the triggred timer!!!")
            $scope.footerarea = "New Footer";
               //apply digest cycle in all scope data
            $scope.$apply();
        }, 20000)
        
        
         //catching emit
        $scope.$on("$destroy", function(event, data){
            alert("$destroy ")
        });
        
        
        //catching emit
        $scope.$on("footerLoadingE", function(event, data){
            alert("footerLoadingE " + data.message)
        });
        
        //broadCast event
        $rootScope.$broadcast('loadFooterB', { message: "Load Footer" });
        // Destroy scope, because it's no longer needed.
        //$scope.$destroy();
    });
