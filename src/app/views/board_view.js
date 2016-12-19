//This will have the table and work with a collection of cells
//The id for the board is "board" on the table in the html
import Backbone from 'backbone';
import CellView from 'app/views/cell_view';
import $ from 'jquery';
const BoardView = Backbone.View.extend({
  initialize: function(){
    console.log("Hello!");
  },

  render: function(){
    var build = this.$el;

    this.model.grid.forEach(function(arr){
      var row =  $('<tr> </tr>');
      arr.forEach(function(val){
        var element = $('<td></td>');
        var cell = new CellView({
          value: val,
          el: element
        });

        console.log("forEach this: " + this);

        console.log("forEach cell value: " + cell.val);

        this.listenTo(cell, 'select', this.cellSelect);

        cell.render();

        row.append(cell.$el);
      }, this);

      build.append(row);
    }, this);

    this.$el.append(build);
  },

  cellSelect: function(val) {
    // this.val = val;
    console.log("BoardView! cellSelect");
    console.log("BoardView! Selected cell " + val);
  }


});

export default BoardView;
