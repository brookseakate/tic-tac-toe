import $ from 'jquery';

import GameList from 'app/collections/game_list';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

$(document).ready(function (){
  var games = new GameList();
  games.fetch();

  var application = new Application({
    gameList: games
  });
  var appView = new ApplicationView({
    el: '#application',
    model: application,
    // gameList: games
  });

  appView.render();
});
