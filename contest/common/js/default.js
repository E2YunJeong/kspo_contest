var $lnbList =  $('.lnb-list');
var $lnb = $('.lnb-list > li > a');
var $searchIcon = $('.search a');
var $lnbWrap = $('.lnb-wrap');
var $lnbInner = $('.lnb-inner');
var $sm = $('.sm');
var $smBg = $('.sm-bg');
var $searchWrap = $('.search-wrap');
var $totalNewsWrap = $('.totalNews');
var $totalNews = $('.total-news a');


var overlayShow = function() {
	overlayHide();
	var docHeight = $(document).height();
	$("body").append("<div id='overlay'></div>");
	$("#overlay").height(docHeight);
};
var overlayHide = function() {
	var docHeight = $(document).height();
	$("#overlay").remove();
};

//띠배너 컨트롤
$('.topadctrl').click(function(event) {
	if ($('#topAd').hasClass('off')){
		$('#topAd').removeClass('off')
		$('#topAd .item').slideDown()
	}else{
		$('#topAd').addClass('off')
		$('#topAd .item').slideUp()
	}
});

$('a[data-rel="layFamilySite"]').on('click', function(e){
	var $self = $(this);
	var $target = $($(this).attr('href'));
	$('.foot-sm').each(function() {
		$('.foot-sm').hide();
	});
	$(this).show();
	// $('a[data-rel="layFamilySite"]').removeClass('open');
	$('a[data-rel="layRelativeSite"]').removeClass('open');
	$('a[data-rel="layUsefullSite"]').removeClass('open');
	$(this).toggleClass('open');
	if( $(this).is('.open')) {
		$target.attr('tabindex', '0').show().focus();
	} else {
		$target.hide();
		// $self.focus();
		$target.removeAttr('tabindex');
	}
	$target.find(".x").on('click focusout', function(e){
		$target.hide();
		$self.removeClass('open');
		$target.removeAttr('tabindex');
		$self.focus();
		e.preventDefault();
	});
	e.preventDefault();
});
$('a[data-rel="layRelativeSite"]').on('click', function(e){
	var $self = $(this);
	var $target = $($(this).attr('href'));
	$('.foot-sm').each(function() {
		$('.foot-sm').hide();
	});
	$(this).show();
	$('a[data-rel="layFamilySite"]').removeClass('open');
	// $('a[data-rel="layRelativeSite"]').removeClass('open');
	$('a[data-rel="layUsefullSite"]').removeClass('open');

	$(this).toggleClass('open');

	if( $(this).is('.open')) {
		$target.attr('tabindex', '0').show().focus();
	} else {
		$target.hide();
		// $self.focus();
		$target.removeAttr('tabindex');
	}
	$target.find(".x").on('click focusout', function(e){
		$target.hide();
		$self.removeClass('open');
		$target.removeAttr('tabindex');
		$self.focus();
		e.preventDefault();
	});
	e.preventDefault();
});
$('a[data-rel="layUsefullSite"]').on('click', function(e){
	var $self = $(this);
	var $target = $($(this).attr('href'));
	$('.foot-sm').each(function() {
		$('.foot-sm').hide();
	});
	$(this).show();
	$('a[data-rel="layFamilySite"]').removeClass('open');
	$('a[data-rel="layRelativeSite"]').removeClass('open');
	// $('a[data-rel="layUsefullSite"]').removeClass('open');
	$(this).toggleClass('open');

	if( $(this).is('.open')) {
		$target.attr('tabindex', '0').show().focus();
	} else {
		$target.hide();
		// $self.focus();
		$target.removeAttr('tabindex');
	}
	$target.find(".x").on('click focusout', function(e){
		$target.hide();
		$self.removeClass('open');
		$target.removeAttr('tabindex');
		$self.focus();
		e.preventDefault();
	});
	e.preventDefault();
});
// 통합뉴스
$('a[data-rel="totalNews"]').on('click', function(e){
	var $self = $(this);
	var $target = $($(this).attr('href'));
	$(this).toggleClass('open');
	searchHide();
	if( $(this).is('.open')) {
		$target.attr('tabindex', '0').slideDown('normal', function() { overlayShow()}).focus();
	} else {
		$target.slideUp();
		// $self.focus();
		$target.removeAttr('tabindex');
		overlayHide();
	}
	$target.find(".x").on('click focusout', function(){
		$target.slideUp();
		$self.removeClass('open');
		$target.removeAttr('tabindex');
		$self.focus();
		overlayHide();
	});
	e.preventDefault();
});
// 검색
$('a[data-rel="laySearchBox"]').on('click', function(e){
	var $self = $(this);
	var $target = $($(this).attr('href'));
	$(this).toggleClass('open');
	// $lnbWrap.removeClass('active');
	allNewsHide();

	if( $(this).is('.open')) {
		$target.attr('tabindex', '0').slideDown('normal', function() { overlayShow()}).focus();
	} else {
		$target.slideUp();
		$target.removeAttr('tabindex');
		// $self.focus();
		overlayHide();
	}
	$target.find(".x").on('click focusout', function(){
		$target.slideUp();
		$self.removeClass('open');
		$target.removeAttr('tabindex');
		$self.focus();
		overlayHide();
	});
	e.preventDefault();
});
// LNB
$('a[data-rel="layLnb"]').on('click', function(e){
	var $self = $(this);
	var $target = $($(this).attr('href'));
	$target.attr('tabindex', '0').show().focus();
	searchHide();
	allNewsHide();
	overlayShow();
	$target.find(".x").on('click focusout', function(){
		$lnbWrap.removeClass('active');
		$sm.removeClass('active');
		$target.hide();
		$self.focus();
		$target.removeAttr('tabindex');
		overlayHide();
	});
	e.preventDefault();
});

var searchHide = function() {
	$searchIcon.removeClass('open');
	$searchWrap.slideUp();
};
var allNewsHide = function() {
	$totalNews.removeClass('open');
	$totalNewsWrap.slideUp();
};
var mobileFunc = function() {
	$('body').addClass('mobile').removeClass('pc');
	$lnb.on('click', function(e) {
		$lnb.each(function() {
			$(this).removeClass('act');
		});
		$(this).addClass('act');
		$sm.removeClass('active');
		$(this).next('.sm').addClass('active');
		e.preventDefault();
	});
	$(".hamburger").on('click', function(){
		$lnbWrap.addClass('active');
		$lnb.removeClass('act');
		$sm.removeClass('active');
		$('.lnb-list > li:first-child > a:first-child').addClass('act');
		$('.lnb-list > li:first-child > a:first-child + .sm').addClass('active');
	});
	$(".close").on('click', function(){
		$lnbWrap.removeClass('active');
	});

};
var resetMobile = function() {
	// $(".hamburger").off('click');
	// $('.lnb-wrap').removeClass('active');
	// $lnb.off('click');
};
var webFunc = function() {
	overlayHide();
	$('body').addClass('pc').removeClass('mobile');
	$lnbWrap.removeClass('active');
	$lnbInner.css({'display': 'block'});
	$lnb.off('click');
	$sm.removeClass('active');
	$lnb.on('mouseenter focusin', function() {
		// $('.sm').stop().slideDown();
		$lnbWrap.addClass('active');
		$sm.addClass('active');
		$smBg.css({'height': $('.sm').outerHeight() });
		$searchIcon.removeClass('open');
		//$searchWrap.hide(); //20180716 삭제
	});
	$lnbList.on('mouseleave', function() {
		$lnbWrap.removeClass('active');
		$sm.removeClass('active');
		$smBg.css({'height': $('.sm').outerHeight() });
		$searchIcon.removeClass('open');
		//$searchWrap.hide(); //20180716 삭제
	});
	/*$('.search a').on('focusout', function() {
	 $lnbWrap.removeClass('active');
	 $sm.removeClass('active');
	 });*/

	$searchIcon.on('focusin', function() {
		// $searchWrap.hide();
		// $searchIcon.removeClass('open');
		$lnbWrap.removeClass('active');
		$sm.removeClass('active');
		$smBg.css({'height': $('.sm').outerHeight() });
	})
};
var resetPC = function() {
	$lnb.off('mouseenter focusin');
	$lnbList.off('mouseleave');
};

var eventload = {
	add: function(elem, type, fn) {
		if (elem.attachEvent) {
			elem['e'+type+fn] = fn;
			elem[type+fn] = function() {elem['e'+type+fn](window.event);}
			elem.attachEvent('on'+type, elem[type+fn]);
		} else
			elem.addEventListener(type, fn, false);
	}
};
var currentMQ = "unknown";
var mqSync = function(){
	if (window.opera) {
		var activeMQ = window.getComputedStyle(document.body,':before').getPropertyValue('content');
	}
	else if (window.getComputedStyle) {
		var activeMQ = window.getComputedStyle(document.head,null).getPropertyValue('font-family');
	}
	else {
		window.getCompStyle = function(el, pseudo) {
			this.el = el;
			this.getPropertyValue = function(prop) {
				var re = /(\-([a-z]){1})/g;
				if (prop == 'float') prop = 'styleFloat';
				if (re.test(prop)) {
					prop = prop.replace(re, function () {
						return arguments[2].toUpperCase();
					});
				}
				return el.currentStyle[prop] ? el.currentStyle[prop] : null;
			}
			return this;
		};
		var compStyle = window.getCompStyle(document.getElementsByTagName('head')[0], "");
		var activeMQ = compStyle.getPropertyValue("font-family");
	}
	activeMQ = activeMQ.replace(/"/g, "");
	activeMQ = activeMQ.replace(/'/g, "");

	if (activeMQ != currentMQ) {
		if (activeMQ === 'Mobile') {
			currentMQ = activeMQ;
			// Add code you want to sync with this breakpoint
			// document.getElementById('msg').innerHTML = ('Active media query: <br><strong>' + currentMQ + '</strong>');
			// console.log(currentMQ);
			resetPC();
			mobileFunc();

		}
		if (activeMQ === "Large") {
			currentMQ = activeMQ;
			resetMobile();
			webFunc();
		}
	}

};

(function($) {
	mqSync();
	/* 통합소식 */
	var hqlSlide = $('.hq-slide');
	hqlSlide.owlCarousel({
		items: 1,
		loop: false,
		nav: true,
		dots: false,
		navContainerClass: 'customNav',
	});
	/* footer */
	$('.foot-sm-inner').owlCarousel({
		loop: false,
		margin: 0,
		dots: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:2
			}
		}
	});
	

	$('.sm').matchHeight();
	$('.second .rig > li').matchHeight();
	$(".multi-ellipsis").dotdotdot();
	
	

	$('[placeholder]').placeHolder(); // place holder
	$('body').isFocus();
	$('input,select,textarea').cancelZoom();
	
	
	$('.tab-menu > li > a').on('click', function(e) {
		$('.tab-menu > li > a').each(function() {
			$(this).parent().removeClass('active');
		});
		$(this).parent().addClass('active');

		var currentTab = $(this).attr('href');
		$('.tab-container').hide();
		$(currentTab).show();
		e.preventDefault();
	});
	$('.tab-container').hide();
	$('.tab-container:first').show();
	$('.tab-menu > li:first-child').addClass('active');

	
	$('.tabMenu > li > a').on('click', function(e) {
		$('.tabMenu > li > a').each(function() {
			$(this).parent().removeClass('active');
		});
		$(this).parent().addClass('active');

		var currentTab = $(this).attr('href');
		$('.tabcontainer').hide();
		$(currentTab).show();
		e.preventDefault();
	});
	$('.tabcontainer').hide();
	$('.tabcontainer:first').show();
	$('.tabMenu > li:first-child').addClass('active');
	
	
})(jQuery);
eventload.add(window, "resize", mqSync);


/* 레이어 팝업 20180219 접근성 수정 */
var refFocusE2 = null;
$('.pop-open').click(function(){
    var $href = $(this).attr('href');
    layer_popup($href);	
		var pFocus = $(this);
		pFocus.attr('data-focus','on');

	  $($(this).attr('href')).attr('tabindex', '0').show().focus();
	  refFocusE2 = this;
});

function pop_open(el){
        layer_popup(el);
	}

    function layer_popup(el){
		
        var $el = $(el);        //레이어의 id를 $el 변수에 저장
		$('.dim-layer').fadeIn();
		$el.fadeIn();

        var $elWidth = ~~($el.outerWidth()),
            $elHeight = ~~($el.outerHeight()),
            docWidth = $(document).width(),
            docHeight = $(document).height();

        // 화면의 중앙에 레이어를 띄운다.
        if ($elHeight < docHeight || $elWidth < docWidth) {
            $el.css({
                marginTop: -$elHeight /2,
                marginLeft: -$elWidth/2
            });
           
            $(window).resize(function(){
            	 var $elWidth2 = ~~($el.outerWidth()),
                 $elHeight2 = ~~($el.outerHeight());
            	 $el.css({
                     marginTop: -$elHeight2 /2,
                     marginLeft: -$elWidth2/2
                 });
            })
			$('.dim-layer').fadeIn();
			$el.fadeIn();		

        } else {
            $el.css({top: 0, left: 0});
			$('.dim-layer').fadeOut();
			$el.fadeOut();
			$("a[data-focus~=on]").focus();
			window.setTimeout(function(){
				$("a[data-focus~=on]").removeAttr("data-focus");
			},500);
        }

        $el.find('a.pop-close').click(function(){
            $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
			$('.dim-layer').fadeOut();
			$("a[data-focus~=on]").focus();
			window.setTimeout(function(){
				$("a[data-focus~=on]").removeAttr("data-focus");
			},500);

		  $(this).parent().hide();
		  if(refFocusE2) refFocusE2.focus();
		  refFocusE2 = null;

            return false;

        });

		$el.find('a.close').click(function(){
            $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
			$('.dim-layer').fadeOut();
			$("a[data-focus~=on]").focus();
			window.setTimeout(function(){
				$("a[data-focus~=on]").removeAttr("data-focus");
			},500);

		  $(this).parent().hide();
		  if(refFocusE2) refFocusE2.focus();
		  refFocusE2 = null;

            return false;
        });
		

    }

/*로그인 전후
$(function(){
	$('.login-after').hide(); 
	$('.btn-login').click(function(){
		$('.login-after').show();	 
		$('.login-before').hide(); 
	});
	$('.btn-logout').click(function(){
		$('.login-before').show();
		$('.login-after').hide();
	});
});
*/

/* 모바일 셀렉트 */
$('.mo-select').click(function() {
	$('.select-list').toggle();
});

/*주요서비스*/
var $interval;

function slidetimer() {
    var $interval = setInterval(function() {
        slide()
    }, 3000);
}

function slide() {
    $("ul#scrolling").animate({
        left: "-=0px"
    }, 500, function() {
        $(this).css({
            "left": 0
        });
        $("ul#scrolling").append($("ul#scrolling").children("ul#scrolling li").eq(0));
    });

}

function slideprev() {
    $(document).on("click", ".prev", function() {
        $($("ul#scrolling").children("ul#scrolling li").eq(0)).appendTo("ul#scrolling")
    });
}
slideprev();

function slidenext() {
    $(document).on("click", ".next", function() {
        $($("ul#scrolling").children("ul#scrolling li").eq(0)).appendTo("ul#scrolling")
    });
}
slidenext();

