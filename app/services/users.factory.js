(function() {
    'use strict';
    app.factory('users.repository', ['webApi', '$http', function(webApi, $http) {
        return {
            getUsersTasks: _getUsersTasks,
            getUsersTrackingTasks: _getUsersTrackingTasks,
            getUserById: _getUserById,
            getAllUsers: _getAllUsers,
            updateUser: _updateUser,
            addTrackingTask: _addTrackingTask
        };

        function _getUsersTasks(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/users/' + id + '/tasks');
        }

        function _getUsersTrackingTasks(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/users/' + id + '/tracking');
        }

        function _getUserById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/users/' + id);
        } 

        function _getAllUsers() {
            return $http.get(webApi.DOMAIN + '/api/v1/users/');
        }

        function _updateUser(id, data) {
            return $http.put(webApi.DOMAIN + '/api/v1/users/' + id, data);
        }

        function _addTrackingTask(userId, taskId) {
            return $http.post(webApi.DOMAIN + '/api/v1/users/' + userId + '/tracking', taskId);
        }

    }]);
})();