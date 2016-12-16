//This will have the view for the entire application
//ID is #application
import Backbone from 'Backbone';
import GameView from 'app/views/game_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(){
    //This was done on the app.js
  },
  render: function(){
    const games = new GameView ({
      model: this.model.game,
      el: this.$('#game')
    });
    games.render();
  }
});

export default ApplicationView;
