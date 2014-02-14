app.controller('SignupController', function($scope, UserService, NotifierService, $location, AuthService) {
   $scope.signup = function() {
       var newUserData = {
           username: $scope.email,
           password: $scope.password,
           firstName: $scope.fname,
           lastName: $scope.lname
       };

       AuthService.createUser(newUserData).then(function() {
           NotifierService.notify('Your account has been created!');
           $location.path('/');
       }, function(reason) {
           NotifierService.error(reason);
       });
   };
});