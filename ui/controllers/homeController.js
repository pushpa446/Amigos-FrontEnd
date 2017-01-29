angular.module('amigos')
    .controller('homeController',[function () {
    var self = this;
    self.items = [
        {name: "Biscuits"},
        {name: "Chocolates"}];
}]);