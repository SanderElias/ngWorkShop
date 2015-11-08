(function () {
    'use strict';

    angular
        .module('todoApp')
        .component('todoItem', todoItem());

    function todoItem () {
        return {
            controller:  todoItemController,
            templateUrl: "todo/todoItem.tpl.html",
            bindings:    {
                item: '=todoItem'
            }
        };
    }

    /* @ngInject */
    function todoItemController () {
        var todoItem = this;
    }

}());