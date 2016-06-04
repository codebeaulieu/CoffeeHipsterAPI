"use strict";

angular.module('app').config(['$routeProvider', function ($routeProvider) {
    console.log("route provider loads");
    var routes = [
        {
            url: '/dashboard',
            config: {
                template: '<ch-dashboard></ch-dashboard>'
            }
        },
        {
            url: '/create',
            config: {
                template: '<ch-create></ch-create>'
            }
        },
        {
            url: '/content',
            config: {
                template: '<ch-content></ch-content>'
            }
        },
        {
            url: '/messages',
            config: {
                template: '<ch-messages></ch-messages>'
            }
        }
    ];

    routes.forEach(function (route) {
        $routeProvider.when(route.url, route.config);

    });

    $routeProvider.otherwise({ redirectTo: '/dashboard' });


}]);
