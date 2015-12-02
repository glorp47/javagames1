var View = require('./ttt-view');
var Game = require('../../ttt-core-solution/game');

$(function () {
  new View(new Game(), $(".ttt"));
});
