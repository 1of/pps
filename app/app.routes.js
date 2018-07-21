app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
        templateUrl: localStorage.authToken ? 'app/views/main_logged/home_logged.html' : 'app/views/main_page/main.template.html',
        controller: localStorage.authToken ? 'Home_logged' : 'Home'
    }).when('/login', {
        templateUrl: 'app/views/login_page/login.template.html',
        controller: 'Login'
    }).when('/account/:userId', {
        templateUrl: 'app/views/account/account.html',
        controller: 'Account'
    }).when('/account/:userId/tasks', {
        templateUrl: 'app/views/account/account.html',
        controller: 'Account'
    }).when('/account/:userId/tracking_tasks', {
        templateUrl: 'app/views/account/account.html',
        controller: 'Account'
    }).when('/account/:userId/bets', {
        templateUrl: 'app/views/account/account.html',
        controller: 'Account'
    }).when('/account/:userId/account_info', {
        templateUrl: 'app/views/account/account.html',
        controller: 'Account'
    }).when('/tasks/:taskId', {
        templateUrl: 'app/views/task_id/task_id.html',
        controller: 'TaskId'
    })
    .otherwise('/');
});
