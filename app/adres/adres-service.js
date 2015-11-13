(function () {
    'use strict';

    angular
        .module('adres.service', [])
        .factory('AdresService', AdresService);


    //TODO: add function(s) to load a individual item
    //TODO: add function(s) to save a item.

    /* @ngInject */
    function AdresService($http) {
        var service = {
            load
        };

        //fire of request at init, and cache in service
        service.done = load()
          .then(data => service.data = data);

        return service;

        ////////////////

        function load() {
            return $http
                .get('http://localhost:4000/adres/')
                .then(result => result.data)
                .catch(err => console.error(err));
        }
    }
}());