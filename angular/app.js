// Creating a Module named footballClub and adding routing dependencies
var myApp=angular.module('footballClub',['ngRoute']);

// Creating a Controller named 'matchController' and requesting for data using $http service
myApp.controller('matchController',['$http',function($http){

	// Variable to differentiate and store the scope
	var main=this;
	this.matchDetails;
	this.rounds=[];
	this.matches=[];

	// Variable to stored results for the statistics
	this.matchesPlayed;
	this.goalsScore;
	this.matchesWon;
	this.matchesLost;
	this.matchesDrawn;
	this.displayStats;
	this.teamNotFound;

	// URL to call the rest API to fetch the information from the server	
	this.urlOne="https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
	this.urlTwo="https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";

	// Function to asynchrounsly call to get the resoponse from the api
	this.showMatchesOne = function(teamName){
		$http({
			method:'get',
			url: main.urlOne,
		}).then(function successCallback(response){
			// Response after success of data
			main.matchDetails=response.data;
			main.rounds=main.matchDetails.rounds;
			main.matches=response.data.rounds;
			if(teamName!=null || teamName!= undefined){
				main.stats(teamName);		
			}
		},
			// In case of error displaying the alert to the user
			function errorCallback(response){
				alert('There is something wrong in loading the page!');
			}
		)
	}
	 //this.showMatchesOne(); // Call to the asynchronous function

	//------------------------------ Call 2016 - 2017 Function -----------------------------//

	// Function to asynchrounsly call to get the resoponse from the api
	this.showMatchesTwo = function(teamName){
		$http({
			method:'get',
			url: main.urlTwo,
		}).then(function successCallback(response){
			// Response after success of data
			main.matchDetails=response.data;
			main.rounds=main.matchDetails.rounds;
			main.matches=response.data.rounds;
			if(teamName!=null || teamName!= undefined){
				main.stats(teamName);		
			}
		},
			// In case of error displaying the alert to the user
			function errorCallback(response){
				alert('There is something wrong in loading the page!');
			}
		)
	}
	 // this.showMatchesTwo(); // Call to the asynchronous function

	//------------------------------- Function to show the statistics --------------------------//

	// Function to show the statistics for the year 15-16
	this.stats=function(teamName){
		
		var countMatches=0;
		var countScore=0;
		var matchesWon=0;
		var matchesLost=0;
		var matchesDrawn=0;	

		for(i in main.rounds){
			//console.log(main.rounds[i]);
			for(j in main.rounds[i].matches){
				//console.log(main.rounds[i].matches[j].team1.name);
				
				// To count the number of matches played by the team
				if(teamName == main.rounds[i].matches[j].team1.name){
					//Count the total number of matches played by the team
					countMatches++;
					// Count the total score scored by the team
					countScore+=main.rounds[i].matches[j].score1;
					
					// Count the total mactches won by the team specified
					if(main.rounds[i].matches[j].score1 > main.rounds[i].matches[j].score2){
						matchesWon++;
					}

					// If the team1 has less score than team2 
					else if(main.rounds[i].matches[j].score1 < main.rounds[i].matches[j].score2){
						matchesLost++;
					}

					// If the team1 and team2 has the same score
					else if(main.rounds[i].matches[j].score1 == main.rounds[i].matches[j].score2){
						matchesDrawn++;
					}
				}

				else if(teamName == main.rounds[i].matches[j].team2.name){
					//Count the total number of matches played by the team
					countMatches++;

					// Count the total score scored by the team
					countScore+=main.rounds[i].matches[j].score2;

					// Count the total mactches won by the team specified 
					if(main.rounds[i].matches[j].score2 > main.rounds[i].matches[j].score1){
						matchesWon++;
					}

					// If the team1 has less score than team2
					else if(main.rounds[i].matches[j].score2 < main.rounds[i].matches[j].score1){
						matchesLost++;
					}

					// If the team1 and team2 has the same score
					else if(main.rounds[i].matches[j].score2 == main.rounds[i].matches[j].score1){
						matchesDrawn++;
					}
				}

				if(countMatches > 0){
					//console.log(countMatches);
					// To set the data back in the scope or controller variables
					main.matchesPlayed=countMatches;
					main.goalsScore=countScore;
					main.matchesWon=matchesWon;
					main.matchesLost=matchesLost;
					main.matchesDrawn=matchesDrawn;
					main.displayStats=true;
					main.teamNotFound=false;
				}
				else{
					main.displayStats=false;
					main.teamNotFound=true;
				}
			}		
		}
	}
}]);// End of the matchController controller	
