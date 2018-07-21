(function() {
    'use strict';
    app.factory('tasks.repository', ['webApi', '$http', function(webApi, $http) {
        return {
            getTasks: _getTasks,
            getTasksById: _getTasksById            
        };

        function _getTasks() {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks');
        }

        function _getTasksById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/' + id);
        }

    }]);
})();