(function () {
    'use strict';

        app.controller('Main', ['$scope', '$rootScope', 'tasks.repository', 'users.repository','$location', function($scope, $rootScope, tasksRepository, usersRepository, $location) {
            //Наш Id
            $scope.myUserId = localStorage.getItem('userId');

            //Active user is me by default
            $scope.userId = $scope.myUserId;

            //Adress of our server
            $rootScope.adress = 'http://node4.fe.a-level.com.ua/';

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
                    console.log($scope.cities);
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

            //Возвращает обьект с данными о пользователе
            $rootScope.getMyInfo = function(){ 
                    return $scope.me
                };

            // Получить предыдущий путь
            $scope.history = [];
            $rootScope.$on('$routeChangeSuccess', function(){
                $scope.history.push($location.$$path);
            })

            
            //Категории
            $scope.checkboxSearchModel = {
               habit : 0,
               work : 0,
               competition: 0,
               study : 0,
               purchase : 0,
               other : 0
             };
             //Сложность
            $scope.selectDifficulty = [
                {name : "Легко", value : 0},
                {name : "Средне", value : 1},
                {name : "Сложно", value : 2}
            ];
            $scope.selectedItemDifficulty = $scope.selectDifficulty[-1]; // изначально выбран 1й option, потом уже что выберем
            //Стоимость
            $scope.selectValue = [
                {name : "0-50", value : [0,50]},
                {name : "50-200", value : [50,200]},
                {name : "200+", value : [200,10000]}
            ];
            $scope.selectedItemValue = $scope.selectValue[-1]; // изначально выбран 1й option, потом уже что выберем
            $scope.selectedCity = $scope.cities;    //выбранный option в городах



            //Очистка полей поиска
            $scope.clear = function() {
                console.log($scope.checkboxSearchModel);
                for (var key in $scope.checkboxSearchModel) {   //очищаем обьект с категориями
            $scope.checkboxSearchModel[key] = 0;
            }
            $scope.selectedItemDifficulty = $scope.selectDifficulty[-1]; // очищаем option сложности
            $scope.selectedItemValue = $scope.selectValue[-1]; /// очищаем option стоимости
            $scope.selectedCity = $scope.cities[-1];    //очищаем option по городах
            };

            $scope.searchByFilter = function() {

               var category = [];
               for (var key in $scope.checkboxSearchModel)
                 {
                    $scope.checkboxSearchModel[key] > 0 ? category.push($scope.checkboxSearchModel[key]) : null;
                 }
               console.log(category);
 //"category=["+category+"];location=Киев;difficulty=3;value=[800,1500]"
               var searchObj = {
                    search: ""
               };
console.log("строка1", searchObj);
               console.log("Category: ", $scope.checkboxSearchModel, "Difficult: ", $scope.selectedItemDifficulty, "Value", $scope.selectedItemValue, "City", $scope.selectedCity);
             
if ($scope.selectedItemDifficulty !== "undefined"){
                console.log("$scope.selectedItemDifficulty2", $scope.selectedItemDifficulty.value);
                searchObj.search = searchObj.search + "difficulty=" + $scope.selectedItemDifficulty.value;
             }
console.log("строка2", searchObj.search);
            //Получаем новый список задач в зависимости от фильтров
            tasksRepository.getTasksFiltered(searchObj.search)
                .then(function(response){
                    $scope.tasks = response.data;

                }, function(error) {});  
            };


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




