//This will have the table and work with a collection of cells
//The id for the board is "board" on the table in the html
import Backbone from 'backbone';
import CellView from 'app/views/cell_view';
import Board from 'app/models/board';
import $ from 'jquery';
const BoardView = Backbone.View.extend({

  initialize: function() {
    console.log("Hello!");
  },

  render: function() {
    var build = this.$el;

    this.model.get('grid').forEach(function(arr, indexOne){
      var row = $('<tr></tr>');

      arr.forEach(function(val, indexTwo){
        var element = $('<td></td>');
        var cell = new CellView({
          index: indexOne.toString() + indexTwo.toString(),
          value: val,
          el: element
        });

        // console.log("forEach this: " + this); // NOTE: log
        // console.log("forEach cell value: " + cell.val); // NOTE: log

        this.listenTo(cell, 'select', this.cellSelect);
        cell.render();
        row.append(cell.$el);
      }, this);

      build.append(row);
    }, this);

    this.$el.append(build);
  },

  cellSelect: function(val_position_array) {
    // this.val = val;
    console.log("BoardView! cellSelect");
    console.log("BoardView! Selected cell info:" + val_position_array);
    this.trigger('cellPlayed', val_position_array);
    this.$el.empty();
    this.render();
  }
});

export default BoardView;
