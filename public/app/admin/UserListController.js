app.controller('UserListController', function($scope, UserService) {
   $scope.users = UserService.query();
});