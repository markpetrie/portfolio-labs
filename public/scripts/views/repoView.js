'use strict';
var app = app || {};

( module => {
    const repoView = {};

    const ui = () => {
        let $about = $('#about');

        $about.find('ul').empty();
        $about.show().siblings().hide();
    };

    const render = Handlebars.compile($('#repo-template').text());

    repoView.index = () => {
        ui();

        $('#about ul').append(
            app.repos.with('name').map(render)
        );
    };

    module.repoView = repoView;
})(app);