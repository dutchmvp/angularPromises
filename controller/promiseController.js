angular.module('appController', [])
	.controller('promiseController', function ($scope, $http) {
		console.log('controller on');
		$http.get('model/batman.json').success(function(data) {
	    	$scope.characters = data;
	    })
	    .error(function(err) {
			alert('error');    
		});
	    
	});