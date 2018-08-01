app.controller('Addproof', addproofController);
function addproofController($scope, $uibModalInstance) {

	$scope.proofText = "";
	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');

	};

	
	$scope.ok = function() {
		var formData = new FormData();
		var file =  document.querySelector("#inputfile").files[0];
		formData.append('picture', file);
		formData.append('description', $scope.proofText);
		console.log ( 'picture', formData.getAll('picture') );

		$uibModalInstance.close(formData);
	};

	$scope.filename = "";
	$scope.uploadImage = function () {
        $scope.filename = document.querySelector("#inputfile").files[0].name || "";
    }

}
addproofController.$inject = [
	'$scope',
	'$uibModalInstance',
];
