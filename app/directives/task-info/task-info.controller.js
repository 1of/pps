(function () {
    'use strict';

    app.directive('taskInfo', taskInfo);

    function taskInfo() {
        return {
            restrict: 'EA',
            templateUrl: './app/directives/task-info/task-info.template.html',
            scope: {
                task: '=task',
                myUserId: '=myUserId',
                trackingTasks: '=trackingTasks',
                fileAdress: '=fileAdress'
            },
            controller: 
                ['$scope', '$rootScope', 'users.repository', 'utils', 'tasks.repository',
                    function ($scope, $rootScope, usersRepository, utils, tasksRepository) {

                //Определяем сосотояние
                if($scope.task.state === 0) {
                    $scope.taskState = "В процессе";
                    $scope.bgColor = "#f7f7f7";
                };
                if($scope.task.state === 1) {
                    $scope.taskState = "Выполнено";
                    $scope.bgColor = "#bef7df";
                };
                if($scope.task.state === 2) {
                    $scope.taskState = "Не выполнено";
                    $scope.bgColor = "#ffeaec";
                };

                //Считаем доступную ставку
                tasksRepository.getBetsById($scope.task.id)
                    .then(function (response) {
                        let bets = response.data;
                        var betsSum = 0;
                        if (bets.length > 0) {
                            bets.forEach((bet) => betsSum += bet.value);
                            $scope.maxBet = $scope.task.value - betsSum;
                        }
                    }, function (error) {
                        console.log(error);
                    });

                if($scope.trackingTasks && $scope.trackingTasks.length) {
                    $scope.isTracking = $scope.trackingTasks.filter(task => task.id === $scope.task.id).length === 1 ? true : false;
                }

                $scope.togleTrackingTask = function () {
                    usersRepository.addTrackingTask($scope.myUserId, {task_id: $scope.task.id})
                        .then(function (response) {
                            $scope.$emit('trackingTaskTogle', $scope.task);
                            $scope.isTracking = !$scope.isTracking;
                                if (!$scope.isTracking) {
                                    utils.notify({
                                        message: 'Вы прекратили отслеживать обещание',
                                        type: 'danger'
                                    });
                                } else {
                                    utils.notify({
                                        message: 'Обещание отслеживается',
                                        type: 'success'
                                    });
                                }
                                $rootScope.$emit('Refresh tracking');
                    }, function (error) {
                        console.log(error)
                    });
                };
            }]
        }
    }
})();
