(function () {
'use strict';
app.controller('Login', ['$scope', 'account.repository', '$location', 'utils', '$window', '$uibModal',  function($scope, accountRepository, $location, utils, $window, $uibModal) {
	$scope.user = {
		email: "test@gmail.com", //test@gmail.com
		password: "111111"
	};
	$scope.popoverText = "Пароль должен быть не менее 6 символов...";
	$scope.regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

	$scope.login = function() {	 //АВТОРИЗАЦИЯ
		accountRepository.login($scope.user).then(function(responce){
		$location.path('/') ? $window.location.reload() : $location.path('/'); //адресс куда переходить после логина
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
