import ApplicationView from 'app/views/application';

$(document).ready(function (){
  var appView = new ApplicationView({
    el: '#application'
  });
  appView.render();
});
