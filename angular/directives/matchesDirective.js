myApp.directive('viewTable',function(){

	// Return all the table data back
	return {
		retrict : 'E',
		templateUrl :'./views/matches-table.html',
		controller : function($scope){
			console.log($scope.title);
		} // End of the controller
	}
});