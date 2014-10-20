(function() {
  'use strict';
  describe('Directive: ngCpfCnpj - CNPJ validations', function() {
    var scope, log, form, element;

    beforeEach(module('ngCpfCnpj'));
    
    beforeEach(inject(function($rootScope, $compile, $log ) {
      log = $log;
      scope = $rootScope.$new();
      scope.number = '';
      form = $compile('<form name="frm"><input type="text" ng-model="number" ng-cnpj /></form>')(scope);
      element = angular.element(form);
    }));

    // To generate a valid CNPJ
    // http://www.geradorcnpj.com/

    it('unformatted valid CNPJ must pass', inject(function() {
      scope.number = '19957154000102';
      scope.$digest();
      return expect(scope.frm.$valid).toBe(true);
    }));

    it('formatted valid CNPJ must pass', inject(function() {
      scope.number = '19.957.154/0001-02';
      scope.$digest();
      return expect(scope.frm.$valid).toBe(true);
    }));

    it('unformatted invalid CNPJ must pass', inject(function() {
      scope.number = '19957154000101';
      scope.$digest();
      return expect(scope.frm.$valid).toBe(false);
    }));

    it('formatted invalid CNPJ must pass', inject(function() {
      scope.number = '19.957.154/0001-01';
      scope.$digest();
      return expect(scope.frm.$valid).toBe(false);
    }));

  });

}).call(this);
