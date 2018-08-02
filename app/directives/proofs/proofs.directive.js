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
					console.log("таски", $scope.task);
				}, function(error) { });

				tasksRepository.getProofsById(id).then(function(response) {
					$scope.proofs = response.data; 
					console.log("пруфы", $scope.proofs) 	 ;
				}, function(error) { });

				$scope.addProof = function() {
					var modalInstance = $uibModal.open({
						templateUrl: 'app/modals/addProof/addProof.template.html',
						controller: 'Addproof',
						size: 'lg'
					});


					modalInstance.result.then(function(result) {
						if (!result) return;
						tasksRepository.addProofById(id, result).then(function(response) {
							tasksRepository.getProofsById(id).then(function(response_new) {
								$scope.proofs = response_new.data; 
							}, function(error) { });
							utils.notify({message: "Подтвержение успешно добавлено!", type: 'danger'});
						}, function(error) {
							console.log("Error", error);
						});					
					}, function() {});



				}

			}]

		}
	}

})();