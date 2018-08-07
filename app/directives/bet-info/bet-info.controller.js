(function () {
    'use strict';

    app.directive('betInfo', betInfo);

    function betInfo() {
        return {
            restrict: 'EA',
            templateUrl: './app/directives/bet-info/bet-info.template.html',
            scope: {
                bet: '=',
                fileAdress: '='
            },
            controller:
                ['$scope', '$rootScope', '$routeParams', '$uibModal', 'users.repository', 'tasks.repository', 'utils',
                    function ($scope, $rootScope, $routeParams, $uibModal, usersRepository, tasksRepository, utils) {

                tasksRepository.getTasksById($scope.bet.task_id)
                    .then(function (response) {
                        $scope.task = response.data;
                        var getState = function () {
                            if($scope.task.state === 0) {
                                $scope.betState = "В процессе";
                                $scope.bgColor = "#f7f7f7";
                            };
                            if($scope.task.state === 1) {
                                $scope.betState = "Проигрыш";
                                $scope.bgColor = "#ffeaec";
                            };
                            if($scope.task.state === 2) {
                                $scope.betState = "Выигрыш";
                                $scope.bgColor = "#bef7df";
                            };
                        };
                        getState();
                        usersRepository.getUserById($scope.task.user_id)
                            .then(function (response) {
                                $scope.author = response.data;
                            }, function (error) {
                                console.log(error);
                            });
                    }, function (error) {
                        console.log(error);
                    });



            }]
        }
    }
})();