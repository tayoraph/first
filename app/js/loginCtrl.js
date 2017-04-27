'use strict';

app.controller('loginCtrl', function($scope, loginService){
	$scope.msgtext = '';
	$scope.login= function(user){
		loginService.login(user, $scope);

			// if(msg.data=='success') {
			// 	'#!/home';
			// }
		  // call login service
		// console.log("enter function")
	}
});