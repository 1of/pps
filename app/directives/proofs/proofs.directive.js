(function(){
'use strict';

app.directive('proofs', proofsController);

function proofsController(){
	return{
		restrict: 'E',
		templateUrl: './app/directives/proofs/proofs.template.html',
		scope: {}, 
		controller: ['$scope', "$rootScope", 'tasks.repository', '$routeParams', '$uibModal', 'utils', function($scope, $rootScope, tasksRepository, $routeParams, $uibModal, utils) {
		var id = $routeParams.taskId;
		$scope.adress = 'http://node4.fe.a-level.com.ua/';

tasksRepository.getTasksById(id).then(function(response) {
		$scope.task = response.data; 
		$scope.validTask = $scope.task.user_id == id ? true : false;
		}, function(error) { });

		tasksRepository.getProofsById(id).then(function(response) {
		$scope.proofs = response.data; 
		console.log("попап", $scope.proofs)  ;
		}, function(error) { });

		$scope.addProof = function() {
			var modalInstance = $uibModal.open({
				templateUrl: 'app/modals/addProof/addProof.template.html',
				controller: 'Addproof',
				size: 'm'
			});

modalInstance.result.then(function(result) {
			if (!result) return;

// tasksRepository.addProofById(id, result).then(function(response) {
		
// utils.notify({message: response.data.error, type: 'danger'});
// 	}, function(error) {
// 			console.log("OTVET", error);
// 	utils.notify({message: error.data.error, type: 'danger'});
// 	});

				
			
		}, function() {});
		}




			
		}]

	}
}

})();