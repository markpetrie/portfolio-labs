'use strict';

var app = {};

(function (module) {
  function Project(projectData) {
    this.title = projectData.title;
    this.tags = projectData.tags;
    this.roles = projectData.roles;
    this.description = projectData.description;
    this.image = projectData.image;
  }

  Project.all = [];

  Project.prototype.toHtml = function () {
    let templateFiller = Handlebars.compile($('#project-template').html());
    let filledTemplate = templateFiller(this);
    return filledTemplate;
  }

  Project.loadAll = rawData => {

    rawData.map(ele => {
      Project.all.push(new Project(ele));
    })
  }

  Project.runWhenDone = data => {

    localStorage.setItem('rawData', JSON.stringify(data));
    Project.loadAll(data);
    app.projectView.initIndexPage();
  }

  Project.runWhenErr = err => {
    console.error('error', err);
  }

  Project.getDBData = () => {
    $.ajax({
      type: 'GET',
      url: './data/projects.json',
      success: Project.runWhenDone,
      error: Project.runWhenErr
    })
  }

  Project.checkETag = () => {
    $.ajax({
      type: 'HEAD',
      url: './data/projects.json',
      success: Project.validateETag,
      error: Project.runWhenErr
    })
  }

  Project.validateETag = (data, message, xhr) => {
    var eTag = xhr.getResponseHeader('ETag');
    if (eTag === JSON.parse(localStorage.getItem('lsETag'))) {
      Project.loadAll(JSON.parse(localStorage.rawData))
      app.projectView.initIndexPage();
    } else {
      localStorage.setItem('lsETag', JSON.stringify(eTag));
      Project.getDBData();
    }
  };
  module.Project = Project;
}(app));