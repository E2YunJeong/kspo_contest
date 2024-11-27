$(document).ready(function(){
				function visual(){
					if($(".mainVisualWrap > .mainVisual > ul > li").length < 2){
						return;
					}
					
					var banner = $(".mainVisual > .visual > li"),
					bannerWidth = $(".mainVisual").width(),
					bannerLength = banner.length,
					targetNum = 0,
					currentNum = 0,
					speed = 0.7,
					delay = 7000,
					isAuto = true,
					isTween = false;
	
					setting();
	
					//�명똿
					function setting(){
						//banner.not(":first").css("left", bannerWidth);
						visualTimer = setInterval(rightMove, delay);
						
						$(".visualQuick").hide();
	
						//踰꾪듉 �대┃
						$(".mainVisual > a.controller").bind("click", function(e){
							e.preventDefault();
							clearInterval(visualTimer);
							var btnIdx = $(this).index();
							if(btnIdx == 1){
								leftMove();
							} else if(btnIdx == 3){
								if(isAuto){
									clearInterval(visualTimer);
									$(this).find("img").attr("src", $(this).find("img").attr("src").replace("_stop", "_play")).attr("alt","재생");
									isAuto = false;
								}else {
									visualTimer = setInterval(rightMove, delay);
									$(this).find("img").attr("src", $(this).find("img").attr("src").replace("_play", "_stop")).attr("alt","정지");
									isAuto = true;
								}
							} else if(btnIdx == 2) {
								rightMove();
							}
						});
						
						$("#forMobile> a.controller").bind("click", function(e){
							e.preventDefault();
							clearInterval(visualTimer);
							var btnIdx = $(this).index();
							if(btnIdx == 0){
								leftMove();
							} else if(btnIdx == 1){
								if(isAuto){
									clearInterval(visualTimer);
									$(this).find("img").attr("src", $(this).find("img").attr("src").replace("_Stop", "_Play")).attr("alt","재생");
									isAuto = false;
								}else {
									visualTimer = setInterval(rightMove, delay);
									$(this).find("img").attr("src", $(this).find("img").attr("src").replace("_Play", "_Stop")).attr("alt","정지");
									isAuto = true;
								}
							} else if(btnIdx == 2) {
								rightMove();
							}
						});
						
						//�� �ъ빱�� 20190409 異붽�
						$(".mainVisual > .visual > li a").bind("focus", function(e){
							var $focusNum = $(this).parent().index();
							if(currentNum == $focusNum) return;
							banner.css({"left" : 0, "z-index" : 1});
							banner.eq($focusNum).css({"left" : 0, "z-index" : 2});
							tweenComplete($focusNum);
						});
						
					}
	
					function leftMove(){
						targetNum = currentNum -1;
						if(targetNum < 0){
							targetNum = bannerLength -1;
						}
						bannerMove(targetNum, "left");
					}
					function rightMove(){
						targetNum = currentNum +1;
						if(targetNum >= bannerLength){
							targetNum = 0;
						}
						bannerMove(targetNum, "right");
					}
	
					function bannerMove(idx, direction){
						
						if(isTween){return;}
						isTween = true;
						if(direction == "left"){ //�ㅻⅨ履쎌쑝濡� �대룞
							banner.eq(currentNum).css({"left" : 0, "z-index" : 1});
							banner.eq(idx).css({"left" : -bannerWidth, "z-index" : 2});
							TweenMax.to(banner.eq(idx), .7, {css:{left:"+="+bannerWidth}, ease:Expo.easeOut, onComplete:function(){
								banner.eq(currentNum).css("left","+="+bannerWidth);
								tweenComplete(idx);
							}});
						} else if(direction == "right") { //�쇱そ�쇰줈 �대룞
							banner.eq(currentNum).css({"left" : 0, "z-index" : 1});
							banner.eq(idx).css({"left" : bannerWidth, "z-index" : 2});
							TweenMax.to(banner.eq(idx), .7, {css:{left:"-="+bannerWidth}, ease:Expo.easeOut, onComplete:function(){
								banner.eq(currentNum).css("left","-="+bannerWidth);
								tweenComplete(idx);
							}});
						}
						
						
						//�먮쾲吏� �섏씠吏��먯꽌留� �꾨옒 ��ぉ�� �섏삤寃뚮걫 �섏젙(2015-07-03)
						/*if(idx == 1) {
						
								$(".visualQuick").show();
								
							} else {
								
								$(".visualQuick").hide();
								
							}*/
						
						//20180116 : bann_seq 媛� 35�� 寃쎌슦留� show() �섎룄濡� �섏젙
						var bann_seq = $("#bann_seq"+idx).val();
						
						if(bann_seq == "35"){
							$(".visualQuick").show();
						}else{
							$(".visualQuick").hide();
						}
						
						
					}
	
					function tweenComplete(idx){
						currentNum = idx;
						isTween = false;
						if(isAuto){
							if(visualTimer)clearInterval(visualTimer);
							visualTimer = setInterval(rightMove, delay);
						}
					}
				}
	
				visual();
	
			});








$(document).ready(function(){
	function visual(){
		if($(".mainVisualWrap2 > .mainVisual2 > ul > li").length < 2){
			return;
		}
		
		var banner = $(".mainVisual2 > .visual > li"),
		bannerWidth = $(".mainVisual2").width(),
		bannerLength = banner.length,
		targetNum = 0,
		currentNum = 0,
		speed = 0.7,
		delay = 7000,
		isAuto = true,
		isTween = false;

		setting();

		//�명똿
		function setting(){
			//banner.not(":first").css("left", bannerWidth);
			visualTimer = setInterval(rightMove, delay);
			
			$(".visualQuick").hide();

			//踰꾪듉 �대┃
			$(".mainVisual2 > a.controller").bind("click", function(e){
				e.preventDefault();
				clearInterval(visualTimer);
				var btnIdx = $(this).index();
				if(btnIdx == 1){
					leftMove();
				} else if(btnIdx == 3){
					if(isAuto){
						clearInterval(visualTimer);
						$(this).find("img").attr("src", $(this).find("img").attr("src").replace("_stop", "_play")).attr("alt","재생");
						isAuto = false;
					}else {
						visualTimer = setInterval(rightMove, delay);
						$(this).find("img").attr("src", $(this).find("img").attr("src").replace("_play", "_stop")).attr("alt","정지");
						isAuto = true;
					}
				} else if(btnIdx == 2) {
					rightMove();
				}
			});
			
			$("#forMobile> a.controller").bind("click", function(e){
				e.preventDefault();
				clearInterval(visualTimer);
				var btnIdx = $(this).index();
				if(btnIdx == 0){
					leftMove();
				} else if(btnIdx == 1){
					if(isAuto){
						clearInterval(visualTimer);
						$(this).find("img").attr("src", $(this).find("img").attr("src").replace("_Stop", "_Play")).attr("alt","재생");
						isAuto = false;
					}else {
						visualTimer = setInterval(rightMove, delay);
						$(this).find("img").attr("src", $(this).find("img").attr("src").replace("_Play", "_Stop")).attr("alt","정지");
						isAuto = true;
					}
				} else if(btnIdx == 2) {
					rightMove();
				}
			});
			
			//�� �ъ빱�� 20190409 異붽�
			$(".mainVisual2 > .visual > li a").bind("focus", function(e){
				var $focusNum = $(this).parent().index();
				if(currentNum == $focusNum) return;
				banner.css({"left" : 0, "z-index" : 1});
				banner.eq($focusNum).css({"left" : 0, "z-index" : 2});
				tweenComplete($focusNum);
			});
			
		}

		function leftMove(){
			targetNum = currentNum -1;
			if(targetNum < 0){
				targetNum = bannerLength -1;
			}
			bannerMove(targetNum, "left");
		}
		function rightMove(){
			targetNum = currentNum +1;
			if(targetNum >= bannerLength){
				targetNum = 0;
			}
			bannerMove(targetNum, "right");
		}

		function bannerMove(idx, direction){
			
			if(isTween){return;}
			isTween = true;
			if(direction == "left"){ //�ㅻⅨ履쎌쑝濡� �대룞
				banner.eq(currentNum).css({"left" : 0, "z-index" : 1});
				banner.eq(idx).css({"left" : -bannerWidth, "z-index" : 2});
				TweenMax.to(banner.eq(idx), .7, {css:{left:"+="+bannerWidth}, ease:Expo.easeOut, onComplete:function(){
					banner.eq(currentNum).css("left","+="+bannerWidth);
					tweenComplete(idx);
				}});
			} else if(direction == "right") { //�쇱そ�쇰줈 �대룞
				banner.eq(currentNum).css({"left" : 0, "z-index" : 1});
				banner.eq(idx).css({"left" : bannerWidth, "z-index" : 2});
				TweenMax.to(banner.eq(idx), .7, {css:{left:"-="+bannerWidth}, ease:Expo.easeOut, onComplete:function(){
					banner.eq(currentNum).css("left","-="+bannerWidth);
					tweenComplete(idx);
				}});
			}
			
			
			//�먮쾲吏� �섏씠吏��먯꽌留� �꾨옒 ��ぉ�� �섏삤寃뚮걫 �섏젙(2015-07-03)
			/*if(idx == 1) {
			
					$(".visualQuick").show();
					
				} else {
					
					$(".visualQuick").hide();
					
				}*/
			
			//20180116 : bann_seq 媛� 35�� 寃쎌슦留� show() �섎룄濡� �섏젙
			var bann_seq = $("#bann_seq"+idx).val();
			
			if(bann_seq == "35"){
				$(".visualQuick").show();
			}else{
				$(".visualQuick").hide();
			}
			
			
		}

		function tweenComplete(idx){
			currentNum = idx;
			isTween = false;
			if(isAuto){
				if(visualTimer)clearInterval(visualTimer);
				visualTimer = setInterval(rightMove, delay);
			}
		}
	}

	visual();

});