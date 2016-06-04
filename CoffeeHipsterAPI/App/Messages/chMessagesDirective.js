"use strict";

angular.module('chMessages').directive('chMessages',
    ['$timeout', '$rootScope',
        function ($timeout, $rootScope) {

            return {
                controller: "chMessagesController",
                templateUrl: 'App/Messages/chMessagesTemplate.html', 
                link: function (scope, element, attrs) { 
                     console.log("chMessagesDirective"); 
                }
            };
        }]);