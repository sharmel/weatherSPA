//custom directives

myApp.directive('weatherReport', function(){

	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'weathers/forecastDirective.html',
		// scope: {
		// 	weatherPaiva: "="
		// }
	}
});