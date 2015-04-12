'use strict';

angular.module('myApp.view2', ['ngRoute', 'parseServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'views/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {
		console.log('view 2 controller');
	
	// Queries
	var query = new Parse.Query("Level");
	query.equalTo("name", "Guru");
	query.first()
	.then(function(result){
	        console.log(result);
	});
	// Cloud Code is patched too!
	/*Parse.Cloud.run("myCloudCodeFunction", function(results) {
	    //$scope.data = results;
	    console.log(result);
	});*/

}]);