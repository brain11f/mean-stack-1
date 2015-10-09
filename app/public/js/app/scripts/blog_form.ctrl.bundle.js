(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
'use strict';

  angular.module("AwesomeBlog").controller("BlogFormCtrl", ["BlogpostService", "$routeParams", "$location", function(BlogpostService, $routeParams, $location){
      var vm = this;

      vm.save = saveBlog;

      vm.blogpost = {};

      start();

      // IF statement only works when edit
      function start() {
        vm.blogpost.date = new Date(Date.now());
        if ($routeParams.blogpost_id) {
          BlogpostService.get($routeParams.blogpost_id).then(function(resp) {
          vm.blogpost = resp.data;
          vm.blogpost.date = vm.blogpost.date || new Date(Date.now());
        });
      }
    }

    function saveBlog () {
      var method;

      method = $routeParams.blogpost_id ? "update" : "create";
      BlogpostService[method](vm.blogpost).then(function (resp) {
        $location.path("/blogposts/" + resp.data._id);
      });
    }
  }]);

}());

},{}]},{},[1]);
