// Cells will be created when the board is initialized as tr and tds there is nothing
//In the html yet
//This view will update a single cell

import Backbone from 'backbone';
import Game from 'app/models/game';

// import $ from 'jquery';
const CellView = Backbone.View.extend( {
  initialize: function(options) {
    this.val = options.value;
  },

  render: function() {
    this.$el.append(this.val);
    console.log("Cell View Render val: " + this.val);

    return this;
  },

  events: {
    'click': 'cellClick'
  },

  cellClick: function(event) {

    console.log("Click on cell " + this.val);
    this.trigger('select', this.val);
  }
});

export default CellView;
