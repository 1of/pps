(function () {
'use strict';

	app.controller('Header_logged', ['$scope', '$location', '$window', function($scope, $location, $window) {
		$scope.exit = function () {
			localStorage.removeItem('authToken');
			$location.path('/') ? $window.location.reload() : $location.path('/');
		};
	}
	]);

})();
