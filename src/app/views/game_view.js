//Section tag for this view is "game" and this view holds the board and cells
import Backbone from 'backbone';
import BoardView from 'app/views/board_view';
import $ from 'jquery';
import _ from 'underscore';

const GameView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render); // this might be for the API integration stuff?!
    },

  render: function() {
    const boardView = new BoardView({
      model: this.model.board,
      el: this.$('#board')
    });

    this.listenTo(boardView, 'cellPlayed', this.playValue);
    this.listenTo(this.model, 'gameOver', this.gameOverSequence);
    // this.listenTo(this.model, 'gameOver', this.saveGame); // @TODO - remove

    this.modalTemplate = _.template($('#tmpl-winner-modal').html());
    this.modalElement = this.$('#winner-modal');

    this.modalElement.hide();
    // this.delegateEvents();
    boardView.render();
    return this;
  },

  events: {
    'click .btn-savepl1': 'savePlayer',
    'click .btn-savepl2': 'savePlayer',
    'click .btn-new-game': 'startNewGame'
  },

  savePlayer: function() {
    var name = {
      // We still need to complete this
      // name: this.$()
    };
  },

  playValue: function(arr) {
    var thisPlayerID = this.model.whoseTurn().idNum;
    this.model.play(thisPlayerID, arr[1]);
    // var thisPlayerSymbol = this.model.whoseTurn().symbol;
    // this.model.play(thisPlayerID, thisPlayerSymbol, arr[1]);
  },

  gameOverSequence: function() {
    // save game
    this.trigger('logGame', this.model);

    // show Outcome Modal
    var winner = this.model.board.get('winner');
    console.log(">>>>>>>>SHOW OUTCOME MODAL! Winner: " + winner);
    this.modalElement.empty();

    var message;
    if (winner !== "") {
      message = "Player " + winner + " wins!";
    } else {
      message = "It's a draw!";
    }

    this.modalElement.html(this.modalTemplate({outcomeMessage: message}));
    this.modalElement.show();
  },

  startNewGame: function() {
    // @TODO - replace with something other than just reloading the page?...
    window.location.reload(false);
  },

  // @TODO - remove
  // saveGame: function() {
  // }
});

export default GameView;
