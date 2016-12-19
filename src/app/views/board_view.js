//This will have the table and work with a collection of cells
//The id for the board is "board" on the table in the html
import Backbone from 'backbone';
import CellView from 'app/views/cell_view';
import $ from 'jquery';
const BoardView = Backbone.View.extend({
  initialize: function(){

  },
  render: function(){
    var build = $();
    this.model.grid.forEach(function(arr){
      var row =  $('<tr> </tr>');
      arr.forEach(function(val){
        row.append('<td>'+ val +'</td>');
      });
      build.append(row);
    });
    this.$el.append(build);
  }
});

export default BoardView;
