'use strict';

describe('Directive: pedal', function () {
  beforeEach(module('pedalsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<pedal></pedal>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the pedal directive');
  }));
});
