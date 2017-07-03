'use strict';

const projectView = {};

projectView.initIndexPage = () => {
  app.Project.all.map(project => $('#projects').append(project.toHtml()))
};