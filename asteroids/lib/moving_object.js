const MovingObject = function(options){
  this.pos = options.pos
  this.vel = options.vel
  this.radius = options.radius
  this.color = options.color

// Similiar to Circle.prototype.render for the "Drunken circle" demo
  MovingObject.prototype.draw = function(ctx){
    // Draw a circle of the appropriate radius centered at pos
    // Fill the circle with the appropriate color
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0], // x coord,
      this.pos[1], // y coord,
      this.radius, //radius,
      0, // start angle,
      2 * Math.PI, // we want full circle
      true // flips it (doesn't matter) 
    )
  }

  MovingObject.prototype.move = function(){

  }
}
