app.controller('SignupController', function($scope, UserService, NotifierService, $location, AuthService) {
   $scope.signup = function() {
       var newUserData = {
           username: $scope.email,
           password: $scope.password,
           firstName: $scope.fname,
           lastName: $scope.lname
       };

       if($scope.password && $scope.password.length > 0 && $scope.password === $scope.passwordConfirmation) {
           newUserData.password = $scope.password;
           AuthService.createUser(newUserData).then(function() {
               NotifierService.notify('Your account has been created!');
               $location.path('/');
           }, function(reason) {
               NotifierService.error(reason);
           });
       } else {
           NotifierService.error('Please make sure your password and confirmation are correct!');
       }
   };
});