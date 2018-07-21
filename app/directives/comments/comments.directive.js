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
		controller: ['$scope', "$rootScope", 'users.repository', function($scope, $rootScope, usersRepository) {
			console.log('userID',$scope.userIds, 'comments',$scope.comments);
			$scope.usersPhoto = [];
			$scope.usersPhoto = $scope.comments.map(function(item, i){
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
			$scope.usersPhoto.forEach(function(item, i) { 

usersRepository.getUserById(item.user_id).then(function (response){
			$scope.usersPhoto[i].photo = response.data.photo;
			$scope.usersPhoto[i].firstname = response.data.firstname;
			$scope.usersPhoto[i].lastname = response.data.lastname;
console.log(item, i);
           console.log($scope.usersPhoto);
        }, function (error){ }
        );
			});



		}]

	}
}

})();