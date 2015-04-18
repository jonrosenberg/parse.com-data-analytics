'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('appManager', [
  'ngRoute',
  'appList',
  'version',
  'parseServices' /* this is the Parse SDK */,
  'angularCharts',
  /* Parse 3rd party */
  'parse-angular',
  'parse-angular.enhance'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/app/list'});
  
}]).run(['ParseSDK', function() {
	// Parse is initialised by injecting the ParseService into the Angular app
}]);
