ngCpfCnpj [![Build Status](https://travis-ci.org/lazarofl/ngCpfCnpj.svg)](https://travis-ci.org/lazarofl/ngCpfCnpj)
=========

Diretiva angular para validar campos em formato cpf, cnpj e cpf/cnpj


Instalação
==============

```sh
bower install ng-cpfcnpj --save
```

Utilização
==================


Validação de CPF
```html
<form name="form">
  <input type="text" ng-cpf ng-model="numero" />
  <div ng-show="form.$valid">CPF válido</div>
</form>
```

Validação de CNPJ
```html
<form name="form">
  <input type="text" ng-cnpj ng-model="numero" />
  <div ng-show="form.$valid">CPF válido</div>
</form>
```

Validação de CPF ou CNPJ
```html
<form name="form">
  <input type="text" ng-cpf-cnpj ng-model="numero" />
  <div ng-show="form.$valid">CPF ou CNPJ válido</div>
</form>
```

