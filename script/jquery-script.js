jQuery(document).ready(function(){

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

});
//______________________________________________________________SLICK SLIDER__________________________________
jQuery(document).ready(function(){
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
});