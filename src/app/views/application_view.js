//This will have the view for the entire application
//ID is #application
import Backbone from 'Backbone';
import GameView from 'app/views/game_view';

const ApplicationView = Backbone.View.extend({

  initialize: function(){
    //This was done on the app.js
  },

  render: function(){
    const gameView = new GameView ({
      model: this.model.game,
      el: this.$('#game')
    });

    gameView.render();

    this.delegateEvents();
    return this;
  }

});

export default ApplicationView;
