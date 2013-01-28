'use strict';

describe('Directive: step', function() {
  beforeEach(module('presentationApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<step></step>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the step directive');
  }));
});
