(function() {
    'use strict';
    app.factory('tasks.repository', ['webApi', '$http', function(webApi, $http) {
        return {
            getTasks: _getTasks,
            getTasksById: _getTasksById,
            getUserById: _getUserById,
            /*updateBookById: _updateBookById,
            addBook: _addBook,
            deleteBook: _deleteBook,
            searchBy: _searchBy,*/
        };

        function _getTasks() {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks');
        }

        function _getTasksById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/tasks/' + id);
        }

        function _getUserById(id) {
            return $http.get(webApi.DOMAIN + '/api/v1/users/' + id);
        }
/*
        function _updateBookById(id, data) {
        	return $http.put(webApi.DOMAIN + '/api/v2/books/' + id, data);
        }

        function _addBook(data) {
            return $http.post(webApi.DOMAIN + '/api/v2/books/', data);
        }

        function _deleteBook(id) {
            return $http.delete(webApi.DOMAIN + '/api/v2/books/' + id);
        }

        function _searchBy(string) {
            return $http.get(webApi.DOMAIN + '/api/v2/search?string=' + string);
        }*/
    }]);
})();