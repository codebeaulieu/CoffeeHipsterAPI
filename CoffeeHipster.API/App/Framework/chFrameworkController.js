"use strict";

angular.module("chFramework").controller("chFrameworkController",
    ['$rootScope', '$scope', '$location', 'authService', '$timeout',
        function ($rootScope, $scope, $location, authService, $timeout) {

             
            var init = function () {
         
                 
            };

            $rootScope.$on('ch-menu-item-selected-event', function (evt, data) {
                setRoute(data); 
            });

            var setRoute = function (data) {
                var route = data != "" ? data : $localStorage.selectedMenuItem;

                if (authService.authenticated.isAuth == true) {
                    $scope.routeString = route;
                    $location.path(route);
                } else {
                    $scope.routeString = route;
                    $location.path('/login');
                }
            };

            init();
        }
    ]);