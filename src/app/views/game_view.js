//Section tag for this view is "game" and this view holds the board and cells
import Backbone from 'backbone';
import BoardView from 'app/views/board_view';
import $ from 'jquery';

const GameView = Backbone.View.extend({
  initialize: function(){

  },

  events: {
    'click .btn-savepl1': 'savePlayer',
    'click .btn-savepl2': 'savePlayer',
  },

  savePlayer: function(){
    var name = {
      // We still need to complete this
      // name: this.$()
    };
  },

  render: function(){
    const boardView = new BoardView({
      model: this.model.board,
      el: this.$('#board')
    });
    boardView.render();
    return this;
  }
});
// Feeling okay about this basic view may need to add more
//May need to import
export default GameView;
