'use strict';

var projects = [];

function Project(projectData) {

  this.title = projectData.title;
  this.tags = projectData.tags;
  this.roles = projectData.roles;
  this.description = projectData.description;
  this.image = projectData.image;
}

Project.prototype.toHtml = function () {

  var templateFiller = Handlebars.compile($('#project-template').html());
 
  var filledTemplate = templateFiller(this);

  return filledTemplate;

};

projectData.forEach( projectObject => {
    projects.push( new Project( projectObject ) );
});

projects.forEach( project => {

    $( '#projects' ).append( project.toHtml() );
});

