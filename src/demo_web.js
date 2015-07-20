var express = require('express');
var app = express();
var basicAuth = require('basic-auth-connect');

var uuid = require('node-uuid');

app.set('view engine', 'jade');

app.use(express.static('public'));

app.get('/', function (req, res) {
  target_id = uuid.v4().split('-')[0];
  res.render('balloons', {target_id: target_id});
});

var port = process.env.PORT || 3000
module.exports = server = app.listen(port, function () {
  var host = server.address().address;
  console.error('Simulator app listening at http://%s:%s', host, port);
});
