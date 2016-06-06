"use strict";

angular.module("chContent").controller("chContentController",
    ['$scope', "contentCRUDService",
        function ($scope, contentCRUDService) {

            var init = function () {

                //contentCRUDService.get().then(function (obj) {
                //    console.log("obj : ", obj);
                //});
            };


            init();
        }
    ]);