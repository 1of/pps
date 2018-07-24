(function () {
    'use strict';

    app.directive('userInfo', userInfo);

    function userInfo() {
        return {
            restrict: 'EA',
            templateUrl: './app/directives/user-info/user-info.template.html',
            scope: {
                user: '=',
                isMe: '=',
                trackingTasks: '=',
                tasks: '='
            },
            controller:
                ['$scope', '$rootScope', '$routeParams', '$uibModal', 'users.repository', 'utils',
                    function ($scope, $rootScope, $routeParams, $uibModal, usersRepository, utils) {

                $scope.balanceRefill = function() {
                    var modalInstance = $uibModal.open({
                        templateUrl: 'app/modals/balance-refill/balance-refill.template.html',
                        controller: 'BalanceRefill',
                        size: 'm'
                    });

                    modalInstance.result.then(function (result) {
                        if (!result) return;

                        $scope.user.balance += +$rootScope.refillValue;

                        usersRepository.updateUser($scope.user.id, $scope.user).then(function(response) {
                            utils.notify({
                                message: 'Баланс пополнен',
                                type: 'success'
                            });
                        }, function (error) {
                            console.log(error);
                        });
                    })
                }

            }]
        }
    }
})();