(function (){
    "use strict";

    console.log(angular.version);

    angular
        .module('attendees', [])
        .component('sePresent', sePresent())
        .factory('AttendeeService', AttendeeService)
        ;


    /* @ngInject */
    function sePresent () {
        var component = {
            controller:  sePresentController,
            templateUrl: "sePresent.tpl.html"
        };
        return component;
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