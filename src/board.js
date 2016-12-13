//Code goes up here please remember construtor
var Board = function (){
  this.board = [[null, null, null], [null, null, null], [null, null, null]];
};

Board.prototype.won = function(){
  return false;
};
export default Board;
