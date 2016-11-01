const GameView = function (game, ctx) {
  this.game = game;
  this.ctx = ctx;
  // this.ship = this.game.addShip();
};

// GameView.MOVES = {
//   "w": [ 0, -1],
//   "a": [-1,  0],
//   "s": [ 0,  1],
//   "d": [ 1,  0],
// };
//
// GameView.prototype.bindKeyHandlers = function () {
//   const ship = this.ship;
//
//   Object.keys(GameView.MOVES).forEach((k) => {
//     let move = GameView.MOVES[k];
//     key(k, function () { ship.power(move); });
//   });
//
//   key("space", function () { ship.fireBullet() });
// };

// Write a GameView.prototype.start method. It should call setInterval
// to call Game.prototype.moveObjects and Game.prototype.draw once every
// 20ms or so.
GameView.prototype.start = function(){
  let that = this
  setInterval(game.draw, 20);
  setInterval(that.game.moveObjects, 20);
}

// GameView.prototype.animate = function(time){
//   const timeDelta = time - this.lastTime;
//
//   this.game.step(timeDelta);
//   this.game.draw(this.ctx);
//   this.lastTime = time;
//
//   //every call to animate requests causes another call to animate
//   requestAnimationFrame(this.animate.bind(this));
// };

module.exports = GameView;
