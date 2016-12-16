import Backbone from 'backbone';
import Game from 'app/models/game';

const Application = Backbone.Model.extend({
initialize: function(options){
  this.game = new Game();
}
});

export default Application;
