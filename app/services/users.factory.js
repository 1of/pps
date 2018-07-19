(function() {
    'use strict';
    app.factory('users.repository', ['webApi', '$http', function(webApi, $http) {
        return {
            getUsersTasks: _getUsersTasks,
            getUserById: _getUserById,
            getAllUsers: _getAllUsers            
        };

        function _getUsersTasks(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/users/' + id + '/tasks');
        }

        function _getUserById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/users/' + id);
        } 

        function _getAllUsers() {
            return $http.get(webApi.DOMAIN + '/api/v1/users/');
        }

    }]);
})();