"use strict";

angular.module('chMenu').directive('chMenuItem', function () {
    return {
        require: '^chMenu',
        scope: {
            label: '@',
            icon: '@',
            route: '@'
        },
        templateUrl: 'App/Menu/chMenuItemTemplate.html',
        link: function (scope, el, attr, ctrl) {
            scope.isActive = function () {
                return el === ctrl.getActiveElement();
            };
            el.on('click', function (evt) {
                evt.stopPropagation();
                evt.preventDefault();

                scope.$apply(function () {
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                });
                ctrl.setMenu();
            });
        }
    };
});