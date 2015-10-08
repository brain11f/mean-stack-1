"use strict";

var blogpost = {
  get: function() {
    // get the blogposts
    $http.get()
  },

  update: function(blogpost) {
    // update the post
    return $http.put()
  },

  create: function(blogpost) {
    return $http.post(/*something*/)
  },

  delete: function(blogpost) {
    return $http.delete()
  }

};
