var app = angular.module('myApp');

app.directive("footerComponent",
        function() {
            return {
                restrict: 'AE',
                scope:{
                    newdata:'='
                },
                replace: true, 
                transclude: true,
                link: function(scope, element, attrs){
                    
                    //emmiting event
                    scope.$emit('footerLoadingE', { message: "Loading footer component" });
                    
                    //catching broadcast
                    scope.$on('loadFooterB', function (event, data) {
                      alert('loadFooterB ' + data.message)
                    });
                    
                    //if two way binding by isolated scope "=" ; scope == $scope of page consuming <footer-component>
                    //scope.newdata, attrs.newdata
                    scope.newdata = "MY CHANGED FOOTER";                    
                    //if onway binding by isolated scope "@" ; whatever isolates scope is there we can consume its value eg. {{newdata}} = footerarea
                    //this case scope is footer scope
                    console.log(scope)
                    console.log(element)
                    console.log(attrs)
                },
                templateUrl:'directives/views/footer.html'
            };
        });