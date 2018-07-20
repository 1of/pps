(function () {
'use strict';
app.controller('TaskId', ['$scope', 'tasks.repository', 'users.repository', 'comments.repository', '$routeParams', '$location', 'utils',  '$rootScope',  function($scope, tasksRepository, usersRepository, commentsRepository, $routeParams, $location, utils, $rootScope) {
	console.log('TaskId controller  OK!!!');

	console.log("id=", $routeParams.taskId);

	var id = $routeParams.taskId; //получаем из роутинга ID обещания! (taskID берется из app.routes.js)
	//var userId = $routeParams.taskUserName; 
	//console.log(userId, id);
	tasksRepository.getTasksById(id).then(function(responce) {
		//исправить, когда будет доступен userId из роутинга
		console.log("Task:", responce.data);
		$scope.task = responce.data;       //записываем в scope информацию о нашем обещании
			usersRepository.getUserById(responce.data.user_id).then(function(responce) {
				console.log("User:", responce.data);
		$scope.user = responce.data;       //записываем в scope информацию о нашем пользователе
	}, function(error) {});


		
	}, function(error) {
	});

	commentsRepository.getCommentsById(id).then(function(responce) {
		$scope.comments = responce.data;       //записываем в scope информацию о нашем пользователе
		console.log('Comments',responce.data);

		$scope.userIds = [];

		$scope.comments.forEach(function(comment) {
			  $scope.userIds.push(comment.user_id)
		});


	}, function(error) {});


}]);
})();
