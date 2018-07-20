(function () {
    'use strict';

    app.directive('userInfo', userInfo);

    function userInfo() {
        return {
            restrict: 'EA',
            templateUrl: './app/directives/user-info/user-info.template.html',
            scope: {
                user: '=',
                trackingTasks: '=',
                tasks: '='
            },
            controller: ['$scope', '$rootScope', '$routeParams', function ($scope, $rootScope, $routeParams) {
                
            }]
        }
    }
})();