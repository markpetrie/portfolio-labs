'use strict';

var projects = [];

function Project (projectData) {
  // TODO: Use the JS object passed in to complete this constructor function:
  // Save ALL the properties of `rawDataObj` into `this`
    this.title = projectData.title;
    this.tags = projectData.tags;
    this.roles = projectData.roles;
    this.description = projectData.description;
    this.image = projectData.image;
}

Project.prototype.toHtml = function() {
    var $newProject = $('article.template').clone();
    $newProject.removeClass('template');
  /* TODO: This cloned article still has a class of template.
  However, in our modules.css stylesheet, we gave all elements
  with a class of template a display of none. Let's make
  sure we're not accidentally hiding our cloned article! */

    // $newProject.data('category', this.category);
    $newProject.find('h1').text(this.title);
    $newProject.find('h2').text(this.tags);
    $newProject.find('h3').text(this.roles);
    $newProject.find('.project-description p').html(this.description);
    return $newProject;
};

projectData.forEach(function(projectObject) {
  // REVIEW: Take a look at this forEach method; This may be the first time we've seen it.
    projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
    $('#projects').append(project.toHtml());
});
