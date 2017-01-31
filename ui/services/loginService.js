'use strict';

angular.module('amigos')
    .service('loginService',['$q', function ($q) {
        var self = this;
        var registeredUsers = [];
        self.logIn = function (userName, password) {
            var defer = $q.defer();
            registeredUsers.push({username: userName, password: password});
            defer.resolve({data: {message: "successful"}});
            return defer.promise;
        };

    }]);