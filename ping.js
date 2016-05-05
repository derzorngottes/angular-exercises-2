var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function myCtrl($scope) {
  $scope.vm = {};
  $scope.vm.game = {
    pointStreak: 0,
    whoWon: ''
  }
  $scope.vm.player1 = {
    name: 'Player 1',
    score: 0,
    serving: true,
    gamesWon: 0
  };
  $scope.vm.player2 = {
    name: 'Player 2',
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
  $scope.addPoints = function() {
    $scope.vm.game.pointsStreak += 1;
  }
}]);

app.service('gameLogic', function() {
  this.winner = function (player) {
    if ($scope.vm[player].score === 11) {
      $scope.vm.game.whoWon = $scope.vm[player].name;
      $scope.vm[player].gamesWon += 1;
      $scope.vm.player1.score = 0;
      $scope.vm.player2.score = 0;
      return true;
    } else {
      return false;
    }
  }
  this.serving = function(player) {
    if ($scope.vm.game.pointsStreak === 2) {
      $scope.vm.player1.serving = !$scope.vm.player1.serving;
      $scope.vm.player2.serving = !$scope.vm.player2.serving;
      $scope.vm.game.pointsStreak = 0;
      return true;
    } else {
      return false;
    }
  }
});
