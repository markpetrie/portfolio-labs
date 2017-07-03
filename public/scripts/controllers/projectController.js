'use strict';
var app = app || {};

( module => {
    const projectController = {};

    projectController.init = () => {
        $('main > section').hide();
        $('#projects').show();
        app.Project.checkETag();
    }

    module.projectController = projectController;
})(app);