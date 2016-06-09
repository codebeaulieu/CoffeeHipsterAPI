'use strict';
angular.module('chFramework').factory('authService', ['$http', '$q', '$localStorage', function ($http, $q, $localStorage) {

    var serviceBase = 'http://localhost:64924/';
    var authServiceFactory = {};

    var _authenticated = {
        isAuth: false,
        userName: ""
    };

    var _saveRegistration = function (registration) {

        _logOut();

        return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
            return response;
        });

    };

    var _login = function (loginData) { 
        var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer(); 
        $http.post(serviceBase + 'Token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {
            toastr.success("You've succesfully logged in.", "Success");
            $localStorage.authorizationData = { token: response.access_token, userName: loginData.userName };

            _authenticated.isAuth = true;
            _authenticated.userName = loginData.userName;

            deferred.resolve(response);

        }).error(function (err, status) {
            _authenticated.isAuth = false;
            toastr.error(err, "Error");
            _logOut();
            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _logOut = function () {

        $localStorage.authorizationData = null;

        _authentication.isAuth = false;
        _authentication.userName = "";

    };

    var _fillAuthData = function () {

        var authData = $localStorage.authorizationData
        if (authData) {
            _authentication.isAuth = true;
            _authentication.userName = authData.userName;
        }

    }
    return {
    saveRegistration : _saveRegistration,
    login : _login,
    logOut : _logOut,
    fillAuthData : _fillAuthData,
    authenticated : _authenticated
}

   
}]);
