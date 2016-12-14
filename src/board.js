//Code goes up here please remember construtor
var Board = function (){
  this.grid = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];
  this.winner = undefined;
  this.isWon = false;
};

Board.prototype.won = function(){
  var grid = this.grid;
  var diagRight = grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]  &&  grid[1][1] !== undefined;
  var diagLeft = grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]  &&  grid[1][1] !== undefined;
  if (diagLeft){
    this.winner = grid[0][2];
    this.isWon = true;
    return this.isWon;
  }
  else if (diagRight) {
    this.winner = grid[0][0];
    this.isWon= true;
    return this.isWon;
  }
  for(var i = 0; i < 3; i++){
    var vertical = grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i] &&  grid[1][i] !== undefined;
    var horizontal = grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]  &&  grid[i][1] !== undefined;
    if (vertical){
      this.winner = grid[0][i];
      this.isWon= true;
      return this.isWon;
    }
    else if (horizontal) {
      this.winner = grid[i][0];
      this.isWon= true;
      return this.isWon;
    }
    else{
      this.isWon = false;
      return this.isWon;
    }
  }
};

Board.prototype.full = function() {
  var isFull = true;
  this.grid.forEach(function(subarray) {
    if (subarray.includes(undefined)) {
      isFull = false;
    }
  });
  return isFull;
};

export default Board;
