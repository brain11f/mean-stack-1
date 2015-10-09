(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
  "use strict";

  angular.module("AwesomeBlog").service("BlogpostService", ["$http", function ($http) {
    var urlRoot = "/blogposts";

    var Blog = {
      get: function (id) {
        if (angular.isDefined(id)) {
          return $http.get(urlRoot + "/" + id);
        } else {
          return $http.get(urlRoot);
        }
      },
      update: function (blog) {
        return $http.put(urlRoot + "/" + blog._id, blog);
      },
      create: function (blog) {
        return $http.post(urlRoot, blog); // ideal, but doesn't work
      },
      delete: function (blog) {
        return $http.delete(urlRoot + "/" + blog._id);
      }
    };
    return Blog;
  }]);
}());

},{}]},{},[1]);
