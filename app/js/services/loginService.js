'use strict';


app.factory('loginService', function($http){
	return{
		login:function(user,$scope,$location){
			var $promise = $http.post('data/user.php', user); // send data to user.php
			$promise.then(function(msg){
				if(msg.data=='success') $scope.msgtext ='correct details';
				else $scope.msgtext ='wrong details';
			})
			// console.log('user');
		}
	}
})