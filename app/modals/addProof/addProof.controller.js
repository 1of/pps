app.controller('Addproof', addproofController);
function addproofController($scope, $uibModalInstance) {

	$scope.proofText = "";
	$scope.photoUrl = "";
	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

	
	$scope.ok = function() {
		var formData = new FormData();
		var file =  document.querySelector("#inputfile").files[0];

		console.log('file', file);
		formData.append('picture', file);
		formData.append('description', $scope.proofText);
		console.log ( 'picture', formData.getAll('picture') );
		console.log ( 'description', formData.getAll('description') );



		//data =  $scope.proofText;
		   // picture: $scope.photoUrl
	

		$uibModalInstance.close(formData);
	}
}
addproofController.$inject = [
	'$scope',
	'$uibModalInstance',
];
