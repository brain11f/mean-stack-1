(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// require('angular');
// require('angular-route');
(function(){

	'use strict';
	// Declare app level module which depends on filters, and services
	var AwesomeBlogApp = angular.module('AwesomeBlog', ['ngRoute']).

	config(["$routeProvider", function ($routeProvider) {
		$routeProvider
			
		////route home page blog posts//////////
			.when("/blogposts", {
			templateUrl: "partials/blogpost.html",
			controller: "BlogpostsCtrl as vm",
		})
		
		/////form to make more blog posts///////
			.when("/blogposts/new", {
			templateUrl: "partials/form.html",
			controller: "BlogFormCtrl as vm",
		})
			.when("/blogposts/:blogpost/edit", {
			templateUrl: "partials/form.html",
			controller: "BlogFormCtrl as vm",
		})
			.when("/blogposts/:blogpost_id", {
			templateUrl: "partials/blog.html",
			controller: "BlogpostCtrl as vm",
		})
			.otherwise({
			redirectTo: "/blogposts",
		});
		
	}]);
	
}());

// require('./scripts/blog.service');
// require('./scripts/blog.ctrl');
// require('./blog_form.ctrl');
},{}],2:[function(require,module,exports){
require("../app")

angular.module("AwesomeBlogApp")
	.directive("bl", function () {
	return {
		scope: {
			player: "=player", // functionally the same as ng-model
		},
		templateUrl: "views/player/player_details_directive.html",
	};
});
// in the .html
//dl
//<dt> position</dt>
//<dd>{{ foobar.position }} </dd>
//<dt> Jersey Number</dt>
//<dd>

},{"../app":1}]},{},[2]);
