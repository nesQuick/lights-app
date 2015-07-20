var express = require('express');
var app = express();
var basicAuth = require('basic-auth-connect');

app.set('view engine', 'jade');

app.use(express.static('public'));
// Authenticator
app.use(basicAuth('socoded', 'socodedsocode'));

var effects = require('../lib/effects')

app.get('/', function (req, res) {
  res.render('index', {effects: effects});
});

app.get('/', function (req, res) {
  res.render('ballons');
});

app.post('/effect/:name', function (req, res) {
  effects[req.params.name]()
  res.redirect('/');
});

var port = 3030
module.exports = server = app.listen(port, function () {
  var host = server.address().address;

  console.error('Admin app listening at http://%s:%s', host, port);
});
