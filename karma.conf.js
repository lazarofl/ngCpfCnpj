(function() {
  module.exports = function(config) {
    return config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-cookies/angular-cookies.js',
        'app/bower_components/angular-resource/angular-resource.js',
        'app/bower_components/angular-sanitize/angular-sanitize.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/bower_components/cpf_cnpj/build/cnpj.js',
        'app/bower_components/cpf_cnpj/build/cpf.js',
        'app/bower_components/cpf_cnpj/build/cpf_cnpj.js',
        'app/scripts/**/*.js',
        'test/mock/**/*.js',
        'test/spec/**/*.js'
      ],
      exclude: [],
      port: 8080,
      logLevel: config.LOG_INFO,
      browsers: ['PhantomJS'],
      plugins: ['karma-phantomjs-launcher', 'karma-jasmine'],
      autoWatch: true,
      singleRun: false,
      colors: true      
    });
  };

}).call(this);