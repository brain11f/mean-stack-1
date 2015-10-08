(function () {
  "use strict";

  angular.module("AwesomeBlog").service("BlogService", ["$http", function ($http) {
    var urlRoot = "/blogposts";

    var Blog = {
      get: function (id) {
        if (angular.isDefined(id)) {
          return $http.get(urlRoot + "/" + id);
        } else {
          return $http.get(urlRoot);
        }
      },
      update: function (model) {
        return $http.put(urlRoot + "/" + model._id, model);
      },
      create: function (model) {
        return $http.post(urlRoot, model); // ideal, but doesn't work
      },
      delete: function (model) {
        return $http.delete(urlRoot + "/" + model._id);
      }
    };
    return Player;
  }]);
}());
