(function () {
    'use strict';

        app.controller('Main', ['$scope', '$rootScope', 'tasks.repository', 'users.repository','$location', function($scope, $rootScope, tasksRepository, usersRepository, $location) {
            //Наш Id
            $scope.myUserId = localStorage.getItem('userId');

            //Active user is me by default
            $scope.userId = $scope.myUserId;

            //Adress of our server
            $rootScope.adress = 'http://node4.fe.a-level.com.ua/';

            //Адрес для загрузки файлов
            $scope.fileAdress = 'http://node4.fe.a-level.com.ua/';

            //Получаем список всех задач и список всех городов из него

            $scope.selectedCity = null;
            function getAllTasks() {
            tasksRepository.getTasks()
                .then(function(response){
                    $scope.tasks = response.data;
                    var cities = [];
                    $scope.tasks.forEach(task => {
                        if ( !cities.includes(task.location) && (task.location !== "") ) {
                            cities.push(task.location);
                        }
                    });
                    $rootScope.cities_root = cities;
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

            //Возвращает обьект с данными о пользователе
            $rootScope.getMyInfo = function(){
                    return $scope.me
                };

            // Получить предыдущий путь
            $scope.history = [];
            $rootScope.$on('$routeChangeSuccess', function(){
                $scope.history.push($location.$$path);
            })

            /*--------------------ПОИСК-------------------*/
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
                {name : "Легко", value : 1},
                {name : "Средне", value : 2},
                {name : "Сложно", value : 3}
            ];
            $scope.selectedItemDifficulty = $scope.selectDifficulty[-1]; // изначально выбран 1й option, потом уже что выберем
            //Стоимость
            $scope.selectValue = [
                {name : "0-50", value : [0,50]},
                {name : "50-200", value : [50,200]},
                {name : "200+", value : [200,10000]}
            ];
            $scope.selectedItemValue = $scope.selectValue[-1]; // изначально выбран 1й option, потом уже что выберем
            $scope.selectedCity = $rootScope.cities;    //выбранный option в городах

            $scope.searchArr = [  //массив-заглушка, в него будет записываться все option и category выбранные пользователем
                                "category=[]", //0 - категории
                                "difficulty=1", //1 - сложность
                                "location=Киев", //2 - локация, город
                                "value=[]" //3 - стоимость ставки
                           ];

            //Очистка полей поиска
            $scope.clear = function() {

                for (var key in $scope.checkboxSearchModel) {   //очищаем обьект с категориями
                    $scope.checkboxSearchModel[key] = 0;
                }
            $scope.selectedItemDifficulty = $scope.selectDifficulty[-1]; // очищаем option сложности
            $scope.selectedItemValue = $scope.selectValue[-1]; /// очищаем option стоимости
            document.getElementById('cityreset').selectedIndex = 0; //очищаем option по городах
            $scope.selectedCity = undefined;
                };

            $scope.searchByFilter = function() {

               let category = [];
               for (let key in $scope.checkboxSearchModel)     // перебираем обьект checkboxSearchModel и пушим в category[] только те элементы, которые выбраны пользователем
                 {
                    $scope.checkboxSearchModel[key] > 0 ? category.push($scope.checkboxSearchModel[key]) : null;
                 };
              //проверка на undefined (если ничего не выбрано)
            var testCities = /,/i.test($scope.selectedCity);
             (category.length > 0) ?   $scope.searchArr[0] = "category=[" + category + "];" : $scope.searchArr[0] = "";  //проверка выбрана ли категория
             ($scope.selectedItemDifficulty !== undefined) ?   $scope.searchArr[1] = "difficulty=" + $scope.selectedItemDifficulty.value + ";" : $scope.searchArr[1] = ""; //проверка выбрана ли сложность
             ($scope.selectedCity !== undefined  && testCities !== true) ?  $scope.searchArr[2] = "location=" + $scope.selectedCity + ";" : $scope.searchArr[2] = ""; //проверка выбран ли город
             ($scope.selectedItemValue !== undefined) ?   $scope.searchArr[3] = "value=[" + $scope.selectedItemValue.value + "];" : $scope.searchArr[3] = ""; //проверка выбран ли интервал стоимости
            let strFromArray = $scope.searchArr.join(''); //преобразуем массив в строку
            let searchStr = "";
            strFromArray[strFromArray.length-1] !== undefined ? searchStr = strFromArray.slice(0, -1) : searchStr = "";  //убираем символ ";"  в конце строки запроса, иначе выдает ошибку

            //Получаем новый список задач в зависимости от фильтров
            tasksRepository.getTasksFiltered(searchStr)
                .then(function(response){
                    $scope.tasks = response.data;

                }, function(error) {});
            };


        }]);

    })();
