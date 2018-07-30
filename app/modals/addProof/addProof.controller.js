app.controller('Addproof', addproofController);
function addproofController($scope, $uibModalInstance) {

	$scope.proofText = "";
	$scope.photoUrl = "";
	$scope.cancel = function() {
				var formData = new FormData();
		var file =  document.querySelector("#inputfile").files[0];

		console.log('file', file);
		formData.append('picture', file);
		formData.append('description', $scope.proofText);
		console.log ( 'picture', formData.getAll('picture') );
		console.log ( 'description', formData.getAll('description') );
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

// var file = document.getElementById('#inputfile').files[0];
// formData.append('picture', file);
// var options = {
//     transformRequest: angular.identity,
//     headers: {'Content-Type': undefined}
// };
// $http.post('http://node4.fe.a-level.com.ua/api/v1/tasks/5/proofs', formData, options).then(response => {
//     console.log('response', response);
// });

		//data =  $scope.proofText;
		   // picture: $scope.photoUrl
	

		$uibModalInstance.close(formData);
	}
}
addproofController.$inject = [
	'$scope',
	'$uibModalInstance',
];
