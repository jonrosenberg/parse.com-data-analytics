'use strict';

var testVar;

angular.module('appList', ['ngRoute', 'parseServices'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app/list', {
    templateUrl: 'views/app-list.html',
    controller: 'AppListController'
  });
}])

.controller('AppListController', ['$scope', 'ParseSDK', function($scope, parseServices) {
		console.log('app list controller');
	
	// Queries
	var query = new Parse.Query("Level");
	query.equalTo("name", "Guru");
	query.first()
	.then(function(result){
			console.log('query complete');
	        //console.log(result);
	});

	// Save Keys
	var applicationId = "bbbbb";
	
	var parseCredentials = parseServices.parseCredentials;
	parseCredentials.set("applicationId", applicationId);
	parseCredentials.set("javascriptKey", "aaaaa");

	var queryParseCredentials = parseServices.queryParseCredentials;
	queryParseCredentials.limit(1);
	queryParseCredentials.equalTo("applicationId", applicationId);
	queryParseCredentials.first()
	.then(function(result){

		console.log('query complete');
		testVar = result;
        console.log(result);

    	if(result){
    		console.log('credentials already exist');
    		return;
		}

        parseCredentials.save(null, {
			success: function(parseCredentials, callback) {
				// Execute any logic that should take place after the object is saved.
				console.log('New object created with objectId: ' + parseCredentials.id);
			},
			error: function(parseCredentials, error) {
				// Execute any logic that should take place if the save fails.
				// error is a Parse.Error with an error code and message.
				alert('Failed to create new object, with error code: ' + error.message);
			}
		});
	});

	

	
	pda.parseFunctions.topDistinctValues("Quiz", 100, function(result){
		// console.log('callback parse data');
		// console.log(result);
		var chartData = pda.parseFunctions.parseDataForCharts(result);
	});
	

}]);



