//Code goes up here please remember construtor
var Board = function (){
  this.grid = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];
};

Board.prototype.won = function(){
  var grid = this.grid;
  for(var i = 0; i < 3; i++){
    var vertical = grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i] &&  grid[1][i] !== undefined;
    var horizontal = grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]  &&  grid[1][i] !== undefined;
    var diagRight = grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]  &&  grid[1][i] !== undefined;
    var diagLeft = grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]  &&  grid[1][i] !== undefined;
    if (vertical || horizontal || diagRight || diagLeft){
      return true;
    }
    else{
      return false;
    }
  }
};
export default Board;
