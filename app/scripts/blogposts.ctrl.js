(function() {
  'use strict'

  angular.module("AwesomeBlog").controller("BlogpostsCtrl", ["BlogService", function(BlogService) {
    var vm = this;

    vm.blogposts = [];
    vm.delete = deleteBlog;

    start();

    function start() {
      getBlogposts();
    }

    function getBlogposts() {
      BlogService.get().then(function(resp) {
        vm.blogposts = resp.data;
      });
    }

    function deleteBlog (blog) {
      BlogService.delete(blog).then(function() {
        getBlogposts();
      });
    }
  }]);
}());
