(function() {
    'use strict';
    app.factory('users.repository', ['webApi', '$http', function(webApi, $http) {
        return {
            getUserById: _getUserById
        };

        function _getUserById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/users/' + id);
        }

    }]);
})();