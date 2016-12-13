//Code goes up here please remember construtor
var Board = function (){
  this.grid = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];
  this.winner = undefined;
};

Board.prototype.won = function(){
  var grid = this.grid;
  var diagRight = grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]  &&  grid[1][1] !== undefined;
  var diagLeft = grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]  &&  grid[1][1] !== undefined;
  if (diagLeft){
    this.winner = grid[0][2];
    return true;
  }
  else if (diagRight) {
    this.winner = grid[0][0];
    return true;
  }
  for(var i = 0; i < 3; i++){
    var vertical = grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i] &&  grid[1][i] !== undefined;
    var horizontal = grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]  &&  grid[i][1] !== undefined;
    if (vertical){
      this.winner = grid[0][i];
      return true;
    }
    else if (horizontal) {
      this.winner = grid[i][0];
      return true;
    }
    else{
      return false;
    }
  }
};
export default Board;
