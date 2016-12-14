import Board from 'board';
import Player from 'player';

// var board = neoard();

var Game = function() {
  this.board = new Board();
  this.playerOne = new Player(0);
  this.playerOne.myTurn = true;
  this.playerTwo = new Player(1);
};

// posIndex will be a string position index, '00' - '22'
// .play returns true if play was valid; false if play was invalid
Game.prototype.play = function(playerID, posIndex) {
  var currentPlayer = this.whoseTurn();

  if ((this.board.grid[posIndex[0]][posIndex[1]] === undefined) && (currentPlayer.idNum == playerID)) {
    this.board.grid[posIndex[0]][posIndex[1]] = playerID;
    if (this.board.won()){
      //Call a function to end the game
    }
    this.updateTurn();
    return true;
  } else {
    return false;
  }
};
Game.prototype.updateTurn = function(){
this.playerOne.myTurn = !this.playerOne.myTurn;
this.playerTwo.myTurn = !this.playerTwo.myTurn;
// this.whoseTurn();
};

Game.prototype.whoseTurn = function (){
if(this.playerOne.myTurn === true){
  return this.playerOne;
}
else {
  return this.playerTwo;
}
};



export default Game;
