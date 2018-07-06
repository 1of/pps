(function () {
'use strict';
app.controller('Login', ['$scope', 'account.repository', '$location', 'utils', function($scope, accountRepository, $location, utils) {
	$scope.user = {
		email: "test@gmail.com",
		password: "111111"
	};

	$scope.login = function() {
		
accountRepository.login($scope.user).then(function(responce){

	$location.path('/user'); //адресс куда переходить после логина
	utils.notify({message: 'Logged, success!!!', type: 'success'});
console.log('responce', responce.data);
localStorage.setItem('authToken', responce.data.authToken);
}, function(error){
	utils.notify({message: 'ERROR, invalid username or password!!!', type: 'success'});
})
	};
}]);
})();
