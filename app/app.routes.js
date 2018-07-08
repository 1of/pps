app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
	/*.when('/' && (!localStorage.authToken), {
		templateUrl: 'app/views/main_page/main.template.html',
		controller: 'Home'
	})*/
	.when('/' /* && (localStorage.authToken)*/, {
		templateUrl: 'app/views/main_logged/main.html',
		controller: 'Home_logged'
	})
	.when('/login', {
		templateUrl: 'app/views/login_page/login.template.html',
		controller: 'Login'
	})
		.otherwise('/');
	
});