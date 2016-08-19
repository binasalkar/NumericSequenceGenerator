var app = angular.module('NSG', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when(
    '/', {
      templateUrl: 'generator.html',
      //controller: 'MainController.js'
    }).when(
    '/help', {
      templateUrl: 'help.html',
      controller: 'HelpController.js'
    }).otherwise({
    redirectTo: '/'
  });
});
