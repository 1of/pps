(function() {
'use strict';
app.service('utils', ['notify', function(notify) {
	this.notify = function(data) {
		notify.closeAll();
		notify.config({
			startTop: 65
		});
		var defaults = {
			message: '',
			type: 'alert',
			duration: 5000
		};
		data = angular.extend(defaults, data);
		notify({message: data.message, classes: 'alert-box-shadow alert-' + data.type});
	};
	this.isLogged = function() {
		return localStorage.getItem('authToken') ? true : false;
	};
}]);
})();