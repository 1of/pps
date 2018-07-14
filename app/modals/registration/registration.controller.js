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
           // $('#myModal').modal('hide'); //закрыти модального окна регистрации
            $scope.login = function() {
                accountRepository.login($scope.new_user).then(function(responce){
                    localStorage.setItem('authToken', responce.data.authToken);
                }, function(error){})};

        $location.path('/') ? $window.location.reload() : $location.path('/'); //адресс куда переходить после логина
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
}]);
})();