(function () {
'use strict';
app.controller('TaskId', ['$scope', 'tasks.repository', 'users.repository', '$routeParams', '$location', 'utils',  function($scope, tasksRepository, usersRepository, $routeParams, $location, utils) {
	console.log('TaskId controller  OK!!!');

	console.log("id=", $routeParams.taskId);

	var id = $routeParams.taskId; //получаем из роутинга ID обещания! (taskID берется из app.routes.js)
	var userId = $routeParams.taskUserName; 
	console.log(userId, id);
	tasksRepository.getTasksById(id).then(function(responce) {
		//исправить, когда будет доступен userId из роутинга
			usersRepository.getUserById(responce.data.user_id).then(function(responce) {
		$scope.user = responce.data;       //записываем в scope информацию о нашем пользователе
	}, function(error) {});


		$scope.task = responce.data;       //записываем в scope информацию о нашем обещании
	}, function(error) {
	});


}]);
})();
