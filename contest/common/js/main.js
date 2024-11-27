/**
 * Created by JE on 2017-07-05.
 */
// $(window).load(function(){
(function($) {
	/* 메인 비쥬얼 */
	var visualSlide = $('.mv-slide');
	visualSlide.owlCarousel({
		items: 1,
		loop: false,
		rewind:true,
		nav: true,
		dots: true,
		autoplay: true,
		autoplayTimeout:5000,
		smartSpeed:450,
		dotsContainer: '.customDots',
		addClassActive:true
	});
		
	$('.visual .playBtn').on('click', function(e) {
		if($( this ).is(".stop" )){
			$( this ).removeClass("stop");
			$( this ).addClass("play")			
			visualSlide.trigger('stop.owl.autoplay');
			$(this).children('.sr-only').html('play');				
		}
		else if($( this ).is(".play" )){
			$( this ).removeClass("play");
			$( this ).addClass("stop")
			visualSlide.trigger('play.owl.autoplay',[3000]);
			$(this).children('.sr-only').html('stop');				
		}

		e.preventDefault();
	});
	//$('.playBtn').click();
	
	/*관련콘텐츠*/
	var modirectLink = $('.dlink.pc-blind');
	modirectLink.owlCarousel({
		loop: false,
		nav: true,
		dots: true,
		mouseDrag: false,
		dotsContainer: '#customDots',
		responsiveRefreshRate: 0,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		margin: 0,
		responsive:{
			0:{
				items:1
			},
			600:{
				
				items:1
			},
			992:{
				items:4
			}
		}
	});

	var pcdirectLink = $('.dlink.mo-blind');
	pcdirectLink.owlCarousel({
		loop: false,
		nav: true,
		dots: true,
		mouseDrag: false,
		dotsContainer: '#customDots',
		responsiveRefreshRate: 0,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		margin: 0,
		responsive:{
			0:{
				items:1
			},
			600:{
				
				items:1
			},
			992:{
				items:2
			}
		}
	});

	/* 팝업존 */
	var popupZone = $('.pop-zone');
	popupZone.owlCarousel({
		items: 1,
		loop: true,		
		autoplay: true,
		autoplayTimeout:5000,
		smartSpeed:450		
	});
	
	$('.popup-zone .playBtn').on('click', function(e) {
		
		if($( this ).is(".stop" )){
			$( this ).removeClass("stop");
			$( this ).addClass("play")			
			popupZone.trigger('stop.owl.autoplay');
			$(this).children('.sr-only').html('play');				
		}
		else if($( this ).is(".play" )){
			$( this ).removeClass("play");
			$( this ).addClass("stop")
			popupZone.trigger('play.owl.autoplay',[3000]);
			$(this).children('.sr-only').html('stop');				
		}
		e.preventDefault();
	});
	
	var popupZone2 = $('.owlPopupZone');
	function Carousel_onTranslated() {
		popupZone2.trigger('play.owl.autoplay');
		popupZone2.attr('data-carousel-autoplay-status', 'Y');
	}
	popupZone2.owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		autoplay: true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		smartSpeed:450,
		onTranslated: Carousel_onTranslated
	});
	$('.popup-zone .owl-dots a').on('click', function(e) {
		$('.owl-item a').attr('tabindex', '-1');
		setTimeout(() => {
			popupZone2.trigger('stop.owl.autoplay');
			popupZone2.attr('data-carousel-autoplay-status', 'N');
			$('.owl-item.active a').attr('tabindex', '0');
		}, "500");
	});
	$('.popup-zone .owlPlayBtn').on('click', function(e) {
		popupZone2.trigger('play.owl.autoplay');
		popupZone2.attr('data-carousel-autoplay-status', 'Y');
		$('.owl-item a').attr('tabindex', '-1');
	});
	$('.popup-zone .owlStopBtn').on('click', function(e) {
		popupZone2.trigger('stop.owl.autoplay');
		popupZone2.attr('data-carousel-autoplay-status', 'N');
		$('.owl-item.active a').attr('tabindex', '0');
	});
	
})(jQuery);

// });