/********************************************************
파일명 : voucher.js
설 명 : 이용권, 시설 신청 및 마이페이지 수정에 사용되는 스크립트 모음
수정일		수정자		Version		Function 명
-------		--------	----------	--------------
2017.11.14	박정환		1.0			최초 생성
*********************************************************/


/********************
 *스크립트 전역변수 선언
********************/
var G_POST_TYPE = "";
var G_CERT_TYPE = "";
var G_MBER_SE = "";



/*******************************
 * 아이디와 비밀번호로 로그인 처리한다.
*******************************/
function getLoginInfo(loginDomain) {
	
	console.log(loginDomain);
	
	if($("#mberId").val().trim() == "") {
		
		alert("아이디를 입력해주세요.");
		$("#mberId").focus();
		return;
		
	}
	
	if($("#password").val().trim() == "") {
		
		alert("비밀번호를 입력해주세요.");
		$("#password").focus();
		return;
		
	}
	
	$("#frm").attr('action', loginDomain + "/login/loginAct.do");
	$("#frm").attr('target', "_self");
	$("#frm").submit();
	
	/*
	var method = "post";
	var url = loginDomain + "/login/loginActJs.do";
	var param = $("#frm").serialize();
	var data = getJsonData(method, url, param);
	
	//로그인 결과에 따른 분기처리
	switch(data.result) {
		case -1 :
			alert("아이디와 비밀번호를 정확하게 입력해주세요.");
			return;
			break;
		case 0 :	//계정정보 없음
			alert("아이디와 비밀번호가 일치하지 않습니다. 다시 확인하시고 로그인 해주세요.");
			return;
			break;
		case 1 :	//비밀번호 5회 이상 틀림
			alert("비밀번호를 5회 잘못 입력 하셨습니다.\n개인정보보호를 위해 계정은 잠금 처리됩니다.\n[비밀번호 찾기]에서 임시비밀번호를 발급받으신 후 로그인하세요.");
			return;
			break;
		case 5 :	//휴면회원
			if(confirm("고객님은 1년 이상 장기간 미 접속하여 휴면계정으로 전환되었습니다. 휴면계정 복구 화면에서 인증을 하신 후 정상계정으로 전환 하시기 바랍니다.")) {
				
				location.href = contextPath + "login/restoreMember.do?menuNo=47&topMenuNo=42";
				
			}
			return;
			break;
		case 9 :	//탈퇴회원
			alert("아이디와 비밀번호가 일치하지 않습니다. 다시 확인하시고 로그인 해주세요.");
			return;
			break;
		case 10 :	//중복로그인
			if(confirm("다른 곳에서 현재 로그인되어 있습니다. 기존 접속을 끊고 이용하시겠습니까?")){
				
				var method = "post";
				var url = contextPath + "login/loginUserAlterJs.do";
				var param = $("#frm").serialize();
				
				var data = getJsonData(method, url, param);
				
				if(data.result = 1){
					
					goLogin();
					
				}else{
					return;
					break;
				}
				
			}
			return;
			break;
			
		case 13 :	//한도 보유+확정 대상자 개인회원
			location.href = contextPath + "course/memberFacilityList.do?menuNo=8&topMenuNo=1";
			return;
			break;
	}
	
	if(data.pwdChange == 1) {
		
		//로그인한 회원 종류를 전역변수에 저장한다.
		G_MBER_SE = data.mberSe;
		
		//다음에 변경하기 버튼 보이기
		$("#btnChangeNext").show();
		
	} else if(data.pwdChange == 2) {
		
		//다음에 변경하기 버튼 숨김
		$("#btnChangeNext").hide();
		
	}
	
	//비밀번호 변경대상일 경우
	if(data.pwdChange == 1 || data.pwdChange == 2) {
		
		//결과 레이어를 오픈한다.
		layer_popup($("#changePW"));
		
		//레이어 입력값 초기화
		setLayerClear();
		
		//포커스 이동
		$("#passwordBefore").focus();
		
	} else {
		
		//로그인처리 성공 후 마이페이지로 이동한다.
		goMyPage(data.mberSe);
		
	}
	*/
}

/*******************************
 * 다음에 변경하기 버튼 클릭 시 이동
*******************************/
function pwdChangeNext(pwdChange, mberSe, bankCd) {
	
	if(pwdChange == "2") {
		
		location.href = contextPath + "main.do";
		
	} else {
		
		if(confirm("다음에 변경하시겠습니까?")) {
			
			//시설회원의 경우 결제관련 동의가 되어있지 않으면 은행정보 입력 페이지로 이동한다.
			/*
			if(mberSe == "2" && ($("#indvdlinfoAgreAt").val() == "" || $("#cardSetleSvcAgreAt").val() == "" || $("#cardIndvdlinfoAgreAt").val() == "")) {
				
				alert("시설회원의 경우 은행정보 등록이 필요합니다.");
				location.href = contextPath + "mypage/memberBankWritePage.do?menuNo=40&topMenuNo=34";
				return;
				
			}
			*/
			
			goMyPage(mberSe);
			
		} else {
			
			return;
			
		}
		
	}
	
}


/*******************************
 * 마이페이지로 이동한다.
*******************************/
function goMyPage(mberSe) {
	
	var strUrl = contextPath + "login/loginReturnUrl.do";
	
	//회원구분코드로 분기 처리한다.
	/*
	if(mberSe == "1") {
		
		strUrl = "mypage/voucher/voucherRequestList.do?menuNo=28&topMenuNo=7";
		
	} else if(mberSe == "2") {
		
		strUrl = "mypage/facility/facilityRequestList.do?menuNo=35&topMenuNo=34";
		
	}
	
	if('${S_LOGIN_NEXT_URL}' != "") {
		
		strUrl = '${S_LOGIN_NEXT_URL}';
		
	}
	*/
	location.href = strUrl;
	
}

/*******************************
 * 비밀번호를 변경한다.
*******************************/
function changePassword() {
	
	if($("#passwordBefore").val().trim() == "") {
		
		alert("기존 비밀번호를 입력해주세요.");
		$("#passwordBefore").focus();
		return;
		
	}
	
	if($("#passwordNew").val().trim() == "") {
		
		alert("새 비밀번호를 입력해주세요.");
		$("#passwordNew").focus();
		return;
		
	}
	
	if($("#passwordNewConfirm").val().trim() == "") {
		
		alert("새 비밀번호를 재 입력해주세요.");
		$("#passwordNewConfirm").focus();
		return;
		
	}
	
	//자리수 및 조합규칙 체크
	//같은 문자, 
	if(!passwordValidateCheck1($("#passwordNew").val())) {
		
		alert("비밀번호는 영문/숫자/특수문자를 포함하여 9~16이내로 입력하세요.");
		$("#passwordNew").focus();
		return;
		
	}
	
	if(!passwordValidateCheck2($("#passwordNew").val())) {
		
		alert("같은 문자/숫자, 연속숫자, 띄어쓰기가 포함되면 안됩니다.");
		$("#passwordNew").focus();
		return;
		
	}
	
	if($("#passwordNew").val().trim() != $("#passwordNewConfirm").val().trim()) {
		
		alert("새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다. 다시 입력해 주세요.");
		$("#passwordNewConfirm").focus();
		return;
		
	}
	
	var method = "post";
	var url = contextPath + "login/loginPasswordChangeJs.do";
	var param = $("#frm").serialize();
	
	var data = getJsonData(method, url, param);
	
	//로그인 결과에 따른 분기처리
	switch(data.result) {
		case -1 :
			alert("비밀번호를 정확하게 입력해주세요.");
			$("#passwordNew").focus();
			break;
		case 0 :
			alert("기존 비밀번호를 잘못 입력 하셨습니다. 확인 후 다시 입력해주세요.");
			$("#passwordBefore").focus();
			break;
		case 1 :
			alert("비밀번호가 형식에 맞지 않습니다.");
			$("#passwordNew").focus();
			break;
		case 99 :
			alert("비밀번호가 정상적으로 변경되었습니다. 다시 로그인해 주세요.");
			$("#password").val('');
			$("#password").focus();
			
			//레이어팝업을 닫는다.
			$('.dim-layer').fadeOut();
			
			goLogin();
			
			break;
	}
	
	setLayerClear();
	
}

/*******************************************************
 * 레이어팝업의 내용을 초기화한다.
********************************************************/
function setLayerClear() {
	
	//입력항목 초기화
	$("#passwordBefore").val('');
	$("#passwordNew").val('');
	$("#passwordNewConfirm").val('');
	
	
}



/******************************
 * 우편번호 찾기 팝업을 호출한다.
*******************************/
function openPostPopup(type) {
	
	G_POST_TYPE = type;
	
	var strUrl = contextPath + "juso/jusoPopup.do";
	
	window.open(strUrl, 'postcode', 'resizable=no, status=no, scrollbars=yes, toolbar=no, menubar=no, width=550px, height=600px');
	
}

function openSearchJusoPopup(type) {
	G_POST_TYPE = type;
	
	window.name="jusoPopup";
	var pop = window.open(contextPath + "popup/openAddrPopup.do","pop","width=570,height=420, scrollbars=yes, resizable=yes");
}

function jusoCallBack(roadFullAddr,roadAddrPart1,addrDetail,roadAddrPart2,engAddr, jibunAddr, zipNo, admCd, rnMgtSn, bdMgtSn,detBdNmList,bdNm,bdKdcd,siNm,sggNm,emdNm,liNm,rn,udrtYn,buldMnnm,buldSlno,mtYn,lnbrMnnm,lnbrSlno,emdNo){
	// 팝업페이지에서 주소입력한 정보를 받아서, 현 페이지에 정보를 등록합니다.
	callbackAddress(zipNo, roadAddrPart1, addrDetail, roadAddrPart2, rnMgtSn);
}

/******************************
 * 우편번호 찾기 팝업의 데이터를 화면에 바인딩한다.
*******************************/
function callbackAddress(zipNo, roadAddrPart1, addrDetail, roadAddrPart2, rnMgtSn) {
	
	if(G_POST_TYPE == "req") {
		
		//화면에 시군구코드가 있는 경우(이용권 신청 및 수정)
		if($("#signguCd").val() != "") {
			
			//console.log(rnMgtSn);
			//console.log(rnMgtSn.substring(0, 4));
			//console.log($("#signguCd").val().substring(0, 4));
			
			//도로명주소코드의 앞 5자리가 선택한 시군구 코드와 일치하지 않는 경우 수정 불가
			//시군구 코드 4자리만 일치여부 호가인
			if($("#signguCd").val().substring(0, 4) != rnMgtSn.substring(0, 4)) {
				
				// 강원도 -> 강원특별자치도 변경으로 인해 강원도 시군구 코드 체크 
				if ($("#signguCd").val().substring(0, 2) == "42") {
					var method = "post";
					var url = contextPath + "code/selectSigunguCodeJs.do";
					var param = "brtcCd=" + $("#signguCd").val().substring(0, 2);
					var data = getJsonData(method, url, param);
					var checkFlag = true;
					
					for(var i=0; i<data.list.length; i++) {
						var dataAltnCd = "";
						if ($("#signguCd").val() == data.list[i].signguCd) {
							dataAltnCd = data.list[i].altnCd;
							if(dataAltnCd != "" && dataAltnCd != null && dataAltnCd.substring(0, 4) == rnMgtSn.substring(0, 4)) {
								checkFlag = false;
								break;
							}
						} 
					}
					
					if (checkFlag) {
						alert("신청 지역의 주소만 등록 가능합니다.");
						return;
					}
					
				} else {
					alert("신청 지역의 주소만 등록 가능합니다.");
					return;					
				}
				
				//history.back(-1);
			}
			
			$("#zip").val(zipNo);
			$("#adres1").val(roadAddrPart1);
			$("#adres2").val(addrDetail + roadAddrPart2);
			$("#rdnmadrCd").val(rnMgtSn);
			
			$("#adres2").blur();
			
			//Validation 성공 로그를 기록한다.
			setValidateResult('adres1', 'Y');
			setValidateResult('adres2', 'Y');
			
		}
		
	} else if(G_POST_TYPE == "card") {
		
		$("#cardZip").val(zipNo);
		$("#cardAdres1").val(roadAddrPart1);
		$("#cardAdres2").val(addrDetail + roadAddrPart2);
		
		$("#cardAdres2").blur();
		
		//Validation 성공 로그를 기록한다.
		setValidateResult('cardAdres1', 'Y');
		setValidateResult('cardAdres2', 'Y');
		
	} else if(G_POST_TYPE == "set") {
		$("#zip").val(zipNo);
		$("#adres1").val(roadAddrPart1);
		$("#adres2").val(addrDetail + roadAddrPart2);
		$("#rdnmadrCd").val(rnMgtSn);
		
		$("#adres2").blur();
		
		$("#brtcCd").val(rnMgtSn.substring(0, 2));
		$("#brtcCd").change();
		
		$("#signguCd option").each(function(i, obj) {
			if ($(obj).val() != "" && $(obj).val() != null && $(obj).val().substring(0, 4) == rnMgtSn.substring(0, 4)){
				$("#signguCd").val($(obj).val());
				return false;
			}
		});

		$("#signguCd").blur();
		
		//Validation 성공 로그를 기록한다.
		setValidateResult('adres1', 'Y');
		setValidateResult('adres2', 'Y');
	} else {
		
		$("#zip").val(zipNo);
		$("#adres1").val(roadAddrPart1);
		$("#adres2").val(addrDetail + roadAddrPart2);
		$("#rdnmadrCd").val(rnMgtSn);
		
		$("#adres2").blur();
		
		//Validation 성공 로그를 기록한다.
		setValidateResult('adres1', 'Y');
		setValidateResult('adres2', 'Y');
		
	}
	
}


/******************************
 * 핸드폰 본인인증 팝업을 호출한다.
*******************************/
function checkplusPopup(type) {
	
	G_CERT_TYPE = type;
	
	if(G_CERT_TYPE == "findId") {
		
		if($("#mberNm").val().trim() == ""){
			
			alert("이름를 입력해주세요.");
			$("#mberNm").focus();
			return;
			
		}
		
	}
	
	if(G_CERT_TYPE == "findPw") {
		
		if($("#mberId").val().trim() == "") {
			
			alert("아이디를 입력해주세요.");
			$("#mberId").focus();
			return;
			
		}
		
	}
	
	window.open(contextPath + "owncert/checkplusMain.do?returnType=" + type, 'popup', 'width=500, height=550');
	
	//호출시 팝업 타입(findId, findPw)를 returnType에 전달한다.
	//$("#frm").attr("action", contextPath + "owncert/checkplusMain.do?returnType=" + type);
	//$("#frm").attr("target", "popup");
	//$("#frm").submit();
	
}

/******************************
 * 아이핀 본인인증 팝업을 호출한다.
*******************************/
function ipinPopup(type) {
	
	G_CERT_TYPE = type;
	
	if(G_CERT_TYPE == "findId") {
		
		if($("#mberNm").val().trim() == "") {
			
			alert("이름를 입력해주세요.");
			$("#mberNm").focus();
			return;
			
		}
		
	}
	
	if(G_CERT_TYPE == "findPw") {
		
		if($("#mberId").val().trim() == "") {
			
			alert("아이디를 입력해주세요.");
			$("#mberId").focus();
			return;
			
		}
		
	}

	window.open(contextPath + "owncert/ipinMain.do?returnType=" + type, 'popup', 'width=500, height=550');
	
	//호출시 팝업 타입(findId, findPw)를 returnType에 전달한다.
	//$("#frm").attr("action", contextPath + "owncert/ipinMain.do?returnType=" + type);
	//$("#frm").attr("target", "popup");
	//$("#frm").submit();
	
}

/* 본인인증 인증 성공 셋팅 */
function callbackCert(certName) {
	
	if(G_CERT_TYPE == "search") {
		
		//본인인증 후 회원정보를 조회하여 화면에 설정한다.
		
		//아이디 중복여부
		var method = "post";
		var url = contextPath + "member/selectExistFacilCiJs.do";
		var param = "";
		var result = getJsonData(method, url, param);
		
		//인증정보가 존재하면 화면에 회원정보를 매핑한다.
		if(result.result == "01") {
			
			//본인인증받은 이름 입력
			$("#mberNm").val(certName);
			
			//입력 처리
			$("#mberNm").blur();
			
			
			setFacilMemberInfo(result.data);
			
		} else if(result.result == "99"){
			
			alert("이미 등록된 사용자 정보에 문제가 발생하였습니다.\n 콜센터로 문의바랍니다.(Tel.02-410-1298~9)");
			
		}else{
			
			//본인인증받은 이름 입력
			$("#mberNm").val(certName);
			
			//입력 처리
			$("#mberNm").blur();
			
			//인증정보가 없으면 입력항목 설정을 리셋한다.
			//resetFacilMemberInfo();
			
		}
		
	} else if(G_CERT_TYPE == "findId") {
		
		//아이디 찾기에서 본인인증 결과만 조회한다. 실패시 분기처리는 팝업에서 진행
		
		$("#dvIdMberSeNm").html("회원님은 <span style=\"color:red;font-weight:bold;\">시설</span> 회원입니다.");
		//레이어팝업 처리
		layer_popup($("#sendInfo"));
		return;
		
	} else if(G_CERT_TYPE == "findPw") {
		
		//비밀번호 찾기에서 본인인증 결과만 조회한다. 실패시 분기처리는 팝업에서 진행
		
		$("#dvPwMberSeNm").html("회원님은 <span style=\"color:red;font-weight:bold;\">시설</span> 회원입니다.");
		//레이어팝업 처리
		layer_popup($("#issuePW"));
		return;
		
	} else if(G_CERT_TYPE == "restoreMember") {
		
		//휴면계정 복구에서 본인인증 결과만 조회한다. 실패시 분기처리는 팝업에서 진행
		
		//레이어팝업 처리
		layer_popup($("#sendInfo"));
		return;
		
	} else if(G_CERT_TYPE == "certMid") {
		
		//본인인증받은 이름 입력
		$("#certNm").val(certName);
		
		//입력 처리
		$("#certNm").blur();
		
	} else {
		
		//처리 후 이동할 url
		location.href = contextPath + "login/loginReturnUrl.do";
		
	}
	
}

/******************************
 * 시설회원 정보를 화면에 설정한다.
*******************************/
function setFacilMemberInfo(data) {
	
	//아이디는 입력칸을 숨김 처리한 후 validation 대상에서 제외한다.
	//var objMberIdArea = $("#mberId").parent().parent();
	//objMberIdArea.html("아이디 : " + data.mberId);
	
	//아이디 입력칸을 생성한다.
	var objMberIdArea = $("#liMberId");
	
	var html = "";
		html += "<div class=\"ip-area\">";
		html += "	아이디 : " + data.mberId;
		html += "	<input type=\"hidden\" id=\"mberId\" name=\"mberId\" class=\"ip-text full\" placeholder=\"아이디(필수)\" value=\"" + data.mberId + "\" />";
		html += "</div>";
	
	objMberIdArea.html(html);
	
	validateResult["mberId"] = "Y";
	
	//비밀번호는 필수 속성을 해제한다.
	$("#password").removeClass('required');
	$("#passwordConfirm").removeClass('required');
	
	validateResult["password"] = "Y";
	validateResult["passwordConfirm"] = "Y";
	
	//사업자등록번호
	$("#bizrno1").val(data.bizrno1);
	$("#bizrno2").val(data.bizrno2);
	$("#bizrno3").val(data.bizrno3);
	
	//이메일
	$("#email1").val(data.email1);
	$("#email2").val(data.email2);
	
	//주소
	$("#zip").val(data.zip);
	$("#rdnmadrCd").val(data.rdnmadrCd);
	$("#adres1").val(data.adres1);
	$("#adres2").val(data.adres2);
	
	//전화번호
	$("#regNo").val(data.regNo);
	$("#telNo2").val(data.telNo2);
	$("#telNo3").val(data.telNo3);
	
	//핸드폰번호
	$("#cpNo1").val(data.cpNo1);
	$("#cpNo2").val(data.cpNo2);
	$("#cpNo3").val(data.cpNo3);
	
	//화면의 모든 input객체 중 필수항목에 대해 기본 validataion 값을 설정한다.
	$(".ip-text").each(function(i, obj) {
		
		//console.log($(obj).attr("id") + ", class : " + $(obj).hasClass("required"));
		
		if($(obj).hasClass("required")) {
			
			var objId = $(obj).attr("id");		//객체의 아이디
			
			setValidateResult(objId, 'N');
			
		}
		
		//수정 등으로 인해 해당 값이 있을 경우 validation 체크한다.
		if($(obj).val() != "") {
			
			$(obj).blur();
			
		}
		
	});
	
	//console.log(validateResult);
	
}

function resetFacilMemberInfo() {
	
	//아이디 입력칸을 생성한다.
	var objMberIdArea = $("#liMberId");
	
	var html = "";
		html += "<div class=\"ip-area\">";
		html += "	<label for=\"mberId\" class=\"blind\">아이디</label>";
		html += "	<input type=\"text\" id=\"mberId\" name=\"mberId\" class=\"ip-text full required\" placeholder=\"아이디(필수)\" />";
		html += "</div>";
		html += "<p class=\"txt-info txt-color\">공백없이 영문과 숫자를 포함하여 5~20자를 입력하세요.</p>";

	objMberIdArea.html(html);
	
	validateResult["mberId"] = "N";
	
	$("#mberId").bind('blur', function(e) {
		
		var objInput = $(e.target);				//이벤트 발생한 객체
		var objId = $(objInput).attr("id");		//객체의 아이디
		var objP = $(objInput).parent().parent().find("p");	//객체의 문구 태그 객체(p태그)
		var val = $(objInput).val().trim();		//객체의 값
		
		var check = false;
		
		if($("#mberId").hasClass("required")) {
			
			var objId = $("#mberId").attr("id");		//객체의 아이디
			
			setValidateResult(objId, 'N');
			
		}
		
		//자리수 및 조합규칙 체크
		if(val.length < 5 || 20 < val.length || !val.match(/([a-zA-Z].*[0-9])|([0-9].*[a-zA-Z])/) || !/^[A-Za-z0-9]+$/.test(val)) {
			
			$(objP).removeClass("txt-color txt-color01 txt-color03");
			$(objP).addClass("txt-color01");
			$(objP).html(getMessage(objId, "INVALID1"));
			
			//Validation 실패 로그를 기록한다.
			setValidateResult(objId, 'N');
			
			return false;
			
		}
		
		//아이디 중복여부
		var method = "post";
		var url = contextPath + "member/checkExistMberIdJs.do";
		var param = "mberId=" + val;
		var result = getJsonData(method, url, param);
		
		if(result.result == true) {	//아이디 중복이면 validation 실패
			
			$(objP).removeClass("txt-color txt-color01 txt-color03");
			$(objP).addClass("txt-color01");
			$(objP).html(getMessage(objId, "EXIST"));
			
			//Validation 실패 로그를 기록한다.
			setValidateResult(objId, 'N');
			
			return false;
			
		}
		
		//정상적인 경우 완료문구 표출
		$(objP).removeClass("txt-color txt-color01 txt-color03");
		$(objP).addClass("txt-color03");
		$(objP).html(getMessage(objId, "OK"));
		
		//Validation 성공 로그를 기록한다.
		setValidateResult(objId, 'Y');
		
	});
	
	//비밀번호에 필수 속성을 부여한다.
	$("#password").addClass('required');
	$("#passwordConfirm").addClass('required');
	
	validateResult["password"] = "N";
	validateResult["passwordConfirm"] = "N";
	
	//사업자등록번호
	$("#bizrno1").val('');
	$("#bizrno2").val('');
	$("#bizrno3").val('');
	
	//이메일
	$("#email1").val('');
	$("#email2").val('');
	
	//주소
	$("#zip").val('');
	$("#rdnmadrCd").val('');
	$("#adres1").val('');
	$("#adres2").val('');
	
	//전화번호
	$("#regNo").val('');
	$("#telNo2").val('');
	$("#telNo3").val('');
	
	//핸드폰번호
	$("#cpNo1").val('');
	$("#cpNo2").val('');
	$("#cpNo3").val('');
	
}


/********************************************
 * 대상자여부 확인용 API를 호출한다.
 * strType : 조회할 API 구분값(아래 case 구문의 주석 참조)
 * strResultType : data로 넘어오면 API 실행 후 후속 화면처리를 하지 않고 데이터만 return한다.
*********************************************/
function getVoucherApi(strType, strResultType) {
	
	//console.log(strType);
	
	var method = "post";
	var strUrl = "";
	var param = $("#frm").serialize();
	
	//조회구분별 호출url 분기
	switch(strType) {
		
		case "S" :	//기초수급자
			strUrl = "/voucher/getApiLevelS.do";
			break;
		case "househead" :	//실시간세대주사실여부
			strUrl = "/voucher/getApiHousehead.do";
			break;
		case "cardOwner" :	//실시간세대주사실여부(카드소유자 확인용)
			strUrl = "/voucher/getApiHouseheadForCardOwner.do";
			break;
		case "1" :	//차상위 본인부담경감 대상
			strUrl = "/voucher/getApiLevel1.do";
			break;
		case "2" :	//차상위 자활근로 대상 
			strUrl = "/voucher/getApiLevel2.do";
			break;
		case "3" :	//차상위 장애인
			strUrl = "/voucher/getApiLevel3.do";
			break;
		case "4" :	//차상위 한부모 가족
			strUrl = "/voucher/getApiLevel4.do";
			break;
		case "5" :	//차상위 증명서발급
			strUrl = "/voucher/getApiLevel5.do";
			break;
		case "level" :	//실시간수급자증명가구원
			strUrl = "/voucher/getApiLevel.do";
			break;
		case "V" :	//폴케어(Pol-Care)
			strUrl = "/voucher/getPolcare.do";
			//strUrl = "/voucher/getApi_householder.do";
			break;
		case "T" :	//통합조회
			strUrl = "/voucher/getApiLevelTotal.do";
			break;
		case "SC" :	//단기강좌 전용 (장애여여부와 상관없이 진행가능)
			strUrl = "/voucher/getApiLevelTotal.do";
			break;
		
	}
	
	//console.log(param);
	
	var result;
	
	$.ajax({
		
		 type : method
		,url : strUrl
		,data : param
		,dataType : "json"
		,async : false
		,success : function(data, textStatus) {
			
			result = data.result;
			
		}
		,error : function(xhr, textStatus, errorThrown) {
			
		}
		
	});
	
	if(typeof(result) == "undefined" || result == null) {
		
		alert("접속자 수가 과다해 확인이 지연되고 있습니다.\n나중에 여유있게 다시 시도해주세요.");
		return false;
		
	}
	
	/***************************************
	 * 장애인여부 Y 일경우 수급신청 (단기강좌 제외)
	 ***************************************/
	if(result.qufyynAt == "Y" && strType == "T") {
		alert("장애여부가 확인되어 장애인 스포츠강좌이용권을 이용하여 주세요.");
		location.href = "https://dvoucher.kspo.or.kr/";
		return false;
	}
	
	/***************************************
	 * 수급자격 없으나 가구원이 수급자격 있으면 메시지 표출
	 ***************************************/
	var isMsg = false;
	
	//console.log("기초생활-주거 : " + result.bslf03YN + ", " + result.bslf03FAMYN);
	//console.log("기초생활-교육 : " + result.bslf04YN + ", " + result.bslf04FAMYN);
	//console.log("차상위-장애인 : " + result.upr01YN + ", " + result.upr01FAMYN);
	//console.log("차상위-자활근로 : " + result.upr02YN + ", " + result.upr02FAMYN);
	//console.log("차상위-본인부담 : " + result.upr03YN + ", " + result.upr03FAMYN);
	
	//모든 자격이 부적격인 경우에만 메시지 표출
	if(result.bslf03YN != "Y" && result.bslf04YN != "Y" && result. upr01YN != "Y" && result. upr02YN != "Y" && result. upr03YN != "Y") {
		
		if(result.bslf03YN != "Y" && result.bslf03FAMYN == "Y") {
			//기초생활-주거
			isMsg = true;
		}
		if(result.bslf04YN != "Y" && result.bslf04FAMYN == "Y") {
			//기초생활-교육
			isMsg = true;
		}
		if(result. upr01YN != "Y" && result.upr01FAMYN == "Y") {
			//차상위-장애인
			isMsg = true;
		}
		if(result. upr02YN != "Y" && result.upr02FAMYN == "Y") {
			//차상위-자활근로
			isMsg = true;
		}
		if(result. upr03YN != "Y" && result.upr03FAMYN == "Y") {
			//차상위-본인부담
			isMsg = true;
		}
		
	}
	
	
	//strResultType값이 data로 전달됐을 때는 데이터만 return한다.
	if(typeof(strResultType) != "undefined" && strResultType == "data") {
		
		//console.log(result);
		return result;
		
	} else {
		
		//수급자격 화면 표출시에만 메시지 처리
		if(isMsg) {
			
			alert("가구원 중 수급자격이 있으나, 부적격으로 표출되는 경우 거주하시는 지자체에 문의하여 주시기 바라며, 자격조건에 따라 서면신청만 가능할 수도 있습니다.");
			
		}
		
		//결과 처리
		//console.log(result);
		
		if(strType == "T" || strType == "SC" ) {
			
			return apiResultDisplayTotal(strType, result);
			
		} else {
			
			return apiResultDisplay(strType, result);
			
		}
		
	}
	
}

/********************************************
 * API 통신결과를 회원구분에 따라 분기한다.
 * division : 조회한 API 구분값(아래 case 구문의 주석 참조)
 * vo : 조회한 결과값(vo.validYn 등으로 접근)
*********************************************/
function apiResultDisplay(division, vo) {
	
	switch(division) {
		
		case "S" :	//기초수급자
			
			/*
			 * 해당 정보가 존재하는지 여부(Y : 사실, M : 중지중인 경우, N: 해당 정보 없음)
			 */
			if(vo.validYn != "Y") {
				
				console.log("기초생활수급자 의료:부적격");
				
				//조회결과 문구 설정
				$("#spResultM").addClass('txt-color01');
				$("#spResultM").html('부적격');
				$("#spResultL").addClass('txt-color01');
				$("#spResultL").html('부적격');
				$("#spResultH").addClass('txt-color01');
				$("#spResultH").html('부적격');
				$("#spResultE").addClass('txt-color01');
				$("#spResultE").html('부적격');
				
				//수급자격선택 버튼 숨김
				$("#btnConfirmM").addClass('blind');
				$("#btnConfirmL").addClass('blind');
				$("#btnConfirmH").addClass('blind');
				$("#btnConfirmE").addClass('blind');
				
				
				if(vo.validYn == "E") {
					
					//alert("접속자 수가 과다해 확인이 지연되고 있습니다.\n나중에 여유있게 다시 시도해주세요.");
					return false;
					
				} else {
					
					//alert("기초생활수급자가 아닙니다.");
					return true;
					
				}
				
			} else {
				
				//기초생활수급자 의료대상인 경우
				if(vo.medQufyYn == "Y") {
					
					console.log("기초생활수급자 의료:적격");
					
					//조회결과 문구 설정
					$("#spResultM").removeClass('txt-color01');
					$("#spResultM").addClass('txt-color03');
					$("#spResultM").html('적격');
					
					//수급자격선택 버튼 노출
					$("#btnConfirmM").removeClass('blind');
					
				} else {
					
					console.log("기초생활수급자 의료:부적격");
					
					//조회결과 문구 설정
					$("#spResultM").removeClass('txt-color03');
					$("#spResultM").addClass('txt-color01');
					$("#spResultM").html('부적격');
					
					//수급자격선택 버튼 숨김
					$("#btnConfirmM").addClass('blind');
					
				}
				
				//기초생활수급자 생계대상인 경우
				if(vo.livQufyYn == "Y") {
					
					console.log("기초생활수급자 생계:적격");
					
					//조회결과 문구 설정
					$("#spResultL").removeClass('txt-color01');
					$("#spResultL").addClass('txt-color03');
					$("#spResultL").html('적격');
					
					//수급자격선택 버튼 노출
					$("#btnConfirmL").removeClass('blind');
					
				} else {
					
					console.log("기초생활수급자 생계:부적격");
					
					//조회결과 문구 설정
					$("#spResultL").removeClass('txt-color03');
					$("#spResultL").addClass('txt-color01');
					$("#spResultL").html('부적격');
					
					//수급자격선택 버튼 숨김
					$("#btnConfirmL").addClass('blind');
					
				}
				
				//기초생활수급자 주거대상인 경우
				if(vo.houQufyYn == "Y") {
					
					console.log("기초생활수급자 주거:적격");
					
					//조회결과 문구 설정
					$("#spResultH").removeClass('txt-color01');
					$("#spResultH").addClass('txt-color03');
					$("#spResultH").html('적격');
					
					//수급자격선택 버튼 노출
					$("#btnConfirmH").removeClass('blind');
					
				} else {
					
					console.log("기초생활수급자 주거:부적격");
					
					//조회결과 문구 설정
					$("#spResultH").removeClass('txt-color03');
					$("#spResultH").addClass('txt-color01');
					$("#spResultH").html('부적격');
					
					//수급자격선택 버튼 숨김
					$("#btnConfirmH").addClass('blind');
					
				}
				
				//기초생활수급자 교육대상인 경우
				if(vo.eduQufyYn == "Y") {
					
					console.log("기초생활수급자 교육:적격");
					
					//조회결과 문구 설정
					$("#spResultE").removeClass('txt-color01');
					$("#spResultE").addClass('txt-color03');
					$("#spResultE").html('적격');
					
					//수급자격선택 버튼 노출
					$("#btnConfirmE").removeClass('blind');
					
				} else {
					
					console.log("기초생활수급자 교육:부적격");
					
					//조회결과 문구 설정
					$("#spResultE").removeClass('txt-color03');
					$("#spResultE").addClass('txt-color01');
					$("#spResultE").html('부적격');
					
					//수급자격선택 버튼 숨김
					$("#btnConfirmE").addClass('blind');
					
				}
				
				//기초수급자 상세구분 설정
				//$("#new_level_gbn").val(vo.newLevelSe);
				
			}
			break;
		case "househead" :	//실시간세대주사실여부
			/*
				공통
				0 : 요청구분 코드 오류
				a. 부모자녀 관계 확인
				1 : 정상
				2 : 자녀 주민등록번호 오류
				3 : 자녀 성명 오류
				4 : 자녀 사망자
				5 : 부(모) 주민등록번호 오류
				6 : 부(모) 성명 오류
				7 : 부(모) 사망자
				8 : 부(모) 자녀관계 미성립
				9 : 시스템 오류
				b. 동일세대 구성 확인
				1 : 정상
				2 : 세대원 주민등록번호 오류
				3 : 세대원 성명 오류
				4 : 세대원 사망자
				5 : 세대주 주민등록번호 오류
				6 : 세대주 성명 오류
				7 : 세대주 사망자
				10 : 세대원 여부 불일치
				9 : 시스템 오류
			 */
			if(vo.serviceResult != "1") {
				
				if(vo.serviceResult == "E") {
					
					//alert("접속자 수가 과다해 확인이 지연되고 있습니다.\n나중에 여유있게 다시 시도해주세요.");
					return false;
					
				} else {
					
					//alert("신청자와 수급자가 동일세대 구성원이 아닙니다.");
					return true;
					
				}
				
			}
			break;
		case "cardOwner" :	//실시간세대주사실여부(카드발급자)
			/*
				공통
				0 : 요청구분 코드 오류
				a. 부모자녀 관계 확인
				1 : 정상
				2 : 자녀 주민등록번호 오류
				3 : 자녀 성명 오류
				4 : 자녀 사망자
				5 : 부(모) 주민등록번호 오류
				6 : 부(모) 성명 오류
				7 : 부(모) 사망자
				8 : 부(모) 자녀관계 미성립
				9 : 시스템 오류
				b. 동일세대 구성 확인
				1 : 정상
				2 : 세대원 주민등록번호 오류
				3 : 세대원 성명 오류
				4 : 세대원 사망자
				5 : 세대주 주민등록번호 오류
				6 : 세대주 성명 오류
				7 : 세대주 사망자
				10 : 세대원 여부 불일치
				9 : 시스템 오류
			 */
			if(vo.serviceResult != "1") {
				
				if(vo.serviceResult == "E") {
					
					//alert("접속자 수가 과다해 확인이 지연되고 있습니다.\n나중에 여유있게 다시 시도해주세요.");
					return false;
					
				} else {
					
					//alert("신청자와 수급자가 동일세대 구성원이 아닙니다.");
					return true;
					
				}
				
			}
			break;
		case "1" :	//차상위 본인부담경감 대상
			
			/*
			 * Y 또는 N
			 */
			if(vo.validYn != "Y") {
				
				console.log("차상위 본인부담:부적격");
				
				//조회결과 문구 설정
				$("#spResult1").removeClass('txt-color03');
				$("#spResult1").addClass('txt-color01');
				$("#spResult1").html('부적격');
				
				//수급자격선택 버튼 숨김
				$("#btnConfirm1").addClass('blind');
				
				if(vo.validYn == "E") {
					
					//alert("접속자 수가 과다해 확인이 지연되고 있습니다.\n나중에 여유있게 다시 시도해주세요.");
					return false;
					
				} else {
					
					//alert("신청자가 차상위 본인부담경감 대상이 아닙니다.");
					return true;
					
				}
				
			} else {
				
				console.log("차상위 본인부담:적격");
				
				//조회결과 문구 설정
				$("#spResult1").removeClass('txt-color01');
				$("#spResult1").addClass('txt-color03');
				$("#spResult1").html('적격');
				
				//수급자격선택 버튼 노출
				$("#btnConfirm1").removeClass('blind');
				
			}
			break;
		case "2" :	//차상위 자활근로 대상
			
			/*
			 * "Y : 예
			 N : 아니오"
			 */
			if(vo.validYn != "Y") {
				
				console.log("차상위 자활근로:부적격");
				
				//조회결과 문구 설정
				$("#spResult2").removeClass('txt-color03');
				$("#spResult2").addClass('txt-color01');
				$("#spResult2").html('부적격');
				
				//수급자격선택 버튼 숨김
				$("#btnConfirm2").addClass('blind');
				
				if(vo.resultMsg == "E") {
					
					//alert("접속자 수가 과다해 확인이 지연되고 있습니다.\n나중에 여유있게 다시 시도해주세요.");
					return false;
					
				} else {
					
					//alert("신청자가 차상위 자활근로 대상이 아닙니다.");
					return true;
					
				}
				
			} else {
				
				console.log("차상위 자활근로:적격");
				
				//조회결과 문구 설정
				$("#spResult2").removeClass('txt-color01');
				$("#spResult2").addClass('txt-color03');
				$("#spResult2").html('적격');
				
				//수급자격선택 버튼 노출
				$("#btnConfirm2").removeClass('blind');
				
			}
			break;
		case "3" :	//차상위 장애인
			
			/*
			 * "Y : 예
			 N : 아니오"
			 */
			if(vo.validYn != "Y") {
				
				console.log("차상위 장애인:부적격");
				
				//조회결과 문구 설정
				$("#spResult3").removeClass('txt-color03');
				$("#spResult3").addClass('txt-color01');
				$("#spResult3").html('부적격');
				
				//수급자격선택 버튼 숨김
				$("#btnConfirm3").addClass('blind');
				
				if(vo.resultMsg == "E") {
					
					//alert("접속자 수가 과다해 확인이 지연되고 있습니다.\n나중에 여유있게 다시 시도해주세요.");
					return false;
					
				} else {
					
					//alert("신청자가 차상위 장애인 대상이 아닙니다.");
					return true;
					
				}
				
			} else {
				
				console.log("차상위 장애인:적격");
				
				//조회결과 문구 설정
				$("#spResult3").removeClass('txt-color01');
				$("#spResult3").addClass('txt-color03');
				$("#spResult3").html('적격');
				
				//수급자격선택 버튼 노출
				$("#btnConfirm3").removeClass('blind');
				
			}
			break;
		case "4" :	//한부모 가족
			
			/*
			 * 해당 정보가 존재하는지 여부
			 (Y : 사실, M : 중지중인 경우, N: 해당 정보 없음)
			 */
			if(vo.validYn != "Y") {
				
				console.log("차상위 한부모가족:부적격");
				
				//조회결과 문구 설정
				$("#spResult4").removeClass('txt-color03');
				$("#spResult4").addClass('txt-color01');
				$("#spResult4").html('부적격');
				
				//수급자격선택 버튼 숨김
				$("#btnConfirm4").addClass('blind');
				
				if(vo.validYn == "E") {
					
					//alert("접속자 수가 과다해 확인이 지연되고 있습니다.\n나중에 여유있게 다시 시도해주세요.");
					return false;
					
				} else {
					
					//alert("신청자가 법정 한부모지원가구 대상이 아닙니다.");
					return true;
					
				}
				
			} else {
				
				console.log("차상위 한부모가족:적격");
				
				//조회결과 문구 설정
				$("#spResult4").removeClass('txt-color01');
				$("#spResult4").addClass('txt-color03');
				$("#spResult4").html('적격');
				
				//수급자격선택 버튼 노출
				$("#btnConfirm4").removeClass('blind');
				
			}
			break;
		case "5" :	//차상위 증명서발급
			
			/*
			 * "Y : 예
			 N : 아니오"
			 */
			if(vo.validYn != "Y") {
				
				console.log("차상위 증명서발급:부적격");
				
				//조회결과 문구 설정
				$("#spResult5").removeClass('txt-color03');
				$("#spResult5").addClass('txt-color01');
				$("#spResult5").html('부적격');
				
				//수급자격선택 버튼 숨김
				$("#btnConfirm5").addClass('blind');
				
				if(vo.resultMsg == "E") {
					
					//alert("접속자 수가 과다해 확인이 지연되고 있습니다.\n나중에 여유있게 다시 시도해주세요.");
					return false;
					
				} else {
					
					//alert("신청자가 차상위증명서발급(구, 증명서발급) 대상이 아닙니다.");
					return true;
					
				}
				
			} else {
				
				console.log("차상위 증명서발급:적격");
				
				//조회결과 문구 설정
				$("#spResult5").removeClass('txt-color01');
				$("#spResult5").addClass('txt-color03');
				$("#spResult5").html('적격');
				
				//수급자격선택 버튼 노출
				$("#btnConfirm5").removeClass('blind');
				
			}
			
			break;
		case "level" :	//수급자증명가구원
			/*
			 * "Y : 예
			 N : 아니오"
			 */
			if(vo.resultMsg != "Y") {
				
				if(vo.resultMsg == "E") {
					
					//alert("접속자 수가 과다해 확인이 지연되고 있습니다.\n나중에 여유있게 다시 시도해주세요.");
					return false;
					
				} else {
					
					//alert("신청자가 수급자 대상이 아닙니다.");
					return true;
					
				}
				
				
			}
			break;
		case "V" :	//폴케어(Pol-Care)
			/*
			 * "Y : 예
			 N : 아니오"
			 */
			/*
			if(vo.resultMsg != "Y") {
				
				if(vo.resultMsg == "E") {
					
					alert("접속자 수가 과다해 확인이 지연되고 있습니다.\n나중에 여유있게 다시 시도해주세요.");
					return false;
					
				} else {
					
					alert("신청자가 수급자 대상이 아닙니다.");
					return false;
					
				}
				
				
			}
			*/
			/*
				공통
				0 : 요청구분 코드 오류
				a. 부모자녀 관계 확인
				1 : 정상
				2 : 자녀 주민등록번호 오류
				3 : 자녀 성명 오류
				4 : 자녀 사망자
				5 : 부(모) 주민등록번호 오류
				6 : 부(모) 성명 오류
				7 : 부(모) 사망자
				8 : 부(모) 자녀관계 미성립
				9 : 시스템 오류
				b. 동일세대 구성 확인
				1 : 정상
				2 : 세대원 주민등록번호 오류
				3 : 세대원 성명 오류
				4 : 세대원 사망자
				5 : 세대주 주민등록번호 오류
				6 : 세대주 성명 오류
				7 : 세대주 사망자
				10 : 세대원 여부 불일치
				9 : 시스템 오류
			 					 
			if(vo.serviceResult == "1" || vo.serviceResult == "10") {
				
			} else {
				
				if(vo.serviceResult == "E") {
					
					alert("접속자 수가 과다해 확인이 지연되고 있습니다.\n나중에 여유있게 다시 시도해주세요.");
					return false;
					
				} else {
					
					alert("성명 또는 주민등록번호를 확인하시기 바랍니다.");
					return false;
					
				}
				
			}
			break;
			*/
			
			if(vo.polcare_req_yn_w == "Y") {
				
				//alert("추후 경찰청에서 지원자격 재확인시 대상자가 아닌 경우,\n지원이 중단 될 수 있습니다.");
				
			}
			if(vo.polcare_req_yn_w != "Y") {
				
				if(vo.polcare_req_yn_w == "E") {
					
					//alert("접속자 수가 과다해 확인이 지연되고 있습니다.\n나중에 여유있게 다시 시도해주세요.");
					return false;
					
				} else {
					
					//alert("경찰청에서 관리하는 폴케어 대상자가 아닙니다.\n다시 확인해 주시기 바랍니다.");
					return false;
					
				}
				
				
			}
			break;
		
	}
	
	//통합문화이용권 이용여부를 조회한다.
	//if(getApi_existTicket()) {
		
		if(division == "H" || division == "D"  ) {
			
		} else {
			
			//alert("스포츠강좌이용권 신청가능 대상입니다.");
			
		}
		//changeInputForm('Y');
		
	//	}
	
	return true;
	
}


/********************************************
 * API 통신결과를 회원구분에 따라 분기한다. (2018년 통합조회 전용)
 * division : 조회한 API 구분값(아래 case 구문의 주석 참조)
 * vo : 조회한 결과값(vo.validYn 등으로 접근)
*********************************************/
function apiResultDisplayTotal(division, vo) {
	
	//기초생활수급자 생계대상인 경우
	if(vo.bslf01YN == "Y") {
		
		console.log("기초생활수급자 생계:적격");
		
		//조회결과 문구 설정
		$("#spResultL").removeClass('txt-color01');
		$("#spResultL").addClass('txt-color03');
		$("#spResultL").html('적격');
		
		//수급자격선택 버튼 노출
		$("#btnConfirmL").removeClass('blind');
		
	} else {
		
		console.log("기초생활수급자 생계:부적격");
		
		//조회결과 문구 설정
		$("#spResultL").removeClass('txt-color03');
		$("#spResultL").addClass('txt-color01');
		$("#spResultL").html('부적격');
		
		//수급자격선택 버튼 숨김
		$("#btnConfirmL").addClass('blind');
		
	}
	
	//기초생활수급자 의료대상인 경우
	if(vo.bslf02YN == "Y") {
		
		console.log("기초생활수급자 의료:적격");
		
		//조회결과 문구 설정
		$("#spResultM").removeClass('txt-color01');
		$("#spResultM").addClass('txt-color03');
		$("#spResultM").html('적격');
		
		//수급자격선택 버튼 노출
		$("#btnConfirmM").removeClass('blind');
		
	} else {
		
		console.log("기초생활수급자 의료:부적격");
		
		//조회결과 문구 설정
		$("#spResultM").removeClass('txt-color03');
		$("#spResultM").addClass('txt-color01');
		$("#spResultM").html('부적격');
		
		//수급자격선택 버튼 숨김
		$("#btnConfirmM").addClass('blind');
		
	}
	
	//기초생활수급자 주거대상인 경우
	if(vo.bslf03YN == "Y") {
		
		console.log("기초생활수급자 주거:적격");
		
		//조회결과 문구 설정
		$("#spResultH").removeClass('txt-color01');
		$("#spResultH").addClass('txt-color03');
		$("#spResultH").html('적격');
		
		//수급자격선택 버튼 노출
		$("#btnConfirmH").removeClass('blind');
		
	} else {
		
		console.log("기초생활수급자 주거:부적격");
		
		//조회결과 문구 설정
		$("#spResultH").removeClass('txt-color03');
		$("#spResultH").addClass('txt-color01');
		$("#spResultH").html('부적격');
		
		//수급자격선택 버튼 숨김
		$("#btnConfirmH").addClass('blind');
		
	}
	
	//기초생활수급자 교육대상인 경우
	if(vo.bslf04YN == "Y") {
		
		console.log("기초생활수급자 교육:적격");
		
		//조회결과 문구 설정
		$("#spResultE").removeClass('txt-color01');
		$("#spResultE").addClass('txt-color03');
		$("#spResultE").html('적격');
		
		//수급자격선택 버튼 노출
		$("#btnConfirmE").removeClass('blind');
		
	} else {
		
		console.log("기초생활수급자 교육:부적격");
		
		//조회결과 문구 설정
		$("#spResultE").removeClass('txt-color03');
		$("#spResultE").addClass('txt-color01');
		$("#spResultE").html('부적격');
		
		//수급자격선택 버튼 숨김
		$("#btnConfirmE").addClass('blind');
		
	}
	
	//차상위 장애인인 경우
	if(vo.upr01YN == "Y") {
		
		console.log("차상위 장애인:적격");
		
		//조회결과 문구 설정
		$("#spResult3").removeClass('txt-color01');
		$("#spResult3").addClass('txt-color03');
		$("#spResult3").html('적격');
		
		//수급자격선택 버튼 노출
		$("#btnConfirm3").removeClass('blind');
		
	} else {
		
		console.log("차상위 장애인:부적격");
		
		//조회결과 문구 설정
		$("#spResult3").removeClass('txt-color03');
		$("#spResult3").addClass('txt-color01');
		$("#spResult3").html('부적격');
		
		//수급자격선택 버튼 숨김
		$("#btnConfirm3").addClass('blind');
		
	}
	
	//차상위 자활근로대상자인 경우
	if(vo.upr02YN == "Y") {
		
		console.log("차상위 자활근로대상자:적격");
		
		//조회결과 문구 설정
		$("#spResult2").removeClass('txt-color01');
		$("#spResult2").addClass('txt-color03');
		$("#spResult2").html('적격');
		
		//수급자격선택 버튼 노출
		$("#btnConfirm2").removeClass('blind');
		
	} else {
		
		console.log("차상위 자활근로대상자:부적격");
		
		//조회결과 문구 설정
		$("#spResult2").removeClass('txt-color03');
		$("#spResult2").addClass('txt-color01');
		$("#spResult2").html('부적격');
		
		//수급자격선택 버튼 숨김
		$("#btnConfirm2").addClass('blind');
		
	}
	
	//차상위 본인부담대상자인 경우
	if(vo.upr03YN == "Y") {
		
		console.log("차상위 본인부담대상자:적격");
		
		//조회결과 문구 설정
		$("#spResult1").removeClass('txt-color01');
		$("#spResult1").addClass('txt-color03');
		$("#spResult1").html('적격');
		
		//수급자격선택 버튼 노출
		$("#btnConfirm1").removeClass('blind');
		
	} else {
		
		console.log("차상위 본인부담대상자:부적격");
		
		//조회결과 문구 설정
		$("#spResult1").removeClass('txt-color03');
		$("#spResult1").addClass('txt-color01');
		$("#spResult1").html('부적격');
		
		//수급자격선택 버튼 숨김
		$("#btnConfirm1").addClass('blind');
		
	}
	
	//차상위 확인서발급인 경우
	if(vo.upr04YN == "Y") {
		
		console.log("차상위 확인서발급:적격");
		
		//조회결과 문구 설정
		$("#spResult5").removeClass('txt-color01');
		$("#spResult5").addClass('txt-color03');
		$("#spResult5").html('적격');
		
		//수급자격선택 버튼 노출
		$("#btnConfirm5").removeClass('blind');
		
	} else {
		
		console.log("차상위 확인서발급:부적격");
		
		//조회결과 문구 설정
		$("#spResult5").removeClass('txt-color03');
		$("#spResult5").addClass('txt-color01');
		$("#spResult5").html('부적격');
		
		//수급자격선택 버튼 숨김
		$("#btnConfirm5").addClass('blind');
		
	}
	
	//차상위 한부모가족인 경우
	if(vo.oprnyn == "Y") {
		
		console.log("차상위 한부모가족:적격");
		
		//조회결과 문구 설정
		$("#spResult4").removeClass('txt-color01');
		$("#spResult4").addClass('txt-color03');
		$("#spResult4").html('적격');
		
		//수급자격선택 버튼 노출
		$("#btnConfirm4").removeClass('blind');
		
	} else {
		
		console.log("차상위 한부모가족:부적격");
		
		//조회결과 문구 설정
		$("#spResult4").removeClass('txt-color03');
		$("#spResult4").addClass('txt-color01');
		$("#spResult4").html('부적격');
		
		//수급자격선택 버튼 숨김
		$("#btnConfirm4").addClass('blind');
		
	}
	
	return true;
	
}


/******************************
 * 세대주 여부를 조회한다.
*******************************/
function getHouseHeadYn(isData) {
	
	//alert메시지 없이 데이터만 전달할지 여부
	//true : 데이터만 전달, false : alert메시지 출력
	if(typeof(isData) == "undefined") {
		
		isData = false;
		
	}

	
	var blnReturn = false;
	
	var objInput1 = $("#hshldrNm");
	var objInput2 = $("#hshldrIhidnum1");
	var objP1 = $(objInput1).parent().parent().find("p");
	var objP2 = $(objInput2).parent().parent().find("p");
	
	//API를 통해 조회
	var result = getVoucherApi('househead', 'data');
	
	//결과를 패러미터로 설정한다.
	$("#househeadYn").val(result.validYn);
	
	//별도의 메시지 및 화면 처리
	if(result.validYn == "Y") {
		
		//세대주 정보 조회여부 변경
		$("#card_house_yn").val('Y');
		
		if(!isData) {
			
			alert(MESSAGE.HOUSEHEAD_NM_CONFIRM);
			
			//카드발급자 정보조회로 포커스 이동
			$("#cardOwnrNm").focus();
			
		}
		
		$(objP1).removeClass("txt-color txt-color01 txt-color03");
		$(objP1).addClass("txt-color03");
		$(objP1).html(getMessage("hshldrNm", "CONFIRM"));
		
		$(objP2).removeClass("txt-color txt-color01 txt-color03");
		$(objP2).addClass("txt-color03");
		$(objP2).html(getMessage("hshldrIhidnum1", "CONFIRM"));
		
		//Validation 성공 로그를 기록한다.
		setValidateResult('househeadYn', 'Y');
		setValidateResult('hshldrNm', 'Y');
		setValidateResult('hshldrIhidnum1', 'Y');
		setValidateResult('hshldrIhidnum2', 'Y');
		
		blnReturn = true;
		
		//2021.12.13 세대주 정보조회 버튼 유효성 문구 추가
		$("#hshldrBtnUseCheck").text("세대주 정보조회 완료");
		$("#hshldrBtnUseCheck").css('color', '#0a7ce1');
		
	} else {
		
		if(!isData) {
			
			alert(MESSAGE.HOUSEHEAD_NM_INVALID1);
			
		}
		
		$(objP1).removeClass("txt-color txt-color01 txt-color03");
		$(objP1).addClass("txt-color01");
		$(objP1).html(getMessage("hshldrNm", "INVALID1"));
		
		$(objP2).removeClass("txt-color txt-color01 txt-color03");
		$(objP2).addClass("txt-color01");
		$(objP2).html(getMessage("hshldrIhidnum1", "INVALID2"));
		
		//Validation 실패 로그를 기록한다.
		setValidateResult('househeadYn', 'N');
		setValidateResult('hshldrNm', 'N');
		setValidateResult('hshldrIhidnum1', 'N');
		setValidateResult('hshldrIhidnum2', 'N');
		
		//2021.12.13 세대주 정보조회 버튼 유효성 문구 추가
		$("#hshldrBtnUseCheck").text("세대주 정보조회 버튼을 눌러주세요.");
		$("#hshldrBtnUseCheck").css('color', 'red');
		
	}
	
	//수급가구증명원여부는 무조건 Y로 설정
	$("#vouchHouseAt").val('Y');
	
	if(isData) {
		return blnReturn;
	}
	
}

/******************************
 * 카드발급자 실명 여부를 조회한다.
*******************************/
function getCardOwnerYn(isData) {
	
	//alert메시지 없이 데이터만 전달할지 여부
	//true : 데이터만 전달, false : alert메시지 출력
	if(typeof(isData) == "undefined") {
		
		isData = false;
		
	}
	
	var blnReturn = false;
	
	//입력한 주민번호 적격성 검사
	var strCardOwnrIhidnum = $("#cardOwnrIhidnum1").val() + "" + $("#cardOwnrIhidnum2").val();
//	if(!checkPersonalNo(strCardOwnrIhidnum)) {
//		
//		if(!isData) {
//			alert("입력하신 카드발급자 주민등록번호는 올바른 형태의 주민등록번호가 아닙니다.");
//		}
//		$("#cardOwnrIhidnum1").focus();
//		return;
//		
//	}
	
	//12세 이상만 카드발급자로 등록 가능
	var method = "post";
	var url = contextPath + "common/getRealAgeFromIhidnumJs.do";
	var param = "ihidnum=" + strCardOwnrIhidnum;
	
	var data = getJsonData(method, url, param);
	if(data.realAge < 12) {
		
		if(!isData) {
			alert("12세 이상만 카드발급이 가능합니다.");
		}
		return;
		
	}
	
	
	var objInput1 = $("#cardOwnrNm");
	var objInput2 = $("#cardOwnrIhidnum1");
	var objP1 = $(objInput1).parent().parent().find("p");
	var objP2 = $(objInput2).parent().parent().find("p");
	
	//API를 통해 조회
	var result = getVoucherApi('cardOwner', 'data');
	//var result = "Y";
	
	//결과를 패러미터로 설정한다.
	$("#cardOwnerYn").val(result.validYn);
	//$("#cardOwnerYn").val(result);
	
	//별도의 메시지 및 화면 처리
	if(result.validYn == "Y") {
	//if(result == "Y") {
		
		//세대주 정보 일치 확인
		if(!isData) {
			
			alert(MESSAGE.CARD_OWNER_NM_CONFIRM);
			
		}
		
		$(objP1).removeClass("txt-color txt-color01 txt-color03");
		$(objP1).addClass("txt-color03");
		$(objP1).html(getMessage("cardOwnrNm", "CONFIRM"));
		
		$(objP2).removeClass("txt-color txt-color01 txt-color03");
		$(objP2).addClass("txt-color03");
		$(objP2).html(getMessage("cardOwnrIhidnum1", "CONFIRM"));
		
		//Validation 성공 로그를 기록한다.
		setValidateResult('cardOwnerYn', 'Y');
		setValidateResult('cardOwnrNm', 'Y');
		setValidateResult('cardOwnrIhidnum1', 'Y');
		setValidateResult('cardOwnrIhidnum2', 'Y');
		
		//2021.12.13 세대원여부 조회 버튼 유효성 문구 추가
		$("#cardOwnrBtnUseCheck").text("세대원여부 조회 완료");
		$("#cardOwnrBtnUseCheck").css('color', '#0a7ce1');
		
	} else {
		
		if(result.serviceResult == "10") {
			
			//세대원 여부 불일치
			if(!isData) {
				
				alert(MESSAGE.CARD_OWNER_NM_CONFIRM2);
				
			}
			
			$(objP1).removeClass("txt-color txt-color01 txt-color03");
			$(objP1).addClass("txt-color03");
			$(objP1).html(getMessage("cardOwnrNm", "CONFIRM"));
			
			$(objP2).removeClass("txt-color txt-color01 txt-color03");
			$(objP2).addClass("txt-color03");
			$(objP2).html(getMessage("cardOwnrIhidnum1", "CONFIRM"));
			
			//Validation 성공 로그를 기록한다.
			setValidateResult('cardOwnerYn', 'Y');
			setValidateResult('cardOwnrNm', 'Y');
			setValidateResult('cardOwnrIhidnum1', 'Y');
			setValidateResult('cardOwnrIhidnum2', 'Y');
			
			//2021.12.13 세대원여부 조회 버튼 유효성 문구 추가
			$("#cardOwnrBtnUseCheck").text("세대원여부 조회 완료");
			$("#cardOwnrBtnUseCheck").css('color', '#0a7ce1');
			
		} else {
			
			/**
			 * 세대원 여부가 확인되지 않는 케이스
			 *  2 : 세대원 주민등록번호 오류
				3 : 세대원 성명 오류 
				4 : 세대원 사망자
				5 : 세대주 주민등록번호 오류
				6 : 세대주 성명 오류 
				7 : 세대주 사망자
			 */
			if(!isData) {
				
				alert(MESSAGE.CARD_OWNER_NM_INVALID1);
				
			}
			
			$(objP1).removeClass("txt-color txt-color01 txt-color03");
			$(objP1).addClass("txt-color01");
			$(objP1).html(getMessage("cardOwnrNm", "INVALID1"));
			
			$(objP2).removeClass("txt-color txt-color01 txt-color03");
			$(objP2).addClass("txt-color01");
			$(objP2).html(getMessage("cardOwnrIhidnum1", "INVALID2"));
			
			//Validation 실패 로그를 기록한다.
			setValidateResult('cardOwnerYn', 'N');
			setValidateResult('cardOwnrNm', 'N');
			setValidateResult('cardOwnrIhidnum1', 'N');
			setValidateResult('cardOwnrIhidnum2', 'N');
			
			//2021.12.13 세대원여부 조회 버튼 유효성 문구 추가
			$("#cardOwnrBtnUseCheck").text("세대원여부 조회 버튼을 눌러주세요.");
			$("#cardOwnrBtnUseCheck").css('color', 'red');
			
		}
		
	}
	
	if(isData) {
		return blnReturn;
	}
	
}


/***************************************
 * 카드발급자 구분에 따라 카드발급자 정보를 자동으로 바인딩한다.
 * type : 1(기존카드발급자), 2(세대주), 3(수급자), 4(신청자), 5(기타)
****************************************/
function changeCardOwnerInfo(type) {
	
	//카드발급자 정보 버튼 초기화
	$(".btnCardOwnerSelect").removeClass('active').attr("title", "");
	
	switch(type) {
		
		case "1":	//기존카드발급자
			
			//카드발급자 세대주 관계여부
			$("#cardHouseAt").val('Y');
			
			//기존 카드정보 조회
			var method = "post";
			var url = contextPath + "voucher/getBeforeCardOwnerInfoJs.do";
			var param = "";
			
			var data = getJsonData(method, url, param);
			
			//수급자 정보 복사
			$("#cardOwnrNm").val(data.result.cardOwnrNm);
			$("#cardOwnrIhidnum1").val(data.result.cardOwnrIhidnum1);
			$("#cardOwnrIhidnum2").val(data.result.cardOwnrIhidnum2);
			
			//카드발급자 세대주 클릭 시 주소 동일화
			$("#cardZip").val(data.result.cardZip);
			$("#cardAdres1").val(data.result.cardAdres1);
			$("#cardAdres2").val(data.result.cardAdres2);
			
			$("#btnCardOwnerSelect1").addClass('active').attr("title", "선택됨");
			
			changeCardOwnerInputForm('Y');
			
			break;
		case "2":	//세대주
			
			//카드발급자 세대주 관계여부
			$("#cardHouseAt").val('Y');
			
			//세대주의 이름, 주민번호 복사
			$("#cardOwnrNm").val($("#hshldrNm").val());
			$("#cardOwnrIhidnum1").val($("#hshldrIhidnum1").val());
			$("#cardOwnrIhidnum2").val($("#hshldrIhidnum2").val());
			
			//카드발급자 세대주 클릭 시 주소 동일화
			$("#cardZip").val($("#zip").val());
			$("#cardAdres1").val($("#adres1").val());
			$("#cardAdres2").val($("#adres2").val());
			
			//버튼 선택 처리
			$("#btnCardOwnerSelect2").addClass('active').attr("title", "선택됨");
			
			//입력폼을 변경한다.
			changeCardOwnerInputForm('Y');
			
			break;
		case "3":	//수급자
			
			//카드발급자 세대주 관계여부
			$("#cardHouseAt").val('Y');
			
			//수급자의 이름, 주민번호 조회
			var method = "post";
			var url = contextPath + "voucher/getRecipterInfoForSessionJs.do";
			var param = "";
			
			var data = getJsonData(method, url, param);
			
			//수급자 정보 복사
			$("#cardOwnrNm").val(data.result.recipterNm);
			$("#cardOwnrIhidnum1").val(data.result.recipterIhidnum1);
			$("#cardOwnrIhidnum2").val(data.result.recipterIhidnum2);
			
			//카드발급자 수급자 클릭 시 주소 동일화
			$("#cardZip").val($("#zip").val());
			$("#cardAdres1").val($("#adres1").val());
			$("#cardAdres2").val($("#adres2").val());
			
			$("#btnCardOwnerSelect3").addClass('active').attr("title", "선택됨");
			
			changeCardOwnerInputForm('Y');
			
			break;
		case "4":	//신청자
			//카드발급자 세대주 관계여부
			$("#cardHouseAt").val('Y');
			
			//신청자의 이름, 주민번호 조회
			var method = "post";
			var url = contextPath + "voucher/getRequesterInfoForSessionJs.do";
			var param = "";
			
			var data = getJsonData(method, url, param);
			
			//신청자 정보 복사
			$("#cardOwnrNm").val(data.result.mberNm);
			$("#cardOwnrIhidnum1").val(data.result.ihidnum1);
			$("#cardOwnrIhidnum2").val(data.result.ihidnum2);
			
			//카드발급자 신청자 클릭 시 주소 동일화
			$("#cardZip").val($("#zip").val());
			$("#cardAdres1").val($("#adres1").val());
			$("#cardAdres2").val($("#adres2").val());
			
			$("#btnCardOwnerSelect4").addClass('active').attr("title", "선택됨");
			
			changeCardOwnerInputForm('Y');
			
			break;
		case "5":	//기타
			//카드발급자 세대주 관계여부
			$("#cardHouseAt").val('N');
			
			//입력값 초기화
			$("#cardOwnrNm").val('');
			$("#cardOwnrIhidnum1").val('');
			$("#cardOwnrIhidnum2").val('');
			
			$("#cardZip").val('');
			$("#cardAdres1").val('');
			$("#cardAdres2").val('');
			
			$("#btnCardOwnerSelect5").addClass('active').attr("title", "선택됨");
			
			changeCardOwnerInputForm('N');
			
			break;
		
	}
	
	//Validation 실행
	$("#cardOwnrNm").blur();
	$("#cardOwnrIhidnum1").blur();
	$("#cardOwnrIhidnum2").blur();
	
	$("#cardAdres1").blur();
	$("#cardAdres2").blur();
	
}

/***************************************
 * 카드발급자 구분에 따라 카드발급자 정보를 자동으로 바인딩한다.
 * 이미 신청한 이용권정보의 수정만 사용한다.
 * type : 1(기존카드발급자), 2(세대주), 3(수급자), 4(신청자), 5(기타)
****************************************/
function changeCardOwnerInfoForModify(type) {
	
	//카드발급자 정보 버튼 초기화
	$(".btnCardOwnerSelect").removeClass('active').attr("title", "");
	
	switch(type) {
		
		case "1":	//기존카드발급자
			
			//카드발급자 세대주 관계여부
			$("#cardHouseAt").val('Y');
			
			//기존 카드정보 조회
			var method = "post";
			var url = contextPath + "voucher/getVoucherRequestInfoJs.do";
			var param = "cardOwnrType=1";
				param += "&mberReqDt=" + $("#mberReqDt").val();
			
			var data = getJsonData(method, url, param);
			
			//수급자 정보 복사
			$("#cardOwnrNm").val(data.result.cardOwnrNm);
			$("#cardOwnrIhidnum1").val(data.result.cardOwnrIhidnum1);
			$("#cardOwnrIhidnum2").val(data.result.cardOwnrIhidnum2);
			
			$("#btnCardOwnerSelect1").addClass('active').attr("title", "선택됨");
			
			changeCardOwnerInputForm('Y');
			
			break;
		case "2":	//세대주
			
			//카드발급자 세대주 관계여부
			$("#cardHouseAt").val('Y');
			
			var method = "post";
			var url = contextPath + "voucher/getVoucherRequestInfoJs.do";
			var param = "cardOwnrType=2";
				param += "&mberReqDt=" + $("#mberReqDt").val();
			
			var data = getJsonData(method, url, param);
			
			//세대주의 이름, 주민번호 복사
			$("#cardOwnrNm").val(data.result.hshldrNm);
			$("#cardOwnrIhidnum1").val(data.result.hshldrIhidnum1);
			$("#cardOwnrIhidnum2").val(data.result.hshldrIhidnum2);
			
			//버튼 선택 처리
			$("#btnCardOwnerSelect2").addClass('active').attr("title", "선택됨");
			
			//입력폼을 변경한다.
			changeCardOwnerInputForm('Y');
			
			break;
		case "3":	//수급자
			
			//카드발급자 세대주 관계여부
			$("#cardHouseAt").val('Y');
			
			var method = "post";
			var url = contextPath + "voucher/getVoucherRequestInfoJs.do";
			var param = "cardOwnrType=3";
				param += "&mberReqDt=" + $("#mberReqDt").val();
			
			var data = getJsonData(method, url, param);
			
			//수급자 정보 복사
			$("#cardOwnrNm").val(data.result.recipterNm);
			$("#cardOwnrIhidnum1").val(data.result.recipterIhidnum1);
			$("#cardOwnrIhidnum2").val(data.result.recipterIhidnum2);
			
			$("#btnCardOwnerSelect3").addClass('active').attr("title", "선택됨");
			
			changeCardOwnerInputForm('Y');
			
			break;
		case "4":	//신청자
			//카드발급자 세대주 관계여부
			$("#cardHouseAt").val('Y');
			
			var method = "post";
			var url = contextPath + "voucher/getVoucherRequestInfoJs.do";
			var param = "cardOwnrType=4";
				param += "&mberReqDt=" + $("#mberReqDt").val();
			
			var data = getJsonData(method, url, param);
			
			//신청자 정보 복사
			$("#cardOwnrNm").val(data.result.mberNm);
			$("#cardOwnrIhidnum1").val(data.result.ihidnum1);
			$("#cardOwnrIhidnum2").val(data.result.ihidnum2);
			
			$("#btnCardOwnerSelect4").addClass('active').attr("title", "선택됨");
			
			changeCardOwnerInputForm('Y');
			
			break;
		case "5":	//기타
			//카드발급자 세대주 관계여부
			$("#cardHouseAt").val('N');
			
			//입력값 초기화
			$("#cardOwnrNm").val('');
			$("#cardOwnrIhidnum1").val('');
			$("#cardOwnrIhidnum2").val('');
			
			$("#btnCardOwnerSelect5").addClass('active').attr("title", "선택됨");
			
			changeCardOwnerInputForm('N');
			
			break;
		
	}
	
	//Validation 실행
	$("#cardOwnrNm").blur();
	$("#cardOwnrIhidnum1").blur();
	$("#cardOwnrIhidnum2").blur();
	
}

function changeCardOwnerInputForm(type) {
	
	if(type == "Y") {
		
		//카드발급인 입력정보 비활성화
		$("#cardOwnrNm").prop('readonly', true);
		$("#cardOwnrIhidnum1").prop('readonly', true);
		$("#cardOwnrIhidnum2").prop('readonly', true);
		
	} else if(type == "N") {
		
		//카드발급인 입력정보 비활성화
		$("#cardOwnrNm").prop('readonly', false);
		$("#cardOwnrIhidnum1").prop('readonly', false);
		$("#cardOwnrIhidnum2").prop('readonly', false);
		
	}
	
}

/***************************************
 * 장애인 여부를 선택 처리한다.
****************************************/
function changeDspsnAt(val) {
	
	//화면 처리
	$(".dspsnAt").removeClass("active").attr("title", "");
	$("#dspsnAt" + val).addClass("active").attr("title", "선택됨");
	
	//값 설정
	$("#dspsnAt").val(val);
	
	//Validation 성공 로그를 기록한다.
	setValidateResult("dspsnAt", 'Y');
	
}


/***************************************
 * SMS 수신여부를 선택 처리한다.
****************************************/
function changeSmsAt(val) {
	
	//화면 처리
	$(".smsAt").removeClass("active").attr("title", "");
	$("#smsAt" + val).addClass("active").attr("title", "선택됨");
	
	//값 설정
	$("#smsAt").val(val);
	
	//Validation 성공 로그를 기록한다.
	setValidateResult("smsAt", 'Y');
	
}

/***************************************
 * 개인정보활용 동의 여부를 설정한다.
****************************************/
function checkAgree(obj) {
	
	var objP = $(obj).parent().parent().find("p");	//객체의 문구 태그 객체(p태그)
	if($(objP).length == 0) {
		
		objP = $(obj).parent().parent().parent().find("p");	//객체의 문구 태그 객체(p태그)
		
	}
	
	if($(obj).prop('checked')) {
		
		$(objP).removeClass("txt-color txt-color01 txt-color03");
		$(objP).addClass("txt-color03");
		$(objP).html("동의 하셨습니다.");
		
		$("#indvdlinfoAgreAt").val('Y');
		
	} else {
		
		$(objP).removeClass("txt-color txt-color01 txt-color03");
		$(objP).addClass("txt-color");
		$(objP).html("개인정보활용에 동의하시면 체크하세요.");
		
		$("#indvdlinfoAgreAt").val('N');
		
	}
	
}

/***************************************
 * 시도코드 콤보박스를 생성한다.
****************************************/
function createBrtcComboBox(objCombo, defaultValue) {
	
	if(typeof(defaultValue) == "undefined") {
		
		defaultValue = "";
		
	}
	
	var method = "post";
	var url = contextPath + "code/selectSidoCodeJs.do";
	var param = "";
	
	var data = getJsonData(method, url, param);
	
	//콤보박스 기본값 생성
	var objOption = "<option value=\"\">시/도 전체</option>";
	$(objCombo).append(objOption);
	
	var defaultSelected = "";
	
	for(var i=0; i<data.list.length; i++) {
		
		if(data.list[i].brtcCd == defaultValue) {
			
			defaultSelected = "selected";
			
		} else {
			
			defaultSelected = "";
			
		}
		
		//콤보박스 값 생성
		objOption = "<option value='" + data.list[i].brtcCd + "' " + defaultSelected + ">" + data.list[i].brtcNm + "</option>";
		$(objCombo).append(objOption);
		
	}
	
}


/***************************************
 * 시군구코드 콤보박스를 생성한다.
****************************************/
function createSignguComboBox(objCombo1, objCombo2, strBrtcCd, defaultValue) {
	
	//시도코드 없을 때 초기화
	if(typeof(strBrtcCd) == "undefined") {
		
		strBrtcCd = "";
		
	}
	
	//기본값 없을 때 초기화
	if(typeof(defaultValue) == "undefined") {
		
		defaultValue = "";
		
	}
	
	//시/도 콤보박스 선택
	if(strBrtcCd != "") {
		
		$(objCombo1).find("option[value=" + strBrtcCd + "]").prop('selected', true);
		
	}
	
	//자식 객체를 초기화한다.
	$(objCombo2).children().remove();
	
	var method = "post";
	var url = contextPath + "code/selectSigunguCodeJs.do";
	var param = "brtcCd=" + strBrtcCd;
	
	var data = getJsonData(method, url, param);
	
	//콤보박스 기본값 생성
	var objOption = "<option value=\"\">시군구 전체</option>";
	$(objCombo2).append(objOption);
	
	for(var i=0; i<data.list.length; i++) {
		
		if(data.list[i].signguCd == defaultValue) {
			
			defaultSelected = "selected";
			
		} else {
			
			defaultSelected = "";
			
		}
		
		var objOption = "<option value='" + data.list[i].signguCd + "' " + defaultSelected + ">" + data.list[i].signguNm + "</option>";
		$(objCombo2).append(objOption);
		
	}
	
}

/*******************************
 * 이미가입된 개인회원(14세이상) 본인인증 생성한다.  - 2020.12.04.송차영 추가
*******************************/
function addForOfflineVoucher() {
	
	
	var method = "post";
	var url = contextPath + "login/addOwnCertVoucherJs.do";
	var param = $("#frm").serialize();
	
	var data = getJsonData(method, url, param);
	
	//결과에 따른 분기처리
	switch(data.result) {
		case -1 :
			alert("처리중 에러가 발생했습니다.확인 후 다시 이용해주세요.");
			break;
		case 0 :
			alert("회원정보가 없습니다. 확인 후 다시 입력해주세요.");
			break;
		case 99 :
			alert("정상적으로 본인인증 되었습니다.");
			location.href = contextPath + "mypage/memberWritePage.do";
			break;
	}
	
}

/*******************************
 * 이미가입된 개인회원(14세미만) 부모 본인인증 생성한다.  - 2020.12.04.송차영 추가
*******************************/
function addForOfflineVoucherParent() {
	
	
	var method = "post";
	var url = contextPath + "login/addOwnCertVoucherParentJs.do";
	var param = $("#frm").serialize();
	
	var data = getJsonData(method, url, param);
	
	//결과에 따른 분기처리
	switch(data.result) {
		case -1 :
			alert("처리중 에러가 발생했습니다.확인 후 다시 이용해주세요.");
			break;
		case 0 :
			alert("회원정보가 없습니다. 확인 후 다시 입력해주세요.");
			break;
		case 99 :
			alert("정상적으로 본인인증 되었습니다.");
			location.href = contextPath + "mypage/memberWritePage.do";
			break;
	}
	
}
