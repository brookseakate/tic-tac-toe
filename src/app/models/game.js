import Backbone from 'backbone';
import Board from 'app/models/board';

const Game = Backbone.Model.extend({
  initialize: function(options){
    this.board = new Board();
  }
});

export default Game;
