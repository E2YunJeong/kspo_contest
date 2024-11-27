
/* 모바일 셀렉트 */
$('.mo-select').click(function() {
	$('.mo-list').toggle();
});

/* 열기 닫기 */
$('.impor-btn .open').click(function() {
	$('#imporBox').slideDown();
	$('.impor-btn .open').hide();
	$('.impor-btn .close').show();
});
$('.impor-btn .close').click(function() {
	$('#imporBox').slideUp();
	$('.impor-btn .open').show();
	$('.impor-btn .close').hide();
});

/* 체크박스 모두선택 */
$("#allAgree").click(function(){		
	$(".chk").prop("checked", this.checked);	
});	

/*캘린더*/
$('.year-num').click(function() {
	$('#calYear').slideToggle();	
});
$('.cal-year .cal-close').click(function() {
	$('#calYear').slideUp();		
});
$('.month-num').click(function() {
	$('#calMonth').slideToggle();	
});
$('.cal-month .cal-close').click(function() {
	$('#calMonth').slideUp();		
});
// 캘린더 20180219 접근성 수정		
var refFocusEl = null;
$('a.year-num[href^="#"], a.month-num[href^="#"]').click(function(){
  $($(this).attr('href')).attr('tabindex', '0').show().focus();
  refFocusEl = this;
});
$('.cal-year .cal-close, .cal-month .cal-close').click(function(){
  $(this).parent().hide();
  if(refFocusEl) refFocusEl.focus();
  refFocusEl = null;
});

/*faq*/
$('#tabCont01').show();
$('.tabmenu03 li a').on('click',function(){
		
	index = $(this).parent().index()+1;
	$('.tab-cont').hide();
	$('#tabCont0'+index).fadeIn();
});
$('.tabmenu03 li a').click(function(){
	$('.tabmenu03 li').removeClass('on');
	$(this).parent('li').addClass('on');
});

// 자주하는질문 20180219 접근성 수정		- 20190402 접근성 수정 위치 이동 및 주석
//$("<span class='toggleText' style='position: absolute; left:-99999px;'>답변 열기</span>").appendTo($(".faq-box dt, .faq-box-type02 dt"));


$('.faq-box dt').click(function(e){	
	e.preventDefault();

	$('.faq-box dt').not($(this).toggleClass('on')).removeClass('on');
	$('.faq-box dd').not($(this).next('dd').slideToggle()).slideUp();			
	
	if ($(this).find(".toggleText").text() == '답변 닫기') {
		$(this).find(".toggleText").text("답변 열기");
	}
	else {
		$(this).find(".toggleText").text("답변 닫기");
		$('.faq-box dt').not($(this)).find(".toggleText").text("답변 열기");
	}	

});

//20180116 추가
$('.faq-box-type02 dt').click(function(e){	
	e.preventDefault();

	$('.faq-box-type02 dt').not($(this).toggleClass('on')).removeClass('on');
	$('.faq-box-type02 dd').not($(this).next('dd').slideToggle()).slideUp();	
	
	if ($(this).find(".toggleText").text() == '답변 닫기') {
		$(this).find(".toggleText").text("답변 열기");
	}
	else {
		$(this).find(".toggleText").text("답변 닫기");
		$('.faq-box-type02 dt').not($(this)).find(".toggleText").text("답변 열기");
	}	

});
