(function () {
    'use strict';

    angular
        .module('todoApp')
        .component('landing', landing());

    function landing () {
        return {
            controller:  landingController,
            templateUrl: "landing/landing.tpl.html",
        };
    }

    /* @ngInject */
    function landingController () {
        var landing = this;
        landing.name = 'landingController';
    }

}());