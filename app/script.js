(function (){
    "use strict";

    angular
        .module('attendees', [])
        .factory('AttendeeService', AttendeeService)
        .directive('sePresent', sePresent);

    /* @ngInject */
    function sePresent () {
        var directive = {
            controller:   sePresentController,
            controllerAs: "vm",
            restrict:     "E",
            templateUrl:  "sePresent.tpl.html"
        };
        return directive;
    }

    /* @ngInject */
    function sePresentController (AttendeeService) {
        var vm = this;
        vm.active = {};  // placeholder for active attendee
        AttendeeService
            .load()
            .then(data => vm.attendees = data)
            ;

        vm.save = AttendeeService.save;
    }


    /* @ngInject */
    function AttendeeService($http) {
        var sv = {};
        sv.load = load;
        sv.save = save;
        return sv;

        function save(attendee) {
            if (attendee.id === undefined) {
                // new one!
                $http
                    .post('http://localhost:3000/attendees', attendee)
                    .then(r => sv.data.push(r.data));
            } else {
                $http.put('http://localhost:3000/attendees/' + attendee.id, attendee);
            }
        }

        function load() {
            return $http
                .get('http://localhost:3000/attendees')
                .then(r => r.data)
                .then(data => sv.data = data)
                ;
        }
    }



}());