'use strict';

angular.module('pedalsApp')
.directive('knob', function () {
  return {
    templateUrl: 'views/knob.html',
    restrict: 'E',
    replace: true,
    scope: {
      control: '=',
      label: '@'
    },
    require: '^pedal',
    link: function postLink(scope, element, attrs, pedal) {
      var key = scope.control;

      scope.rotation = function() {
        var value = pedal.getControl(key);
        var deg = -100 + value * 300; // [0.0, 1.0] -> [-100deg, 200deg]
        var attr = 'rotate(' + deg + 'deg)';
        var css = {
          mozTransform: attr,
          webkitTransform: attr,
          transform: attr
        };
        return css;
      };

      element.on('drag', function(event, drag) {
        scope.$apply(function $updateControlValue() {
          var delta = drag.deltaY;
          var newValue = pedal.getControl(key) + delta / 1000; // FIXME: This is terrible
          newValue = Math.max(0, Math.min(1, newValue)); // clamp 0 -> 1
          pedal.setControl(key, newValue);
        });
      });

      element.addClass('pedal-knob-' + key);
    }
  };
});
