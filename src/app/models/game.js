import Backbone from 'backbone';
import Board from 'app/models/board';

const Game = Backbone.Model.extend({
  initialize: function(options){
    this.board = new Board();
  },

  playerOne:{
    'userName' :  ""
  },
  
  playerTwo: {
    'userName' : ""
  }
});

export default Game;
