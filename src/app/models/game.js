import Backbone from 'backbone';
import Board from 'app/models/board';
import Player from 'player';

var Game = Backbone.Model.extend({
  initialize: function(){
    this.board = new Board();
    this.playerOne = new Player(0);
    this.playerOne.myTurn = true;
    this.playerTwo = new Player(1);
    this.gameOver = false;
    this.winner = this.board.get('winner');
  },
  play: function(playerID, posIndex) {
    var currentPlayer = this.whoseTurn();
    // console.log("This game over>>>>" + this.gameOver);
    // console.log("This Current Player ID >>> " + currentPlayer.idNum);
    //   console.log("This  Player ID >>> " + playerID);
    //   console.log("Please be undefined >>>" + this.board.get('grid')[posIndex[0]][posIndex[1]]);
    if ((this.board.get('grid')[posIndex[0]][posIndex[1]] === undefined) && (currentPlayer.idNum === playerID) && !(this.gameOver)) {
      // console.log(" I made it here 1");
      var position = this.board.get('grid');
      position[posIndex[0]][posIndex[1]] = playerID;
      this.board.set('grid', position);
      // console.log(" I made it here 2");
      if ((this.board.won()) || (this.board.full())) {
        this.gameOver = true;
      }
      // console.log(" I made it here 3");
      this.updateTurn();
      // console.log(" I made it here 4");
      return true;
    } else {
      return false;
    }
  },
  updateTurn: function(){
    this.playerOne.myTurn = !this.playerOne.myTurn;
    this.playerTwo.myTurn = !this.playerTwo.myTurn;
  },
  whoseTurn: function (){
    if(this.playerOne.myTurn === true){
      return this.playerOne;
    }
    else {
      return this.playerTwo;
    }
  },

});

export default Game;
