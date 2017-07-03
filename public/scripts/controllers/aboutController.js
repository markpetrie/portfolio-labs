'use strict';
var app = app || {};

( module => {
  const aboutController = {};

  aboutController.init = function () {
    $('main > section').hide();
    $('#about').show();

    app.repos.requestRepos(app.repoView.index);
  }



  module.aboutController = aboutController;
})(app);
