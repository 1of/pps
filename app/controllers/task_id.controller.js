(function () {
'use strict';
app.controller('TaskId', ['$scope', 'tasks.repository', 'users.repository', 'comments.repository', '$routeParams', '$location', 'utils',  '$rootScope',  function($scope, tasksRepository, usersRepository, commentsRepository, $routeParams, $location, utils, $rootScope) {
	console.log('TaskId controller  OK!!!');
	$scope.commentText = "";
	$scope.myinfo = "";
	$scope.myId = localStorage.getItem('userId');
	var id = $routeParams.taskId; //получаем из роутинга ID обещания! (taskID берется из app.routes.js)
	
	tasksRepository.getTasksById(id).then(function(response) {
		$scope.task = response.data;       //записываем информацию о нашем обещании
	}, function(error) {
	});

	usersRepository.getUserById($scope.myId).then(function(response) {
		$scope.user = response.data;       //записываем информацию о нашем пользователе
		$scope.myinfo = response.data.photo;
		$scope.mydata = response.data;
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

//Добавить в массив с комментариями фото и имена участников
		$scope.comments.forEach(function(item, i, arr) { 
			console.log(item, i, arr);
			usersRepository.getUserById(item.user_id).then(function (response){
			$scope.comments[i].photo = response.data.photo;
			$scope.comments[i].firstname = response.data.firstname;
			$scope.comments[i].lastname = response.data.lastname;
        }, function (error){ });
			});
	}, function(error) {});

//Отправить комментарий
$scope.sendComment = function(iserId, taskId, message) {
	if (message.length < 2) return
	let data = {
	"task_id": taskId,
    "user_id": iserId,
    "content": message
	}
	commentsRepository.addComment(data).then(function (response){      
$scope.sendNewCommentToDirective();
	}, function (error){ });
}

$scope.$on("myEventToSendDataForComment", function (event, args) {
   $scope.user_obj = {
				   	task_id: args.task_id,
					user_id: args.user_id,
					content: args.comment,
					date_added: new Date().toISOString(),
					photo: $scope.myinfo,
					firstname: $scope.mydata.firstname,
					lastname: $scope.mydata.lastname
   }
   $scope.sendComment(args.user_id, args.task_id, args.comment); //вызов функции отправки комментария
});

$scope.sendNewCommentToDirective = function(){
   $scope.$broadcast("myEventToRenderAllComments", {newcomments: $scope.user_obj}); //отправить комментарий в директиву COMMENTS
};


}]);
})();
