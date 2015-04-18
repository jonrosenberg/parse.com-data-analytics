'use strict';

angular.module('view2', ['ngRoute', 'parseServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'views/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function($scope) {
		console.log('view 2 controller');
	
	// Queries
	
	var query = new Parse.Query("Level");
	query.equalTo("name", "Guru");
	query.first()
	.then(function(result){
			console.log('query complete');
	        //console.log(result);
	});

	
	pda.parseFunctions.topDistinctValues("Quiz", 100, function(result){
		// console.log('callback parse data');
		// console.log(result);
		var chartData = pda.parseFunctions.parseDataForCharts(result);
	});
	

}]);



