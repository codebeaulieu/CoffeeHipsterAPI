"use strict";

angular.module("chFramework").controller("chFrameworkController",
    ['$scope', '$location',
        function ($scope, $location) {
            
            var init = function () {
                console.log("chFramework loads"); 
            };

            $scope.$on('ch-menu-item-selected-event', function (evt, data) {
                $scope.routeString = data.route;
                $location.path(data.route);
            });

            init();
        }
    ]);