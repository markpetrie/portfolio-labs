'use strict';

var projectView = {};

projectView.handleMainNav = function () {
    $('.tab').on('click', function () {
        $('.tab-content').hide();

        var section = '#' + $(this).attr('data-content');
        $(section).show();
    });
    $('.main-nav .tab:first').click();
};

$(document).ready(function () {
    projectView.handleMainNav();
});