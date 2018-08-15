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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_module_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_module_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_app_module_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_config_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_config_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__app_app_config_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_routes_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_routes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__app_app_routes_js__);




/***/ }),

/***/ 31:
/***/ (function(module, exports) {

window.app = angular.module('app', [
	'ngRoute',
	'ui.bootstrap',
	'cgNotify',
	'xeditable',
	'ngAnimate',
	'ngTouch'
	]);

/***/ })

/******/ });