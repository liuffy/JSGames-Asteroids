  const MovingObject = require("./moving_object");
  const Ship = require("./ship");
  const Util = require("./utils");
  const Bullet = require("./bullet");

  const DEFAULTS = { // arbitrary default color and radius for Asteroids
    COLOR: "#00ffff",
    RADIUS: 20,
    SPEED: 4
  }
  const Asteroid = function(options={}){
    options.color = DEFAULTS.COLOR;
    options.radius = DEFAULTS.RADIUS;
    options.pos = options.pos || options.game.randomPosition();
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)

    MovingObject.call(this, options)
  }
  // Return a randomly oriented vector with the given length.

module.exports = Asteroid;
