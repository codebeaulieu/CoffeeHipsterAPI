"use strict";

angular.module('app').config(function ($provide, $logProvider) {
    $logProvider.debugEnabled(true);
  //  $mdThemingProvider.theme('docs-dark', 'default')
  //.primaryPalette('blue')
  //.dark();
 
    $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
        return function (exception, cause) {
            $delegate(exception, cause);
            toastr.info(exception.message, "Error");
        }
    }]);
});