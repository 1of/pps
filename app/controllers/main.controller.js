(function () {
    'use strict';

        app.controller('Main', ['$scope', 'tasks.repository', 'users.repository', function($scope, tasksRepository, usersRepository) {
            //Наш Id
            $scope.myUserId = localStorage.getItem('userId');

            //Active user is me by default
            $scope.userId = $scope.myUserId;

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
                $scope.myTasks = response.data;
            }, function(error) {console.log(error)});	

            //Получаем список наших отслеживаемых задач
            usersRepository.getUsersTrackingTasks($scope.myUserId)
            .then(function(response) {
                $scope.myTrackingTasks = response.data;
            }, function(error) {console.log(error)});

        }]);

/*                          нужно прикрутить её ко всем headeram т.к., #menu нет, когда залогиненый, короч ошибки выскакивают при скролле
         //scroll
 app.directive("scroll", function ($window) {
    return function($scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= $window.visualViewport.height - angular.element(document.querySelector("#menu"))[0].clientHeight) {
                 $scope.boolChangeClass = true;
             } else {
                 $scope.boolChangeClass = false;
             }
            $scope.$apply();
        });
    };
});

*/


    })();




