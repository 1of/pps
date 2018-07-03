(function() {
	'use strict';
	app.factory('account.repository', function(webApi, $http) {
		return {
			login: _login
		};
		function _login(data) {
			return $http.post(webApi.DOMAIN + '/api/v1/account/login', data);
		}
		
	});
})();