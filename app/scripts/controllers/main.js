'use strict';

angular.module('pedalsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.pedals = [
      { name: 'Boost', color: 'red', controls: ['gain', 'tone'] },
      { name: 'Reverb', color: 'yellow', controls: ['gain', 'tone'] },
      { name: 'Fuzz', color: 'orange', controls: ['gain', 'tone'] },
      { name: 'Delay', color: 'blue', controls: ['gain', 'tone'] }
    ];

    $scope.addPedal = function() {
      $scope.pedals.push({
        name: 'OD',
        color: 'green'
      });
    };

    $scope.removePedal = function() {
      $scope.pedals.pop();
    };
  });
