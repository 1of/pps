(function () {
'use strict';
app.controller('Main', function($scope) {
	console.log("OK_Main");
	$scope.x = 2;
	console.log($scope);

	$scope.token = localStorage.authToken ? true : false;
	console.log($scope.token)
});

})();
