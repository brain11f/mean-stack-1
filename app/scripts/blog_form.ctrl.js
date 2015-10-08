'use strict';
(function() {

  angular.module('AwesomeBlog').controller("BlogFormCtrl", ["BlogpostService", "$routParams", "$location", function(BlogpostService, $routeParams, $location){
      var vm = this;

      vm.save = saveBlog;

      vm.blogpost = {};

      start();

      function start() {
        if ($routeParams.blogpost_id) {
          BlogpostService.get($routeParams.blogpost_id).then(function(resp) {
          vm.blogpost = resp.data;
        });
      }
    }

    function saveBlog () {
      var method;

      method = $routeParams.blogpost_id ? "update" : "create";
      BlogpostService[method](vm.blogpost).then(function (resp) {
        $location.path("/blogposts/" + resp.data_id);
      });
    }
  }]);

}());
