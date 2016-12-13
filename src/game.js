import Board from 'board';

// var board = neoard();

var Game = function() {
  this.board = new Board();
};

// posIndex will be a string position index, '00' - '22'
// .play returns true if play was valid; false if play was invalid
Game.prototype.play = function(player, posIndex) {
  if (this.board.grid[posIndex[0]][posIndex[1]] === undefined) {
    this.board.grid[posIndex[0]][posIndex[1]] = player;
    return true;
  } else {
    return false;
  }
  // @TODO - add check for .won -- if won, do win sequence
};



export default Game;
