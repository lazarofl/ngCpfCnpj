(function() {
  'use strict';
  describe('Directive: ngCpfCnpj - CPF/CNPJ validations', function() {
    var scope, log, form, element;

    beforeEach(module('ngCpfCnpj'));
    
    beforeEach(inject(function($rootScope, $compile, $log ) {
      log = $log;
      scope = $rootScope.$new();
      scope.number = '';
      form = $compile('<form name="frm"><input type="text" ng-model="number" ng-cpf-cnpj /></form>')(scope);
      element = angular.element(form);
    }));

    // To generate a valid CPF
    // http://www.geradorcpf.com/

    it('unformatted valid CPF must pass', inject(function() {
      scope.number = '76958184963';
      scope.$digest();
      return expect(scope.frm.$valid).toBe(true);
    }));

    it('formatted valid CPF must pass', inject(function() {
      scope.number = '769.581.849-63';
      scope.$digest();
      return expect(scope.frm.$valid).toBe(true);
    }));

    it('unformatted invalid CPF must pass', inject(function() {
      scope.number = '76958184961';
      scope.$digest();
      return expect(scope.frm.$valid).toBe(false);
    }));

    it('formatted invalid CPF must pass', inject(function() {
      scope.number = '769.581.849-61';
      scope.$digest();
      return expect(scope.frm.$valid).toBe(false);
    }));

    // To generate a valid CNPJ
    // http://www.geradorcnpj.com/

    it('unformatted valid CNPJ must pass', inject(function() {
      scope.number = '25536567000108';
      scope.$digest();
      return expect(scope.frm.$valid).toBe(true);
    }));

    it('formatted valid CNPJ must pass', inject(function() {
      scope.number = '25.536.567/0001-08';
      scope.$digest();
      return expect(scope.frm.$valid).toBe(true);
    }));

    it('unformatted invalid CNPJ must pass', inject(function() {
      scope.number = '25536567000101';
      scope.$digest();
      return expect(scope.frm.$valid).toBe(false);
    }));

    it('formatted invalid CNPJ must pass', inject(function() {
      scope.number = '25.536.567/0001-01';
      scope.$digest();
      return expect(scope.frm.$valid).toBe(false);
    }));

  });

}).call(this);
