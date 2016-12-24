import Backbone from 'backbone';
// import Game from 'app/models/game';

const Application = Backbone.Model.extend({

  initialize: function(options){
    this.gameList = options.gameList;
    // this.game = this.gameList.add; // @TODO - remove
    console.log("GAME LIST: " + this.gameList); // NOTE: log
    console.log("GAME LIST LENGTH: " + this.gameList.length); // NOTE: log
    console.log("GAME LIST JSON: " + (this.gameList).toJSON()); // NOTE: log

  }

});

export default Application;
