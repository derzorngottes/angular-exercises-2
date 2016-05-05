var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function myCtrl($scope) {
  $scope.vm = {};
  $scope.vm.word = 'hello';
  $scope.reverseWord = function () {
    $scope.vm.reversedWord = $scope.vm.word.split('').reverse().join('');
  }
}]);
