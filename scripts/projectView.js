'use strict';

const projectView = {};

projectView.handleMainNav = function () {
    $('.tab').on('click', function () {
        $('.tab-content').hide();
        var section = '#' + $(this).attr('data-content');
        $(section).show();
    });
    $('.main-nav .tab:first').click();
};

projectView.initIndexPage = function() {
  Project.all.forEach(function(project) {
    $('#projects').append(project.toHtml())
  });
  projectView.handleMainNav();
};