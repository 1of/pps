(function () {
    'use strict';
    
        app.controller('Main', ['$scope', 'tasks.repository', 'users.repository', function($scope, tasksRepository, usersRepository) {

            //Адрес для загрузки файлов
            $scope.fileAdress = 'http://node4.fe.a-level.com.ua/';

            //Наш Id
            $scope.myUserId = localStorage.getItem('userId');

            //Active user is me by default
            $scope.userId = $scope.myUserId;

            //Получаем список всех задач и список всех городов из него
            function getAllTasks() {
                tasksRepository.getTasks()
                    .then(function(response){
                        $scope.tasks = response.data;
                        var cities = [];
                        $scope.tasks.forEach(task => {
                            if ( !cities.includes(task.location) ) {
                                cities.push(task.location);
                            }
                        });
                        $scope.cities = cities;
                    }, function(error) {});
            }

            getAllTasks();
                
            //Получаем список всех пользователей
            usersRepository.getAllUsers()
                .then(function(response){
                    $scope.usersList = response.data;
                }, function(error) {console.log(error)});
                
            //Получаем нашего пользователя
            usersRepository.getUserById($scope.myUserId)
                .then(function(response) {
                    $scope.me = response.data;
                }, function(error) {console.log(error)});                      
            
            //Получаем список наших задач
            usersRepository.getUsersTasks($scope.myUserId)
            .then(function(response) {
                $scope.myTasks = response.data;
            }, function(error) {console.log(error)});	

            //Получаем список наших отслеживаемых задач
            function getMyTrackingList() {
                usersRepository.getUsersTrackingTasks($scope.myUserId)
                .then(function(response) {
                    $scope.myTrackingTasks = response.data;
                }, function(error) {console.log(error)});
            }

            getMyTrackingList();
            //Получаем список наших ставок
            usersRepository.getUsersBets($scope.myUserId)
                .then(function(response) {
                    $scope.myBets = response.data;
                }, function(error) {console.log(error)});

            //Обновляем список отслеживаемых
            $scope.$on('trackingTaskTogle', function (event, data) {
                getMyTrackingList();
            });

            //Обновляем список обещаний после добавления нового
            $scope.$on('taskAdded', function (event, data) {
                getAllTasks();
            })

        }]);
    })();