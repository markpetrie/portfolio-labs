'use strict';
var app = app || {};

(function (module) {
    const repoView = {};

    const ui = function () {
        let $about = $('#about');

        $about.find('ul').empty();
        $about.show().siblings().hide();
    };

    var source = $('#repo-template').html();
    var templateFiller = Handlebars.compile(source);


    repoView.index = function () {
        ui();

        $('#about ul').append(
            app.repos.with('name').map(function (repo) {
                return templateFiller(repo);
            })
        );
    };

    module.repoView = repoView;
})(app);