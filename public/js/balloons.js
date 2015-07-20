document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById('canvas');

  var CANVAS_WIDTH = parseInt(window.getComputedStyle(canvas).width, 10);
  var CANVAS_HEIGHT = parseInt(window.getComputedStyle(canvas).height, 10);

  var BALLOON_DISTANCE_X = 0.00195 * CANVAS_WIDTH;
  var BALLOON_DISTANCE_Y = 0.00000 * CANVAS_HEIGHT;

  var BALLOON_LINE_X = 0.2300 * CANVAS_WIDTH;
  var BALLOON_LINE_Y = 0.4868 * CANVAS_HEIGHT;

  var BALLOON_WIDTH  = 0.0050 * CANVAS_WIDTH;
  var BALLOON_HEIGHT = 0.0071 * CANVAS_HEIGHT;

  var balloons = [];

  var createBalloon = function(id, x, y) {
    var div = document.createElement("div");
    div.className = "balloon";

    div.style.width = '' + BALLOON_WIDTH + 'px';
    div.style.height = '' + BALLOON_HEIGHT + 'px';

    div.style.top = '' + (BALLOON_LINE_Y + (y * (BALLOON_HEIGHT + BALLOON_DISTANCE_Y))) + 'px';
    div.style.left = '' + (BALLOON_LINE_X + (x * (BALLOON_WIDTH + BALLOON_DISTANCE_X))) + 'px';

    div.title = '' + id;

    canvas.appendChild(div);

    return div;
  };

  var normalizeRGB = function(value) {
    var parsed = parseInt(value, 10);
    if (parsed < 0) {
      parsed = 0
    }
    if (parsed > 254) {
      parsed = 254
    }
    return parsed;
  }

  var normalizeBrightness = function(value) {
    var parsed = parseFloat(value, 10);
    if (parsed < 0) {
      parsed = 0.0
    }
    if (parsed > 1) {
      parsed = 1.0
    }
    return parsed;
  }

  var setColor = function(id, r, g, b, brightness) {
    balloons[id].style.backgroundColor = 'rgba(' + normalizeRGB(r) + ',' + normalizeRGB(g) + ',' + normalizeRGB(b) + ',' + normalizeBrightness(brightness) + ')';
  }

  var init = function(){
    var i;
    // Line 1
    for (i = 0; i < 50; i++) {
      balloons[i] = createBalloon(i, i, 0);
    }

    // Line 2
    for (i = 0; i < 15; i++) {
      balloons[50 + i] = createBalloon(50 + i, 50 + (i * 1.2), -1 * i);
    }

    // Balloons 1
    balloons[65] = createBalloon(65, 69, -15)
    balloons[66] = createBalloon(66, 70, -15)

    balloons[67] = createBalloon(67, 68.5, -13.5)
    balloons[68] = createBalloon(68, 69.5, -13.5)
    balloons[69] = createBalloon(69, 70.5, -13.5)

    balloons[70] = createBalloon(70, 68.5, -12)
    balloons[71] = createBalloon(71, 69.5, -12)
    balloons[72] = createBalloon(72, 70.5, -12)

    balloons[73] = createBalloon(73, 69, -10.5)
    balloons[74] = createBalloon(74, 70, -10.5)


    // Line 3
    for (i = 0; i < 15; i++) {
      balloons[75 + i] = createBalloon(75 + i, 50 + (i * 1.2), i);
    }

    // Balloons 2
    balloons[90] = createBalloon(90, 69, 10.5)
    balloons[91] = createBalloon(91, 70, 10.5)

    balloons[92] = createBalloon(92, 68.5, 12)
    balloons[93] = createBalloon(93, 69.5, 12)
    balloons[94] = createBalloon(94, 70.5, 12)

    balloons[95] = createBalloon(95, 68.5, 13.5)
    balloons[96] = createBalloon(96, 69.5, 13.5)
    balloons[97] = createBalloon(97, 70.5, 13.5)

    balloons[98] = createBalloon(98, 69, 15)
    balloons[99] = createBalloon(99, 70, 15)
  };

  init();

  window.runSomeBalloonFun = function() {
    eval(document.getElementById('editor').value);
  };
});