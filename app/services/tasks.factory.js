(function() {
    'use strict';
    app.factory('tasks.repository', ['webApi', '$http', function(webApi, $http) {
        return {
            getTasks: _getTasks,
            getTasksById: _getTasksById,
            getProofsById: _getProofsById,
            addProofById: _addProofById,
            getBetsById: _getBetsById,
            addBetsById: _addBetsById

        };

        function _getTasks() {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks');
        }

        function _getTasksById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/' + id);
        }

        function _getProofsById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/'+ id +'/proofs');
        }

        function _addProofById(id, data) {
            return $http.post(webApi.DOMAIN + '/api/v1/tasks/'+ id +'/proofs', data, {
                // transformRequest: angular.identity,
                headers: {'Content-Type': 'x-www-form-urlencoded'}
            });
        }
        function _getBetsById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/'+ id +'/bets');
        }

        function _addBetsById(id, data) {
            return $http.post(webApi.DOMAIN + '/api/v1/tasks/'+ id +'/bets', data);
        }

    }]);
})();