'use strict';
var app = app || {};

( (module) => {
    const repos = {};

    repos.all = [];

    repos.requestRepos = callback => {

        $.get('GitHub/user/repos')
            .then(data => repos.all = data, err => console.error(err))
            .then(callback);
    };

    repos.with = attr => repos.all.filter(repo => repo[attr]);

    module.repos = repos;
})(app);
