(function () {
'use strict';
app.controller('Betslist', ['$scope', '$uibModal', '$uibModalInstance', '$uibModalStack', 'betsArr', 'users.repository', 'taskArr', 'sumAllBets', function($scope, $uibModal, $uibModalInstance, $uibModalStack, betsArr, usersRepository, taskArr, sumAllBets) {

$scope.allbets = betsArr;
$scope.betTask = taskArr;
$scope.sumBets = sumAllBets;
console.log($scope.allbets , "$scope.betTask", $scope.betTask);
betsArr.forEach(function(item, i) {
$scope.usersBetsList = [];
usersRepository.getUserById(item.user_id).then(function(response) {
        //$scope.usersBetsList.push (response.data.firstname + " " + response.data.lastname); 
        $scope.allbets[i].firstname = response.data.firstname;
        $scope.allbets[i].lastname = response.data.lastname;
        $scope.allbets[i].index = i+1;

        console.log($scope.allbets);
    }, function(error) {});

});

    $scope.cancel = function() {
    $uibModalInstance.close();
    };

    $scope.sortField = '$index + 1';
    $scope.sortBy = function(field) {
        console.log(field);
            $scope.sortField = ($scope.sortField === field) ? '-' + field : field;
        }

   
}]);
})();