(function () {
    'use strict';

    app.controller('Account',
        ['$scope', '$rootScope', 'tasks.repository', 'users.repository', '$location', '$routeParams', '$uibModal', 'utils', '$filter',
            function($scope, $rootScope, taskRepository, usersRepository, $location, $routeParams, $uibModal, utils, $filter) {

        $scope.userId = $routeParams.userId;

        $scope.isMe = $scope.userId == $scope.myUserId;

        //Получаем список задач пользователя
        usersRepository.getUsersTasks($scope.userId)
        .then(function(response) {
            $scope.userTasks = response.data.reverse();
        }, function(error) {console.log(error)});

        //Получаем список отслеживаемых пользователя
        function getUsersTracking() {
            usersRepository.getUsersTrackingTasks($scope.userId)
                .then(function(response) {
                    $scope.userTrackingTasks = response.data.reverse();
                }, function(error) {console.log(error)});
            };

        getUsersTracking();

        //Получаем список ставок пользователя
        function getMytasks() {
            usersRepository.getUsersBets($scope.userId)
                .then(function(response) {
                    $scope.userBets = response.data.reverse();
            }, function(error) {console.log(error)});
        }
        getMytasks();

                //Получаем пользователя
        function getUser() {
            usersRepository.getUserById($scope.userId)
            .then(function(response) {
                $scope.user = response.data;
                if($scope.user.gender == 0 || !$scope.user.gender) {$scope.gender = "Пол не указан"};
                if($scope.user.gender == 1) {$scope.gender = "Мужской"};
                if($scope.user.gender == 2) {$scope.gender = "Женский"};
            }, function(error) {console.log(error)});
        }
        getUser();

        //Select for user.gender
        $scope.statuses = [
              {value: 0, text: 'Выбрать пол'},
              {value: 1, text: 'Мужской'},
              {value: 2, text: 'Женский'}
        ];

        $scope.showStatus = function() {
              var selected = $filter('filter')($scope.statuses, {value: $scope.user.gender});
              return ($scope.user.gender && selected.length) ? selected[0].text : 'Выберите пол';
        };

        //Обновляем список отслеживаемых
        $scope.$on('trackingTaskTogle', function (event, data) {
            getUsersTracking();
        });


        //Сохранение userInfo после редактирования
        

        $scope.saveUserInfo = function (data, userId) {

            var user = data;

            function sendData(userId, user) {
                usersRepository.updateUser(userId, user)
                    .then(function (response) {
                        $scope.user = response.data;
                        utils.notify({
                            message: 'Ваши данные обновлены',
                            type: 'success'
                        });
                    }, function (error) {
                        console.log(error);
                    });
            }

            function getBase64(file, user) {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                   user.photo = reader.result;
                    sendData(userId, user);

                };
                reader.onerror = function (error) {
                    console.log('Error: ', error);
                };
            };

            let file = document.querySelector('input[type="file"]').files[0];

            if (file !== undefined) {
                getBase64(file, user);
            } else {
                sendData(userId, user);
            }
        };

       // Добавлениу обещания
       $scope.showAddTask = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'app/modals/add-task/add-task.template.html',
            controller: 'AddTask',
            size: 'l',
            resolve: {me: function() { return $scope.user} }
        });
        modalInstance.result.then(function (result) {
            if (!result) return;
            taskRepository.addTask(result)
                .then(function(response) {
                    getUser();
                    getMytasks();
                    utils.notify({
                        message: 'Обещание создано',
                        type: 'success'
                    });
                    $rootScope.$emit('taskAdded');
            }, function (error) {
                console.log(error);
            });
        })
    }

    }]);
})()
