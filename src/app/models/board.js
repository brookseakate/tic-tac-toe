import Backbone from 'backbone';
// import Game from 'app/models/game';


const Board = Backbone.Model.extend({
  initialize: function(){
    this.grid = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];
  }
});

export default Board;
