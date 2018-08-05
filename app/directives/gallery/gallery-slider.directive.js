(function(){
	'use strict';

	app.directive('gallery', GalleryController);

	function GalleryController(){
		return{
			restrict: 'E',
			templateUrl: './app/directives/gallery/gallery-slider.template.html',
			scope: {
				proofs: '=proofs'

			},
			controller: ['$scope', '$rootScope', 'tasks.repository', '$routeParams', function($scope, $rootScope, tasksRepository, $routeParams) {
				$scope.adress = 'http://node4.fe.a-level.com.ua/';
				var taskId = $routeParams.taskId;

tasksRepository.getProofsById(taskId).then(function(response) {
					$scope.proofsPhotos = response.data; 
				}, function(error) { });


    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.proofsPhotos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.proofsPhotos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };


				$scope.$watch('proofs', function(newValue, oldValue) {
					if (newValue !== oldValue) {

   $scope.proofsPhotos = newValue;

					}
				});

			}]

		}
	}

})();