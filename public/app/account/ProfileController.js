app.controller('ProfileController', function($scope, AuthService, IdentityService, NotifierService) {
    $scope.email = IdentityService.currentUser.username;
    $scope.fname = IdentityService.currentUser.firstName;
    $scope.lname = IdentityService.currentUser.lastName;

    $scope.update = function() {
        var newUserData = {
            username: $scope.email,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        if($scope.password && $scope.password.length > 0) {
            newUserData.password = $scope.password;
        }

        AuthService.updateCurrentUser(newUserData).then(function() {
            NotifierService.notify('Your user profile has been updated!');
        }, function(reason) {
            NotifierService.error(reason);
        });
    };
});