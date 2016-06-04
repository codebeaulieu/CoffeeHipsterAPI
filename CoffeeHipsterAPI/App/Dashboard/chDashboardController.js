"use strict";

angular.module("chDashboard").controller("chDashboardController",
    ['$scope', '$location', '$timeout', '$localStorage',
        function ($scope, $location, $timeout, $localStorage) { 

            var init = function () { 

                console.log("chDash loads");
            };

 
            init();
        }
    ]);