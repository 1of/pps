(function () {
'use strict';
app.controller('Login', ['$scope', 'account.repository', '$location', function($scope, accountRepository, $location) {
	$scope.user = {
		email: "admin@gmail.com",
		password: "qQ1!1111"
	};
	$scope.login = function() {
		console.log($scope.user);
accountRepository.login($scope.user).then(function(responce){
	$location.path('/'); //адресс куда переходить после логина
console.log('responce', responce.data);
localStorage.setItem('authToken', responce.data.authToken);
}, function(error){
	
})
	};
}]);
})();
