(function () {
'use strict';
app.controller('TaskId', ['$scope', 'tasks.repository', 'users.repository', 'comments.repository', '$routeParams', '$location', 'utils',  '$rootScope',  function($scope, tasksRepository, usersRepository, commentsRepository, $routeParams, $location, utils, $rootScope) {
	console.log('TaskId controller  OK!!!');

	// $scope.commentText = "";
	$scope.adress = 'http://node4.fe.a-level.com.ua/';
	$scope.myinfo = "";
	$scope.myId = localStorage.getItem('userId');
	var id = $routeParams.taskId; //получаем из роутинга ID обещания! (taskID берется из app.routes.js)
	
	tasksRepository.getTasksById(id).then(function(response) {
		$scope.task = response.data;       //записываем информацию о нашем обещании
		console.log($scope.task);
	}, function(error) {
	});

	usersRepository.getUserById($scope.myId).then(function(response) {
		$scope.user = response.data;       //записываем информацию о нашем пользователе
		$scope.myinfo = response.data.photo;
		$scope.mydata = response.data;
		console.log($scope.user);
	}, function(error) {});


	commentsRepository.getCommentsById(id).then(function(response) { //стягиваем все наши комментарии
		$scope.comments = response.data.map(function(item, i){
				return {
					task_id: item.task_id,
					user_id: item.user_id,
					content: item.content,
					date_added: item.date_added,
					photo: "",
					firstname: "",
					lastname: ""
				}
			});       

	}, function(error) {});
//получения ставок Обещания
	tasksRepository.getBetsById(id).then(function(response) {
		$scope.bets = response.data; 
		console.log("ставки", $scope.bets);
		}, function(error) { });

//Добавление ставки ставок Обещания
	$scope.betAmount = 0;
	
	$scope.inc = function() {
		$scope.betAmount++;
	};
	
	$scope.dec = function() {
		$scope.betAmount--;
	};
	
	$scope.addBet = function() {

		console.log($scope.betAmount, +id );
        var data = { value: +$scope.betAmount};
			tasksRepository.addBetsById(+id, data).then(function(response) {
		console.log("ответ по ставке+", $scope.res);
		}, function(error) {
			if (error.status == 403) {
				$scope.error = { 
					status: true,
					text: "Вы уже делали ставку на это обещание сегодня"
				};
			}
			console.log("ответ по ставке-", error); 
		});
	};
//Подписаться на ставку
$scope.subscribe = function() {
	let data = { task_id: +id };
		usersRepository.addTrackingTask($scope.myId, data).then(function(response) {
		console.log("ответ по подписке+", response);
		$scope.myTrackingTasks = response.data;
		}, function(error) {

			console.log("ответ по подписке-", error); 
		});
	};



//кнопка Назад
$scope.backPath = function() {
	var prevUrl = $scope.history.length > 1 ? $scope.history.splice(-2)[0] : '/';
	$location.path(prevUrl);
};

}]);
})();
