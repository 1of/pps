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
                trackingTasks: '=trackingTasks'
            },
            controller: 
                ['$scope', '$rootScope', 'users.repository', 'utils', 
                    function ($scope, $rootScope, usersRepository, utils) {

                $scope.isTracking = $scope.trackingTasks.filter(task => task.id === $scope.task.id).length > 0 ? true : false;

                $scope.addTrackingTask = function () {

                    if ($scope.isTracking)  {
                        utils.notify({
                            message: 'Вы уже отслеживаете это обещание',
                            type: 'danger'
                        });
                    }
                        else {
                        usersRepository.addTrackingTask($scope.myUserId, {task_id: $scope.task.id})
                            .then(function (response) {
                                utils.notify({
                                    message: 'Обещание отслеживается',
                                    type: 'success'
                                });
                                $scope.$emit('trackingTaskAdded', $scope.task);
                            }, function (error) {
                                console.log(error)
                            });
                    }

                };
            }]
        }
    }
})();