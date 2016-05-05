var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function myCtrl($scope) {
  $scope.view = {};
  $scope.view.number = 5;
  $scope.pickRandomNumber = function () {
    $scope.view.number = Math.floor(Math.random() * 10) + 1;
  }
}]);
