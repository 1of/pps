(function () {
'use strict';

	app.controller('Home_logged', ['$scope', 'tasks.repository', function($scope, tasksRepository) {
		

        
		$scope.search = function() {
			console.log($scope.searchString, $scope.citySelect);
		}

	}]);
})();
