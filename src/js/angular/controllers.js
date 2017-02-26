/*
--------------------------------------------------
|               Angular Controllers              |
-------------------------------------------------
*/
app.controller('partial1Controller', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

}]);

app.controller('partial2Controller', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

}]);

app.controller('partial3Controller', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$scope.rank = $routeParams.rank;
}]);
