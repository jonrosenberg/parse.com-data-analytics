'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'parseServices' /* this is the Parse SDK */,
  'angularCharts',
  /* Parse 3rd party */
  'parse-angular',
  'parse-angular.enhance'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
  
}]).run(['ParseSDK', function() {
	// Parse is initialised by injecting the ParseService into the Angular app
}]);
