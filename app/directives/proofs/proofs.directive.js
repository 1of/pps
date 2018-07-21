(function(){
'use strict';

app.directive('proofs', proofsController);

function proofsController(){
	return{
		restrict: 'E',
		templateUrl: './app/directives/proofs/proofs.template.html',
		scope: {}, 
		controller: ['$scope', "$rootScope", function($scope, $rootScope) {
			
		}]

	}
}

})();