'use strict';
var app = app || {};

(function (module) {
    const projectController = {};

    projectController.init = function () {
        $('main > section').hide();
        $('#projects').show();
        app.Project.checkETag();
    }

    module.projectController = projectController;
})(app);