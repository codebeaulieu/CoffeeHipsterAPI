"use strict";

angular.module('chCreate').directive('chCreate',
    ['$timeout', '$rootScope',
        function ($timeout, $rootScope) {

            return {
                controller: "chCreateController",
                templateUrl: 'App/Create/chCreateTemplate.html', 
                link: function (scope, element, attrs) { 
                     console.log("chCreateDirective"); 
                }
            };
        }]);