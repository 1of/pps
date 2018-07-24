app.controller('Addproof', addproofController);
function addproofController($scope, $uibModalInstance) {

	$scope.proofText = "";
	$scope.photoUrl = "";
	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};
	$scope.ok = function() {
		
		data = { 
			description: $scope.proofText,
		    picture: $scope.photoUrl
		};

		$uibModalInstance.close(data);
	}
}
addproofController.$inject = [
	'$scope',
	'$uibModalInstance',
];