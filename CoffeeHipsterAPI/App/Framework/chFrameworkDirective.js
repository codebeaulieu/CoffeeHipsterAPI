"use strict";

angular.module("chFramework").directive("chFramework", function () {

    return {
        transclude: true,
        scope: {
            /*title: '@',
            subtitle: '@',
            iconFile: '@'*/
        },
        controller: "chFrameworkController",
        templateUrl: "App/Framework/chFrameworkTemplate.html",
        link: function (scope, element, attrs) {

            console.log("chDashboardDirective");

        }

    };
});

 