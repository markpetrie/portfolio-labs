'use strict';

const projectView = {};

projectView.handleMainNav = () => {
  $('.tab').on('click', function () {
    $('.tab-content').hide();
    var section = '#' + $(this).attr('data-content');
    $(section).show();
  });
  $('.main-nav .tab:first').click();
};

projectView.initIndexPage = () => {
  app.Project.all.map(project => $('#projects').append(project.toHtml()))
};

projectView.handleMainNav()