"use strict";

angular.module('chContent').directive('chContent',
    ['$timeout', '$rootScope',
        function ($timeout, $rootScope) {

            return {
                controller: "chContentController",
                templateUrl: 'App/Content/chContentTemplate.html', 
                link: function (scope, element, attrs) { 
                     console.log("chContentDirective"); 
                }
            };
        }]);