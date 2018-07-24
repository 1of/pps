(function () {
    'use strict';
    
    app.controller('Account',
        ['$scope', 'tasks.repository', 'users.repository', '$location', '$routeParams', '$uibModal', 'utils',
            function($scope, taskRepository, usersRepository, $location, $routeParams, $uibModal, utils) {
      
        $scope.userId = $routeParams.userId;

        $scope.isMe = $scope.userId == $scope.myUserId;

        //Получаем список задач пользователя
        usersRepository.getUsersTasks($scope.userId)
        .then(function(response) {
            $scope.userTasks = response.data;
        }, function(error) {console.log(error)});

        //Получаем список отслеживаемых пользователя
        usersRepository.getUsersTrackingTasks($scope.userId)
        .then(function(response) {
            $scope.userTrackingTasks = response.data;
        }, function(error) {console.log(error)});

        //Получаем пользователя
        usersRepository.getUserById($scope.userId)
        .then(function(response) {
            $scope.user = response.data;
        }, function(error) {console.log(error)});

        //Сохранение userInfo после редактирования
        $scope.saveUserInfo = function (data, userId) {
            usersRepository.updateUser(userId, data)
                .then(function (response) {
                    utils.notify({
                        message: 'Ваши данные обновлены',
                        type: 'success'
                    });
                }, function (error) {
                    console.log(error);
                });
        };
        
    }]);
})()    