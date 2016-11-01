const Util = require("./util");

const MovingObject = function(options){
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
};

// Similiar to Circle.prototype.render for the "Drunken circle" demo
  MovingObject.prototype.draw = function(ctx){
    // Draw a circle of the appropriate radius centered at pos
    // Fill the circle with the appropriate color
    ctx.beginPath(); // begins path/resets current path

    ctx.arc(
      this.pos[0], // x coord,
      this.pos[1], // y coord,
      this.radius, //radius,
      0, // start angle,
      2 * Math.PI, // we want full circle
      true // clockwise (true) vs anticlockwise( false)(doesn't matter)
    )
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  const MS_PER_FRAME= 1000/60;
  MovingObject.prototype.move = function(timeDelta){
     //timeDelta is number of milliseconds since last move
     //if the computer is busy the time delta will be larger
     //in this case the MovingObject should move farther in this frame
     //velocity of object is how far it should move in 1/60th of a second
    const velocityScale = timeDelta / MS_PER_FRAME;
      deltaX = this.vel[0] * velocityScale;
      deltaY = this.vel[1] * velocityScale;
      
    this.pos = [this.pos[0] + deltaX, this.pos[1] + deltaY]
  }


module.exports = MovingObject;
