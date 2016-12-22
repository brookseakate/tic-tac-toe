import Backbone from 'backbone';

var Board = Backbone.Model.extend({
  defaults: {
    grid: [["", "", ""], ["", "", ""], ["", "", ""]],
    winner: "",
    isWon: false
  },

  initialize: function(options){
    this.set('grid', [["", "", ""], ["", "", ""], ["", "", ""]]);
    // this.set('grid', [[0, 1, 2], [3, 4, 5], [6, 7, 8]]); // @TODO: remove - for display testing
  },

  won: function() {
    var grid = this.get('grid');
    var diagRight = grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[1][1] !== "";
    var diagLeft = grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0] && grid[1][1] !== "";

    if (diagLeft) {
      this.boardWin(grid[1][1]);
      console.log(">>>>>>>>>Board WON! diagLeft!");
    } else if (diagRight) {
      this.boardWin(grid[0][0]);
      console.log(">>>>>>>>>Board WON! diagRight!");
    } else {

      for (var i = 0; i < 3; i++) {
        var vertical = grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i] &&  grid[1][i] !== "";
        var horizontal = grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]  &&  grid[i][1] !== "";
        if (vertical) {
          this.boardWin(grid[0][i]);
          console.log(">>>>>>>>>Board WON! vertical!");
        } else if (horizontal) {
          this.boardWin(grid[i][0]);
          console.log(">>>>>>>>>Board WON! horizontal!");
        } // inner if block
      } // for loop
    } // outer if block

    return this.get('isWon');
  },

  full: function() {
    var isFull = true;
    this.get('grid').forEach(function(subarray) {
      if (subarray.includes("")) {
        isFull = false;
      }
    });

    if (isFull) {
      console.log(">>>>>>>>>Board is full!");
    }

    return isFull;
  },

  boardWin: function(whoWon) {
    this.set('winner', whoWon);
    this.set('isWon', true);
    this.trigger('boardWin', whoWon);
  },
});

export default Board;
