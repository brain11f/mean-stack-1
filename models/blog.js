// BLOG SCHEMA

// Load required packages
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Define our teams schema
var BlogpostSchema = new Schema({
  title: String,
  text: String,
  author: String,
  date: Date
});

// Export the Mongoose model
module.exports = mongoose.model("Blogpost", BlogpostSchema);
