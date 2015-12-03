var View = function(game, $el){
  this.game = game;
  this.$el = $el;
  this.setupTowers();
  this.bindEvents();
  this.selected = false;
  this.$selectedTower;
  this.$selectedDisk;
};

View.prototype.setupTowers = function() {
  var towers = [];
  for (var i = 0; i < 3; i++) {
    var $tower = $("<ul>").addClass("tower");
    towers.push($tower);
  }
  var $firstTower = towers[0];
  for (var j = 1; j < 4; j++) {
    var $disk = $("<li>").addClass("disk disk-" + j).data("size",j);
    $firstTower.append($disk);
  }
  for (var k = 0; k < 3; k++) {
    var $disk1 = $("<li>").data("size",0);
    var $disk2 = $("<li>").data("size",0);
    towers[1].append($disk1);
    towers[2].append($disk2);
  }
  this.$el.append(towers);

};

View.prototype.bindEvents = function() {
  this.$el.on('click', '.tower', this.clickTower.bind(this));
};

View.prototype.render = function() {



};

View.prototype.clickTower = function (e) {
  var $tower = $(e.currentTarget);
  var $disk;
  var $destinationDisk;
  var $lastChild = $($tower.children().last());
  if (!this.selected) {
    if ($lastChild.hasClass("disk")) {
      $tower.addClass("selected");
      this.$selectedTower = $tower;
      this.selected = true;
    }
  } else {
    var diskToMove;
    for (var c = 2; c >= 0; c--) {
      if ($(this.$selectedTower.children().get(c)).hasClass("disk")) {
        $disk = $(this.$selectedTower.children().get(c));
      }
    }
    diskToMove = $disk.attr('class');
    for (var d = 0; d < 3; d++) {

      if (!$($tower.children().get(d)).hasClass("disk")) {
        $destinationDisk = $($tower.children().get(d));
      }
    }

      $destinationDisk.addClass(diskToMove);
      $disk.removeClass(diskToMove);
      this.$selectedTower.removeClass("selected");
      this.selected = false;

  }
};

module.exports = View;

// View.prototype.setupTowers = function() {
//   var towers = [];
//   var $disk;
//   for (var i = 0; i < 3; i++) {
//     towers.push($("<ul>").addClass("tower"));
//   }
//   var $firstTower = $(towers[0]);
//   for (var j = 1; j < 4; j++) {
//     $disk = $("<li>").addClass("disk-" + j);
//     $firstTower.append($disk);
//   }
//   this.$el.append($(towers));
// };
//
//
