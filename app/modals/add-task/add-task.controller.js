app.controller('AddTask', addTaskController);

function addTaskController($scope, $uibModalInstance, $rootScope, taskRepository) {
	$scope.cancel = function() {
		$uibModalInstance.close(false);
	};

	taskRepository.getCategories()
		.then(function (response) {
			$scope.categories = response.data;
        })

	$scope.ok = function() {

        var formData = new FormData();
        var file =  document.querySelector("#picture").files[0];
        formData.append('picture', file || null);
        formData.append('name', $scope.name);
        formData.append('description', $scope.description);
        formData.append('user_id', localStorage.getItem('userId'));
        formData.append('bet_date', new Date());
        formData.append('time_limit', $scope.endDate);
        formData.append('location', $scope.location);
        formData.append('category_id', +$scope.category);
        formData.append('value', $scope.value);

        $uibModalInstance.close(formData);

	}
}

addTaskController.$inject = [
	'$scope',
    '$uibModalInstance',
    '$rootScope',
    'tasks.repository',
];