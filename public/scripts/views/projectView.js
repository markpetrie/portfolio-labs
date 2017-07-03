'use strict';

var app = app || {};

( module => {
  const projectView = {};

  projectView.initIndexPage = () => {
    app.Project.all.map(project => $('#projects').append(project.toHtml()))
  };

  module.projectView = projectView;
})(app);