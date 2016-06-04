"use strict";

angular.module('chMenu').controller('chMenuController',
    ['$scope', '$rootScope', '$timeout', '$localStorage',
        function ($scope, $rootScope, $timeout, $localStorage) {
            console.log("menu controller loads");
            // local storage
            $scope.$storage = $localStorage;
            $scope.menuOpen = false;
            $scope.selectedMenuItem = $localStorage.selectedMenuItem || "dashboard";
 

            this.getActiveElement = function () {
                return $scope.activeElement;
            };
            this.setActiveElement = function (el) {
                $scope.selectedMenuItem = el.attr('route');
                $scope.activeElement = el;
            };

            this.setRoute = function (route) {
                $rootScope.$broadcast('ch-menu-item-selected-event',
                    { route: route });
            };

            this.setMenu = function () {

            };

           

            var init = function () {
                 
            };

            

            $scope.$watch('selectedMenuItem', function () {
                $localStorage.selectedMenuItem = $scope.selectedMenuItem;
            });

             

            

            init();
        }
    ]);