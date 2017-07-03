'use strict';
var app = app || {};

(function (module) {
    const aboutView = {
        initAboutPage: () => {
            console.log('initAboutPage is running');
        }
    };
    module.aboutView = aboutView;
})(app);