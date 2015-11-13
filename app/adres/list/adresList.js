(function () {
    'use strict';

    angular
        .module('adres.list', [`adres.service`])
        .component('adresList', adresList());

    function adresList () {
        return {
            controller:  AdresListController,
            templateUrl: "adres/list/adresList.tpl.html",
        };
    }

    /* @ngInject */
    function AdresListController (AdresService) {
        var adresList = this;

        AdresService
            .done
            .then(list => {
            adresList.list = list;

        })
;    }

}());