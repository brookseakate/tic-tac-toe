//This will have the view for the entire application
//ID is #application
import Backbone from 'Backbone';
import Game from 'game';

const ApplicationView = Backbone.View.extend({
initialize: function(){
  //This was done on the app.js
},
render: function(){
  const games = new GameView ({
    model: this.model.game,
    el: this.$('#game')
  });
}
});
