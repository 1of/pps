(function () {
'use strict';

	app.controller('Home_logged', ['$scope', 'tasks.repository',function($scope, taskRepository) {

		console.log("OK_Home_logged");
		
		$scope.tasks = taskRepository.getTasks()
		.then(function (response){
            $scope.tasks = response.data;
        }, function (error)
            {
                alert(error);
            }
        );
        
		$scope.search = function() {
			console.log($scope.searchString);
			console.log($scope)
		}

	}

	]);
})();
