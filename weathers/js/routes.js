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