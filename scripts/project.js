'use strict';

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

Project.loadAll = function (rawData) {

  rawData.forEach(function (ele) {
    Project.all.push(new Project(ele));
  })
}

Project.runWhenDone = function (data) {

  localStorage.setItem('rawData', JSON.stringify(data));
  Project.loadAll(data);
  projectView.initIndexPage();
}

Project.runWhenErr = function (err) {
  console.error('error', err);
}

Project.getDBData = function () {
  $.ajax({
    type: 'GET',
    url: './data/projects.json',
    success: Project.runWhenDone,
    error: Project.runWhenErr
  })
}

Project.checkETag = function () {
  $.ajax({
    type: 'HEAD',
    url: './data/projects.json',
    success: Project.validateETag,
    error: Project.runWhenErr
  })
}

Project.validateETag = function (data, message, xhr) {
  var eTag = xhr.getResponseHeader('ETag');
  if (eTag === JSON.parse(localStorage.getItem('lsETag'))) {
    Project.loadAll(JSON.parse(localStorage.rawData))
    projectView.initIndexPage();
  } else {
    localStorage.setItem('lsETag', JSON.stringify(eTag));
    Project.getDBData();
  }
}