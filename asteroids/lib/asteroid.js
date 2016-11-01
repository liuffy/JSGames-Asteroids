  const MovingObject = require("./moving_object");
  const Ship = require("./ship");
  const Util = require("./util");
  const Bullet = require("./bullet");

  const DEFAULTS = { // arbitrary default color and radius for Asteroids
    COLOR: "#00ffff",
    RADIUS: 20,
    SPEED: 4
  }
  const Asteroid = function(options={}){
    options.color = DEFAULTS.COLOR;
    options.radius = DEFAULTS.RADIUS;
    options.pos = options.pos;
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)

    MovingObject.call(this, option)
  }
  // Return a randomly oriented vector with the given length.
