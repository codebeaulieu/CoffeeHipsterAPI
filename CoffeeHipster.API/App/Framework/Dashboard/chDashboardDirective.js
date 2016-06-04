"use strict";

angular.module('chDashboard').directive('chDashboard',
    ['$timeout', '$rootScope',
        function ($timeout, $rootScope) {

            return {
                controller: "chDashboardController",
                templateUrl: 'App/Framework/Dashboard/chDashboardTemplate.html', 
                link: function (scope, element, attrs) {

                     console.log("chDashboardDirective");

                }
            };
        }]);