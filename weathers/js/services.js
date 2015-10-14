//service 
myApp.service('weatherServices', function(){

	this.city_name="Oulu";


});
myApp.service('WeatherAPIService', ['$resource', function($resource){

this.GetWeather=function(city,days){

	var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", 
	{callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});


	return weatherAPI.get({q: city, cnt: days, appid: 'ac80e6a0df56e4757bb682b2feb09539'});

}

}]);