const Game = require("./game.js")
const Ship = require("./ship.js")
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
