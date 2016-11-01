/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(1);
	const GameView = __webpack_require__(7);

	document.addEventListener('DOMContentLoaded', function(){
	  const canvas = document.getElementById("game-canvas");
	  canvas.width = Game.DIM_X;
	  canvas.height = Game.DIM_Y;

	  const ctx = canvas.getContext("2d");
	  const game = new Game();
	  new GameView(game, ctx).start();
	})


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// Game
	//
	// Game will be in charge of holding all of our moving objects. It will
	// also contain the logic for iterating through these objects and
	// calling their corresponding move methods.
	//

	  const Asteroid = __webpack_require__(2);
	  const Util = __webpack_require__ (5);

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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	  const MovingObject = __webpack_require__(3);
	  const Ship = __webpack_require__(4);
	  const Util = __webpack_require__(5);
	  const Bullet = __webpack_require__(6);

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


/***/ },
/* 3 */
/***/ function(module, exports) {

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
	      true // clockwise (true) vs anticlockwise( false)(doesn't matter)
	    )
	  }

	  const MS_PER_FRAME= 1000/60;
	  MovingObject.prototype.move = function(timePassed){
	     //timeDelta is number of milliseconds since last move
	     //if the computer is busy the time delta will be larger
	     //in this case the MovingObject should move farther in this frame
	     //velocity of object is how far it should move in 1/60th of a second
	    const velocityScale = timePassed / MS_PER_FRAME
	    deltaX = this.vel[0] * velocityScale;
	    deltaY = this.vel[1] * velocityScale;
	    this.pos = [this.pos[0] + deltaX, this.pos[1] + deltaY]
	  }
	}

	module.exports = MovingObject;


/***/ },
/* 4 */
/***/ function(module, exports) {

	

/***/ },
/* 5 */
/***/ function(module, exports) {

	const Util = {
	  inherits (childClass, parentClass){
	    function Surrogate(){ this.constructor = ChildClass}
	    Surrogate.prototype = parentClass.prototype;
	    childClass.prototype = new Surrogate();
	  },

	  randomVec (length) {
	    const deg = 2 * Math.PI * Math.random();
	    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
	  },
	  // Scale the length of a vector by the given amount.
	  scale (vec, m) {
	    return [vec[0] * m, vec[1] * m];
	  }

	}

	module.exports = Util;


/***/ },
/* 6 */
/***/ function(module, exports) {

	

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(1)
	const Ship = __webpack_require__(4)
	// GameView
	//
	// Your GameView class will be responsible for keeping track of the
	// canvas context, the game, and the ship. Your GameView will be in
	// charge of setting an interval to animate your game. In addition, it
	// will eventually bind key handlers to the ship so that we can move it
	// around.
	//

	// Define an GameView class in lib/game_view.js. The GameView should
	// store a Game and take in and store a drawing ctx.
	  const GameView = function(game, ctx){
	    this.game = game;
	    this.ctx = ctx;
	  }

	// Write a GameView.prototype.start method. It should call setInterval
	// to call Game.prototype.moveObjects and Game.prototype.draw once every
	// 20ms or so.
	  GameView.prototype.start = function(){
	    setInterval(Game.prototype.moveObjects(), 20);
	    setInterval(Game.prototype.draw(), 20);
	  }

	  module.exports = GameView;


/***/ }
/******/ ]);