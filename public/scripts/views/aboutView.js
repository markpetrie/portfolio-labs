'use strict';
var app = app || {};

( module => {
    const aboutView = {
        initAboutPage: () => {
            console.log('initAboutPage is running');
        }
    };
    module.aboutView = aboutView;
})(app);