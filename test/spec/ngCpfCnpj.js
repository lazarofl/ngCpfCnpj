(function() {
  'use strict';
  describe('Directive: ngCpfCnpj', function() {
    var scope;
    beforeEach(module('ngCpfCnpj'));
    scope = {};
    beforeEach(inject(function($rootScope) {
      return scope = $rootScope.$new();
    }));
    return it('should make hidden element visible', inject(function($compile) {
      var element;
      element = angular.element('<div ng-cpf-cnpj></div>');
      element = $compile(element)(scope);
      return expect(element.text()).toBe('this is the ngCpfCnpj directive');
    }));
  });

}).call(this);
