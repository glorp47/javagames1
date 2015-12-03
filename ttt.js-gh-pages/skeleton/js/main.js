var View = require('./ttt-view.js');
var Game = require('../../ttt-core-solution/game');

$(function () {
  new View(new Game(), $(".ttt"));
});
