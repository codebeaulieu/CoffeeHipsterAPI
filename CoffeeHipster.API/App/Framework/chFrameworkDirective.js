"use strict";

angular.module("chFramework").directive("chFramework", function () {

    return {
        transclude: true,
        scope: { 
        },
        controller: "chFrameworkController",
        templateUrl: "App/Framework/chFrameworkTemplate.html",
        link: function (scope, el, attr) {
            
 
        }

    };
});

 