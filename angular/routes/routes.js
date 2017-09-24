myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
		
		.when('/',{
			templateUrl  : 'views/all-matches.html', // to set a particular url of the view
			controller   : 'matchController',
			controllerAs : 'match'
		})

		.when('/single-match',{
			templateUrl  : 'views/single-match.html',
			controller   : 'matchController',
			controllerAs : 'match'
		})

		.when('/statistics',{
			templateUrl  : 'views/statistics.html',
			controller   : 'matchController',
			controllerAs : 'match'
		})

		.otherwise({
			template : '<h1>Page not Found!</h1>'
		});
}]);