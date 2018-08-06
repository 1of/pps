(function () {
'use strict';
	app.controller('Index', function($scope) {


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
		$scope.currentCategory = $scope.questions[0];
		setTimeout(function() {
			$scope.activeElement = angular.element( document.querySelector( '.faq-item0' ) );
			$scope.activeElement.addClass('active');
		}, 50);
		$scope.changeCategory = function(category) {
			$scope.currentCategory = $scope.questions[category];
			$scope.questionOpened = null;
			$scope.activeElement.removeClass('active');
			$scope.activeElement = angular.element( document.querySelector( '.faq-item' + category ) );
			$scope.activeElement.addClass('active');
		}

		$scope.openFAQ = function(id) {
			if($scope.currentCategory[id].opened !== true) {
				for (var i = 0; i < $scope.currentCategory.length ; i++) {
						$scope.currentCategory[i].opened = false;
				}
				$scope.currentCategory[id].opened = true;
			} else {
				$scope.currentCategory[id].opened = false;
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
	        });
	    };
	});
})();
jQuery(document).ready(function(){
	setTimeout(function() {
		 $('#3D').mousemove(function(e){
	     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
	     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
	     $('#3D').css('text-shadow', +rYP/110+'px '+rXP/180+'px rgba(227,6,19,.8), '+rYP/108 +'px '+rXP/160+'px rgba(255,237,0,1), '+rXP/170+'px '+rYP/112+'px rgba(0,159,227,.7)');
	 	 });
	     $('#3D1').mousemove(function(z){
	     var rXP1 = (z.pageX - this.offsetLeft-$(this).width()/2);
	     var rYP1 = (z.pageY - this.offsetTop-$(this).height()/2);
	     $('#3D1').css('text-shadow', +rYP1/810 +'px '+rXP1/280 +'px rgba(227,6,19,.8), '+rYP1/708 +'px '+rXP1/260 +'px rgba(255,237,0,1), '+rXP1/270 +'px '+rYP1/812 +'px rgba(0,159,227,.7)');
	     });
	     $('#3D2').mousemove(function(z){
	     var rXP1 = (z.pageX - this.offsetLeft-$(this).width()/2);
	     var rYP1 = (z.pageY - this.offsetTop-$(this).height()/2);
	     $('#3D2').css('text-shadow', +rYP1/1410 +'px '+rXP1/280 +'px rgba(227,6,19,.8), '+rYP1/1208 +'px '+rXP1/260 +'px rgba(255,237,0,1), '+rXP1/270 +'px '+rYP1/1412 +'px rgba(0,159,227,.7)');
	     });
	}, 2000);


});
//______________________________________________________________SLICK SLIDER__________________________________
jQuery(document).ready(function(){
	setTimeout(function() {
		var mql = window.matchMedia('all and (max-width: 400px)');
		var mql1 = window.matchMedia('all and (max-width: 768px)');
		var mql2 = window.matchMedia('all and (max-width: 1024px)');
		if (mql.matches) {
			$('.face-slider').slick({
			draggable: false,
			arrows: false,
			centerMode: true,
			centerPadding: '0%',
		  	slidesToShow: 1,
		  	variableWidth: true,
		  	focusOnSelect: true,
		  	cssEase: 'ease-in',
		  	asNavFor: '.text-slider',
		  	
			
			});
		} else if (mql1.matches) {
			$('.face-slider').slick({
			arrows: false,
			draggable: false,
			centerMode: true,
			centerPadding: '0%',
		  	slidesToShow: 3,
		  	variableWidth: true,
		  	focusOnSelect: true,
		  	cssEase: 'ease-in',
		  	asNavFor: '.text-slider',
		  	
			
			});
			
		} else if (mql2.matches) {
			$('.face-slider').slick({
			arrows: false,
			draggable: false,
			centerMode: true,
			centerPadding: '0%',
		  	slidesToShow: 5,
		  	variableWidth: true,
		  	focusOnSelect: true,
		  	cssEase: 'ease-in',
		  	asNavFor: '.text-slider',
		  	
			
			});
			
		} else { $('.face-slider').slick({
			draggable: false,
			centerMode: true,
			centerPadding: '0%',
		  	slidesToShow: 7,
		  	variableWidth: true,
		  	focusOnSelect: true,
		  	cssEase: 'ease-in',
		  	asNavFor: '.text-slider',
		  	
			
			});
		}
		if (mql.matches) {
			$('.text-slider').slick({
			autoplay: true,
			autoplaySpeed: 5000,
		  	slidesToShow: 1,
		  	arrows: false,
		  	pauseOnFocus: false,
		  	cssEase: 'ease-in',
		  	asNavFor: '.face-slider'
		  	
			});
			
		} else {
			$('.text-slider').slick({
			autoplay: true,
			autoplaySpeed: 5000,
			dots: true,
		  	slidesToShow: 1,
		  	arrows: false,
		  	pauseOnFocus: false,
		  	cssEase: 'ease-in',
		  	asNavFor: '.face-slider'
		  	
			});
		}
	}, 5000);
});