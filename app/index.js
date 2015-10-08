'use strict';


// Declare app level module which depends on filters, and services
module.exports = angular.module('app', [
	'ngRoute',
	'app.filters',
	'app.services',
	'app.directives',
	'app.controllers',
	'firebase'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/landing_page.html',
		controller: 'LandingPageController'
	});
	$routeProvider.when('/blog-post', {
		templateUrl: 'partials/blogpost.html',
		controller: 'Blog-postController'
	});
	$routeProvider.when('/register', {
		templateUrl: 'partials/register.html',
		controller: 'AuthController'
	});
	$routeProvider.when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'AuthController'
	});
	$routeProvider.otherwise({redirectTo: '/'});
}]);