pda.parseCloudFunctions = {

/*
 Count number of entries in each column
*/
topDistinctValues: function (className, numberOfDays, callback) {
	if( !numberOfDays ) numberOfDays = 365;
	Parse.Cloud.run('topDistinctValues', {"className": className, "numberOfDays": numberOfDays}, {
		success: function(result) {
			console.log('topDisctict Val success')
			console.log(result);
			callback(result);
			//console.log(JSON.stringify(result));
			
		},
		error: function(error) {
			console.log(error);
			return false;

		}
	});
},
parseDataForCharts: function(data) {
	for(i in data){
		var col = data[i];
		console.log(i+" "+col.columnName+" "+col.distinctValueCount);
		console.log(col);
	}
}

}