import Backbone from 'backbone';
// import Game from 'app/models/game';


const Board = Backbone.Model.extend({
  initialize: function(){
    this.grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  }
});

export default Board;
