app.controller('ProfileController', function($scope, AuthService, IdentityService, NotifierService, $location) {
    $scope.email = IdentityService.currentUser.username;
    $scope.fname = IdentityService.currentUser.firstName;
    $scope.lname = IdentityService.currentUser.lastName;

    $scope.update = function() {
        var newUserData = {
            username: $scope.email,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        if($scope.password && $scope.password.length > 0 && $scope.password === $scope.passwordConfirmation) {
            newUserData.password = $scope.password;
            AuthService.updateCurrentUser(newUserData).then(function() {
                NotifierService.notify('Your user profile has been updated!');
            }, function(reason) {
                NotifierService.error(reason);
            });
            $location.path('/');
        } else if((!$scope.password || !$scope.password.length > 0) && (!$scope.passwordConfirmation || !$scope.passwordConfirmation.length > 0)) {
            AuthService.updateCurrentUser(newUserData).then(function() {
                NotifierService.notify('Your user profile has been updated!');
            }, function(reason) {
                NotifierService.error(reason);
            });
            $location.path('/');
        } else {
            NotifierService.error('Please make sure your password and confirmation are correct!');
        }
    };
});