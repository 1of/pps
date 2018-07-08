app.run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeSuccess', function() {
		$rootScope.currentMenuItem = $location.path() || '/';
	});
});

// check authorization
app.config(['$httpProvider', function($httpProvider) {
	$httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
		return {
			request: function(config) {
				config.headers = config.headers || {};
				if (localStorage.getItem('authToken')) {
					config.headers.Authorization = 'Bearer ' + localStorage.getItem('authToken');
				}
				return config;
			},
			responseError: function(response) {
				if (response.status === 401) {
					$location.path('/login');
				}
				return $q.reject(response);
			}
		};
	}]);
}]);