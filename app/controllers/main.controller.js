(function () {
    'use strict';
    
        app.controller('Main', ['$scope', 'tasks.repository', 'users.repository', function($scope, tasksRepository, usersRepository) {
            //Наш Id
            $scope.myUserId = localStorage.getItem('userId');

            //Получаем список всех задач и список всех городов из него
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
                    $scope.userTasks = response.data;
                }, function(error) {console.log(error)});	

        }]);
    })();