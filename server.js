'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('port', port);
app.use(express.static(__dirname + '/app'));

app.get('/index.html', function(req, res) {
  res.status(200).sendFile(__dirname + '/app/index.html');
});

app.get('/index', function(req, res) {
  res.status(200).sendFile(__dirname + '/app/index.html');
});

app.get('/*', function(req, res) {
  res.status(404).sendFile(__dirname + '/app/404.html');
});

app.listen(app.get('port'), function(){
  console.log('Server listening at port ' + port);
});

