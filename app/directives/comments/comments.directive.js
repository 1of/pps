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
			console.log('userID',$scope.userIds);
			

		}]

	}
}

})();