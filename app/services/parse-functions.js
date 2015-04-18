pda.parseFunctions = {

/*
 Count number of entries in each column
*/
topDistinctValues: function (className, numberOfDays, callback) {
	if( !numberOfDays ) numberOfDays = 365;
	Parse.Cloud.run('topDistinctValues', {"className": className, "numberOfDays": numberOfDays}, {
		success: function(result) {
			// console.log('topDisctict Val success')
			// console.log(result);
			//console.log(JSON.stringify(result));
			callback(result);
		},
		error: function(error) {
			console.log(error);
			return false;

		}
	});
},
parseDataForCharts: function(data) {
	var colNameList = [], valueCountList = [];
	for(i in data){
		colNameList.push(data[i].columnName);
		valueCountList.push(data[i].distinctValueCount);
		console.log(i+" "+colNameList[i]+" "+valueCountList[i]);
		//console.log(col);
		
	}
	return {'colNameList': colNameList, 'valueCountList':valueCountList};
}

}