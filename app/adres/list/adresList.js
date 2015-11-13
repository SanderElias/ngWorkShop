(function () {
    'use strict';

    angular
        .module('adres.list', ['adres.service'])
        .component('adresList', adresList());

    function adresList () {
        return {
            controller: AdresListController,
            template:   "<h1>list</h1>",
        };
    }

    /* @ngInject */
    function AdresListController (/* ???? */) {
        var adresList = this;
        adresList.list = []
;    }

}());