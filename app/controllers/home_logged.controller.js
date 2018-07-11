(function () {
'use strict';

	app.controller('Home_logged', ['$scope', function($scope) {

		console.log("OK_Home_logged");
		console.log($scope)

		$scope.search = function() {
			console.log($scope.searchString);
			console.log($scope)
		}

	}

	]);
})();
