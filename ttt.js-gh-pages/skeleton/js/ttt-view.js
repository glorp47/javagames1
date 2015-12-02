var View = function (game, $el) {
  this.game = game;
  this.$el = $el;
  this.setupBoard();
  this.bindEvents();
};

View.prototype.bindEvents = function () {
  this.$el.on('click', '.cell', this.makeMove.bind(this));
};

View.prototype.makeMove = function (e) {
  var $cell = $(e.currentTarget);
  console.log($cell.hasClass("clickedcell"));
  // if($cell.hasClass("clickedcell")) {
    // alert("INVALID MOVE");
  // } else {
    this.game.playMove($cell.data("pos"));
    $cell.removeClass("cell").addClass("clickedcell").text(this.game.currentPlayer);
  // }
  if(this.game.isOver()) {
    alert("Game is Over!");
  }
};

View.prototype.setupBoard = function () {
  var $grid = $("<ul>").addClass("grid");
  for (var i =0; i < 3; i++)
    for(var j = 0; j < 3; j++)
  {  var $cell = $("<li>").addClass("cell").data("pos",[i, j]);
    $grid.append($cell);
  }
  this.$el.append($grid);
};

module.exports = View;
