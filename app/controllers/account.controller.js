(function () {
    'use strict';
    
    app.controller('Account', ['$scope', 'tasks.repository', 'users.repository', '$location', '$routeParams', function($scope, taskRepository, usersRepository, $location, $routeParams) {
      
        $scope.userId = $routeParams.userId;

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
        
    }]);
})()    