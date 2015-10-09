'use strict';

// Load required packages
var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var Blogpost = require('./models/blog');

// Connect to the database
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/mongoblog');

// Create the Express application
var app = express();

// Use environment defined port OR 4000
var port = process.env.PORT || 4000;

// Create the Express router
var router = express.Router();

// Declare the middleware, use for error checking
router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
});

// Use body-parser package in our application
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/app/public'));

// Root route
router.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/public/index.html');
});

// Test route
router.get('/test', function (req, res) {
  res.json({ message: 'testing testing 1 2 3' });
});

app.set('port', port);

router.route('/blogposts')
  // READ
  // Create endpoint for /blogposts for POST
  .post(function (req, res) {
    // Create a new instance of the blogpost model
    var blogpost = new Blogpost();

    // Set the blogpost properties that came from the POST data
    blogpost.title = req.body.title;
    blogpost.text = req.body.text;
    blogpost.author = req.body.author;
    blogpost.date = req.body.date;

    // Save the blogpost and check for errors
    blogpost.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Blogpost successfully saved."});
    });
  })

  // Create endpoint /blogposts for GET
  .get(function(req, res) {
    // Use the blogpost model to find all blogposts
    Blogpost.find(function (err, blogpost) {
      if (err) {
        res.send(err);
      }
      res.json(blogpost);
    });
  });

// Create endpoint /blogpost/:blogpost_id
router.route('/blogposts/:blogpost_id')
  // GET blogpost by id
  .get(function(req, res) {
    // Use the blogpost model to find a specific blogpost
    Blogpost.findById(req.params.blogpost_id, function (err, blogpost) {
      if (err) {
        res.send(err);
      }
      res.json(blogpost);
    });
  })

  // Endpoint for /blogpost/:blogpost_id for PUT (UPDATE)
  .put(function (req, res) {
    // Use the Blogpost model to find a specific blogpost
    Blogpost.findById(req.params.blogpost_id, function (err, blogpost) {
      if (err) {
        res.send(err);
      }
      // Update the blogpost's properties
      blogpost.title = req.body.title;
      blogpost.text = req.body.text;
      blogpost.author = req.body.author;
      blogpost.date = req.body.date;

      // Save the blogpost and check for errors
      blogpost.save(function (err) {
        if (err) {
          res.send(err);
        }
        res.json(blogpost);
      });
    });
  })

  // DELETE
  // Create endpoint /blogpost/:blogpost_id for DELETE
  .delete(function (req, res) {
    // Use the blog model to find a specific blogpost and remove it
    Blogpost.remove({
      _id: req.params.blogpost_id
    }, function(err, blogpost) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully removed blogpost." });
    });
  });

app.use('/', router);

app.listen(app.get('port'), function(){
  console.log('Server listening at port ' + port);
});




