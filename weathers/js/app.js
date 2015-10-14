var myApp=angular.module('myApp', ['ngRoute', 'ngResource']);

//service 
myApp.service('weatherServices', function(){

	this.city_name="Oulu";


})

//Controllers
myApp.controller('mainControler', ['$scope','weatherServices', function($scope,weatherServices){


$scope.city=weatherServices.city_name;

//when the city name changes in the main page, it should update the city name in the service
$scope.$watch('city', function(){

	weatherServices.city_name=$scope.city;
})


}]);

myApp.controller('forecastControler', ['$scope','weatherServices', '$resource','$routeParams', function($scope,weatherServices,$resource,$routeParams){


$scope.city=weatherServices.city_name;

$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", 
	{callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

$scope.days=$routeParams.num_days || '2';

	$scope.weatherResult=$scope.weatherAPI.get({q: $scope.city, cnt: $scope.days, appid: 'ac80e6a0df56e4757bb682b2feb09539'});




$scope.convertToCelsius = function(kelvin){
	return Math.round(kelvin-273.15) + 'ºC';

};

$scope.convertToDate=function(d){
	//convert to current date in javascript

	return new Date(d * 1000);
};



console.log($scope.weatherResult);

}]);

//routes
myApp.config(function ($routeProvider) {

$routeProvider

.when('/', {

	templateUrl: 'weathers/main.html',
	controller: 'mainControler'
})
.when('/forecast', {

	templateUrl: 'weathers/forecast.html',
	controller: 'forecastControler'
})
.when('/forecast/:num_days', {

	templateUrl: 'weathers/forecast.html',
	controller: 'forecastControler'
})


});

