PORT = 33333
HOST = process.env.SERVER || '192.168.133.100'

dgram = require('dgram')

readline = require('readline')
rl = readline.createInterface
  input: process.stdin
  output: process.stdout

client = dgram.createSocket('udp4')

light = (n) =>
  message = new Buffer("#{n},214,29,125")
  client.send message, 0, message.length, PORT, HOST, (err, bytes) ->
    throw err if err
    # console.log "UDP message sent to #{HOST}:#{PORT} => #{message.toString()}"

light_off = (n) =>
  message = new Buffer("#{n},0,0,0")
  client.send message, 0, message.length, PORT, HOST, (err, bytes) ->
    throw err if err
    # console.log "UDP message sent to #{HOST}:#{PORT} => #{message.toString()}"

i = 0
ask = ->
  rl.question "Next? ", (answer) ->
    if answer is 'no'
      console.log("Thank you for your valuable feedback:", answer)
      client.close()
      rl.close()
      process.exit()
    console.log("Turning on LED: #{i}")
    light(i)
    light_off(i - 1)
    i++
    setTimeout ask, 10

ask()
