'use strict';

describe('Directive: weathericon', function () {

  // load the directive's module
  beforeEach(module('youtubeTvApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<weathericon></weathericon>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the weathericon directive');
  }));
});
