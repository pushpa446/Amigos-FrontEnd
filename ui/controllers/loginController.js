'use strict';

angular.module('amigos')
    .controller('loginController', ['loginService', '$window', function (loginService, $window) {
        var self = this;
        self.user = {};
        self.he = "adskfj";
        self.clear = function () {
            self.user = {};
        };
        self.submit = function () {
            loginService.logIn(self.user.username, self.user.password).then(function (response) {
                $window.alert(response.data.message);
                self.clear();
            })
        }
    }]);