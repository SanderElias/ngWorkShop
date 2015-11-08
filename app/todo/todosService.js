(function () {
    'use strict';

    angular
        .module('todoApp')
        .factory('TodosService', TodosService);

    /* @ngInject */
    function TodosService($http) {
        var todos = [];
        var id = 0;
        var service = {
            todos,
            load,
            save,
            createId,
            newItem
        };
        load();
        return service;

        function createId() {
            id += 1;
            return Date.now().toString(36) + "-" + id;
        }

        function load() {
            return service.done = $http
                .get('http://localhost:3000/todos/')
                .then(response => response.data)
                .then(data     => Array.isArray(data) && data.forEach(updateList))
                ;
        }

        function newItem() {
            return {
                description: ''
            };
        }

        function updateList(item) {
            console.log('up', item)
            if (!todos.some(i => {
                if (i.id === item.id) {
                    // Found the item, add/overwrite new data.
                    angular.merge(i, item);
                    return true;
                }
            })) {
                // item nod found, push to list
                todos.push(item);
            }
        }


        function save(item) {
            if (item.id === undefined) {
                // new item
                $http
                    .post('http://localhost:3000/todos/', item)
                    .then(response => response.data) //parse response
                    .then(newItem => updateList(newItem)) // update 'master'
                    ;
            } else {
                $http
                    .put('http://localhost:3000/todos/' + item.id, item);
                    //Item is already in list. done!
                }
        }
    }
}());