(function() {
  'use strict';
  var module = angular.module('ngCpfCnpj', []);

  module.directive('ngCpf', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        scope.$watch(attrs.ngModel, function(newVal, oldVal) {
          ctrl.$setValidity( 'cpf', CPF.isValid(newVal) );
        });
      }
    };
  });

  module.directive('ngCnpj', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        scope.$watch(attrs.ngModel, function(newVal, oldVal) {
          ctrl.$setValidity( 'cnpj', CNPJ.isValid(newVal) );
        });
      }
    };
  });

  module.directive('ngCpfCnpj', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        scope.$watch(attrs.ngModel, function(newVal, oldVal) {
          ctrl.$setValidity( 'cpfcnpj', CPF.isValid(newVal) || CNPJ.isValid(newVal) );
        });
      }
    };
  });

}).call(this);