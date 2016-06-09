"use strict";

angular.module('chFramework').factory('frameworkService',
    ['$timeout', '$http', '$log',
    function ($timeout, $http, $log) {

        var login = function () { 
            return $http({
                method: 'GET',
                datatype: 'json',
                url: 'api/***',
                contentType: "application/json; charset=utf-8",
                cache: false,
            }).success(function (data, status, headers, config) {
                if (status == '200') {
                    var obj = data;
                }
            }).error(function (data, status, headers, config) {
                toastr.error("get objects Failed", "Error");
            });
        };

        return {
            login: login
 
        };
    }]);