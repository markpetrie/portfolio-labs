'use strict';
var app = app || {};

(function (module) {
  const aboutController = {};

  aboutController.init = function () {
    $('main > section').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(app);
