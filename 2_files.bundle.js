/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//currentMenuItem
app.run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeSuccess', function(event, current, previous, reject) {
		$rootScope.currentMenuItem = $location.path() || '/';
	});
});

//проверка Авторизован пользователь, или нет, если нет, то перенаправляем на главную /
app.run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeStart', function (event, current, previous, reject) {

		if (!localStorage.getItem('authToken') && $location.path() !== '/login'){
			$location.path('/');
		};
	})

});

// check authorization
app.config(['$httpProvider', function($httpProvider) {
	$httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
		return {
			request: function(config) {
				// console.log(config)
				config.headers = config.headers || {};
				if (localStorage.getItem('authToken')) {
					config.headers.Authorization = 'Bearer ' + localStorage.getItem('authToken');
				}
				return config;
			},
			responseError: function(response) {
				// console.log('aa')
				// if (response.status === 401) {
				// 	$location.path('/login');
				// }
				return $q.reject(response);
			}
		};
	}]);
}]);

//spinner loader
app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoadingInterceptor');
}]);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
        templateUrl: localStorage.authToken ? 'app/views/main_logged/home_logged.html' : 'app/views/main_page/main.template.html',
        controller: localStorage.authToken ? 'Home_logged' : 'Home'
    }).when('/login', {
        templateUrl: 'app/views/login_page/login.template.html',
        controller: 'Login'
    }).when('/account/:userId', {
        templateUrl: 'app/views/account/account.html',
        controller: 'Account'
    }).when('/account/:userId/tasks', {
        templateUrl: 'app/views/account/account.html',
        controller: 'Account'
    }).when('/account/:userId/tracking_tasks', {
        templateUrl: 'app/views/account/account.html',
        controller: 'Account'
    }).when('/account/:userId/bets', {
        templateUrl: 'app/views/account/account.html',
        controller: 'Account'
    }).when('/account/:userId/account_info', {
        templateUrl: 'app/views/account/account.html',
        controller: 'Account'
    }).when('/tasks/:taskId', {
        templateUrl: 'app/views/task_id/task_id.html',
        controller: 'TaskId'
    })
    .otherwise('/');
});


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(33);
__webpack_require__(34);
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(38);
__webpack_require__(39);
__webpack_require__(40);
__webpack_require__(41);
__webpack_require__(42);
__webpack_require__(43);
__webpack_require__(44);
__webpack_require__(45);
__webpack_require__(46);
__webpack_require__(47);
__webpack_require__(48);
__webpack_require__(49);
__webpack_require__(50);
__webpack_require__(51);
__webpack_require__(52);
__webpack_require__(53);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(56);
__webpack_require__(57);
__webpack_require__(58);
__webpack_require__(59);
module.exports = __webpack_require__(60);


/***/ }),
/* 33 */
/***/ (function(module, exports) {

app.constant('webApi', {
	DOMAIN: 'http://node4.fe.a-level.com.ua'
});

/***/ }),
/* 34 */
/***/ (function(module, exports) {

(function () {
    'use strict';

    app.controller('Account',
        ['$scope', '$rootScope', 'tasks.repository', 'users.repository', '$location', '$routeParams', '$uibModal', 'utils', '$filter',
            function($scope, $rootScope, taskRepository, usersRepository, $location, $routeParams, $uibModal, utils, $filter) {

        $scope.userId = $routeParams.userId;

        $scope.isMe = $scope.userId == $scope.myUserId;

        //Получаем список задач пользователя
        function getUsersTasks() {
            usersRepository.getUsersTasks($scope.userId)
            .then(function(response) {
                $scope.userTasks = response.data.reverse();
            }, function(error) {console.log(error)});
        }

        getUsersTasks();

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
                    getUsersTasks();
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


/***/ }),
/* 35 */
/***/ (function(module, exports) {

(function () {
'use strict';

	app.controller('Header_logged', ['$scope', '$location', '$window', 'users.repository', function($scope, $location, $window, usersRepository) {
		
		//Затираем localStorage при выходе из сервиса
		$scope.exit = function () {
			localStorage.removeItem('authToken');
			localStorage.removeItem('userId');
			$location.path() === '/' ? $window.location.reload() : $location.path('/');
		};		
		
	}]);

})();


/***/ }),
/* 36 */
/***/ (function(module, exports) {

(function () {
'use strict';

	app.controller('Home_logged', ['$scope', 'tasks.repository', function($scope, tasksRepository) {
		

        
		$scope.search = function() {
			console.log($scope.searchString, $scope.citySelect);
		}

	}]);
})();


/***/ }),
/* 37 */
/***/ (function(module, exports) {

(function () {
'use strict';
app.controller('Home', function($scope) {


	
});

})();


/***/ }),
/* 38 */
/***/ (function(module, exports) {

(function () {
'use strict';
	app.controller('Index', function($scope) {

		$scope.aims = [
			[
				{
					aim: `Я обещаю покорить Эверест до 1 января 2019 года...`
				},
				{
					aim: `Я обещаю пробежать харьковский марафон "Освобождение" 19 августа 2018 года...`
				},
				{
					aim: `Я обещаю выиграть грант на бесплатное обучение в Швейцарии в сентябре 2018 года...`
				},

			],
			[
				{
					aim: `Я обещаю бросить курить до 1 сентября 2018 года...`
				},
				{
					aim: `Я обещаю делать утреннюю зарядку каждый день...`
				},
				{
					aim: `Я обещаю прочитывать по 1 новой книжке каждый месяц...`
				},

			],
			[
				{
					aim: `Я обещаю увеличить свою зароботную плату в 2 раза до 1 декабря 2018 года...`
				},
				{
					aim: `Я обещаю составить свое резюме и подать его в 100 IT-компаний до конца лета 2018...`
				},
				{
					aim: `Я обещаю создать и заполнить свой профиль в LinkedIn...`
				},

			],
			[
				{
					aim: `Я обещаю выполнять все домашки на курсах A-level...`
				},
				{
					aim: `Я обещаю пройти курсы и освоить новую специальность до конца лета 2018...`
				},
				{
					aim: `Я обещаю закончить университет с красным дипломом...`
				},

			],
			[
				{
					aim: `Я обещаю купить родителям круиз по средиземноморью в 2019 году...`
				},
				{
					aim: `Я обещаю купить жене годовой абонемент в тренажерный зал на 2019 год...`
				},
				{
					aim: `Я обещаю прыгнуть с парашютом до конца 2018 года...`
				},

			],
			[
				{
					aim: `Я обещаю починить смеситель до конца этого месяца...`
				},
				{
					aim: `Я обещаю научить сына плавать до 10 лет...`
				},
				{
					aim: `Я обещаю, что сервис BetWill вам понравится...`
				},

			],

		];

		$scope.currentCategory = $scope.aims[0];

		$scope.changeCategory = function(category) {
			$scope.currentCategory = $scope.aims[category];
		}


		$scope.questions = [
			[
				{
					opened: false,
					question: `Что необходимо для активации обещания?`,
					answer: `Для активации обещания необходимо соблюдение 3-ех
							 условий: 1)Наличие вашей минимальной ставки
							 2)Наличие минимальной ставки вашего поручителя
							 3)Наличие судьи`
				},
				{
					opened: false,
					question: 'Как проверяется выполнение обещания?',
					answer: `Для проверки выполнения обещания вы назначаете судью.
							 Судья, по окончанию времени выполнения обещания,
							 подтверждает его выполнение. При
							 возникновении спора, окончательное решение принимается
							 модератором. Также подтверждение модератора является
							 обязательным, когда банк ставок обещания больше или равен
							 5000 willcoin-ов.`
				},
				{
					opened: false,
					question: 'Как формируется рейтинг участников?',
					answer: `Рейтинг участников формируется исходя из суммарного
							 количества людей, сделавших ответные ставки на все
							 обещания пользователя, а также из банков выигранных
							 ставок, численности отслеживающих пользователей и
							 количества просмотров.`
				},
				{
					opened: false,
					question: 'Как мне стать поручителем?',
					answer: `Для того чтобы стать поручителем, достаточно нажать
							 кнопку "Поручиться", на странице обещания и ввести
							 сумму вашего взноса(не менее минимальной ставки).`
				},
				{
					opened: false,
					question: 'Как мне стать судьей?',
					answer: `Судью назначает автор обещания, после чего вам
							 прийдет уведомление, подтверждая которое вы
							 становитесь судьей.`
				},
			],
			[
				{
					opened: false,
					question: 'Какая сумма минимальной ставки?',
					answer: 'Сумма минимальной ставки = 100 willcoins'
				},
				{
					opened: false,
					question: 'Какая сумма максимальной ставки?',
					answer: 'Сумма максимальной ставки = 100 000 willcoins'
				},
				{
					opened: false,
					question: 'На что можно потратить выигранные willcoins?',
					answer: `Willcoin можно обменять на любые призы в нашем
							 "Магазине желаний", также можно пожертвовать их
							 на благотворительность.`
				},
				{
					opened: false,
					question: 'Какой курс willcoin к гривне?',
					answer: '1 willcoin = 1грн'
				},
			],
			[
				{
					opened: false,
					question: 'Как решаются споры с судьей?',
					answer: `В спорах с судьей, а также в любых
					 		 конфликтах с другими пользователями
					 		 сайта окончательное решение принимается
					 		 модератором.`
				},
				{
					opened: false,
					question: 'Как решаются споры с модератором?',
					answer: `В случае не согласия с решением модератора
							 вы имеете полное право обратиться в суд за
							 защитой своих прав, свобод и законных
							 интересов.`
				},
			]
		];
		$scope.currentFAQCategory = $scope.questions[0];
		
			$scope.activeElement = angular.element( document.querySelector( '.faq-item0' ) );
			$scope.activeElement.addClass('active');
		
		$scope.changeFAQCategory = function(category) {
			$scope.currentFAQCategory = $scope.questions[category];
			$scope.questionOpened = null;
			$scope.activeElement.removeClass('active');
			$scope.activeElement = angular.element( document.querySelector( '.faq-item' + category ) );
			$scope.activeElement.addClass('active');
		}

		$scope.openFAQ = function(id) {
			if($scope.currentFAQCategory[id].opened !== true) {
				for (var i = 0; i < $scope.currentFAQCategory.length ; i++) {
						$scope.currentFAQCategory[i].opened = false;
				}
				$scope.currentFAQCategory[id].opened = true;
			} else {
				$scope.currentFAQCategory[id].opened = false;
			}
		}


	});
	app.directive("scroll", function ($window) {
	    	
				    return function($scope, element, attrs) {
				    	if (!localStorage.getItem('authToken') ) {
console.log( localStorage.getItem('authToken') )
				        angular.element($window).bind("scroll", function() {
				             if (this.pageYOffset <= $window.visualViewport.height - angular.element(document.querySelector("#menu"))[0].clientHeight || this.pageYOffset >= $window.visualViewport.height + angular.element(document.querySelector("#how"))[0].clientHeight + angular.element(document.querySelector("#category"))[0].clientHeight + angular.element(document.querySelector("#who"))[0].clientHeight && this.pageYOffset <= $window.visualViewport.height + angular.element(document.querySelector("#how"))[0].clientHeight + angular.element(document.querySelector("#category"))[0].clientHeight + angular.element(document.querySelector("#who"))[0].clientHeight + angular.element(document.querySelector(".parallax__layer2"))[0].clientHeight - angular.element(document.querySelector("#menu"))[0].clientHeight ) {
				                 $scope.boolChangeClass = false;
				             }else {
				             	$scope.boolChangeClass = true;
				             }
				            $scope.$apply();
			// angular.element($window).off('scroll');
				        });

}
				    };
			
	});
})();



/***/ }),
/* 39 */
/***/ (function(module, exports) {

(function () {
'use strict';
app.controller('Login', ['$scope', 'account.repository', '$location', 'utils', '$window', '$uibModal', '$timeout', function($scope, accountRepository, $location, utils, $window, $uibModal, $timeout) {
	$scope.user = {
		email: "", //test@gmail.com
		password: "" //password
	};
	$scope.popoverText = "Пароль должен быть не менее 6 символов...";
	$scope.regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

	$scope.login = function() {	 //АВТОРИЗАЦИЯ
		if ($scope.user.email.length == 0 && $scope.user.password.length == 0) {
				utils.notify({message: 'Пожалуйста заполните поле email и пароль', type: 'danger'});
				return
		}
		if ($scope.user.email.length >= 5 && $scope.user.password == "") {
				utils.notify({message: 'Введите пароль!', type: 'danger'});
				return
		}
		if ($scope.user.email.length <= 5 && $scope.user.password.length > 5) {
				utils.notify({message: 'Проверьте достоверность ввода email!', type: 'danger'});
				return
		}
		if ($scope.user.email == "" && $scope.user.password.length > 5) {
				utils.notify({message: 'Введите email', type: 'danger'});
				return
		}
		if ($scope.user.email.length <=5 && $scope.user.password.length <=5) {
				utils.notify({message: 'Проверьте достоверность ввода email и пароль!', type: 'danger'});
				return
		}
		accountRepository.login($scope.user).then(function(responce){		
		$location.path('/') ? $window.location.reload() : $location.path('/'); //адресс куда переходить после логина
		//function gotoService() {
			//$location.path('/') ? $window.location.reload() : $location.path('/');
			//utils.notify({message: responce.data.firstname + ', добро пожаловать на сервис!', type: 'success'});
		//}
		// var promiseObj = $timeout(function(){
		
		// 	 $location.path('/main')
  //         //  $location.path('/') ? $window.location.reload() : $location.path('/');
  //       }, 3000);

       // promiseObj.then(function(value) { utils.notify({message: responce.data.firstname + ', добро пожаловать на сервис!', type: 'success'}); });

		localStorage.setItem('authToken', responce.data.authToken);
		localStorage.setItem('userId', responce.data.id);
		//setTimeout( $window.location.reload(), 3000);
	}, function(error){
	utils.notify({message: 'Ошибка, Вы ввели неправильные данные!', type: 'danger'});
	})
	};

	$scope.validatePass = function() { // валидация полей ввода
     $scope.changePas = ($scope.user.password.length >= 6) ? true : false;
	};

	$scope.validateEmail = function(){ // валидация полей ввода
		 if ($scope.user.email.length > 1) {
				$scope.changeEmail = ( $scope.regexp.test($scope.user.email) ) ? true : false;
		 }
	};
	
	$scope.openRegistration = function() { 
	var uiModal = $uibModal.open({
				templateUrl: 'app/modals/registration/registration.template.html',
				controller: 'Registration',
				animation: true,
				size: 'lg'
			});
	};
}]);
})();


/***/ }),
/* 40 */
/***/ (function(module, exports) {

(function () {
    'use strict';

        app.controller('Main', ['$scope', '$rootScope', 'tasks.repository', 'users.repository','$location',
         function($scope, $rootScope, tasksRepository, usersRepository, $location) {
            
            //Адрес для загрузки файлов
            $scope.fileAdress = 'http://node4.fe.a-level.com.ua/';

            
            //Наш Id
            $scope.myUserId = localStorage.getItem('userId');

            //Active user is me by default
            $scope.userId = $scope.myUserId;

            //Adress of our server
            $rootScope.adress = 'http://node4.fe.a-level.com.ua/';

            var isAuthorized = localStorage.getItem('authToken') ? true : false;

            //Получаем список всех задач и список всех городов из него
            $scope.selectedCity = null;
            isAuthorized && tasksRepository.getTasks( )
                .then(function(response){
                    $scope.tasks = response.data.reverse();
                    $scope.tasksToShow = $scope.tasks.filter(task => task.state == 0);
                    var cities = [];
                    $scope.tasks.forEach(task => {
                        if ( !cities.includes(task.location) && (task.location !== "") ) {
                            cities.push(task.location);
                        }
                    });
                    $rootScope.cities_root = cities;
                }, function(error) {});

            
            //Получаем список всех пользователей
            isAuthorized && usersRepository.getAllUsers()
                .then(function(response){
                    $scope.usersList = response.data;
                }, function(error) {console.log(error)});

            //Получаем нашего пользователя
            isAuthorized && usersRepository.getUserById($scope.myUserId)
                .then(function(response) {
                    $scope.me = response.data;
                }, function(error) {console.log(error)});

            //Получаем список наших задач
            function getMyTasks() {
                isAuthorized && usersRepository.getUsersTasks($scope.myUserId)
                .then(function(response) {
                    $scope.myTasks = response.data.reverse();
                }, function(error) {console.log(error)});
            }
            getMyTasks();
            $rootScope.$on('taskAdded', function() {getMyTasks()});

            //Получаем список наших отслеживаемых задач
            function getUsersTrackingTasks() {
                isAuthorized && usersRepository.getUsersTrackingTasks($scope.myUserId)
                .then(function(response) {
                    $scope.myTrackingTasks = response.data.reverse();
                }, function(error) {console.log(error)});
            }
            getUsersTrackingTasks();

            $rootScope.$on('Refresh tracking', function(){getUsersTrackingTasks();});

            //Получаем список наших ставок
            function getUsersBetsTasks() {
                isAuthorized && usersRepository.getUsersBets($scope.myUserId)
                .then(function(response) {
                    $scope.myBets = response.data.reverse();
                }, function(error) {console.log(error)});
            }
            getUsersBetsTasks();
            $rootScope.$on('Refresh bets', function(){getUsersBetsTasks();});

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

            let searchStr = "";
            tasksRepository.getTasksFiltered(searchStr)
                .then(function(response){
                    $scope.tasks = response.data.reverse();
                    $scope.tasksToShow = $scope.tasks.filter(task => task.state == 0);
                }, function(error) {});

            tasksRepository.getTasks( )
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
                    $scope.tasks = response.data.reverse();
                    $scope.tasksToShow = $scope.tasks.filter(task => task.state == 0);
                }, function(error) {});
            };




        }]);


    })();


/***/ }),
/* 41 */
/***/ (function(module, exports) {

(function () {
'use strict';
app.controller('TaskId', ['$scope', 'tasks.repository', 'users.repository', 'comments.repository', '$routeParams', '$location', 'utils',  '$rootScope', '$interval', '$uibModal', '$sce', function($scope, tasksRepository, usersRepository, commentsRepository, $routeParams, $location, utils, $rootScope, $interval, $uibModal, $sce) {
	$scope.adress = 'http://node4.fe.a-level.com.ua/';
	$scope.myinfo = "";
	$scope.myId = localStorage.getItem('userId');
	var id = $routeParams.taskId; //получаем из роутинга ID обещания! (taskID берется из app.routes.js)
//Получение обещания
	tasksRepository.getTasksById(id).then(function(response) {
		$scope.task = response.data;       //записываем информацию о нашем обещании
			usersRepository.getUserById($scope.task.user_id).then(function(response) {
		$scope.userByTask = response.data;       //записываем информацию о пользователе данного обещания
	}, function(error) {});

($scope.task.category_id == 1) ? ($scope.htmlPopoverCategory = $sce.trustAsHtml('<b>Обещание относится к категории</b><div class="label label-danger"> <b style="font-size: 14px; color: #fff">Привычки</b></div>') ): "";
($scope.task.category_id == 2) ? ($scope.htmlPopoverCategory = $sce.trustAsHtml('<b>Обещание относится к категории</b><div class="label label-danger"> <b style="font-size: 14px; color: #fff">Работа</b></div>') ): "";
($scope.task.category_id == 3) ? ($scope.htmlPopoverCategory = $sce.trustAsHtml('<b>Обещание относится к категории</b><div class="label label-danger"> <b style="font-size: 14px; color: #fff">Соревнования</b></div>') ): "";
($scope.task.category_id == 4) ? ($scope.htmlPopoverCategory = $sce.trustAsHtml('<b>Обещание относится к категории</b><div class="label label-danger"> <b style="font-size: 14px; color: #fff">Учеба</b></div>') ): "";
($scope.task.category_id == 5) ? ($scope.htmlPopoverCategory = $sce.trustAsHtml('<b>Обещание относится к категории</b><div class="label label-danger"> <b style="font-size: 14px; color: #fff">Покупки</b></div>') ): "";
($scope.task.category_id == 6) ? ($scope.htmlPopoverCategory = $sce.trustAsHtml('<b>Обещание относится к категории</b><div class="label label-danger"> <b style="font-size: 14px; color: #fff">Другое</b></div>') ): "";
$scope.htmlPopoverSubscribe = $sce.trustAsHtml('<b>Добавить обещание в отслеживаемые</b>');

		// Таймер для отображения оставшегося времени обещания
		var timer = $interval(function() {

  		let currentTime = Date.now();
		let taskEndingTime = Date.parse($scope.task.time_limit);
		let finalCounter = taskEndingTime - currentTime;
		$scope.validateTime = finalCounter;
		let day=Math.floor((finalCounter)/(24*60*60*1000));
		let hour=Math.floor(((finalCounter)%(24*60*60*1000))/(60*60*1000));
		let min=Math.floor(((finalCounter)%(24*60*60*1000))/(60*1000))%60;
		let sec=Math.floor(((finalCounter)%(24*60*60*1000))/1000)%60%60;
		$scope.timeLeft = {
			day: day,
			hour: hour,
			min: min,
			sec: sec
		};
		if (day < 0) $interval.cancel(timer);
	},1000);

	// функция очистки таймера
       $scope.stopTimer = function() {
      if (angular.isDefined(timer)) {
        $interval.cancel(timer);
        timer = undefined;
      }
	    };

	}, function(error) {
	});
//Получение пользователя
	usersRepository.getUserById(+$scope.myId).then(function(response) {
		$scope.user = response.data;       //записываем информацию о нашем пользователе
		$scope.myinfo = response.data.photo;
		$scope.mydata = response.data;
	}, function(error) {});



//Получение комментариев
	commentsRepository.getCommentsById(id).then(function(response) { //стягиваем все наши комментарии
		$scope.comments = response.data.map(function(item, i){
				return {
					task_id: item.task_id,
					user_id: item.user.id,
					content: item.content,
					date_added: item.date_added,
					photo: item.user.photo,
					firstname: item.user.firstname,
					lastname: item.user.firstname
				}
			});

	}, function(error) {});
//Получение ставок Обещания
	$scope.getBets = function () {
		tasksRepository.getBetsById(id).then(function(response) {
			$scope.bets = response.data;
			$scope.sumAllBets = $scope.bets.map(function(item){
				return item.value;
			}).reduce(function(sum, current) {
				return sum + current
			}, 0);

	   $scope.maxBet = $scope.task.value - $scope.sumAllBets;
			}, function(error) { });
		};
		$scope.getBets();
//Получение списка отслеживающих
	tasksRepository.getUsersWhoTracking(id).then(function(response) {
		$scope.trackingUsers = response.data;
		}, function(error) { });

//Добавление ставки ставок Обещания
	$scope.betAmount = 1;

	$scope.inc = function() {
		if ($scope.betAmount >= $scope.maxBet) return
		// console.log("$scope.bets-", $scope.bets, "$scope.maxBet", $scope.maxBet, "$scope.task", $scope.task);
		 // $scope.bets.push({date_added: new Date().toISOString(), id: null, state: $scope.bets[0].state,task_id: +id,user_id:+$scope.myId, value: $scope.betAmount});
		 // $scope.maxBet = $scope.maxBet - $scope.betAmount;
		$scope.betAmount++
	};

	$scope.dec = function() {
		if ($scope.betAmount <= 0) return
		$scope.betAmount--;
	};

	$scope.addBet = function() {
		if( $scope.betAmount<1 || $scope.betAmount>$scope.maxBet ) {
			$scope.error = {
					status: true,
					text: "Минимальная сумма ставки - 1 WillCoin's. Максимальная - " + $scope.maxBet + " WillCoin's"
				};
			return
			} 	else	if( $scope.user.balance < $scope.betAmount) {
			$scope.error = {
					status: true,
					text: "Недостаточно WillCoin's на счету"
				};
			return
			} else { 


				        var data = { value: +$scope.betAmount};


							tasksRepository.addBetsById(+id, data).then(function(response) {
								$scope.$emit('trackingTaskTogle', $scope.task);
								$rootScope.$emit('Refresh bets');
				        		$scope.bets.push({date_added: new Date().toISOString(), id: null, state: 0 ,task_id: +id,user_id:+$scope.myId, value: $scope.betAmount});
								$scope.maxBet = $scope.maxBet - $scope.betAmount;
				        		$scope.getBets();
								$scope.maxBet = $scope.maxBet - $scope.betAmount;
												$scope.error = {
									status: true,
									text: "Ставка принята!"
								};
								$scope.user.balance -= $scope.betAmount;   

								
						}, function(error) {
							if (error.data.error = "Task is closed") {
								$scope.error = {
									status: true,
									text: "Извините, вы уже ставили на данное обещание!"
								};
							} else if (error.status == 2) {
								$scope.error = {
									status: true,
									text: "Вы уже делали ставку на это обещание"
								};
							}

						});		
					}
//----End Bet

	};
//Подписаться на ставку
$scope.subscribe = function() {
	let data = { task_id: +id };
		usersRepository.addTrackingTask($scope.myId, data).then(function(response) {
		$scope.myTrackingTasks = response.data;
		}, function(error) {
		});
	};


// очищаем таймер при уничтожении scope
        $scope.$on('$destroy', function() {
          $scope.stopTimer();
        });

//кнопка Назад
$scope.backPath = function() {
	var prevUrl = $scope.history.length > 1 ? $scope.history.splice(-2)[0] : '/';
	$location.path(prevUrl);
};

//Открыть модальное окно со Списком ставок
				$scope.showTrackingUsersList = function() {
					var modalInstance = $uibModal.open({
						templateUrl: 'app/modals//trackingList/trackinglist.template.html',
						controller: 'Trackinglist',
						size: 'm',
						resolve: {
						   trackingUsersArr: function() {
						       return $scope.trackingUsers
						   },
						   taskArr: function() {
						       return $scope.task
						   }
						}
					});

				};

//Открыть модальное окно со Списком Отслеживающих
				$scope.showBetsList = function() {
					var modalInstance = $uibModal.open({
						templateUrl: 'app/modals/betsList/betslist.template.html',
						controller: 'Betslist',
						size: 'm',
						resolve: {
						   betsArr: function() {
						       return $scope.bets
						   },
						   taskArr: function() {
						       return $scope.task
						   },
						   sumAllBets: function() {
						       return $scope.sumAllBets
						   }

						}
					});

				};
				$scope.imgArray = ['icons/habits.png', 'icons/career.png', 'icons/competitions.png', 'icons/study.png', 'icons/shoping.png', 'icons/other.png'];

 //Отслеживать
				if($scope.trackingTasks && $scope.trackingTasks.length) {
						$scope.isTracking = $scope.trackingTasks.filter(task => task.id === $scope.task.id).length === 1 ? true : false;
				}

                $scope.togleTrackingTask = function () {
                    usersRepository.addTrackingTask($scope.myUserId, {task_id: $scope.task.id})
                        .then(function (response) {                            
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
                //Кнопки изменения статуса задачи state
                $scope.taskdone = function() {
                	$scope.user.balance = $scope.user.balance + $scope.sumAllBets + $scope.task.value; 
                	let newTask = $scope.task;
                	newTask.state = 1;
                	tasksRepository.updateTask($scope.task.id, newTask).then(function(response) {
						utils.notify({message: 'Статус обещания изменен на "Выполнено"', type: 'success'});

					}, function(error) {});

                }; 

                $scope.surrend = function() {
                	
                	let newTask = $scope.task;
                	newTask.state = 2;
                	tasksRepository.updateTask($scope.task.id, newTask).then(function(response) {
						 utils.notify({message: 'Статус обещания изменен на "Не выполнено"', type: 'danger'});
					}, function(error) {});

                };



}]);
})();


/***/ }),
/* 42 */
/***/ (function(module, exports) {

(function () {
    'use strict';

    app.directive('betInfo', betInfo);

    function betInfo() {
        return {
            restrict: 'EA',
            templateUrl: './app/directives/bet-info/bet-info.template.html',
            scope: {
                bet: '=',
                fileAdress: '='
            },
            controller:
                ['$scope', '$rootScope', '$routeParams', '$uibModal', 'users.repository', 'tasks.repository', 'utils',
                    function ($scope, $rootScope, $routeParams, $uibModal, usersRepository, tasksRepository, utils) {

                tasksRepository.getTasksById($scope.bet.task_id)
                    .then(function (response) {
                        $scope.task = response.data;
                        var getState = function () {
                            if($scope.task.state === 0) {
                                $scope.betState = "В процессе";
                                $scope.bgColor = "#f7f7f7";
                            };
                            if($scope.task.state === 1) {
                                $scope.betState = "Проигрыш";
                                $scope.bgColor = "#ffeaec";
                            };
                            if($scope.task.state === 2) {
                                $scope.betState = "Выигрыш";
                                $scope.bgColor = "#bef7df";
                            };
                        };
                        getState();
                        usersRepository.getUserById($scope.task.user_id)
                            .then(function (response) {
                                $scope.author = response.data;
                            }, function (error) {
                                console.log(error);
                            });
                    }, function (error) {
                        console.log(error);
                    });



            }]
        }
    }
})();

/***/ }),
/* 43 */
/***/ (function(module, exports) {

(function(){
	'use strict';

	app.directive('comments', commentsController);

	function commentsController(){
		return{
			restrict: 'E',
			templateUrl: './app/directives/comments/comments.template.html',
			scope: {
				comments: '=commentslist',
				task: '=',
				mydata: '='

			},
			controller: ['$scope', '$rootScope', 'users.repository', 'comments.repository', '$routeParams', function($scope, $rootScope, usersRepository, commentsRepository,  $routeParams) {
				$scope.adress = 'http://node4.fe.a-level.com.ua/';
				var taskId = $routeParams.taskId;

				var myId = localStorage.getItem('userId');
				usersRepository.getUserById(+myId).then(function (response){
					$scope.myfoto = response.data.photo;
					$scope.myinf = response.data;
				}, function (error){ });

				$scope.commentText = "";
				$scope.sendComment = function() {

					if ($scope.commentText.length < 2) return 
						else {
									$scope.user_obj = {
									task_id: +taskId,
									user_id: +myId,
									content: $scope.commentText,
									date_added: new Date().toISOString(),
									photo: $scope.mydata.photo,
									firstname: $scope.mydata.firstname,
									lastname: $scope.mydata.lastname
								};

								let data = {
									"task_id": +taskId,	
								    "user_id": +myId,
								    "content": $scope.commentText
								}

								commentsRepository.addComment(data).then(function (response){
									$scope.comments.push($scope.user_obj);
									$scope.commentText = "";
								}, function (error){ });

						}
				};


				$scope.$watch('comments', function(newValue, oldValue) {
					if (newValue !== oldValue) {
//Добавить в массив с комментариями фото и имена участников
						// $scope.comments.forEach(function(item, i, arr) { 
						// 	usersRepository.getUserById(item.user_id).then(function (response){
						// 		$scope.comments[i].photo = response.data.photo;
						// 		$scope.comments[i].firstname = response.data.firstname;
						// 		$scope.comments[i].lastname = response.data.lastname;

						// 	}, function (error){ console.log(error) });
						// });

					}
				});

			}]

		}
	}

})();

/***/ }),
/* 44 */
/***/ (function(module, exports) {

(function(){
	'use strict';

	app.directive('gallery', GalleryController);

	function GalleryController(){
		return{
			restrict: 'E',
			templateUrl: './app/directives/gallery/gallery-slider.template.html',
			scope: {
				proofs: '=proofs'

			},
			controller: ['$scope', '$rootScope', 'tasks.repository', '$routeParams', function($scope, $rootScope, tasksRepository, $routeParams) {
				$scope.adress = 'http://node4.fe.a-level.com.ua/';
				var taskId = $routeParams.taskId;

tasksRepository.getProofsById(taskId).then(function(response) {
					$scope.proofsPhotos = response.data; 
				}, function(error) { });


    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.proofsPhotos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.proofsPhotos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };


				$scope.$watch('proofs', function(newValue, oldValue) {
					if (newValue !== oldValue) {

   $scope.proofsPhotos = newValue;

					}
				});

			}]

		}
	}

})();

/***/ }),
/* 45 */
/***/ (function(module, exports) {

(function(){
	'use strict';

	app.directive('proofs', proofsController);

	function proofsController(){
		return{
			restrict: 'E',
			templateUrl: './app/directives/proofs/proofs.template.html',
			scope: {},
			controller: ['$scope', "$rootScope", 'tasks.repository', '$routeParams', '$uibModal', 'utils', function($scope, $rootScope, tasksRepository, $routeParams, $uibModal, utils) {
				var id = $routeParams.taskId;
				$scope.adress = 'http://node4.fe.a-level.com.ua/';
				$scope.myId = localStorage.getItem('userId');
				tasksRepository.getTasksById(id).then(function(response) {
					$scope.task = response.data;
					$scope.validTask = $scope.task.user_id === +$scope.myId ? true : false;
				}, function(error) { });

				tasksRepository.getProofsById(id).then(function(response) {
					$scope.proofs = response.data; 
				}, function(error) { });

				$scope.addProof = function() {
					var modalInstance = $uibModal.open({
						templateUrl: 'app/modals/addProof/addProof.template.html',
						controller: 'Addproof',
						size: 'lg'
					});


					modalInstance.result.then(function(result) {
						if (!result) return;
						tasksRepository.addProofById(id, result).then(function(response) {
							tasksRepository.getProofsById(id).then(function(response_new) {
								$scope.proofs = response_new.data;
							}, function(error) { });
							utils.notify({message: "Подтвержение успешно добавлено!", type: 'success'});
						}, function(error) {
						});
					}, function() {});



				}

			}]

		}
	}

})();


/***/ }),
/* 46 */
/***/ (function(module, exports) {

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


/***/ }),
/* 47 */
/***/ (function(module, exports) {

(function () {
    'use strict';

    app.directive('userInfo', userInfo);

    function userInfo() {
        return {
            restrict: 'EA',
            templateUrl: './app/directives/user-info/user-info.template.html',
            scope: {
                user: '=',
                isMe: '=',
                trackingTasks: '=',
                tasks: '=',
                fileAdress: '=fileAdress',
                myBets: '='
            },
            controller:
                ['$scope', '$rootScope', '$routeParams', '$uibModal', 'users.repository', 'utils',
                    function ($scope, $rootScope, $routeParams, $uibModal, usersRepository, utils) {

                $scope.balanceRefill = function() {
                    var modalInstance = $uibModal.open({
                        templateUrl: 'app/modals/balance-refill/balance-refill.template.html',
                        controller: 'BalanceRefill',
                        size: 'm'
                    });

                    modalInstance.result.then(function (result) {
                        if (!result) return;

                        var dataToSend = $scope.user;
                        dataToSend.balance += +$rootScope.refillValue;

                        usersRepository.updateUser($scope.user.id, $scope.user).then(function(response) {
                            console.log(response);
                            utils.notify({
                                message: 'Баланс пополнен',
                                type: 'success'
                            });

                        }, function (error) {
                            utils.notify({
                                message: 'Ошибка пополнения',
                                type: 'danger'
                            });
                        });
                    })
                }

            }]
        }
    }
})();

/***/ }),
/* 48 */
/***/ (function(module, exports) {

app.controller('AddTask', addTaskController);

function addTaskController($scope, $uibModalInstance, $rootScope, taskRepository, me, utils) {
        $scope.user = me;
       
        $scope.cancel = function() {
                $uibModalInstance.close(false);
        };

        taskRepository.getCategories()
                .then(function (response) {
                        $scope.categories = response.data;
        })

        $scope.ok = function() {
                var formData = new FormData();
                var file =  document.querySelector("#picture").files[0];
                formData.append('picture', file || null);
                formData.append('name', $scope.name);
                formData.append('description', $scope.description);
                formData.append('user_id', localStorage.getItem('userId'));
                formData.append('bet_date', new Date().toISOString());
                formData.append('time_limit', $scope.endDate.toISOString());
                formData.append('location', $scope.location);
                formData.append('difficulty', $scope.difficulty);
                formData.append('category_id', $scope.category);
                formData.append('value', $scope.value);

                $uibModalInstance.close(formData);    
        }
        
        
}

addTaskController.$inject = [
    '$scope',
    '$uibModalInstance',
    '$rootScope',
    'tasks.repository',
    'me',
    'utils'
];

/***/ }),
/* 49 */
/***/ (function(module, exports) {

app.controller('Addproof', addproofController);
function addproofController($scope, $uibModalInstance) {

	$scope.proofText = "";
	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');

	};

	
	$scope.ok = function() {
		var formData = new FormData();
		var file =  document.querySelector("#inputfile").files[0];
		formData.append('picture', file);
		formData.append('description', $scope.proofText);
		console.log ( 'picture', formData.getAll('picture') );

		$uibModalInstance.close(formData);
	};

	$scope.filename = "";
	$scope.uploadImage = function () {
        $scope.filename = document.querySelector("#inputfile").files[0].name || "";
    }

}
addproofController.$inject = [
	'$scope',
	'$uibModalInstance',
];


/***/ }),
/* 50 */
/***/ (function(module, exports) {

app.controller('BalanceRefill', balanceRefillController);

function balanceRefillController($scope, $uibModalInstance, $rootScope) {
	$scope.cancel = function() {
		$uibModalInstance.close(false);
	};

	$scope.ok = function() {
        $rootScope.refillValue = $scope.refillValue;
		$uibModalInstance.close(true);

	}
}

balanceRefillController.$inject = [
	'$scope',
	'$uibModalInstance',
	'$rootScope'
];

/***/ }),
/* 51 */
/***/ (function(module, exports) {

(function () {
'use strict';
app.controller('Betslist', ['$scope', '$uibModal', '$uibModalInstance', '$uibModalStack', 'betsArr', 'users.repository', 'taskArr', 'sumAllBets', function($scope, $uibModal, $uibModalInstance, $uibModalStack, betsArr, usersRepository, taskArr, sumAllBets) {

$scope.allbets = betsArr;
$scope.betTask = taskArr;
$scope.sumBets = sumAllBets;
console.log($scope.betTask);
betsArr.forEach(function(item, i) {
$scope.usersBetsList = [];
usersRepository.getUserById(item.user_id).then(function(response) {
        $scope.allbets[i].firstname = response.data.firstname;
        $scope.allbets[i].lastname = response.data.lastname;
        $scope.allbets[i].index = i+1;

        console.log($scope.allbets);
    }, function(error) {});

});

    $scope.cancel = function() {
    $uibModalInstance.close();
    };

    $scope.sortField = '$index + 1';
    $scope.sortBy = function(field) {
            $scope.sortField = ($scope.sortField === field) ? '-' + field : field;
        }

   
}]);
})();

/***/ }),
/* 52 */
/***/ (function(module, exports) {

app.controller('Confirm', confirmController);

function confirmController($scope, $uibModalInstance) {
	$scope.cancel = function() {
		$uibModalInstance.close(false);
	};

	$scope.ok = function() {
		$uibModalInstance.close(true);
	}
}

confirmController.$inject = [
	'$scope',
	'$uibModalInstance',
];

/***/ }),
/* 53 */
/***/ (function(module, exports) {

(function () {
'use strict';
app.controller('Registration', ['$scope', 'account.repository', '$location', 'utils', '$window', '$uibModal', '$uibModalInstance', '$uibModalStack',  function($scope, accountRepository, $location, utils, $window, $uibModal, $uibModalInstance,$uibModalStack) {

    $scope.popoverText = "Пароль должен быть не менее 6 символов...";
    $scope.regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    $scope.new_user = {
        email: '',
        password: ''
    };

    $scope.cancel = function() {
     $uibModalInstance.close(true);
    };

    $scope.validateRegPass = function() { // валидация полей ввода
     $scope.changeRegPas = ($scope.new_user.password.length >= 6) ? true : false;
    };

    $scope.validateRegEmail = function(){ // валидация полей ввода
     $scope.changeRegEmail = ( $scope.regexp.test($scope.new_user.email) ) ? true : false;
    };


    $scope.register = function() {     //РЕГИСТРАЦИЯ
        $scope.emailNotification = false;  // добавление классов анимации в registration.template.html
        $scope.passNotification = false; // добавление классов анимации в registration.template.html

        accountRepository.register($scope.new_user).then(function(responce){
            //$('#myModal').modal('hide'); //закрытие модального окна регистрации
            $scope.login = function() {
                accountRepository.login($scope.new_user).then(function(responce){

                    localStorage.setItem('authToken', responce.data.authToken);
                    localStorage.setItem('userId', responce.data.id);
                    $location.path('/') ? $window.location.reload() : $location.path('/');
                }, function(error){})};
$scope.login();

    }, function(error){
        if (error.status == 403) {
            $scope.responceText = "Такой пользователь уже зарегистрирован!";
            utils.notify({message: 'Такой пользователь уже зарегистрирован!', type: 'danger'});
        }
        else if (error.status == 452) {
            $scope.responceText = "Неверный Email...";
            utils.notify({message: 'Неверный Email...', type: 'danger'});
            $scope.emailNotification = true;
        }
        else if (error.config.data.email == '') {
            $scope.responceText = "Неверный формат Emeil!";
            utils.notify({message: 'Неверный формат Emeil!', type: 'danger'});
            $scope.emailNotification = true;
        }
        else if (error.data.error[0].field == 'email' && error.data.error[1].field == 'password' ) {
            $scope.responceText = "Неверный Email и Пароль";
            $scope.emailNotification = true;
            $scope.passNotification = true;
        }
        else if (error.data.error[0].field == 'password') {
            $scope.responceText = "Неверный Пароль";
            utils.notify({message: 'Неверный пароль...', type: 'danger'});
            $scope.passNotification = true;
        }
        else if (error.data.error[0].field == 'email') {
            $scope.responceText = "Неверный Email";
            utils.notify({message: 'Неверный Email...', type: 'danger'});
            $scope.emailNotification = true;
        }
        else if (error.status == 422) {
            $scope.responceText = "Неверный ввод данных";
            utils.notify({message: 'Неверный ввод данных', type: 'danger'});
        }

    })
    };
}]);
})();

/***/ }),
/* 54 */
/***/ (function(module, exports) {

(function () {
'use strict';
app.controller('Trackinglist', ['$scope', '$uibModal', '$uibModalInstance', '$uibModalStack', 'users.repository', 'trackingUsersArr', 'taskArr', function($scope, $uibModal, $uibModalInstance, $uibModalStack, usersRepository, trackingUsersArr, taskArr) {
$scope.adress = 'http://node4.fe.a-level.com.ua/';
$scope.allTrackingUsers = trackingUsersArr;
$scope.taskArr = taskArr;
trackingUsersArr.forEach(function(item, i) {
usersRepository.getUserById(item.user_id).then(function(response) {
        $scope.allTrackingUsers[i].firstname = response.data.firstname;
        $scope.allTrackingUsers[i].lastname = response.data.lastname;
        $scope.allTrackingUsers[i].gender = response.data.gender;
        $scope.allTrackingUsers[i].photo = response.data.photo;
        $scope.allTrackingUsers[i].index = i+1;

    }, function(error) {});

});

    $scope.cancel = function() {
    $uibModalInstance.close();
    };

    $scope.sortField = '$index + 1';
    $scope.sortBy = function(field) {
            $scope.sortField = ($scope.sortField === field) ? '-' + field : field;
        }

   
}]);
})();

/***/ }),
/* 55 */
/***/ (function(module, exports) {

(function() {
	'use strict';
	app.factory('account.repository', function(webApi, $http) {
		return {
			login: _login,
			register: _register
		};
		function _login(data) {
			return $http.post(webApi.DOMAIN + '/api/v1/account/login', data);
		}
		function _register(data) {
			return $http.post(webApi.DOMAIN + '/api/v1/account/register', data);
		}
		
	});
})();

/***/ }),
/* 56 */
/***/ (function(module, exports) {

(function() {
    'use strict';
    app.factory('comments.repository', ['webApi', '$http', function(webApi, $http) {
        return {
            addComment: _addComment,
            getCommentsById: _getCommentsById

        };

        function _addComment(data) {
            return $http.post(webApi.DOMAIN + '/api/v1/comments', data);
        }

        function _getCommentsById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/' + id + '/comments');
        }

    }]);
})();

/***/ }),
/* 57 */
/***/ (function(module, exports) {

(function() {
'use strict';
app.service('LoadingInterceptor', 
    ['$q', '$rootScope', '$log', 
    function($q, $rootScope, $log) {
 
    var xhrCreations = 0;
    var xhrResolutions = 0;
 
    function isLoading() {
        return xhrResolutions < xhrCreations;
    }
 
    function updateStatus() {
        $rootScope.loading = isLoading();
    }
 
    return {
        request: function (config) {
            xhrCreations++;
            updateStatus();
            return config;
        },
        requestError: function (rejection) {
            xhrResolutions++;
            updateStatus();
            $log.error('Request error:', rejection);
            return $q.reject(rejection);
        },
        response: function (response) {
            xhrResolutions++;
            updateStatus();
            return response;
        },
        responseError: function (rejection) {
            xhrResolutions++;
            updateStatus();
            $log.error('Response error:', rejection);
            return $q.reject(rejection);
        }
    };
    
    }]);

})();

/***/ }),
/* 58 */
/***/ (function(module, exports) {


(function() {
    'use strict';
    app.factory('tasks.repository', ['webApi', '$http', function(webApi, $http) {
        return {
            getTasks: _getTasks,
            getTasksFiltered: _getTasksFiltered,
            getTasksById: _getTasksById,
            getProofsById: _getProofsById,
            addProofById: _addProofById,
            getBetsById: _getBetsById,
            addBetsById: _addBetsById,
            getCategories: _getCategories,
            addTask: _addTask,
            getUsersWhoTracking: _getUsersWhoTracking,
            updateTask: _updateTask

        };

        function _getTasks() {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks');
        }

        function _getTasksFiltered(data) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/?search=' + data);
        }

        function _getTasksById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/' + id);
        }

        function _getProofsById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/'+ id +'/proofs');
        }

        function _addProofById(id, data) {
            return $http.post(webApi.DOMAIN + '/api/v1/tasks/'+ id +'/proofs', data, {
                                                transformRequest: angular.identity,
                                                headers: {'Content-Type': undefined}
        });
        }

        function _getBetsById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/'+ id +'/bets');
        }

        function _addBetsById(id, data) {
            return $http.post(webApi.DOMAIN + '/api/v1/tasks/'+ id +'/bets', data);
        }

        function _getCategories() {
            return $http.get(webApi.DOMAIN + '/api/v1/categories')
        }

        function _addTask(data) {
            return $http.post(webApi.DOMAIN + '/api/v1/tasks/', data, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            });
        }
        function _getUsersWhoTracking(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/'+ id +'/tracking_users');
        }
        function _updateTask(id, data) {
            return $http.put(webApi.DOMAIN + '/api/v1/tasks/' + id, data);
        }

    }]);
})();


/***/ }),
/* 59 */
/***/ (function(module, exports) {

(function() {
    'use strict';
    app.factory('users.repository', ['webApi', '$http', function(webApi, $http) {
        return {
            getUsersTasks: _getUsersTasks,
            getUsersTrackingTasks: _getUsersTrackingTasks,
            getUserById: _getUserById,
            getAllUsers: _getAllUsers,
            updateUser: _updateUser,
            addTrackingTask: _addTrackingTask,
            getUsersBets: _getUsersBets,
        };

        function _getUsersTasks(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/users/' + id + '/tasks');
        }

        function _getUsersTrackingTasks(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/users/' + id + '/tracking');
        }

        function _getUserById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/users/' + id);
        } 

        function _getAllUsers() {
            return $http.get(webApi.DOMAIN + '/api/v1/users/');
        }

        function _updateUser(id, data) {
            return $http.put(webApi.DOMAIN + '/api/v1/users/' + id, data);
        }

        function _addTrackingTask(userId, taskId) {
            return $http.post(webApi.DOMAIN + '/api/v1/users/' + userId + '/tracking', taskId);
        }

        function _getUsersBets(userId) {
            return $http.get(webApi.DOMAIN + '/api/v1/users/' + userId + '/bets');
        }

    }]);
})();

/***/ }),
/* 60 */
/***/ (function(module, exports) {

(function() {
'use strict';
app.service('utils', ['notify', function(notify) {
	this.notify = function(data) {
		notify.closeAll();
		notify.config({
			startTop: 65
		});
		var defaults = {
			message: '',
			type: 'alert',
			duration: 5000
		};
		data = angular.extend(defaults, data);
		notify({message: data.message, classes: 'alert-box-shadow alert-' + data.type});
	};
	this.isLogged = function() {
		return localStorage.getItem('authToken') ? true : false;
	};
}]);
})();

/***/ })
/******/ ]);