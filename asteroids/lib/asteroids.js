"use strict"
const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener('DOMContentLoaded', function(){
  const canvas = document.getElementById("game-canvas");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;

  const ctx = canvas.getContext("2d"); // specifiying "2d" leads to the creation of a 2D rendering context
  const gamey = new Game();
  new GameView(gamey, ctx).start();
});
