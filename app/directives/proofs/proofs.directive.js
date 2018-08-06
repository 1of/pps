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
				$scope.myId = localStorage.getItem('userId');
				tasksRepository.getTasksById(id).then(function(response) {
					$scope.task = response.data;
					$scope.validTask = $scope.task.user_id === +$scope.myId ? true : false;
				}, function(error) { });

				tasksRepository.getProofsById(id).then(function(response) {
					$scope.proofs = response.data; 
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
							utils.notify({message: "Подтвержение успешно добавлено!", type: 'success'});
						}, function(error) {
						});
					}, function() {});



				}

			}]

		}
	}

})();
