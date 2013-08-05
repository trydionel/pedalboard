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

      // Can't use angular data bindings for CSS, so flesh out
      // simulated two-way bindings.
      //
      function updateValue(event, drag) {
        var delta = drag.deltaY;
        var newValue = pedal.getControl(key) + delta / 1000; // FIXME: This is terrible
        newValue = Math.max(0, Math.min(1, newValue)); // clamp 0 -> 1
        pedal.setControl(key, newValue);
      }
      element.on('drag', function(e, d) {
        scope.$apply(function() {
          updateValue(e, d);
        });
      });

      var _previousValue = undefined;
      scope.$watch(function $renderKnob() {
        var value = pedal.getControl(key);
        if (_previousValue !== value) {
          var deg = -100 + value * 300;

          // FIXME: webkit only!
          element.find('.pedal-knob-indicator')
            .css('webkitTransform', 'rotate(' + deg + 'deg)');
          _previousValue = value;
        }
      });

      element.addClass('pedal-knob-' + key);
    }
  };
});
