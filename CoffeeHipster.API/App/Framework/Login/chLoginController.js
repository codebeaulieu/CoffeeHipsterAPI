"use strict";

angular.module("chLogin").controller("chLoginController",
    ['$rootScope', '$scope', '$location', 'authService', '$localStorage',
        function ($rootScope, $scope, $location, authService, $localStorage) {
            
            var selectedMenuItem = $localStorage.selectedMenuItem || "dashboard";

            var self = this;
            self.user = {
                grant_type: 'password',
                userName : "",
                password : ""
            };
         

            self.handleLoginButtonClicked = function () {
                authService.login(self.user).then(function () {
                    $rootScope.$broadcast('ch-menu-item-selected-event', { route: '\\' + selectedMenuItem }); 
                });  
            };

            var init = function () {
              
            };

            init();
        }
    ]);