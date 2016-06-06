"use strict";

angular.module('chCreate').factory('createCRUDService',
    ['$timeout', '$http', '$log',
    function ($timeout, $http, $log) {

        var get = function () { 
            return $http({
                method: 'GET',
                datatype: 'json',
                url: 'api/****',
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

        var getById = function (callId) {

            return $http({
                method: 'GET',
                datatype: 'json',
                url: 'api/***/' + callId,
                contentType: "application/json; charset=utf-8",
                cache: false,
            }).success(function (data, status, headers, config) {
                if (status == '200') {
                    var obj = data;
                }
            }).error(function (data, status, headers, config) {
                toastr.error("get object by id Failed", "Error");
            });
        };

        var post = function (object) {
            return $http({
                method: 'POST',                                                                               
                dataType: 'json',
                data: JSON.stringify(object),
                url: 'api/Coffees',
            }).success(function (data, status, headers, config) { 
                if (status == '200') {
                    toastr.success("Object has been successfully saved.", "Success", { timeOut: 800 });
                    var obj = data;
                }
            }).error(function (data, status, headers, config) {
                toastr.error("Post Object Failed", "Error");
            });
        };

        var put = function (object) {
            return $http({ method: "put", url: "api/HotlineCall/" + object.Id, data: object })
            .success(function (data, status, headers, config) {
                toastr.success("Object saved successfully.", "Success", { timeOut: 800 });
            })
            .error(function (data, status, header, config) {
                toastr.error("Put Object Failed", "Error");
            });
        };

        var remove = function (contentId) {
            return $http({ method: "post", url: "api/***" + contentId})
            .success(function (data, status, headers, config) {
                toastr.success("Object deleted successfully.", "Success", { timeOut: 800 });
            })
            .error(function (data, status, header, config) {
                toastr.error("Remove Object Failed", "Error");
            });
        }; 

        return {
            get: get,
            getById: getById, 
            post: post,
            put: put,
            remove: remove,
 
        };
    }]);