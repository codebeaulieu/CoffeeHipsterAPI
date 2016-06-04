"use strict";

angular.module('chCreate').directive('chCreate',
    ['$timeout', '$rootScope',
        function ($timeout, $rootScope) {

            return {
                controller: "chCreateController",
                templateUrl: 'App/Framework/Create/chCreateTemplate.html', 
                link: function (scope, element, attrs) { 
                     console.log("chCreateDirective"); 
                }
            };
        }]);