'use strict';

angular.module('pedalsApp')
.directive('pedal', function() {
  return {
    templateUrl: 'views/pedal.html',
    restrict: 'E',
    replace: true,
    scope: {
      name: '=',
      color: '=',
      controls: '='
    },
    controller: function($scope) {
      $scope._controlValues = {};

      this.setControl = function(key, value) {
        $scope._controlValues[key] = value;
      };

      this.getControl = function(key) {
        return $scope._controlValues[key] || 0;
      };
    },
    link: function(scope, element, attrs) {
      scope.active = true;
      element.addClass(scope.color);
    }
  };
});
