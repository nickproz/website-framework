var app = angular.module('nicks-website',['ngRoute']);
// Angular Routing
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/single-route', {
			templateUrl: 'partials/single-route.html',
			controller: 'singleRouteController'
		})
		.when('/multiple-routes/:page', {
			templateUrl: 'partials/multiple-routes.html',
			controller: 'multipleRoutesController'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);
