app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
        templateUrl: localStorage.authToken ? 'app/views/main_logged/home_logged.html' : 'app/views/main_page/main.template.html',
        controller: localStorage.authToken ? 'Home_logged' : 'Home'
    }).when('/login', {
        templateUrl: 'app/views/login_page/login.template.html',
        controller: 'Login'
    }).when('/my_tasks', {
        templateUrl:  'app/views/my_tasks/my_tasks.html' ,
        controller: 'MyTasks' 
    }).when('/tracking_tasks', {
        templateUrl: 'app/views/tracking_tasks/tracking_tasks.html',
        controller: 'TrackingTasks'
    }).when('/my_bets', {
        templateUrl: 'app/views/my_bets/my_bets.html',
        controller: 'MyBets'
    }).when('/account', {
        templateUrl: 'app/views/account/account.html',
        controller: 'Account'
    })
    .otherwise('/');
});
