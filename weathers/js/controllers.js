
//Controllers
myApp.controller('mainControler', ['$scope','weatherServices', '$location', function($scope,weatherServices,$location){


$scope.city=weatherServices.city_name;

//when the city name changes in the main page, it should update the city name in the service
$scope.$watch('city', function(){

	weatherServices.city_name=$scope.city;
})

$scope.submit=function(){

$location.path("/forecast");
};


}]);

myApp.controller('forecastControler', ['$scope','weatherServices','WeatherAPIService','$routeParams', function($scope,weatherServices,WeatherAPIService,$routeParams){


$scope.city=weatherServices.city_name;

$scope.days=$routeParams.num_days || '2';

	$scope.weatherResult= WeatherAPIService.GetWeather($scope.city, $scope.days);


$scope.convertToCelsius = function(kelvin){
	return Math.round(kelvin-273.15) + 'ºC';

};

$scope.convertToDate=function(d){
	//convert to current date in javascript

	return new Date(d * 1000);
};



console.log($scope.weatherResult);

}]);