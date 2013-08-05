'use strict';

describe('Directive: knob', function () {
  beforeEach(module('pedalsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<knob></knob>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the knob directive');
  }));
});
