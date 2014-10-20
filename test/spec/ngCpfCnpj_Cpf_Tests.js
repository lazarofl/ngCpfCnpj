(function() {
  'use strict';
  describe('Directive: ngCpfCnpj - CPF validations', function() {
    var scope, log, form, element;

    beforeEach(module('ngCpfCnpj'));
    
    beforeEach(inject(function($rootScope, $compile, $log ) {
      log = $log;
      scope = $rootScope.$new();
      scope.number = '';
      form = $compile('<form name="frm"><input type="text" ng-model="number" ng-cpf /></form>')(scope);
      element = angular.element(form);
    }));

    // To generate a valid CPF
    // http://www.geradorcpf.com/

    it('unformatted valid CPF must pass', inject(function() {
      scope.number = '73678558836';
      scope.$digest();
      return expect(scope.frm.$valid).toBe(true);
    }));

    it('formatted valid CPF must pass', inject(function() {
      scope.number = '736.785.588-36';
      scope.$digest();
      return expect(scope.frm.$valid).toBe(true);
    }));

    it('unformatted invalid CPF must pass', inject(function() {
      scope.number = '13678558836';
      scope.$digest();
      return expect(scope.frm.$valid).toBe(false);
    }));

    it('formatted invalid CPF must pass', inject(function() {
      scope.number = '136.785.588-36';
      scope.$digest();
      return expect(scope.frm.$valid).toBe(false);
    }));

  });

}).call(this);
