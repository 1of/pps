app.run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeSuccess', function() {
		$rootScope.currentMenuItem = $location.path() || '/';
	});
});