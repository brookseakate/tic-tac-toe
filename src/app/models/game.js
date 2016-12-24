import Backbone from 'backbone';
import Board from 'app/models/board';
import Player from 'player';

var Game = Backbone.Model.extend({

  initialize: function() {
    console.log("----- Made a new game, +1!!!! -----");
    this.board = new Board();
    this.playerOne = new Player(0, "X");
    this.playerOne.myTurn = true;
    this.playerTwo = new Player(1, "O");
    this.gameOver = false;
    this.winner = this.board.get('winner');
  },

  play: function(playerID, posIndex) {
    var currentPlayer = this.whoseTurn();
    if ((this.board.get('grid')[posIndex[0]][posIndex[1]] === "") && (currentPlayer.idNum === playerID) && !(this.gameOver)) {

      var position = this.board.get('grid');
      position[posIndex[0]][posIndex[1]] = playerID;
      this.board.set('grid', position);

      if ((this.board.won()) || (this.board.full())) {
        this.gameOver = true;
        // this.trigger('gameOver', this.winner);
        this.trigger('gameOver');
      }
      // console.log(" I made it here 3"); // @TODO - remove log
      this.updateTurn();
      // console.log(" I made it here 4"); // @TODO - remove log
      return true;
    } else {
      return false;
    }
  },

  updateTurn: function() {
    this.playerOne.myTurn = !this.playerOne.myTurn;
    this.playerTwo.myTurn = !this.playerTwo.myTurn;
  },

  whoseTurn: function () {
    if (this.playerOne.myTurn === true){
      return this.playerOne;
    }
    else {
      return this.playerTwo;
    }
  },

});

export default Game;
