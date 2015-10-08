'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var Blogpost = require(__dirname + '/models/blog');

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/mongoblog');

var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

// use the json part of bodyparser
app.use(bodyparser.urlencoded({
  extended: true
})); // use it... just copy it for all projects with apps!
app.use(express.static(__dirname + '/app/'));

app.set('port', port);
// app.use(express.static(__dirname + '/public/'));

router.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

// READ
// Create endpoint /api/players for POST
router.post('/post', function (req, res) {
  // Create a new instance of the Player model
  var blogpost = new Blogpost();

  // Set the player properties that came from the POST data
  blogpost.title = req.body.title;
  blogpost.blog = req.body.blog;
  blogpost.author = req.body.author;
  blogpost.date = req.body.date;
  blogpost.comments = req.body.comments;

  // Save the player and check for errors
  blogpost.save(function (err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Blogpost successfully saved.", data: blogpost});
  });
});

// Create endpoint /api/players for GET
router.get(function(req, res) {
  // Use the Player model to find all players
  Blogpost.find(function (err, blogpost) {
    if (err) {
      res.send(err);
    }
    res.json(blogpost);
  });
});

// Create endpoint for /api/players/:playerID
router.get(function(req, res) {
  // Use the player model to find a specific player
  Blogpost.findById(req.params.blogpost_id, function (err, blogpost) {
    if (err) {
      res.send(err);
    }
    res.json(blogpost);
  });
});

// Change the player's number
router.put(function(req, res) {
  // Use the Player model to find a specific player
  Blogpost.findById(req.params.blogpost_id, function (err, blogpost) {
    if (err) {
      res.send(err);
    }
    // Update the player's number
    blogpost.number = req.body.number;
    // maybe put all the other properties in here too!

    // Save the player and check for errors
    blogpost.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json(player);
    });
  });
});

// DELETE

// Create endpoint /api/players/:player_id for DELETE
router.delete(function (req, res) {
  // Use the player model to find a specific player and remove it
  Blogpost.findByIdAndRemove(req.params.blogpost_id, function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully removed player." });
  });
});


app.listen(app.get('port'), function(){
  console.log('Server listening at port ' + port);
});






