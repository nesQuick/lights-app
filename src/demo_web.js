var express = require('express');
var app = express();
var basicAuth = require('basic-auth-connect');

app.set('view engine', 'jade');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('balloons');
});

var port = process.env.PORT || 3000
module.exports = server = app.listen(port, function () {
  var host = server.address().address;
  console.error('Simulator app listening at http://%s:%s', host, port);
});
