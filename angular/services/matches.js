// Creating a service named matchService to get the data from the Api's
myApp.service('matchService',function($http){

	// To ensure the scope between functions
	var main=this;

	this.urlOne="https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
	this.urlTwo="https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";

	// Get matches from the first url
	this.getAllMatchesOne=function(){
		return $http.get(main.urlOne);
	}

	// Get matches from the second url
	this.getAllMatchesTwo=function(){
		return $http.get(main.urlTwo);
	}
});