(function() {

	'use strict';
	// Declare app level module which depends on filters, and services
	var app = angular.module("AwesomeBlog", ["ngRoute, ui.router"]);

	app.config(["$routeProvider", function ($routeProvider) {
		$routeProvider.when("/blogposts", {
			templateUrl: "/partials/blogpost.html",
			controller: "BlogpostCtrl as vm",
		})
		.when("/blogposts/new", {
			templateUrl: "/partials/form.html",
			controller: "BlogFormCtrl as vm",
		})
		.when("/blogposts/:blogpost/edit", {
			templateUrl: "partials/form.html",
			controller: "BlogFormCtrl as vm",
		})
		.when("/blogposts/:blogpost_id", {
			templateUrl: "/partials/blog.html",
			controller: "BlogCtrl as vm",
		})
		.otherwise({
			redirectTo: "/blogposts",
		});
	}]);

}());
