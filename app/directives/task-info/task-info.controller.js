(function () {
    'use strict';

    app.directive('taskInfo', taskInfo);

    function taskInfo() {
        return {
            restrict: 'EA',
            templateUrl: './app/directives/task-info/task-info.template.html',
            scope: {
                task: '=task'
            },
            controller: ['$scope', '$rootScope', function ($scope, $rootScope) {
                
            }]
        }
    }
})();