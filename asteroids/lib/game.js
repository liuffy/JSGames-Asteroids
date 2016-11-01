// Game
//
// Game will be in charge of holding all of our moving objects. It will
// also contain the logic for iterating through these objects and
// calling their corresponding move methods.
//

  const Asteroid = require("./asteroid");
  const Util = require ("./utils");

  const Game = function(){
    this.asteroids = [];
    this.bullets = [];
    this.ships = [];
    this.addAsteroids();
  }
  // Write an Game class in lib/game.js. Define the following constants on
  // the Game class: DIM_X, DIM_Y, and NUM_ASTEROIDS.
  Game.DIM_X = 1000; // dimensions of screen
  Game.DIM_Y = 600;
  Game.NUM_ASTEROIDS = 15;
  Game.BG_COLOR = "#081f45";

  // Write a Game.prototype.addAsteroids method. Randomly place the
  // asteroids within the dimensions of the game grid. You may also wish
  // to write a Game.prototype.randomPosition method. Store the asteroids
  // in an instance variable array asteroids.
  Game.prototype.addAsteroids = function(){
      for (let i = 0; i < Game.NUM_ASTEROIDS; i++){
        let asteroid = new Asteroid({pos: this.randomPosition(), game: this});
        this.add(asteroid); // Call addAsteroids in your constructor.
      }
  }

  Game.prototype.add = function(object){
    if (object instanceof Asteroid){
      this.asteroids.push(object)
    } else if(object instanceof Bullet) {
      this.bullets.push(object)
    } else if(object instanceof Ship) {
      this.ships.push(object)
    }
  }

  Game.prototype.randomPosition = function(){
    return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()]
  }

  // Write a Game.prototype.draw(ctx) method. It should call clearRect on
  // the ctx to wipe down the entire space. Call the draw method on each
  // of the asteroids.
  Game.prototype.draw = function(ctx){
    ctx.clearRect(0,0,Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle(Game.BGKD_COLOR);
    ctx.fillRect(0,0,Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach((asteroid)=>{
      asteroid.draw(ctx);
    })
  }

  // Write a Game.prototype.moveObjects method. It should call move on
  // each of the asteroids.
  Game.prototype.moveObjects = function(timePassed){
    this.asteroids.forEach((asteroid)=>{
      asteroid.move(timePassed);
    });
  }

  module.exports = Game;
