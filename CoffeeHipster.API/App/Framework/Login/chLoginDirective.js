"use strict";

angular.module("chLogin").directive("chLogin", function () {

    return {
        transclude: true,
        scope: { 
        },
        controller: "chLoginController",
        templateUrl: "App/Framework/Login/chLoginTemplate.html",
        link: function (scope, element, attrs) {

         

        }

    };
});

 