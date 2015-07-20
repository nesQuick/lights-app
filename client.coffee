PORT = 33333
HOST = process.env.SERVER || '192.168.133.100'

dgram = require('dgram')
message = new Buffer('1,214,29,125,0')

client = dgram.createSocket('udp4')
client.send message, 0, message.length, PORT, HOST, (err, bytes) ->
  throw err if err
  console.log 'UDP message sent to ' + HOST + ':' + PORT
  client.close()
