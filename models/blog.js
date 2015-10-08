// BLOG SCHEMA

// Load required packages
var mongoose = require("mongoose");

// Define our teams schema
var BlogpostSchema = new mongoose.Schema({
  title: String,
  blog: String,
  author: String,
  date: Number,
  comments: String,
});

// Export the Mongoose model
module.exports = mongoose.model("Blogpost", BlogpostSchema);
