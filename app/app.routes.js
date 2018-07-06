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
	.when('/user', {
		templateUrl: 'app/views/personal_cabinet/logged_ok.html',
		//controller: 'Account'
	})
		.otherwise('/');
	
});