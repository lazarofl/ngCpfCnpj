(function() {
  'use strict';
  angular.module('ngCpfCnpj', []);

  angular.module('ngCpfCnpj').directive('ngCpfCnpj', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        return element.text('this is the ngCpfCnpj directive');
      }
    };
  });

}).call(this);
