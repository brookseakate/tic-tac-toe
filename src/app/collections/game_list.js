import Backbone from 'backbone';
import Game from 'app/models/game';

var GameList = Backbone.Collection.extend({
  model: Game,
  url: 'http://localhost:3000/api/v1/games', // Backbone knows that if you put in a url property, you are using it for persistence!
  parse: function(data) { // parse is a special function that Backbone has built in
    return data;
  }
});

export default GameList;
