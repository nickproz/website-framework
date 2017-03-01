/*
-----------------------------------------------
|               Backend Services              |
----------------------------------------------
*/
var frameworkServices = angular.module('frameworkServices', []);

/*
 * Service for shared data among controllers
 */
frameworkServices.factory('CommonData', function(){
    var data = "";
    return{
        getData : function(){
            return data;
        },
        setData : function(newData){
            data = newData;
        }
    }
});

/*
 * Service for our user API requests
 */
frameworkServices.factory('Users', function($http, $window) {

	var baseUrl = $window.sessionStorage.baseurl + '/api/users/';

	// Route to correct HTTP API call
    return {
		createUser : function(user) {
			return $http.post(baseUrl, user);
        },
		getUsers : function(query) {
			if(query === undefined || query === "undefined")
				return $http.get(baseUrl);
			else
				return $http.get(baseUrl + query);
		},
		getUser : function(id) {
			return $http.get(baseUrl + id);
		},
		updateUser : function(user, id) {
			return $http.put(baseUrl + id, user);
		},
		deleteUser : function(id) {
			return $http.delete(baseUrl + id);
		}
    }
});
