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
