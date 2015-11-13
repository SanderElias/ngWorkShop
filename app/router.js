(function () {
    'use strict';

    angular
        .module('todoApp')
        .config(router);

    /* @ngInject */
    function router($routeProvider) {
        $routeProvider
            .when("/todo",     {template: "<todo></todo>"})
            .when("/landing",  {template: "<landing></landing>"})
            .when("/adres",     {template: "<adres-list></adres-list>"})

            .otherwise({redirectTo: "/landing"})
        ;
    }
}());