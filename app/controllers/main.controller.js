(function () {
'use strict';
	app.controller('Main', function($scope) {
		console.log("OK_Main");
		$scope.x = 2;
		console.log($scope);
	});

	app.directive("scroll", function ($window) {
	    return function($scope, element, attrs) {
	        angular.element($window).bind("scroll", function() {
	             if (this.pageYOffset >= $window.visualViewport.height - angular.element(document.querySelector("#menu"))[0].clientHeight) {
	                 $scope.boolChangeClass = true;
	             } else {
	                 $scope.boolChangeClass = false;
	             }
	            $scope.$apply();
	        });
	    };
	});

})();
