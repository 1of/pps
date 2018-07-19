(function () {
    'use strict';

    app.directive('userInfo', userInfo);

    function userInfo() {
        return {
            restrict: 'EA',
            templateUrl: './app/directives/user-info/user-info.template.html',
            scope: {
                user: '='
            },
            controller: ['$scope', '$rootScope', function ($scope, $rootScope) {
                
            }]
        }
    }
})();