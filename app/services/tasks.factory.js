(function() {
    'use strict';
    app.factory('tasks.repository', ['webApi', '$http', function(webApi, $http) {
        return {
            getTasks: _getTasks,   
        };

        function _getTasks() {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks');
        }
        
    }]);
})();