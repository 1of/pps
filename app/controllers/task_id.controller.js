(function () {
'use strict';
app.controller('TaskId', ['$scope', 'tasks.repository', 'users.repository', 'comments.repository', '$routeParams', '$location', 'utils',  '$rootScope', '$interval', '$uibModal', '$sce', function($scope, tasksRepository, usersRepository, commentsRepository, $routeParams, $location, utils, $rootScope, $interval, $uibModal, $sce) {
	console.log('TaskId controller  OK!!!');
	$scope.adress = 'http://node4.fe.a-level.com.ua/';
	$scope.myinfo = "";
	$scope.myId = localStorage.getItem('userId');
	var id = $routeParams.taskId; //получаем из роутинга ID обещания! (taskID берется из app.routes.js)
//Получение обещания
	tasksRepository.getTasksById(id).then(function(response) {
		$scope.task = response.data;       //записываем информацию о нашем обещании
			usersRepository.getUserById($scope.task.user_id).then(function(response) {
		$scope.userByTask = response.data;       //записываем информацию о пользователе данного обещания
	}, function(error) {});

($scope.task.category_id == 1) ? ($scope.htmlPopoverCategory = $sce.trustAsHtml('<b>Обещание относится к категории</b><div class="label label-danger"> <b style="font-size: 14px; color: #fff">Привычки</b></div>') ): "";
($scope.task.category_id == 2) ? ($scope.htmlPopoverCategory = $sce.trustAsHtml('<b>Обещание относится к категории</b><div class="label label-danger"> <b style="font-size: 14px; color: #fff">Работа</b></div>') ): "";
($scope.task.category_id == 3) ? ($scope.htmlPopoverCategory = $sce.trustAsHtml('<b>Обещание относится к категории</b><div class="label label-danger"> <b style="font-size: 14px; color: #fff">Соревнования</b></div>') ): "";
($scope.task.category_id == 4) ? ($scope.htmlPopoverCategory = $sce.trustAsHtml('<b>Обещание относится к категории</b><div class="label label-danger"> <b style="font-size: 14px; color: #fff">Учеба</b></div>') ): "";
($scope.task.category_id == 5) ? ($scope.htmlPopoverCategory = $sce.trustAsHtml('<b>Обещание относится к категории</b><div class="label label-danger"> <b style="font-size: 14px; color: #fff">Покупки</b></div>') ): "";
($scope.task.category_id == 6) ? ($scope.htmlPopoverCategory = $sce.trustAsHtml('<b>Обещание относится к категории</b><div class="label label-danger"> <b style="font-size: 14px; color: #fff">Другое</b></div>') ): "";
$scope.htmlPopoverSubscribe = $sce.trustAsHtml('<b>Добавить обещание в отслеживаемые</b>');

		// Таймер для отображения оставшегося времени обещания
		var timer = $interval(function() { 

  		let currentTime = Date.now();
		let taskEndingTime = Date.parse($scope.task.time_limit);
		let finalCounter = taskEndingTime - currentTime;
		$scope.validateTime = finalCounter;
		let day=Math.floor((finalCounter)/(24*60*60*1000));
		let hour=Math.floor(((finalCounter)%(24*60*60*1000))/(60*60*1000));
		let min=Math.floor(((finalCounter)%(24*60*60*1000))/(60*1000))%60;
		let sec=Math.floor(((finalCounter)%(24*60*60*1000))/1000)%60%60;
		$scope.timeLeft = {
			day: day,
			hour: hour,
			min: min,
			sec: sec
		};
		if (day < 0) $interval.cancel(timer); 
	},1000);

	// функция очистки таймера
       $scope.stopTimer = function() {
      if (angular.isDefined(timer)) {
        $interval.cancel(timer);
        timer = undefined;
      }
	    }; 

	}, function(error) {
	});
//Получение пользователя
	usersRepository.getUserById(+$scope.myId).then(function(response) {
		$scope.user = response.data;       //записываем информацию о нашем пользователе
		$scope.myinfo = response.data.photo;
		$scope.mydata = response.data;
	}, function(error) {});



//Получение комментариев
	commentsRepository.getCommentsById(id).then(function(response) { //стягиваем все наши комментарии
		$scope.comments = response.data.map(function(item, i){
				return {
					task_id: item.task_id,
					user_id: item.user.id,
					content: item.content,
					date_added: item.date_added,
					photo: item.user.photo,
					firstname: item.user.firstname,
					lastname: item.user.firstname
				}
			});       

	}, function(error) {});
//Получение ставок Обещания
	tasksRepository.getBetsById(id).then(function(response) {
		$scope.bets = response.data; 
		console.log("ставки", $scope.bets);
		$scope.sumAllBets = $scope.bets.map(function(item){
			return item.value;
		}).reduce(function(sum, current) {
			return sum + current
		}, 0);

   $scope.maxBet = $scope.task.value - $scope.sumAllBets;
		}, function(error) { });
//Получение списка отслеживающих
	tasksRepository.getUsersWhoTracking(id).then(function(response) {
		$scope.trackingUsers = response.data; 
		}, function(error) { });

//Добавление ставки ставок Обещания
	$scope.betAmount = 0;
	
	$scope.inc = function() {
		$scope.betAmount++;
	};
	
	$scope.dec = function() {
		$scope.betAmount--;
	};
	
	$scope.addBet = function() {
		if ($scope.user.balance < 1) {
			utils.notify({message: 'Недостаточно средств на балансе', type: 'danger'});
			return
		} else {

        var data = { value: +$scope.betAmount};
			tasksRepository.addBetsById(+id, data).then(function(response) {
		}, function(error) {
			if (error.status == 403) {
				$scope.error = { 
					status: true,
					text: "Вы уже делали ставку на это обещание"
				};
			}
			
		});

		}


	};
//Подписаться на ставку
$scope.subscribe = function() {
	let data = { task_id: +id };
		usersRepository.addTrackingTask($scope.myId, data).then(function(response) {
		$scope.myTrackingTasks = response.data;
		}, function(error) {
		});
	};


// очищаем таймер при уничтожении scope
        $scope.$on('$destroy', function() {
          $scope.stopTimer();
        });

//кнопка Назад
$scope.backPath = function() {
	var prevUrl = $scope.history.length > 1 ? $scope.history.splice(-2)[0] : '/';
	$location.path(prevUrl);
};

//Открыть модальное окно со Списком ставок
				$scope.showTrackingUsersList = function() {
					var modalInstance = $uibModal.open({
						templateUrl: 'app/modals//trackingList/trackinglist.template.html',
						controller: 'Trackinglist',
						size: 'm',
						resolve: {
						   trackingUsersArr: function() {
						       return $scope.trackingUsers
						   }
						}
					});

				};

//Открыть модальное окно со Списком Отслеживающих
				$scope.showBetsList = function() {
					var modalInstance = $uibModal.open({
						templateUrl: 'app/modals/betsList/betslist.template.html',
						controller: 'Betslist',
						size: 'm',
						resolve: {
						   betsArr: function() {
						       return $scope.bets
						   }, 
						   taskArr: function() {
						       return $scope.task
						   },
						   sumAllBets: function() {
						       return $scope.sumAllBets
						   }
						   
						}
					});

				};
				$scope.imgArray = ['icons/habits.png', 'icons/career.png', 'icons/competitions.png', 'icons/study.png', 'icons/shoping.png', 'icons/other.png'];

				

}]);
})();
