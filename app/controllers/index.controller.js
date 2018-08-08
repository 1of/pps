(function () {
'use strict';
	app.controller('Index', function($scope) {

		$scope.aims = [
			[
				{
					aim: `Я обещаю покорить Эверест до 1 января 2019 года...`
				},
				{
					aim: `Я обещаю пробежать харьковский марафон "Освобождение" 19 августа 2018 года...`
				},
				{
					aim: `Я обещаю выиграть грант на бесплатное обучение в Швейцарии в сентябре 2018 года...`
				},

			],
			[
				{
					aim: `Я обещаю бросить курить до 1 сентября 2018 года...`
				},
				{
					aim: `Я обещаю делать утреннюю зарядку каждый день...`
				},
				{
					aim: `Я обещаю прочитывать по 1 новой книжке каждый месяц...`
				},

			],
			[
				{
					aim: `Я обещаю увеличить свою зароботную плату в 2 раза до 1 декабря 2018 года...`
				},
				{
					aim: `Я обещаю составить свое резюме и подать его в 100 IT-компаний до конца лета 2018...`
				},
				{
					aim: `Я обещаю создать и заполнить свой профиль в LinkedIn...`
				},

			],
			[
				{
					aim: `Я обещаю выполнять все домашки на курсах A-level...`
				},
				{
					aim: `Я обещаю пройти курсы и освоить новую специальность до конца лета 2018...`
				},
				{
					aim: `Я обещаю закончить университет с красным дипломом...`
				},

			],
			[
				{
					aim: `Я обещаю купить родителям круиз по средиземноморью в 2019 году...`
				},
				{
					aim: `Я обещаю купить жене годовой абонемент в тренажерный зал на 2019 год...`
				},
				{
					aim: `Я обещаю прыгнуть с парашютом до конца 2018 года...`
				},

			],
			[
				{
					aim: `Я обещаю починить смеситель до конца этого месяца...`
				},
				{
					aim: `Я обещаю научить сына плавать до 10 лет...`
				},
				{
					aim: `Я обещаю, что сервис BetWill вам понравится...`
				},

			],

		];

		$scope.currentCategory = $scope.aims[0];

		$scope.changeCategory = function(category) {
			$scope.currentCategory = $scope.aims[category];
		}


		$scope.questions = [
			[
				{
					opened: false,
					question: `Что необходимо для активации обещания?`,
					answer: `Для активации обещания необходимо соблюдение 3-ех
							 условий: 1)Наличие вашей минимальной ставки
							 2)Наличие минимальной ставки вашего поручителя
							 3)Наличие судьи`
				},
				{
					opened: false,
					question: 'Как проверяется выполнение обещания?',
					answer: `Для проверки выполнения обещания вы назначаете судью.
							 Судья, по окончанию времени выполнения обещания,
							 подтверждает его выполнение. При
							 возникновении спора, окончательное решение принимается
							 модератором. Также подтверждение модератора является
							 обязательным, когда банк ставок обещания больше или равен
							 5000 willcoin-ов.`
				},
				{
					opened: false,
					question: 'Как формируется рейтинг участников?',
					answer: `Рейтинг участников формируется исходя из суммарного
							 количества людей, сделавших ответные ставки на все
							 обещания пользователя, а также из банков выигранных
							 ставок, численности отслеживающих пользователей и
							 количества просмотров.`
				},
				{
					opened: false,
					question: 'Как мне стать поручителем?',
					answer: `Для того чтобы стать поручителем, достаточно нажать
							 кнопку "Поручиться", на странице обещания и ввести
							 сумму вашего взноса(не менее минимальной ставки).`
				},
				{
					opened: false,
					question: 'Как мне стать судьей?',
					answer: `Судью назначает автор обещания, после чего вам
							 прийдет уведомление, подтверждая которое вы
							 становитесь судьей.`
				},
			],
			[
				{
					opened: false,
					question: 'Какая сумма минимальной ставки?',
					answer: 'Сумма минимальной ставки = 100 willcoins'
				},
				{
					opened: false,
					question: 'Какая сумма максимальной ставки?',
					answer: 'Сумма максимальной ставки = 100 000 willcoins'
				},
				{
					opened: false,
					question: 'На что можно потратить выигранные willcoins?',
					answer: `Willcoin можно обменять на любые призы в нашем
							 "Магазине желаний", также можно пожертвовать их
							 на благотворительность.`
				},
				{
					opened: false,
					question: 'Какой курс willcoin к гривне?',
					answer: '1 willcoin = 1грн'
				},
			],
			[
				{
					opened: false,
					question: 'Как решаются споры с судьей?',
					answer: `В спорах с судьей, а также в любых
					 		 конфликтах с другими пользователями
					 		 сайта окончательное решение принимается
					 		 модератором.`
				},
				{
					opened: false,
					question: 'Как решаются споры с модератором?',
					answer: `В случае не согласия с решением модератора
							 вы имеете полное право обратиться в суд за
							 защитой своих прав, свобод и законных
							 интересов.`
				},
			]
		];
		$scope.currentFAQCategory = $scope.questions[0];
		setTimeout(function() {
			$scope.activeElement = angular.element( document.querySelector( '.faq-item0' ) );
			$scope.activeElement.addClass('active');
		}, 50);
		$scope.changeFAQCategory = function(category) {
			$scope.currentFAQCategory = $scope.questions[category];
			$scope.questionOpened = null;
			$scope.activeElement.removeClass('active');
			$scope.activeElement = angular.element( document.querySelector( '.faq-item' + category ) );
			$scope.activeElement.addClass('active');
		}

		$scope.openFAQ = function(id) {
			if($scope.currentFAQCategory[id].opened !== true) {
				for (var i = 0; i < $scope.currentFAQCategory.length ; i++) {
						$scope.currentFAQCategory[i].opened = false;
				}
				$scope.currentFAQCategory[id].opened = true;
			} else {
				$scope.currentFAQCategory[id].opened = false;
			}
		}


	});
	app.directive("scroll", function ($window) {

	    return function($scope, element, attrs) {
	        angular.element($window).bind("scroll", function() {
	             if (this.pageYOffset <= $window.visualViewport.height - angular.element(document.querySelector("#menu"))[0].clientHeight || this.pageYOffset >= $window.visualViewport.height + angular.element(document.querySelector("#how"))[0].clientHeight + angular.element(document.querySelector("#category"))[0].clientHeight + angular.element(document.querySelector("#who"))[0].clientHeight && this.pageYOffset <= $window.visualViewport.height + angular.element(document.querySelector("#how"))[0].clientHeight + angular.element(document.querySelector("#category"))[0].clientHeight + angular.element(document.querySelector("#who"))[0].clientHeight + angular.element(document.querySelector(".parallax__layer2"))[0].clientHeight - angular.element(document.querySelector("#menu"))[0].clientHeight ) {
	                 $scope.boolChangeClass = false;
	             }else {
	             	$scope.boolChangeClass = true;
	             }
	            $scope.$apply();
angular.element($window).off('scroll');
	        });

	    };

	});
})();

