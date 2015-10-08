angular.module("AwesomeBlog").controller("BlogpostCtrl", ["BlogpostService", "$routeParams", function(BlogpostService, $routeParams) {
  var vm = this;

  start();

  function start() {
    BlogpostService.get($routeParams.blogpost_id).then(function(resp) {
      vm.blogpost = resp.data;
    });
  }
}]);
