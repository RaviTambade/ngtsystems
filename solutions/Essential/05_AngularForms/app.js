var app=angular.module('transflower',[]);
app.controller('MainController', function($scope){
  $scope.name="Seed Infotech Ltd.";
  $scope.reset = function(){
              // Sscope.customerId=34;
               $scope.firstName = "Ravi";
               $scope.lastName = "Tambade";
               $scope.address="Pune";
               $scope.mobilenumber=9881735801;
               $scope.birthdate="18/8/1975";
               $scope.email = "ravi.tambade@transflower.in";
            }
            
            $scope.reset();

});