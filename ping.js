var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function myCtrl($scope) {
  $scope.vm = {};
  $scope.vm.game = {
    pointStreak: 0
  }
  $scope.vm.player1 = {
    score: 0,
    serving: true,
    gamesWon: 0
  };
  $scope.vm.player2 = {
    score: 0,
    serving: false,
    gamesWon: 0
  };

  $scope.increaseScore = function(player) {
    $scope.vm[player].score += 1;
  }
  $scope.resetGame = function() {
    $scope.vm.player1.score = 0;
    $scope.vm.player2.score = 0;
  }
}]);
