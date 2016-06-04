"use strict";

angular.module('chMenu').directive('chMenu', ['$timeout', '$localStorage', 
function ($timeout, $localStorage) {
    console.log("menu directive loads");
    return {
        scope: {

        },
        transclude: true,
        templateUrl: 'App/Menu/chMenuTemplate.html',
        controller: 'chMenuController',
        link: function (scope, el, attr, ctrl) {

            $timeout(function () {
                ctrl.setRoute($localStorage.selectedMenuItem);
            });
        }
    };
}]);