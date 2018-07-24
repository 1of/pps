(function() {
    'use strict';
    app.factory('comments.repository', ['webApi', '$http', function(webApi, $http) {
        return {
            addComment: _addComment,
            getCommentsById: _getCommentsById

        };

        function _addComment(data) {
            return $http.post(webApi.DOMAIN + '/api/v1/comments', data);
        }

        function _getCommentsById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/' + id + '/comments');
        }

    }]);
})();