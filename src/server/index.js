const express = require('express'),
  app = require('express')(),
  bodyParser = require('body-parser'),
  main = require('./controllers/index');


app.listen(process.env.PORT || 8080);

app.use(bodyParser.json());

app.use(express.static(__dirname + './../../build/static/'));
app.use(express.static(__dirname + './../../build/'));

app.set('view engine', 'jade');

app.use('/', main);

module.exports = app;