(function () {
'use strict';

	app.controller('Header_logged', ['$scope', '$location', '$window', 'users.repository', function($scope, $location, $window, usersRepository) {
		
		//Затираем localStorage при выходе из сервиса
		$scope.exit = function () {
			localStorage.removeItem('authToken');
			localStorage.removeItem('userId');
			$location.path() === '/' ? $window.location.reload() : $location.path('/');
		};		
		
	}]);

})();
