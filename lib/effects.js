lights = require('./lights')

module.exports = {
  intro: function() {
    for (var i = 0; i < lights.count; i++) {
      setTimeout(function(){
        lights.led(i, 214, 29, 125, 0)
      }, i * 100)
    }
  },
  blackout: function() {
    for (var i = 0; i < lights.count; i++) {
      setTimeout(lights.led,i*100,i,0,0,0,0)
    }
  },
  'PINK': function() {
    for (var i = 0; i < lights.count; i++) {
      lights.led(i, 214, 29, 125,0)
    }
  }
}
