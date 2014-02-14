app.factory('IdentityService', function($window, UserService) {
    var currentUser;

    if(!!$window.bootstrappedUserObject) {
        currentUser = new UserService();
        angular.extend(currentUser, $window.bootstrappedUserObject);
    }

    return {
        currentUser: currentUser,
        isAuthenticated: function() {
            return !!this.currentUser;
        },
        isAuthorized: function(role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    }
});