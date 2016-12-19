import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import Application from 'app/models/application';
$(document).ready(function (){
  var application = new Application();
  var appView = new ApplicationView({
    el: '#application',
    model: application
  });
  appView.render();
});
