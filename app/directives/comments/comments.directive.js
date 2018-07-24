(function(){
'use strict';

app.directive('comments', commentsController);

function commentsController(){
	return{
		restrict: 'E',
		templateUrl: './app/directives/comments/comments.template.html',
		scope: {
			comments: '=commentslist',
			userIds: '=userids'

		},
		controller: ['$scope', '$rootScope', 'users.repository', 'comments.repository', '$routeParams', function($scope, $rootScope, usersRepository, commentsRepository,  $routeParams) {

			var taskId = $routeParams.taskId;
			var myId = localStorage.getItem('userId');

			usersRepository.getUserById(+myId).then(function (response){
			$scope.myinfo = response.data.photo;
			$rootScope.myfoto = response.data.photo;
		}, function (error){ });

$scope.initSendComment = function(){
   $scope.$emit("myEventToSendDataForComment", {comment: $scope.commentText, user_id: +myId, task_id: +taskId});
};

$scope.$on("myEventToRenderAllComments", function (event, args) {
	$scope.comments.push(args.newcomments);
	$scope.commentText = "";
});




		}]

	}
}

})();