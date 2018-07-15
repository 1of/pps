(function () {
'use strict';
app.controller('TaskId', ['$scope', 'tasks.repository', '$routeParams', '$location', 'utils',  function($scope, tasksRepository, $routeParams, $location, utils) {
	console.log('TaskId controller  OK!!!');

	console.log("id=", $routeParams.taskId);

	var id = $routeParams.taskId; //получаем из роутинга ID обещания! (taskID берется из app.routes.js)

	tasksRepository.getTasksById(id).then(function(responce) {
		console.log("responce = ", responce.data.user_id);

			tasksRepository.getUserById(responce.data.user_id).then(function(responce) {
		console.log("responce User = ", responce.data);
		$scope.user = responce.data;       //записываем в scope информацию о нашем пользователе
	}, function(error) {});


		$scope.task = responce.data;       //записываем в scope информацию о нашем обещании
	}, function(error) {
	});


}]);
})();
