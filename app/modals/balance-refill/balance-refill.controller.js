app.controller('BalanceRefill', balanceRefillController);

function balanceRefillController($scope, $uibModalInstance, $rootScope) {
	$scope.cancel = function() {
		$uibModalInstance.close(false);
	};

	$scope.ok = function() {
        $rootScope.refillValue = $scope.refillValue;
		$uibModalInstance.close(true);

	}
}

balanceRefillController.$inject = [
	'$scope',
	'$uibModalInstance',
	'$rootScope'
];