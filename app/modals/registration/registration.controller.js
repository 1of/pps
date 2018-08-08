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