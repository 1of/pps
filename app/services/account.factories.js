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