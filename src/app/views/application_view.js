//This will have the view for the entire application
//ID is #application
import _ from 'underscore';
import $ from 'jquery';

import Backbone from 'Backbone';
import Game from 'app/models/game';
import GameView from 'app/views/game_view';
import GameList from 'app/collections/game_list';

const ApplicationView = Backbone.View.extend({

  initialize: function(options) {
    // this.gameList = options.gameList;
    // this.gameList = this.model.gameList;
    // this.gameList = ["A", "B", "C"];
    this.gameListElement = this.$('#game-list');
    this.gameListTemplate = _.template($('#tmpl-game-record').html());
  },

  render: function() {
    this.displayGameList();

    // var newGame = this.model.gameList.add(); // @TODO - remove

    const gameView = new GameView ({
      model: this.model.gameList.add(new Game()),
      el: this.$('#game')
    });

    this.listenTo(gameView, 'logGame', this.saveGame);
    gameView.render();

    this.delegateEvents();
    return this;
  },

  displayGameList: function() {
    // console.log(">>>>>>>>>>GAME*******LIST" + this.gameList); // NOTE: log
    this.gameListElement.empty();
    this.model.gameList.forEach(function(game) {
      var htmlGame = this.gameListTemplate({gameRecord: game});

      this.gameListElement.append(htmlGame);
    }, this);
  },

  saveGame: function(game) {
    this.model.gameList.create(game);
  }
});

export default ApplicationView;
