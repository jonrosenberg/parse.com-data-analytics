'use strict';

angular.module('parseServices', [])
.factory('ParseSDK', function() {
	// pro-tip: swap these keys out for PROD keys automatically on deploy using grunt-replace
	Parse.initialize(pda.parseCredentials.applicationID, pda.parseCredentials.javascriptKey);

	var parseServices = {}
	
	var ParseCredentials = Parse.Object.extend("ParseCredentials");
	
	parseServices.parseCredentials = new ParseCredentials();
	parseServices.queryParseCredentials = new Parse.Query("ParseCredentials");

	parseServices.addCredentials = function(applicationId, javascriptKey) {
		var parseCredentials = parseServices.parseCredentials;
		parseCredentials.set("applicationId", applicationId);
		parseCredentials.set("javascriptKey", javascriptKey);
		
		/*
		var queryParseCredentials = $scope.queryParseCredentials;
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
		*/



	}

	
	
	return parseServices;
});

