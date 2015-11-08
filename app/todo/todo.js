(function () {
    'use strict';

    angular
        .module('todoApp')
        .component('todo', todo());

    function todo () {
        return {
            controller:  todoController,
            templateUrl: "todo/todo.tpl.html",
        };
    }

    /* @ngInject */
    function todoController (TodosService) {
        var todo = this;
        TodosService.done
            .then(function () {
                todo.items = TodosService.todos;
            });

        todo.newItem = '';  //placeholder for new todo-items text
        todo.addItem = addItem;

        return;

        function addItem() {
            var it = TodosService.newItem();
            it.description = todo.newItem;
            TodosService.save(it);
            todo.newItem = '';
        };

    }

}());