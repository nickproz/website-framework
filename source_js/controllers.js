// Angular Controllers
app.controller('singleRouteController', ['$scope', '$http', function($scope, $http) {
    console.log('This is the single route controller!');
}]);

app.controller('multipleRoutesController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

    $scope.page = $routeParams.page;
    console.log('This is the multiple routes controller! Try modifying the number in the in the url.');
}]);
