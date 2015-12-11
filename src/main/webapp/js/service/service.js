'use strict';

App.factory('BoxKeyService', ['$http', '$q', function($http, $q){

	return {
		
			fetchAllBoxKeys: function() {
					return $http.get('http://localhost:8080/MonroeWeb/boxkey/')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching keys');
										return $q.reject(errResponse);
									}
							);
			},
		    
		    createBoxKey: function(key){
					return $http.post('http://localhost:8080/MonroeWeb/boxkey/', key)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while creating key');
										return $q.reject(errResponse);
									}
							);
		    },
		    
		    updateBoxKey: function(key, id){
					return $http.put('http://localhost:8080/MonroeWeb/boxkey/'+id, key)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while updating key');
										return $q.reject(errResponse);
									}
							);
			},
		    
			deleteBoxKey: function(id){
					return $http.delete('http://localhost:8080/MonroeWeb/boxkey/'+id)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while deleting key');
										return $q.reject(errResponse);
									}
							);
			}
		
	};

}]);
