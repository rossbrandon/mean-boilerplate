app.factory('AuthService', function($http, IdentityService, $q, UserService) {
   return {
       authenticateUser: function(username, password) {
           var deferred = $q.defer();
           $http.post('/login', {username: username, password: password}).then(function(response) {
               if(response.data.success) {
                   var user = new UserService();
                   angular.extend(user, response.data.user);
                   IdentityService.currentUser = user;
                   deferred.resolve(true);
               } else {
                   deferred.resolve(false);
               }
           });
           return deferred.promise;
       },
       createUser: function(newUserData) {
           var newUser = new UserService(newUserData);
           var deferred = $q.defer();

           newUser.$save().then(function() {
               IdentityService.currentUser = newUser;
               deferred.resolve();
           }, function(response) {
               deferred.reject(response.data.reason);
           });

           return deferred.promise;
       },
       updateCurrentUser: function(newUserData) {
           var deferred = $q.defer();
           var clone = angular.copy(IdentityService.currentUser);
           angular.extend(clone, newUserData);
           clone.$update().then(function() {
               IdentityService.currentUser = clone;
               deferred.resolve();
           }, function(response) {
               deferred.reject(response.data.reason);
           });
           return deferred.promise;
       },
       logoutUser: function() {
           var deferred = $q.defer();
           $http.post('/logout', {logout: true}).then(function() {
               IdentityService.currentUser = undefined;
               deferred.resolve();
           });
           return deferred.promise;
       },
       authorizeCurrentUserForRoute: function(role) {
           if(IdentityService.isAuthorized(role)) {
               return true;
           } else {
               return $q.reject('not authorized');
           }
       },
       authorizeAuthenticatedUserForRoute: function() {
           if(IdentityService.isAuthenticated()) {
               return true;
           } else {
               return $q.reject('not authorized');
           }
       }
   }
});