
(function() {
    'use strict';
    app.factory('tasks.repository', ['webApi', '$http', function(webApi, $http) {
        return {
            getTasks: _getTasks,
            getTasksFiltered: _getTasksFiltered,
            getTasksById: _getTasksById,
            getProofsById: _getProofsById,
            addProofById: _addProofById,
            getBetsById: _getBetsById,
            addBetsById: _addBetsById,
            getCategories: _getCategories,
            addTask: _addTask,
            getUsersWhoTracking: _getUsersWhoTracking,
            updateTask: _updateTask

        };

        function _getTasks() {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks');
        }

        function _getTasksFiltered(data) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/?search=' + data);
        }

        function _getTasksById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/' + id);
        }

        function _getProofsById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/'+ id +'/proofs');
        }

        function _addProofById(id, data) {
            return $http.post(webApi.DOMAIN + '/api/v1/tasks/'+ id +'/proofs', data, {
                                                transformRequest: angular.identity,
                                                headers: {'Content-Type': undefined}
        });
        }

        function _getBetsById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/'+ id +'/bets');
        }

        function _addBetsById(id, data) {
            return $http.post(webApi.DOMAIN + '/api/v1/tasks/'+ id +'/bets', data);
        }

        function _getCategories() {
            return $http.get(webApi.DOMAIN + '/api/v1/categories')
        }

        function _addTask(data) {
            return $http.post(webApi.DOMAIN + '/api/v1/tasks/', data, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            });
        }
        function _getUsersWhoTracking(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/'+ id +'/tracking_users');
        }
        function _updateTask(id, data) {
            return $http.put(webApi.DOMAIN + '/api/v1/tasks/' + id, data);
        }

    }]);
})();
