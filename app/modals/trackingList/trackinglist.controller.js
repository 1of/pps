(function () {
'use strict';
app.controller('Trackinglist', ['$scope', '$uibModal', '$uibModalInstance', '$uibModalStack', 'users.repository', 'trackingUsersArr', function($scope, $uibModal, $uibModalInstance, $uibModalStack, usersRepository, trackingUsersArr) {
$scope.adress = 'http://node4.fe.a-level.com.ua/';
$scope.allTrackingUsers = trackingUsersArr;

trackingUsersArr.forEach(function(item, i) {
usersRepository.getUserById(item.user_id).then(function(response) {
        $scope.allTrackingUsers[i].firstname = response.data.firstname;
        $scope.allTrackingUsers[i].lastname = response.data.lastname;
        $scope.allTrackingUsers[i].gender = response.data.gender;
        $scope.allTrackingUsers[i].photo = response.data.photo;
        $scope.allTrackingUsers[i].index = i+1;

    }, function(error) {});

});

    $scope.cancel = function() {
    $uibModalInstance.close();
    };

    $scope.sortField = '$index + 1';
    $scope.sortBy = function(field) {
            $scope.sortField = ($scope.sortField === field) ? '-' + field : field;
        }

   
}]);
})();