var PORT = 33333;
var HOST = '0.0.0.0';

var web = require('./src/admin_web');
var demo = require('./src/demo_web');

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

var lights = require('./lib/lights')

server.on('listening', function () {
    var address = server.address();
    console.error('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.error(remote.address + ':' + remote.port +' - ' + message);
    parts = message.toString().split(',')
    lights.led(parts[0], parts[1], parts[2], parts[3])
});

server.bind(PORT, HOST);
