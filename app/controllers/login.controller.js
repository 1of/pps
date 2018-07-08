(function () {
'use strict';
app.controller('Login', ['$scope', 'account.repository', '$location', 'utils', function($scope, accountRepository, $location, utils) {
	$scope.user = {
		email: "test@gmail.com", //test@gmail.com
		password: "111111"
	};
	$scope.popoverText = "Пароль должен быть не менее 6 символов...";
	$scope.regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

	$scope.login = function() {	 //АВТОРИЗАЦИЯ
		accountRepository.login($scope.user).then(function(responce){
		$location.path('/user'); //адресс куда переходить после логина
		utils.notify({message: responce.data.firstname + ', добро пожаловать на сервис!', type: 'success'});
		localStorage.setItem('authToken', responce.data.authToken);
	}, function(error){		
	utils.notify({message: 'Ошибка, Вы ввели неправильные данные!!!', type: 'danger'});
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

	$scope.new_user = {
		email: '',
		password: ''
	};

	$scope.clear = function() { //очищаем поля ввода регистрации
	$scope.new_user.email = '';
	$scope.new_user.password = '';
	};

	$scope.validateRegPass = function() { // валидация полей ввода
     $scope.changeRegPas = ($scope.new_user.password.length >= 6) ? true : false;
	};

	$scope.validateRegEmail = function(){ // валидация полей ввода
				$scope.changeRegEmail = ( $scope.regexp.test($scope.new_user.email) ) ? true : false;
	};

	$scope.register = function() {	   //РЕГИСТРАЦИЯ
		$scope.emailNotification = false;
		$scope.passNotification = false;
		accountRepository.register($scope.new_user).then(function(responce){
			$('#myModal').modal('hide'); //закрыти модального окна регистрации
			$scope.login = function() {
				accountRepository.login($scope.new_user).then(function(responce){
					localStorage.setItem('authToken', responce.data.authToken);
				}, function(error){})};
		$location.path('/user'); //адресс куда переходить после логина
		utils.notify({message: $scope.new_user.email + ', приветсвуем Вас на сервисе!', type: 'success'});
		localStorage.setItem('authToken', responce.data.authToken);
	}, function(error){
		utils.notify({message: 'Вы ввели неправильные данные!', type: 'success'});
		if (error.status == 403) {
			$scope.responceText = "Такой пользователь уже зарегестрирован!";
		} 
		else if (error.status == 452) {
			$scope.responceText = "Неверный Email...";
			$scope.emailNotification = true;
		}
		else if (error.config.data.email == '') {
			$scope.responceText = "Неверный формат Emeil!";
			$scope.emailNotification = true;
		}
		else if (error.data.error[0].field == 'email' && error.data.error[1].field == 'password' ) {
			$scope.responceText = "Неверный Email и Пароль";
			$scope.emailNotification = true;
			$scope.passNotification = true;
		}
		else if (error.data.error[0].field == 'password') {
			$scope.responceText = "Неверный Пароль";
			$scope.passNotification = true;
		}
		else if (error.data.error[0].field == 'email') {
			$scope.responceText = "Неверный Email";
			$scope.emailNotification = true;
		}
		else if (error.status == 422) {
			$scope.responceText = "Неверный ввод данных";
		} 

	})
	};

	$scope.isLogged = function() {   //для проверки токена в локалсторейдж, возращает true/false
		return utils.isLogged();
	}

}]);
})();
