var app = angular.module('app', ['ngResource', 'ngRoute', 'ngAnimate', 'mgcrea.ngStrap']);

app.config(function($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin: {
            auth: function(AuthService) {
                return AuthService.authorizeCurrentUserForRoute('admin');
            }
        },
        user: {
            auth: function(AuthService) {
                return AuthService.authorizeAuthenticatedUserForRoute();
            }
        }
    };

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/main',
            controller: 'MainController'
        })
        .when('/admin/users', {
            templateUrl: '/partials/admin/user-list',
            controller: 'UserListController',
            resolve: routeRoleChecks.admin
        })
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'SignupController'
        })
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'ProfileController',
            resolve: routeRoleChecks.user
        });
});

app.run(function($rootScope, $location) {
   $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
       if(rejection === 'not authorized') {
           $location.path('/');
       }
   })
});

