/*
----------------------------------------------
|               Angular Routing              |
---------------------------------------------
*/
var app = angular.module('framework',['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/partial1', {
			templateUrl: 'partials/partial1.html',
			controller: 'partial1Controller'
		})
		.when('/partial2', {
			templateUrl: 'partials/partial2.html',
			controller: 'partial2Controller'
		})
		.when('/partial3/:rank', {
			templateUrl: 'partials/partial3.html',
			controller: 'partial3Controller'
		})
		.otherwise({
			redirectTo: '/partial1'
		});
}]);
