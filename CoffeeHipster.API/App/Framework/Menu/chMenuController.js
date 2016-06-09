"use strict";

angular.module('chMenu').controller('chMenuController',
    ['$scope', '$rootScope', '$timeout', '$localStorage', 'authService',
        function ($scope, $rootScope, $timeout, $localStorage, authService) {
            
            // local storage
            $scope.$storage = $localStorage;
            $scope.menuOpen = false;
            $scope.selectedMenuItem = $localStorage.selectedMenuItem || "dashboard";
            var self = this;
            self.authenticated = authService.authenticated.isAuth;

            this.getActiveElement = function () {
                return $scope.activeElement;
            };
            this.setActiveElement = function (el) {
                $scope.selectedMenuItem = el.attr('route');
                $scope.activeElement = el;
            };

            this.setRoute = function (route) {
                $localStorage.selectedMenuItem = route;
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