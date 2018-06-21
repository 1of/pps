app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
	.when('/', {
		templateUrl: 'app/views/main_page/main.template.html',
		controller: 'Home'
	})
	.when('/login', {
		templateUrl: 'app/views/login_page/login.template.html',
		controller: 'Login'
	})
		.otherwise('/');
	
});