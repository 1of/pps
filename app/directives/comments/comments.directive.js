(function(){
	'use strict';

	app.directive('comments', commentsController);

	function commentsController(){
		return{
			restrict: 'E',
			templateUrl: './app/directives/comments/comments.template.html',
			scope: {
				comments: '=commentslist',
				userIds: '=userids',
				mydata: '='

			},
			controller: ['$scope', '$rootScope', 'users.repository', 'comments.repository', '$routeParams', function($scope, $rootScope, usersRepository, commentsRepository,  $routeParams) {
				$scope.adress = 'http://node4.fe.a-level.com.ua/';
				var taskId = $routeParams.taskId;

				var myId = localStorage.getItem('userId');
				usersRepository.getUserById(+myId).then(function (response){
					$scope.myfoto = response.data.photo;
				}, function (error){ });

				$scope.commentText = "";
				$scope.sendComment = function() {

					if ($scope.commentText.length < 2) return 
						else {
									$scope.user_obj = {
									task_id: +taskId,
									user_id: +myId,
									content: $scope.commentText,
									date_added: new Date().toISOString(),
									photo: $scope.mydata.photo,
									firstname: $scope.mydata.firstname,
									lastname: $scope.mydata.lastname
								};

								let data = {
									"task_id": +taskId,	
								    "user_id": +myId,
								    "content": $scope.commentText
								}

								commentsRepository.addComment(data).then(function (response){
									$scope.comments.push($scope.user_obj);
									$scope.commentText = "";
								}, function (error){ });

						}
				};


				$scope.$watch('comments', function(newValue, oldValue) {
					if (newValue !== oldValue) {

//Добавить в массив с комментариями фото и имена участников
						// $scope.comments.forEach(function(item, i, arr) { 
						// 	usersRepository.getUserById(item.user_id).then(function (response){
						// 		$scope.comments[i].photo = response.data.photo;
						// 		$scope.comments[i].firstname = response.data.firstname;
						// 		$scope.comments[i].lastname = response.data.lastname;

						// 	}, function (error){ console.log(error) });
						// });

					}
				});

			}]

		}
	}

})();