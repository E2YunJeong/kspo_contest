/********************************************************
파일명 : common.js
설 명 : 시스템 전역에서 사용하는 공통 스크립트 모음
수정일		수정자		Version		Function 명
-------		--------	----------	--------------
2017.09.18	박정환		1.0			최초 생성
*********************************************************/

/*************************
 * 시스템에서 사용하는 문구 정의
 *************************/
var MESSAGE =
{
  /*신청자 정보_이름*/
  MEMBER_NM_DEFAULT				: "본인인증으로 회원 이름을 입력하세요."
 ,MEMBER_NM_EMPTY				: "본인인증으로 회원 이름을 입력하세요."
 ,MEMBER_NM_OK					: "등록 가능합니다."
  /*신청자 정보_아이디*/
 ,MEMBER_ID_DEFAULT				: "공백없이 영문과 숫자를 포함하여 5~20자를 입력하세요."
 ,MEMBER_ID_EMPTY				: "아이디를 입력해주세요."
 ,MEMBER_ID_INVALID1			: "아이디는 영문과 숫자를 포함하여 5~20이내로 입력하세요."
 ,MEMBER_ID_EXIST				: "사용하실 수 없는 아이디입니다."
 ,MEMBER_ID_OK					: "등록 가능합니다."
  /*신청자 정보_비밀번호*/
 ,PASSWORD_DEFAULT				: "공백없이 영문, 숫자, 특수문자를 포함하여 9~16자를 입력하세요."
 ,PASSWORD_EMPTY				: "비밀번호를 입력해주세요."
 ,PASSWORD_INVALID1				: "비밀번호는 영문, 숫자, 특수문자를 포함하여 9~16이내로 입력하세요."
 ,PASSWORD_INVALID2				: "같은 문자/숫자, 연속숫자, 띄어쓰기가 포함되면 안됩니다."
 ,PASSWORD_OK					: "등록 가능합니다."
  /*신청자 정보_비밀번호 확인*/
 ,PASSWORD_CONFIRM_DEFAULT		: "비밀번호를 다시 한번 입력하세요."
 ,PASSWORD_CONFIRM_EMPTY		: "비밀번호를 입력해주세요."
 ,PASSWORD_CONFIRM_INVALID1		: "비밀번호와 일치하지 않습니다."
 ,PASSWORD_CONFIRM_OK			: "비밀번호와 일치합니다."
  /*신청자 정보_이메일*/
 ,EMAIL_DEFAULT					: "이메일 주소를 입력하세요. (예: aaaa@sport.co.kr)"
 ,EMAIL_EMPTY					: "이메일을 입력해주세요."
 ,EMAIL_INVALID1				: "이메일 형식에 맞춰주세요(dd@dd.co.kr)"
 ,EMAIL_OK						: "등록 가능합니다."
  /*신청자 정보_전화번호*/
 ,TEL_NO_DEFAULT				: "전화번호가 없는 경우 입력하지 않으셔도 됩니다."
 ,TEL_NO_EMPTY					: "전화번호를 입력해주세요."
 ,TEL_NO_INVALID1				: "전화번호를 정확히 입력해주세요."
 ,TEL_NO_OK						: "등록 가능합니다."
  /*신청자 정보_핸드폰번호*/
 ,CP_NO_DEFAULT					: "신청자의 핸드폰이 없는 경우, 보호자의 핸드폰 번호를 입력하세요."
 ,CP_NO_EMPTY					: "휴대전화번호를 입력해주세요."
 ,CP_NO_INVALID1				: "휴대전화번호를 정확히 입력해주세요."
 ,CP_NO_OK						: "등록 가능합니다."
  /*신청자 정보_기본주소*/
 ,ADDR1_DEFAULT					: "우편번호찾기로 주소를 입력해주세요."
 ,ADDR1_EMPTY					: "우편번호찾기로 주소를 입력해주세요."
 ,ADDR1_OK						: "등록 가능합니다."
  /*신청자 정보_상세주소*/
 ,ADDR2_DEFAULT					: "우편번호찾기로 주소 삽입 후 상세주소를 입력하세요."
 ,ADDR2_EMPTY					: "상세주소를 입력해주세요."
 ,ADDR2_OK						: "등록 가능합니다."
  /*세대주 정보_이름*/
 ,HOUSEHEAD_NM_DEFAULT			: "세대주 이름을 입력하세요."
 ,HOUSEHEAD_NM_EMPTY			: "이름을 입력해주세요."
 ,HOUSEHEAD_NM_INVALID1			: "일치하는 세대주 정보가 없습니다."
 ,HOUSEHEAD_NM_OK				: "세대주 정보조회가 가능합니다."
 ,HOUSEHEAD_NM_CONFIRM			: "세대주로 등록 가능합니다."
  /*세대주 정보_주민등록번호*/
 ,HOUSEHEAD_ID_NUM_DEFAULT		: "세대주 주민등록번호를 입력하세요."
 ,HOUSEHEAD_ID_NUM_EMPTY		: "주민등록번호를 입력해주세요."
 ,HOUSEHEAD_ID_NUM_INVALID1		: "올바른 형태의 주민등록번호가 아닙니다."
 ,HOUSEHEAD_ID_NUM_INVALID2		: "일치하는 세대주 정보가 없습니다."
 ,HOUSEHEAD_ID_NUM_OK			: "세대주 정보조회가 가능합니다."
 ,HOUSEHEAD_ID_NUM_CONFIRM		: "세대주로 등록 가능합니다."
  /*카드발급자 정보_이름*/
 ,CARD_OWNER_NM_DEFAULT			: "카드 발급자 이름을 입력하세요."
 ,CARD_OWNER_NM_EMPTY			: "이름을 입력해주세요."
 ,CARD_OWNER_NM_INVALID1		: "일치하는 카드발급자 정보가 없습니다."
 ,CARD_OWNER_NM_OK				: "카드발급자 정보조회가 가능합니다."
 ,CARD_OWNER_NM_CONFIRM			: "카드발급자로 등록 가능합니다."
 ,CARD_OWNER_NM_CONFIRM2		: "카드명의자로 동일 세대원을 선택하지 않으셨으므로, 시.군.구 담당자에게 증명서류를 별도로 제출하시기 바랍니다.(아래설명 참조)"
  /*카드발급자 정보_주민등록번호*/
 ,CARD_OWNER_ID_NUM_DEFAULT		: "카드발급자 주민등록번호를 입력하세요."
 ,CARD_OWNER_ID_NUM_EMPTY		: "주민등록번호를 입력해주세요."
 ,CARD_OWNER_ID_NUM_INVALID1	: "올바른 형태의 주민등록번호가 아닙니다."
 ,CARD_OWNER_ID_NUM_INVALID2	: "일치하는 카드발급자 정보가 없습니다."
 ,CARD_OWNER_ID_NUM_OK			: "카드발급자 정보조회가 가능합니다."
 ,CARD_OWNER_ID_NUM_CONFIRM		: "카드발급자로 등록 가능합니다."
  /*카드발급자 정보_신청자와의 관계*/
 ,CARD_OWNER_REL_DEFAULT		: "신청자와의 관계를 입력하세요."
 ,CARD_OWNER_REL_EMPTY			: "신청자와의 관계를 입력해주세요."
 ,CARD_OWNER_REL_OK				: "등록 가능합니다."
  /*카드발급자 정보_핸드폰번호*/
 ,CARD_OWNER_CP_NO_DEFAULT		: "카드발급자 본인 명의 또는 카드 발급자 본인이 소지한 핸드폰 번호를 입력하세요."
 ,CARD_OWNER_CP_NO_EMPTY		: "휴대전화번호를 입력해주세요."
 ,CARD_OWNER_CP_NO_INVALID1		: "휴대전화번호를 정확히 입력해주세요."
 ,CARD_OWNER_CP_NO_OK			: "등록 가능합니다."
  /*카드발급자 정보_기본주소*/
 ,CARD_OWNER_ADDR1_DEFAULT		: "우편번호찾기로 주소를 입력해주세요."
 ,CARD_OWNER_ADDR1_EMPTY		: "우편번호찾기로 주소를 입력해주세요."
 ,CARD_OWNER_ADDR1_OK			: "등록 가능합니다."
  /*카드발급자 정보_상세주소*/
 ,CARD_OWNER_ADDR2_DEFAULT		: "우편번호찾기로 주소 삽입 후 상세주소를 입력하세요."
 ,CARD_OWNER_ADDR2_EMPTY		: "상세주소를 입력해주세요."
 ,CARD_OWNER_ADDR2_OK			: "등록 가능합니다."
  /*시설명*/
 ,FACIL_NM_DEFAULT				: "시설명을 입력해주세요. 컨소시엄의 경우 컨소시엄명"
 ,FACIL_NM_EMPTY				: "시설명을 입력하세요."
 ,FACIL_NM_INVALID1				: "잘못된 시설명입니다."
 ,FACIL_NM_OK					: "등록 가능합니다."
  /*사업자등록번호*/
 ,BIZ_NO_DEFAULT				: "신청자의 사업자번호를 입력하세요."
 ,BIZ_NO_EMPTY					: "사업자번호를 입력하세요."
 ,BIZ_NO_INVALID1				: "잘못된 사업자번호입니다."
 ,BIZ_NO_INVALID2				: "사업자번호 자릿수를 확인해주세요."
 ,BIZ_NO_OK						: "등록 가능합니다."
  /*법인등록번호*/
 ,CORP_NO_DEFAULT				: "공공시설의 경우 법인등록번호를 입력하세요."
 ,CORP_NO_EMPTY					: "법인등록번호를 입력하세요."
 ,CORP_NO_INVALID1				: "잘못된 법인등록번호입니다."
 ,CORP_NO_OK					: "등록 가능합니다."
  /*시/도*/
 ,AREA_CD_DEFAULT				: "시설의 시/도와 시군구를 선택하세요."
 ,AREA_CD_EMPTY1				: "시설의 시/도를 선택하세요."
 ,AREA_CD_EMPTY2				: "시설의 시군구를 선택하세요."
 ,AREA_CD_OK					: "선택이 완료되었습니다."
  /*종묙*/
 ,MAIN_ITEM_CD_DEFAULT			: "시설의 종목을 선택하세요."
 ,MAIN_ITEM_CD_EMPTY			: "시설의 종목을 선택하세요."
 ,MAIN_ITEM_CD_OK				: "선택이 완료되었습니다."
  /*대표자 성명*/
 ,REPRESENT_NM_DEFAULT			: "대표자성명을 입력하세요."
 ,REPRESENT_NM_EMPTY			: "대표자성명을 입력하세요."
 ,REPRESENT_NM_INVALID1			: "잘못된 대표자성명입니다."
 ,REPRESENT_NM_OK				: "등록 가능합니다."
  /*시설 전화번호*/
 ,ALSFC_TEL_NO_DEFAULT			: "시설의 전화번호를 입력하세요."
 ,ALSFC_TEL_NO_EMPTY			: "시설의 전화번호를 입력해주세요."
 ,ALSFC_TEL_NO_INVALID1			: "시설의 전화번호를 정확히 입력해주세요."
 ,ALSFC_TEL_NO_OK				: "등록 가능합니다."
  /*시설 홈페이지주소*/
 ,SITE_ADRES_DEFAULT			: "홈페이지 주소를 입력하세요."
 ,SITE_ADRES_EMPTY				: "홈페이지 주소를 입력해주세요."
 ,SITE_ADRES_INVALID1			: "홈페이지 주소를 정확히 입력해주세요.(http:// 포함)"
 ,SITE_ADRES_OK					: "등록 가능합니다."
  /*강좌 종묙*/
 ,ITEM_CD_DEFAULT				: "강좌 종목을 선택하세요."
 ,ITEM_CD_EMPTY					: "강좌 종목을 선택하세요."
 ,ITEM_CD_OK					: "선택이 완료되었습니다."
  /*강좌명*/
 ,COURSE_NM_DEFAULT				: "강좌명을 입력하세요."
 ,COURSE_NM_EMPTY				: "강좌명을 입력하세요."
 ,COURSE_NM_OK					: "등록 가능합니다."
  /*강사명*/
 ,LECTR_NM_DEFAULT				: "강사명을 입력하세요.여러명일 경우 콤마(,)구분"
 ,LECTR_NM_EMPTY				: "강사명을 입력하세요."
 ,LECTR_NM_OK					: "등록 가능합니다."
  /*강좌요일*/
 ,DFK_DEFAULT					: "강좌요일을 선택하세요.1개 이상 필수"
 ,DFK_EMPTY						: "강좌요일을 선택하세요."
 ,DFK_OK						: "선택이 완료되었습니다."
  /*유의사항*/
 ,DFK_DEFAULT					: "유의사항을 입력하세요."
 ,DFK_EMPTY						: "유의사항을 입력하세요."
 ,DFK_OK						: "등록 가능합니다."
  /*결제금액*/
 ,EXCCLC_AMT_DEFAULT			: "결제금액을 입력하세요."
 ,EXCCLC_AMT_EMPTY				: "결제금액을 입력하세요."
 ,EXCCLC_AMT_OK					: "등록 가능합니다."
  /*고객의소리_지역*/
 ,QNA_AREA_CD_DEFAULT			: "거주지역의 시/도와 시군구를 선택하세요."
 ,QNA_AREA_CD_EMPTY1			: "거주지역의 시/도를 선택하세요."
 ,QNA_AREA_CD_EMPTY2			: "거주지역의 시군구를 선택하세요."
 ,QNA_AREA_CD_OK				: "선택이 완료되었습니다."
  /*고객의소리_이메일*/
 ,QNA_EMAIL_DEFAULT				: "이메일 주소를 입력하세요. 답변시에 처리결과를 보내드립니다. (예: aaaa@sport.co.kr)"
 ,QNA_EMAIL_EMPTY				: "이메일을 입력해주세요."
 ,QNA_EMAIL_INVALID1			: "이메일 형식에 맞춰주세요(dd@dd.co.kr)"
 ,QNA_EMAIL_OK					: "등록 가능합니다."
  /*고객의소리_핸드폰번호*/
 ,QNA_CP_NO_DEFAULT				: "회원님의 휴대전화번호를 입력하세요."
 ,QNA_CP_NO_EMPTY				: "휴대전화번호를 입력해주세요."
 ,QNA_CP_NO_INVALID1			: "휴대전화번호를 정확히 입력해주세요."
 ,QNA_CP_NO_OK					: "등록 가능합니다."
  /*고객의소리_제목*/
 ,QNA_TITLE_DEFAULT				: "제목을 입력해주세요."
 ,QNA_TITLE_EMPTY				: "제목을 입력하세요."
 ,QNA_TITLE_OK					: "등록 가능합니다."
  /*고객의소리_내용*/
 ,QNA_CONTENTS_DEFAULT			: "내용을 입력해주세요."
 ,QNA_CONTENTS_EMPTY			: "내용을 입력하세요."
 ,QNA_CONTENTS_OK				: "등록 가능합니다."
	 
  /*은행정보 등록_예금주*/
 ,ACNUT_HOLDER_DEFAULT			: "예금주를 입력하세요."
 ,ACNUT_HOLDER_EMPTY			: "예금주를 입력하세요."
 ,ACNUT_HOLDER_OK				: "등록 가능합니다."
  /*은행정보 등록_계좌번호*/
 ,ACNUTNO_DEFAULT				: "계좌번호를 입력하세요."
 ,ACNUTNO_EMPTY					: "계좌번호를 입력하세요."
 ,ACNUTNO_INVALID1				: "계좌번호는 숫자만 입력 가능합니다."
 ,ACNUTNO_OK					: "등록 가능합니다."
  /*은행정보 등록_은행코드*/
 ,BANK_CD_DEFAULT				: "은행을 선택하세요."
 ,BANK_CD_EMPTY					: "은행을 선택하세요."
 ,BANK_CD_OK					: "등록 가능합니다."
};

//Validation 결과를 기록한다.
var validateResult = {};

/**
 * Validation 결과에 값을 설정한다.
 * @param key : Validation을 실행한 객체의 id
 * @param val : Y(통과), N(실패)
 * @returns
 */
function setValidateResult(key, val) {
	
	if(key != "") {
		
		validateResult[key] = val;
		
	}
	
}

var contextPath = "/";

/********************************
 * 초기 화면에 대한 공통이벤트 등록
*********************************/
$(document).ready(
	function(){
		
		//화면 입력항목에 대한 공통 설정
		setInputField(null);
		
		//화면 전체의 input 객체 중 comma가 들어가는 항목들에 모두 comma를 추가한다.
		setAllComma();
		
		//로그인시 세션시간 체크
		var method = "post";
		var url = contextPath + "login/isLoginAjax.do";
		var param = "";
		
		var data = getJsonData(method, url, param);
		
		if(data.isLogin) {
			
			setLogoutTimer();
			
		}
		
	}
);

/*	로그아웃 세션시간 체크 변수 */
var iSetMinute;// 시간 지정 분
var iSetSecond; //초단위로 환산
var timeCheck = null;
var iSetStart;	//메시지 뜬 후 시작시간
var iSetEnd;	//메시지 뜬 후 종료시간

/********************
 * 로그아웃 타이머를 설정한다.
 ********************/
function setLogoutTimer() {
	
	setTimerInit();
	checkTimer();
	
}

/******************************
 * 타이머를 실행 후 재귀함수로 호출한다.
 ******************************/
function checkTimer()	{
	
	if(iSetSecond > 0)	{
		
		iSetSecond--;
		timeCheck = setTimeout("checkTimer()", 1000); // 1초 간격으로 체크
		
	} else {
		
		var cal = new Date();
		iSetStart = cal.getTime();
		
		if(confirm("장시간 움직임이 없으면 개인정보보호를 위해 로그아웃 됩니다.\n로그인을 유지 하시겠습니까?")) {
			
			//세션 연장처리
			extendSession();
			
			cal = new Date();
			iSetEnd = cal.getTime() - iSetStart;
			clearTimeout(timeCheck);
			
			/*2019.04.19 YDY*/
			if(iSetEnd > 600000) {
			/*if(iSetEnd > 60000) {*/
				
				alert("장시간 움직임이 없어 개인정보보호를 위해 로그아웃 되었습니다.");
				location.href = contextPath + "login/logout.do";
				return false;
				
			}
			
			setTimerInit();
			checkTimer();
			
		} else {
			
			location.href = contextPath + "login/logout.do";
			return false;
			
		}
		
	}
}

/******************************
 * 타이머의 시간을 재설정한다.
 ******************************/
function setTimerInit()	{
	
	//iSetMinute = 9;	//	default 9분 설정
	//2019.09.04. 고객민원에 따른 시간 변경 Modified by YDY
	iSetMinute = 20;	//	default 20분 설정
	iSetSecond = iSetMinute * 60;
	
}

/**
 * 페이스북 공유하기
 * @param msg
 * @param url
 */
fnFacebook = function(msg, url) {
	
	var href = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(url);
	var a = window.open(href);
	
	if(a){a.focus();}
	
};

/**
 * 네이버블로그 공유하기
 * @param msg
 * @param url
 */
fnNaverBlog = function(msg, url) {
	
	var href = "http://share.naver.com/web/shareView.nhn?title=" + encodeURIComponent(msg) + "&url=" + encodeURIComponent(url);
	var a = window.open(href, 'n', '');
	
	if(a){a.focus();}
	
};

/**
 * 네이버밴드 공유하기
 * @param msg
 * @param url
 */
fnNaverBand = function(msg, url) {
	
	var href = "http://band.us/plugin/share";
		href = href + "?body=" + encodeURIComponent(msg + " :: " + url) + "&openbrowser";
	var a = window.open(href, 'n', '');
	
	if(a){a.focus();}
	
};

/**
 * 트위터 공유하기
 * @param msg
 * @param url
 */
fnTwitter = function(msg, url) {
	
	var href = "http://twitter.com/home?status=" + encodeURIComponent(msg) + " : " + encodeURIComponent(url);
	var a = window.open(href, 'twitter', '');
	
	if(a){a.focus();}
	
};

/**
 * 화면 입력항목에 대한 설정
 * input 객체의 accesskey 속성에 따라 작동함
 * NUM : 정수
 * DBL : 실수
 * COMMA : 1,000단위 구분자리 있는 숫자
 */
function setInputField(gbn) {
	
	var commaYn = true;
	var periodYn = true;
	var hyphenYn = true;
	
	if(gbn != null && gbn.replace(/^\s+|\s+$/g, '') != "") {
		
		commaYn = false;
		periodYn = false;
		hyphenYn = false;
		
		var gbnList = gbn.split(",");
		for(var key in gbnList) {
			
			if(gbnList[key] == 'COMMA')commaYn = true;//44
			if(gbnList[key] == 'PERIOD')periodYn = true;//46
			if(gbnList[key] == 'HYPHEN')hyphenYn = true;//45
			
		}
		
	}
	
	//숫자만 입력 가능한 항목에 대해 숫자(실수) 외 입력금지 이벤트 설정
	$("input[accesskey=DBL]").bind('keypress', function(e) {
		
		//console.log("keyCode : " + e.keyCode);
		
		//숫자 및 .(콤마), -(마이너스), 백스페이스, 엔터 등만 입력 허용한다.
		if((e.keyCode >= 48 && e.keyCode <= 57)
			|| (e.keyCode == 8)
			|| (e.keyCode == 13)
			|| (commaYn && e.keyCode == 44)
			|| (hyphenYn && e.keyCode == 45)
			|| (periodYn && e.keyCode == 46)) {
			
			//첫번째 숫자 0 두개이상 입력금지
			if(e.keyCode == 48) {
				
				if($(e.target).val() == "0") {
					
					return false;
					
				}
				
			}
			
			//마이너스 기호는 앞에만 입력허용
			if(e.keyCode == 45) {
				
				if($(e.target).val().trim() != "") {
					
					return false;
					
				}
				
			}
			
			//소수점 하나이상 입력 금지
			if(e.keyCode == 46) {
				
				if($(e.target).val().indexOf(".") > -1) {
					
					return false;
					
				}
				
			}
			
		} else {
			
			return false;
			
		}
		
	});
	
	//숫자만 입력 가능한 항목에 대해 숫자(정수) 외 입력금지 이벤트 설정
	$("input[accesskey=NUM]").bind('keydown', function(e) {
		
		$(e.target).val($(e.target).val().replace(/[\ㄱ-ㅎㅏ-ㅣ가-힣]/g, ""));
		
		//숫자만 입력 허용한다. (백스페이스, del, tab키도 입력허용)
		if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode == 46 || e.keyCode == 8 || e.keyCode == 9) {
			
			return true;
			
		} else {
			
			return false;
			
		}
		
	});
	$("input[accesskey=NUM]").bind('keyup', function(e) {
		
		//한글 입력방지
		$(e.target).val($(e.target).val().replace(/[\ㄱ-ㅎㅏ-ㅣ가-힣]/g, ""));
		
	});
	
	//1,000단위 구분기호가 붙는 숫자만 입력 가능한 항목에 대해 숫자(정수) 외 입력금지 이벤트 설정
	$("input[accesskey=COMMA]").bind('keydown', function(e) {
		
		//숫자만 입력 허용한다. (백스페이스, del, tab키도 입력허용)
		if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode == 46 || e.keyCode == 8 || e.keyCode == 9) {
			
			return true;
			
		} else {
			
			//마이너스 기호는 앞에만 입력허용
			if(e.keyCode == 109 || e.keyCode == 189) {
				
				if($(e.target).val().trim() == "") {
					
					return true;
					
				}
				
			}
			
			return false;
			
		}
		
	});
	
	//1,000단위 구분기호 입력시 구분자를 자동으로 제거한다.
	$("input[accesskey=COMMA]").bind('focus',
		function(e) {
			
			$(e.target).val(numberUtil.removeComma($(e.target).val()));
			
		}
		
	);
	
	//돈 단위(1,000원) 구분자를 자동으로 입력한다.
	$("input[accesskey=COMMA]").bind('blur',
		function(e) {
			
			//숫자만 입력 허용한다.
			if(e.keyCode < 48 || e.keyCode > 57) {
				
				return false;
				
			}
			
			$(e.target).val(numberUtil.setComma($(e.target).val()));
			
		}
		
	);
	
	//input객체의 maxlength 설정보다 긴 문자열이 입력되면 입력을 제한한다.
	/*
	$("input, textarea").bind('keyup', function(e) {
		
		//maxlength 속성이 없는 객체는 99999로 문자열제한길이 설정
		var intMaxLength = 0;
		if(typeof($(e.target).attr('maxlength')) != "undefined") {
			intMaxLength = parseInt($(e.target).attr('maxlength'));
		} else {
			intMaxLength = 99999;
		}
		
		if(stringUtil.checkStringByte($(e.target).val()) > intMaxLength) {
			
			$(e.target).val(setLimitChar($(e.target).val(), intMaxLength));
			
			return false;
			
		}
		
	});
	*/
	
}


/**
 * 지정된 길이 이상의 문자열은 길이를 제한하여 반환한다.
 * (2byte씩 계산하여 반환)
 * @param strText 자릿수를 검사할 문자열
 */
function setLimitChar(strText, intMaxLength) {
	
	var strReturnText = "";
	
	var tcount = 0;
	var tmpStr = strText;
	var temp = tmpStr.length;
	var onechar;
	
	for(var k=0; k<temp; k++) {
		
		onechar = tmpStr.charAt(k);
		if(escape(onechar).length > 4) {
			
			tcount += 2;
			
		} else {
			
			if(escape(onechar) == "%0A") {	//Enter키는 2byte 처리
				
				tcount += 2;
				
			} else {
				
				tcount += 1;
				
			}
		}
		
		if(tcount > intMaxLength) {
			
			break;
			
		}
		
		strReturnText += onechar;
		
	}
	
	alert("지정된 문자길이 최대 " + intMaxLength + "byte를 넘었습니다.");
	
	return strReturnText;
	
}

/**
 * 폼 전송시 전체 객체의 disabled 속성을 해제한다.
 */
function removeSubmitAttrDisabled() {
	
	$("input, textarea, select").prop('disabled', false);
	
}

/**
 * 화면 전체의 input 객체 중 comma가 들어가는 항목들에 모두 comma를 추가한다.
 */
function setAllComma() {
	
	$("input[accesskey=COMMA]").each(
		function() {
			
			$(this).val(numberUtil.setComma($(this).val()));
			
		}
	);
	
}

/**
 * 폼 전송시 input객체 중 comma가 들어간 숫자에서 comma를 모두 제거한다.
 */
function setRemoveAllComma() {
	
	$("input[accesskey=COMMA]").each(
		function() {
			
			$(this).val(numberUtil.removeComma($(this).val()));
			
		}
	);
	
}

/************************************************************************
함수명 : alertChkMsg
설 명 : alert 메시지를 유형에 따라 호출하는 공통 함수
인 자
	message : alert창에 나올 주체
	gubun : alert창에 나올 행위
	length : 최소 입력 글자수
사용법
	alertChkMsg('아이디', '입력', 5);
	위 경우 출력값은 '아이디를 5자 이상 입력하셔야 합니다'
	alertChkMsg('아이디', '입력');
	위 경우 출력값은 '아이디를 입력하셔야 합니다'
작성일 : 2017-09-18
작성자 : iWorks 개발팀 박정환
수정일		수정자		수정내용
------		------		-------------------
2017.09.18	박정환		최초생성
************************************************************************/
function alertChkMsg(message, gubun, length) {
	
	var alertMsg = message + "를(을)" + " " + gubun + "해 주세요.";
	
	if(length != null && length != '' && length && length > 0) {
		
		alertMsg += "\n" + length + "자 이상 " + gubun + "하셔야 합니다.";
		
	}
	
	alert(alertMsg);
	
}

/************************************************************************
함수명 : getCookie
설 명 : 인자값으로 전달된 쿠키를 조회하여 반환한다.
인 자
	name : 가져올 쿠키의 이름
사용법
	getCookie('popup1');
	popup1 이라는 이름을 가진 쿠키값이 있으면 해당 값을 반환하고, 없으면 빈 값을 반환한다.
작성일 : 2017-09-18
작성자 : iWorks 개발팀 박정환
수정일		수정자		수정내용
------		------		-------------------
2017.09.18	박정환		최초생성
************************************************************************/
function getCookie(name) {
	
	var nameOfCookie = name + "=";
	var x = 0;
	
	console.log("cookie : " + document.cookie);
	console.log("cookie length : " + document.cookie.length);
	
	while (x <= document.cookie.length) {
		
		var y = (x+nameOfCookie.length);
		if(document.cookie.substring( x, y ) == nameOfCookie) {
			
			if((endOfCookie=document.cookie.indexOf( ";", y )) == -1) {
				
				endOfCookie = document.cookie.length;
				
			}
			
			return decodeURIComponent( document.cookie.substring( y, endOfCookie ) );
			
		}
		
		x = document.cookie.indexOf( " ", x ) + 1;
		if(x == 0) {
			
			break;
			
		}
		
	}
	
	return "";
	
}

/************************************************************************
함수명 : setCookie
설 명 : 인자값으로 전달된 쿠키를 조회하여 반환한다.
인 자
	name : 설정할 쿠키의 이름
	value : 설정할 쿠키값
	expiredays : 만료일(일 단위로 입력)
사용법
	setCookie('popup1', 'Y', 1);
	popup1 이라는 이름을 가진 쿠키의 값을 Y로, 만료일을 1일로 설정한다.
작성일 : 2017-09-18
작성자 : iWorks 개발팀 박정환
수정일		수정자		수정내용
------		------		-------------------
2017.09.18	박정환		최초생성
************************************************************************/
function setCookie( name, value, expiredays ) {
	
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	// 설정 일수만큼 현재시간에 만료값으로 지정
	
	var cookie_value = escape(value) + ((expiredays == null) ? '' : ';    expires=' + exdate.toUTCString());
	document.cookie = name + '=' + cookie_value;
	
	console.log("setCookie : " + document.cookie);
	
}

/************************************************************************
함수명 : windowOpen
설 명 : 윈도우 팝업을 오픈한다.
인 자
	url : URL 주소
	name : 팝업의 이름(설정할 시, 같은 값을 가진 팝업이 1개 이상 열리지 않는다)
	pop_width : 팝업 가로길이
	pop_height : 팝업 세로길이
	pop_top : 팝업의 위치_위에서부터
	pop_left : 팝업의 위치_왼쪽부터
사용법
	windowOpen('jusoSearch.jsp', 'jusoSearch', 300, 400, 50, 30);
	jusoSearch.jsp 파일을 윈도우 팝업으로 오픈한다. 해당 팝업은 1개 이상 열리지 않으며, 가로/세로 길이는 각각 300/400, 팝업의 위치는 화면의 위에서부터 50, 좌측에서 30 에서 오픈된다.
작성일 : 2017-09-18
작성자 : iWorks 개발팀 박정환
수정일		수정자		수정내용
------		------		-------------------
2017.09.18	박정환		최초생성
************************************************************************/
function windowOpen(url, name, pop_width, pop_height, pop_top, pop_left) {
	
	if(typeof url == "undefined" || url == null || url == "") {
		
		return;
		
	}
	
	if(typeof name == "undefined" || name==null || name=="") {
		
		name="popup";
		
	}
	
	if(typeof pop_width == "undefined" || pop_width==null || pop_width=="") {
		
		pop_width = 0;
		
	}
	
	if(typeof pop_height == "undefined" || pop_height==null || pop_height=="") {
		
		pop_height = 0;
		
	}
	
	if(typeof pop_top == "undefined" || pop_top==null || pop_top=="") {
		
		pop_top = 0;
		
	}
	
	if(typeof pop_left == "undefined" || pop_left==null || pop_left=="") {
		
		pop_left = 0;
		
	}
	
	var popup = window.open(url,name,'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width='+pop_width+',height='+pop_height+',top='+pop_top+',left='+pop_left);
	popup.focus();
	
}

/**
 * ajax 기본 설정
 */
$.ajaxSetup({
	type:"POST"
	,dataType: "json"
	,async : true
	,cache : false		// 캐시저장안함
});

/**
 * getJsonData
 * 요청하는 페이지를 JSON 형태로 리턴
 */
function getJsonData(method, url, param, async, errorYn) {
	
	var returnJson = "";
	
	if(async == null || typeof(async) == "undefined" || async == "") {
		
		async = false;
		
	}
	
	$.ajax({
		 type : method 		// 전송타입
		,url : url 			// 액션
		,data : param 		// 파라미터
		,dataType : "json"	// 데이타타입은 json으로 설정
		,async : async		// 동기형태로 실행
		,cache : false		// 캐시저장안함
		,success : function(data, textStatus) { //요청 성공하면
			
			returnJson = data; //return받은 결과를 json 객체로 parsing함.
			
		} //success end
		,error : function(xhr, textStatus, errorThrown) { //요청 실패하면
			
			if(errorYn == "Y") {
				var e = "xhr : " + xhr + "\ntextStatus : " + textStatus + "\nerrorThrown : " + errorThrown;
				alert(e);
			}
			
		} //error end
		
	}); //ajax end
	
	return returnJson;
	
}

/**
 * getJsonDataWithJsonp
 * 요청하는 페이지를 JSON 형태로 리턴
 */
function getJsonDataWithJsonp(method, url, param, async, errorYn) {
	
	var returnJson = "";
	
	if(async == null || typeof(async) == "undefined" || async == "") {
		
		async = false;
		
	}
	
	$.ajax({
		
		 type : method 		// 전송타입
		,url : url 			// 액션
		,data : param 		// 파라미터
		,dataType : "jsonp"	// 데이타타입은 json으로 설정
		,async : async		// 동기형태로 실행
		,cache : false		// 캐시저장안함
		,success : function(data, textStatus) { //요청 성공하면
			
			returnJson = data; //return받은 결과를 json 객체로 parsing함.
			
		} //success end
		,error : function(xhr, textStatus, errorThrown) { //요청 실패하면
			
			if(errorYn == "Y") {
				var e = "xhr : " + xhr + "\ntextStatus : " + textStatus + "\nerrorThrown : " + errorThrown;
				alert(e);
			}
			
		} //error end
		
	}); //ajax end
	
	return returnJson;
	
}

/**
 * getHtmlData
 * 요청하는 페이지를 HTML 형태로 리턴
 */
function getHtmlData(method, url, param, target, async, errorYn) {
	
	var blnReturn = false;
	
	//동기/비동기 설정이 없을 때 기본적으로 동기화 실행
	if(async == null ||  async == '') {
		
		async = false;
		
	}
	
	$.ajax({
		
		 type : method 		// 전송타입
		,url : url 			// 액션
		,data : param 		// 파라미터
		,dataType : "html"	// 데이타타입은 html으로 설정
		,async : async		// 동기형태로 실행
		,cache : false		// 캐시저장안함
		,success : function(data, textStatus) { //요청 성공하면
			
			
			if(data.replace(/\s+/g,"") != "") {
				
				$(target).html(data);
				blnReturn = true;
				
			}
			
		} //success end
		,error : function(xhr, textStatus, errorThrown) { //요청 실패하면

			if(errorYn == "Y") {
				var e = "xhr : " + xhr + "\ntextStatus : " + textStatus + "\nerrorThrown : " + errorThrown;
				alert(e);
			}
		} //error end
		
	}); //ajax end
	
	return blnReturn;
	
}

//캘린더 설정
var datepickerSet = {
		changeMonth: true,	//월 셀렉트박스 선택
		changeYear: true,	//년 셀렉트박스 선택
		showMonthAfterYear: true,	//년, 월 순으로 표시
		showButtonPanel : false,
		closeText: '확인',	//닫기버튼 명칭 변경
		prevText: '<',	//이전달 버튼 명칭 변경
		nextText: '>',	//다음달 버튼 명칭 변경
		currentText: '오늘',	//오늘날짜 버튼 명칭 변경
		monthNames: ['1월','2월','3월','4월','5월','6월',
		'7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월',
		'7월','8월','9월','10월','11월','12월'],
		dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		weekHeader: 'Wk',
		dateFormat : 'yymmdd',
		firstDay: 1,
		isRTL: false,
		showOn:'focus',
		yearSuffix: ''
};

//** ---------------------------------------------------------------------------
//함 수 명 :
//인    자 : e			(event)
//결    과	: keycode
//목    적 : KeyCode 값을 준다
//플 로 우 :
//검    수 :
//생 성 일 :
//수    정 :
//사용예제 : uf_getKeyCode(e)
//주의사항 :
//** ---------------------------------------------------------------------------
function fnGetKeyCode(e) {
	
	var result = "";
	
	if(window.event) {
		
		result	= window.event.keyCode;
		
	} else if(e) {
		
		result	= e.which;
	}
	
	return result;
	
}

//페이징
function goPage(pageNo, url) {
	
	var frm = document.frm;
	
	if(url == "/") url = "";
	if(url == "") url = $(location).attr('pathname');
	
	frm.pageNo.value=pageNo;
	frm.action=url;
	frm.submit();
	
}

//공통코드 셀렉트 박스 생성
function createSelectBoxOption(list, id, str_yn) {
	
	var selectId = document.getElementById(id);
	var selectVal = selectId.value;
	selectId.innerHTML="";
	
	if(str_yn) {
		
		var option = document.createElement("option");
		option.value="";
		option.text="--선택--";
		selectId.options.add(option);
		
	}
	
	if(list.length > 0) {
		
		for(var i=0; i < list.length; i++) {
			
			var new_option = document.createElement("option");
			new_option.value = list[i].codeCd;
			new_option.text = list[i].codeNm;
			
			if(selectVal == list[i].codeCd) {
				
				new_option.selected=true;
				
			}
			
			selectId.options.add(new_option);
			
		}
		
	}
	
}

//------------------------------------------------------------------------------------
//문자열 관련
var stringUtil = {
	
	//바이트 구하기
	checkStringByte : function(strValue) {
		
		var nTotalByte;
		var cOneChar;
		
		nTotalByte			= 0;
		cOneChar			= "";
		
		if(strValue.length == 0) {
			
			return nTotalByte;
			
		}
		
		for(var i=0; i < strValue.length; i++) {
			
			cOneChar = strValue.charAt(i);
			if(escape(cOneChar).length > 4) {
				
				//한글 한 글자당 3바이트로 계산한다.
				nTotalByte += 3;
				
			} else {
				
				nTotalByte ++;
				
			}
			
		}
		
		return nTotalByte;
		
	},
	//공백제거
	//strValue(문자열)
	//strTrimType(공백제거형식)
	//1. L	: 왼쪽공백제거
	//2. R	: 오른쪽공백제거
	//3. B	: 양쪽공백제거
	//3. A	: 전체공백제거
	setTrim : function(strValue,strTrimType) {
		
		var strReturn;
		strReturn = "";
		
		switch(strTrimType.toUpperCase()) {
			
			case "L" : strReturn = strValue.replace(/^\s+/g,"");
				break;
				
			case "R" : strReturn = strValue.replace(/\s+$/g,"");
				break;
				
			case "B" : strReturn = strValue.replace(/^\s+/g,"").replace(/\s+$/g,"");
				break;
				
			case "A" : strReturn = strValue.replace(/\s+/g,"");
				break;
				
			default : strReturn = strValue;
				break;
				
		}
		
		return strReturn;
		
	},
	//replaceAll ("111-111-111", "-", "") -> "111111111"
	replaceAll : function(str, target, replace) {
		
		return str.split(target).join(replace);
		
	},
	lengthStr : function(value, length, str) {
		
		if(value != null && value != '' && value.length > length) {
			
			value = value.substring(0, length - 1);
			
			if(str != null && str != "") {
				
				value += str;
				
			}
			
		}
		
		return value;
		
	},
	//null 및 'null'를 체크
	checkNull : function(str) {
		
		if(str == null || str == 'null' || str == 'NULL') {
			
			return true;
			
		}
		
		return false;
		
	},
	//null 및 공백 체크
	checkEmpty : function(str) {
		
		str = String(str);
		if(str == null || str == '' || str.replace(/\s+/g, '') == '' || str == "null" || str == "NULL") {
			
			return true;
			
		}
		
		return false;
		
	},
	//null 및 'null'를 체크 하여 변경할 값 리턴
	nullToCustom : function(str, cha) {
		
		if(str == null || str == 'null' || str == 'NULL' || str == '' || str.replace(/\s+/g, '') == '') {
			
			if(cha == null) {
				
				return '';
				
			}
			
			return cha;
			
		}
		
		return str;
		
	},
	//null 및 'null'를 체크 하여 ''값으로 리턴
	nullToBlank : function(str) {
		
		if(str == null || str == 'null' || str == 'NULL' || str == '' || str.replace(/\s+/g, '') == '') {
			
			return '';
			
		}
		
		return str;
		
	},
	//null 및 'null'를 체크 하여 0값으로 리턴
	nullToZero : function(str) {
		
		if(str == null || str == 'null' || str == 'NULL' || str == '' || str.replace(/\s+/g, '') == '') {
			
			return 0;
			
		}
		
		return str;
		
	},
	htmlTagConvert : function(str) {
		
		str = str.replace(/&amp;/g, "&");
		str = str.replace(/&lt;/g, "<");
		str = str.replace(/&gt;/g, ">");
		str = str.replace(/&#34;/g, "\"");
		str = str.replace(/&#39;/g, "\'");
		
		return str;
		
	},
	getStringLength : function(str) {
		
		str = String(str);
		str = str.replace(/\s+/g, '');
		
		return str.length;
		
	},
	/* 공백여부 확인 */
	checkStringBlank: function(str) {
		
		var blank_pattern = /[\s]/g;
		
		if(blank_pattern.test(str) == true) {
			
		    return true;		// 공백이 존재함
		    
		} else {
			
			return false;		// 공백없음
			
		}
		
	},
	/* 특수문자 금지 */
	checkStringSpecialCharter: function(str) {
		
		var special_pattern = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
		
		if(special_pattern.test(str) == true ) {
			
		    return true;			// 특수문자 존재함
		    
		} else {
			
			return false;			// 특수문자 없음
			
		}
		
	},
	/* 한글입력금지 */
	checkStringIncludeKorean: function(str) {
		
		var hangul_pattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
		
		if(str.search(hangul_pattern) != -1 ) {
			
		    return true;			// 한글 존재함
		    
		} else {
			
			return false;			// 한글 없음
			
		}
		
	},
	/* 비밀번호 체크 */
	passwordCheck: function(str) {
		
		//var check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/;
		var check = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{6,16}$/;
		
		if(!check.test(str)) {
			
			return false;
			
		} else {
			
			return true;
			
		}
		
	},
	//올바른 전화번호 형태인지 boolean으로 return한다.
	checkPhoneNumber: function(str) {
		
		var reg = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
		return reg.test(str) ? true : false;
		
	},
	//올바른 이메일 형태인지 boolean으로 return한다.
	checkEmail: function(str) {
		
		var reg = /^([A-Za-z0-9_-]{3,15})(@{1})([A-Za-z0-9_-]{1,15})(.{1})([A-Za-z0-9]{2,10})(.{1}[A-Za-z]{2,10})?(.{1}[A-Za-z]{2,10})?$/;
		return reg.test(str) ? true : false;
		
	},
	//함수 추가 쉽게 할 수 있도록 더미함수 생성
	test : function() {

	}
	
};

var numberUtil = {
	
	///숫자에 콤마를 붙여준다.
	setComma : function(str) {
		
		var reg = /(^[+-]?\d+)(\d{3})/;
		str += '';
		while (reg.test(str)) {
			
			str = str.replace(reg, '$1' + ',' + '$2');
			
		}
		
		return str;
		
	},
	///숫자에서 콤마를 삭제한다.
	removeComma : function(str) {
		
	    str = str.replace(/,/gi, "");
		return str;
		
	},
	checkNumber : function(val) {
		
		if(val == null || val == "") {
			
			return true;
			
		}
		
		var number = "0123456789";
		var temp = null;
		
		for(var i=0; i < val.length; i++) {
			
			temp = val.substring(i, i+1);
			
			if(number.indexOf(temp) == - 1) {
				
				return false;
				
			}
			
		}
		
		return true;
		
	},
	//함수 추가 쉽게 할 수 있도록 더미함수 생성
	test : function() {

	}
	
};

var dateUtil = {
	
	//시간에 : 를 붙여준다.
	//예) 1500 -> 15:00
	//4자리가 넘을 시 입력받은 값을 리턴한다.
	setTimeColon : function(num) {
		
		var return_val = null;
		if(num.length != 4) {
			
			return_val = num;
			
		} else {
			
			return_val = num.substring(0,2) + ":" + num.substring(2,4);
			
		}
		
		return return_val;
		
	},
	//날짜를 쪼개 날짜 타입을 변경
	//date : 날짜가 8자(예:20171219) -> 2017.12.19 반환
	//		날짜가 6자(예:201712) -> 2017.12 반환
	//		이외에는 전달된 값을 그대로 반환
	//ch : 구분자 '-', '.' 등
	//예) 20130501 - 2013.05.01
	setFormatDate : function(date, ch) {
		
		var temp = String(date);
		var return_val = null;
		
		if(temp.length == 8 && ch != null && ch != "") {
			
			return_val = temp.substring(0 , 4) + ch + temp.substring(4 , 6) + ch + temp.substring(6 , 8);
			
		} else if(temp.length == 6 && ch != null && ch != "") {
			
			return_val = temp.substring(0 , 4) + ch + temp.substring(4 , 6);
			
		} else {
			
			return_val = temp;
			
		}
		
		return return_val;
		
	},
	setWeek : function(val) {
		
		var date = String(val);
		var return_val = '';
		
		date = stringUtil.replaceAll(date, '[^0-9]', '');
		
		if(date.length == 8) {
			
			var tempDate = new Date(date.substring(0, 4), parseInt(date.substring(4, 6))-1, date.substring(6, 8));
			var week = ['일', '월', '화', '수', '목', '금', '토'][tempDate.getDay()];
			return_val = week;
			
		}
		
		return return_val;
		
	},
	//입력받은 날짜를 Time으로 변환하여 반환한다.
	//date : 날짜 8자가 넘거나 작을 경우 입력받은 값 리턴
	getTime : function(date) {
		
		var temp = String(date);
		var return_val = null;
		
		if(temp.length != 8) {
			
			return_val = temp;
			
		} else {
			
			var objDate = new Date(temp.substring(0 , 4), temp.substring(4 , 6), temp.substring(6 , 8));
			return_val = objDate.getTime();
			
		}
		
		return return_val;
		
	},
	//시작일과 종료일의 일자 차이를 반환한다.
	//date_st : 시작일, date_ed : 종료일
	getDiffDay : function(date_st, date_ed) {
		
		//일자를 Time으로 변환 후 일자로 재변환
		var days = (dateUtil.getTime(date_ed) - dateUtil.getTime(date_st)) / 60 / 60/ 24 / 1000;
		return days;
		
	},
	//현재 날짜를 반환한다. (예 : 20150301)
	getCurrentDate : function() {
		
		var date = new Date();
		var todayDate = "";
		
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		
		if(month < 10) {
			
			month = "0" + month;
			
		}
		
		if(day < 10) {
			
			day = "0" + day;
			
		}
		
		todayDate = year + "" + month + "" + day;
		
		return todayDate;
		
	},
	addYearMonthDay : function(date, year, month, day) {
		
		date = stringUtil.replaceAll(date, '[^0-9]', '');
		
		if(date.length == 8) {
			
			year = Number(year);
			month = Number(month);
			day = Number(day);
			
			var tDate = new Date(parseInt(date.substring(0, 4)) + year, parseInt(date.substring(4, 6))-1 + month, parseInt(date.substring(6, 8)) + day);
			
			year = String(tDate.getFullYear());
			month = tDate.getMonth() + 1 < 10 ? "0" + String(tDate.getMonth() + 1) : tDate.getMonth() + 1;
			day = tDate.getDate() < 10 ? "0" + String(tDate.getDate()) : tDate.getDate();
			
			date = year + month + day;
			
		}
		
		return date;
		
	},
	addYear : function(date, year) {
		
		return dateUtil.addYearMonthDay(date, year, 0, 0);
		
	},
	addMonth : function(date, month) {
		
		return dateUtil.addYearMonthDay(date, 0, month, 0);
		
	},
	addDay : function(date, day) {
		
		return dateUtil.addYearMonthDay(date, 0, 0, day);
		
	},
	//윤년 여부를 판단한다.
	getIsLeafYear : function(year) {
		
		if(year % 1000 != 0 && year % 4 == 0) {
			
			return true;
			
		} else {
			
			return false;
			
		}
		
	},
	//함수 추가 쉽게 할 수 있도록 더미함수 생성
	test : function() {

	}

};

//첨부파일 확장자 유효성 검사
var fileUtil = {
	
	checkFileExt : function(ext, arry) {
		
		var re_val = false;
		ext = ext.slice(ext.lastIndexOf(".") + 1).toLowerCase();
		
		var arrCheckExt = arry.split(",");
		
		if(arrCheckExt.length > 0) {
			
			for(var i=0; i<arrCheckExt.length; i++) {
				
				//console.log("ext : " + ext + ", arrCheckExt[i] : " + arrCheckExt[i].toLowerCase());
				//console.log("result : " + ext == arrCheckExt[i].toLowerCase());
				
				if(ext == arrCheckExt[i].toLowerCase()) {
					
					re_val = true;
					break;
					
				}
				
			}
			
		}
		
		return re_val;
		
	},
	//함수 추가 쉽게 할 수 있도록 더미함수 생성
	test : function() {
	
	}
};


/******************************
 * 시간을 선택할 수 있는 콤보박스를 생성한다.
 ******************************/
function createTimeComboBox(objComboBox, strDefaultData) {
	
	if(typeof(strDefaultData) === "undefined") {
		
		strDefaultData = "";
		
	}
	
	for(var i=0; i<24; i++) {
		
		var strTime = "";
		
		if(i < 10) {
			
			strTime = "0" + i;
			
		} else {
			
			strTime = i;
			
		}
		
		var strSelected = "";
		if(strDefaultData == strTime) {
			
			strSelected = "selected";
			
		}
		
		var objOption = "<option value='" + strTime + "' " + strSelected + ">" + strTime + "</option>";
		$(objComboBox).append(objOption);
		
	}
	
}

/******************************
 * 분을 선택할 수 있는 콤보박스를 생성한다.
 ******************************/
function createMinuteComboBox(objComboBox, strDefaultData) {
	
	if(typeof(strDefaultData) === "undefined") {
		
		strDefaultData = "";
		
	}
	
	for(var i=0; i<60; i=i+5) {
		
		var strTime = "";
		
		if(i < 10) {
			
			strTime = "0" + i;
			
		} else {
			
			strTime = i;
			
		}
		
		var strSelected = "";
		if(strDefaultData == strTime) {
			
			strSelected = "selected";
			
		}
		
		var objOption = "<option value='" + strTime + "' " + strSelected + ">" + strTime + "</option>";
		$(objComboBox).append(objOption);
		
	}
	
}


/******************************
 * 년도를 선택할 수 있는 콤보박스를 생성한다.
 ******************************/
function createYearComboBox(objComboBox, strDefaultData, strStartYear, strEndYear) {
	
	var method = "post";
	var url = contextPath + "code/getYearCodeJs.do";
	var param = "";
	
	if(typeof(strStartYear) != "undefined") {
		
		param += "fromYear=" + strStartYear;
		
	}
	if(typeof(strEndYear) != "undefined") {
		
		param += "&toYear=" + strEndYear;
		
	}
	
	var data = getJsonData(method, url, param);
	
	//콤보박스의 값을 초기화한다.
	$(objComboBox).children().remove();
	
	var defaultSelected = "";
	var objOption = "";
	
	for(var i=0; i<data.list.length; i++) {
		
		//기본 시군구코드에 대한 처리
		if(data.list[i].year == strDefaultData) {
			
			defaultSelected = "selected";
			
		} else {
			
			defaultSelected = "";
			
		}
		
		//콤보박스 값 생성
		objOption = "<option value='" + data.list[i].year + "' " + defaultSelected + ">" + data.list[i].year + "년</option>";
		$(objComboBox).append(objOption);
		
	}
	
}

/******************************
 * 월을 선택할 수 있는 콤보박스를 생성한다.
 ******************************/
function createMonthComboBox(objComboBox, strDefaultData) {
	
	var objOption = "";
	var strSelected = "";
	
	var month = "";
	
	for(var i=1; i<=12; i++) {
		
		if(i < 10) {
			
			month = "0" + i;
			
		} else {
			
			month = i;
			
		}
		
		if(strDefaultData == i) {
			
			strSelected = "selected";
			
		} else {
			
			strSelected = "";
			
		}
		
		objOption = "<option value='" + month + "' " + strSelected + ">" + i + "월</option>";
		$(objComboBox).append(objOption);
		
	}
	
}



/**
 * 비밀번호 유효성체크(조합여부)
 * @param pwd: 비밀번호Value
 * @returns
 */
function passwordValidateCheck1(pwd) {
	
	//9자 이상, 16자 이하 입력
	//규칙은 영문/숫자/특수문자 모두 조합
	var check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,16}$/;
	
	if(!pwd.match(check)) {
		
		return false;
		
	}
	
	return true;
	
}

/**
 * 비밀번호 유효성체크(같은 문자 및 숫자 연속여부)
 * @param pwd: 비밀번호Value
 * @returns
 */
function passwordValidateCheck2(pwd) {
	
	//var chkReturn = false;
  	
	var passwordCheck1 = 0; //연속성(+)카운트
	var passwordCheck2 = 0; //연속성(-)카운트
	
	var pwdTxt1;
	var pwdTxt2;
	var pwdTxt3;
	var i=0;
	//var j=0;
	
	for(i=0; i < pwd.length; i++) {
		
		pwdTxt1 = pwd.charAt(i);
		pwdTxt2 = pwd.charAt(i+1);
		pwdTxt3 = pwd.charAt(i+2);
		
		if(pwdTxt1.charCodeAt(0) >= 48 && pwdTxt1.charCodeAt(0) <= 57) {
			
			//console.log("pwdTxt1 : " + pwdTxt1);
			//console.log("pwdTxt1.charCodeAt(0) : " + pwdTxt1.charCodeAt(0));
			//console.log("pwdTxt2 : " + pwdTxt2);
			//console.log("pwdTxt2.charCodeAt(0) : " + pwdTxt2.charCodeAt(0));
			//console.log("pwdTxt3 : " + pwdTxt3);
			//console.log("pwdTxt3.charCodeAt(0) : " + pwdTxt3.charCodeAt(0));
			
			if(pwdTxt1.charCodeAt(0) - pwdTxt2.charCodeAt(0) == -1 && pwdTxt2.charCodeAt(0) - pwdTxt3.charCodeAt(0) == -1) {
				
				passwordCheck1 += 1;
				
			}
			
			if(pwdTxt1.charCodeAt(0) - pwdTxt2.charCodeAt(0) == 1 && pwdTxt2.charCodeAt(0) - pwdTxt3.charCodeAt(0) == 1 ) {
				
				passwordCheck2 += 1;
				
			}
			
		}
		
		//console.log("passwordCheck1 : " + passwordCheck1);
		//console.log("passwordCheck2 : " + passwordCheck2);
		
	}
	
	if(pwd.match(/(\w)\1\1/)) {		//동일문자 및 숫자 체크(연속 3개 이상)
    	
		console.log("동일문자 및 숫자 체크(연속 3개 이상)");
		return false;
		
	}
	
	var blankPattern = /\s/;
	
	if(blankPattern.test(pwd) == true ){
		console.log("스페이스 입력이 있을 시 체크");
		return false;
	}
	
	if(passwordCheck1 > 0 || passwordCheck2 > 0) {	//연속된 문자 및 숫자 체크(예:abc, 567 등)
		
		console.log("passwordCheck1 : " + passwordCheck1);
		console.log("passwordCheck2 : " + passwordCheck2);
		console.log("연속된 문자 및 숫자 체크(예:abc, 567 등)");
		return false;
		
	}
	
	return true;
	
}


/* 법인등록번호 체크 */
function checkCorpNumber(strValue) {
	
	if(strValue.length != 13) {
		
		return false;
		
	}
	
	var num;
	var last;
	var sum = 0;
	
	num = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
	last = parseInt(strValue.charAt(12));
	
	for(var i=0; i < 12; i++) {
		
		sum += parseInt(strValue.charAt(i)) * num[i];
		
	}
	
	return ((10 - sum % 10) % 10 == last) ? true : false;
	
}


/* 사업자등록번호 체크 */
function checkBizNum(bizID) {
	
	// bizID는 숫자만 10자리로 해서 문자열로 넘긴다.
	var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1); 
	//var tmpBizID, i, chkSum=0, c2, remander; 
	var i, chkSum=0, c2, remander;
	bizID = bizID.replace(/-/gi,''); 
	
	//체크로직에서 걸러지지 않는 사업자등록번호 예외처리
	if(bizID == "0000000000") {
		
		return false;
		
	}
	
	for (i=0; i<=7; i++) {
		chkSum += checkID[i] * bizID.charAt(i); 
	}
	
	c2 = "0" + (checkID[8] * bizID.charAt(8)); 
	c2 = c2.substring(c2.length - 2, c2.length); 
	chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1)); 
	remander = (10 - (chkSum % 10)) % 10 ;
	
	if(Math.floor(bizID.charAt(9)) == remander) {
		
		return true;
		
	}
	
	return false;
	
}

/* 주민등록번호 체크 */
// 2020년도 10월 이후출생자부터는 주민등록번호 검증을할수없어 무조건 true return
function checkPersonalNo(personalNo) {
	
	//주민등록 번호 13자리를 검사한다.
//	var fmt = /^\d{6}[12345678]\d{6}$/;  	// 포멧 설정
//	if(!fmt.test(personalNo)) {
//		console.log("정규식 통과못함");
//		return false;
//		
//	}
//	
//	//생년월일 검사
//	var birthYear = (personalNo.charAt(6) <= "2") ? "19" : "20";
//	
//	switch(personalNo.charAt(6)) {
//		case "1" :
//			birthYear = "19";
//		break;
//		case "2" :
//			birthYear = "19";
//		break;
//		case "3" :
//			birthYear = "20";
//		break;
//		case "4" :
//			birthYear = "20";
//		break;
//		case "5" :
//			birthYear = "19";
//		break;
//		case "6" :
//			birthYear = "19";
//		break;
//		case "7" :
//			birthYear = "20";
//		break;
//		case "8" :
//			birthYear = "20";
//		break;
//	}
//	
//	birthYear += personalNo.substr(0, 2);
//	
//	var birthMonth = personalNo.substr(2, 2) - 1;
//	var birthDate = personalNo.substr(4, 2);
//	
//	var birth = new Date(birthYear, birthMonth, birthDate);
//	
//	if(birth.getYear() % 100 != personalNo.substr(0, 2) || birth.getMonth() != birthMonth || birth.getDate() != birthDate) {
//		
//		return false;
//		
//	}
//	
//	//Check Sum 코드의 유효성 검사
//	var arr_ssn = [];
//	var compare = [2,3,4,5,6,7,8,9,2,3,4,5];
//	var sum = 0;
//	
//	for(var i=0; i<13; i++) {
//		arr_ssn[i] = personalNo.substring(i, i+1);
//	}
//	
//	for(var i=0; i<12; i++) {
//		sum = sum + (arr_ssn[i] * compare[i]);
//	}
//	
//	//내국인의 경우 체크로직
//	if(personalNo.charAt(6) == "1" || personalNo.charAt(6) == "2" || personalNo.charAt(6) == "3" || personalNo.charAt(6) == "4") {
//		sum = (11 - (sum % 11)) % 10;
//	}
//	
//	//외국인인 경우 체크로직
//	if(personalNo.charAt(6) == "5" || personalNo.charAt(6) == "6" || personalNo.charAt(6) == "7" || personalNo.charAt(6) == "8") {
//		sum = (13 - (sum % 11)) % 10;
//	}
//	
//	if(sum != arr_ssn[12]) {
//		return false;
//	}
	
	return true;
	
}

//1 >> 01로 변환해주는 작업
//n : 숫자 digits : 자리수 
function leadingZeros(n, digits){
	var zero = '0';
	n = n.toString();
	
	if(n.length < digits){
		for(var i = 0; n.length < digits - n.length; i++){
			zero += 0;
		}
	}else{
		zero = '';
	}
	return zero + n;
}

// 날짜 유효성 검증
function checkValidDate(param) {
	
	try {
		
		param = param.replace(/-/g,'');
		
		//자리수가 맞지않을때
		if(param.length!=8) {
			
			return false;
			
		}
		
		var year = Number(param.substring(0, 4));
		var month = Number(param.substring(4, 6));
		var day = Number(param.substring(6, 8));
		
		//var dd = day / 0;
		
		if( month<1 || month>12 ) {
			
			return false;
			
		}
		
		var maxDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		var maxDay = maxDaysInMonth[month-1];
		
		//윤년 체크
		if(month==2 && (year%4==0 && year%100!=0 || year%400==0)) {
			
			maxDay = 29;
			
		}
		
		if(day<=0 || day>maxDay) {
			
			return false;
			
		}
		
		return true;
		
	} catch (err) {
		
		return false;
		
	}
	
}

/* 첨부파일 다운로드 */
function downloadFile(atchId, sn) {
	
	if(atchId == undefined || atchId == "") {
		
		alert("파일정보가 없습니다.");
		return;
		
	}
	
	//location.href=contextPath + "file/downloadFile.do?atchId="+atchId + "&sn=" + sn;
	window.open(contextPath + "file/downloadFile.do?atchId="+atchId + "&sn=" + sn);
	
}

/* 첨부파일 다운로드(CMS 게시판용) */
function downloadCmsBoardFile(atchFileId, fileSn) {
	
	if(atchFileId == undefined || atchFileId == "") {
		
		alert("파일정보가 없습니다.");
		return;
		
	}
	
	location.href=contextPath + "file/downloadCmsBoardFile.do?atchFileId="+atchFileId + "&fileSn=" + fileSn;
	
}


//세션을 강제로 연장한다.
function extendSession() {
	
	var strMethod = "post";
	var strUrl = contextPath + "extendSession.do";
	var strParam = "";
	
	var $json = getJsonData(strMethod, strUrl, strParam);
	
}


/********************************
 * 미리 지정된 메시지를 형태에 맞게 출력한다.
 * objId : 객체 아이디(고유값)
 * type : DEFAULT(기본값), EMPTY(빈값), INVALID1(오류1), INVALID2(오류2), EXIST(중복), OK(완료)
*********************************/
function getMessage(objId, type) {
	
	var messageHeader = "";
	
	switch(objId) {
		
		case "mberNm" :
			messageHeader = "MEMBER_NM";
			break;
		case "mberId" :
			messageHeader = "MEMBER_ID";
			break;
		case "password" :
			messageHeader = "PASSWORD";
			break;
		case "passwordConfirm" :
			messageHeader = "PASSWORD_CONFIRM";
			break;
		case "email1" :
			messageHeader = "EMAIL";
			break;
		case "email2" :
			messageHeader = "EMAIL";
			break;
		case "telNo1" :
			messageHeader = "TEL_NO";
			break;
		case "telNo2" :
			messageHeader = "TEL_NO";
			break;
		case "telNo3" :
			messageHeader = "TEL_NO";
			break;
		case "cpNo1" :
			messageHeader = "CP_NO";
			break;
		case "cpNo2" :
			messageHeader = "CP_NO";
			break;
		case "cpNo3" :
			messageHeader = "CP_NO";
			break;
		case "zip" :
			messageHeader = "ADDR1";
			break;
		case "adres1" :
			messageHeader = "ADDR1";
			break;
		case "adres2" :
			messageHeader = "ADDR2";
			break;
		case "hshldrNm" :
			messageHeader = "HOUSEHEAD_NM";
			break;
		case "hshldrIhidnum1" :
			messageHeader = "HOUSEHEAD_ID_NUM";
			break;
		case "hshldrIhidnum2" :
			messageHeader = "HOUSEHEAD_ID_NUM";
			break;
		case "cardOwnrNm" :
			messageHeader = "CARD_OWNER_NM";
			break;
		case "cardOwnrIhidnum1" :
			messageHeader = "CARD_OWNER_ID_NUM";
			break;
		case "cardOwnrIhidnum2" :
			messageHeader = "CARD_OWNER_ID_NUM";
			break;
		case "hshldrRel" :
			messageHeader = "CARD_OWNER_REL";
			break;
		case "cardCpNo1" :
			messageHeader = "CARD_OWNER_CP_NO";
			break;
		case "cardCpNo2" :
			messageHeader = "CARD_OWNER_CP_NO";
			break;
		case "cardCpNo3" :
			messageHeader = "CARD_OWNER_CP_NO";
			break;
		case "cardZip" :
			messageHeader = "CARD_OWNER_ADDR1";
			break;
		case "cardAdres1" :
			messageHeader = "CARD_OWNER_ADDR1";
			break;
		case "cardAdres2" :
			messageHeader = "CARD_OWNER_ADDR2";
			break;
		case "alsfcNm" :
			messageHeader = "FACIL_NM";
			break;
		case "bizrno1" :
			messageHeader = "BIZ_NO";
			break;
		case "bizrno2" :
			messageHeader = "BIZ_NO";
			break;
		case "bizrno3" :
			messageHeader = "BIZ_NO";
			break;
		case "jurirno1" :
			messageHeader = "CORP_NO";
			break;
		case "jurirno2" :
			messageHeader = "CORP_NO";
			break;
		case "brtcCd" :
			messageHeader = "AREA_CD";
			break;
		case "signguCd" :
			messageHeader = "AREA_CD";
			break;
		case "mainItemCd" :
			messageHeader = "MAIN_ITEM_CD";
			break;
		case "rprsntvNm" :
			messageHeader = "REPRESENT_NM";
			break;
		case "alsfcTelNo1" :
			messageHeader = "ALSFC_TEL_NO";
			break;
		case "alsfcTelNo2" :
			messageHeader = "ALSFC_TEL_NO";
			break;
		case "alsfcTelNo3" :
			messageHeader = "ALSFC_TEL_NO";
			break;
		case "siteAdres" :
			messageHeader = "SITE_ADRES";
			break;
		case "itemCd" :
			messageHeader = "ITEM_CD";
			break;
		case "courseNm" :
			messageHeader = "COURSE_NM";
			break;
		case "lectrNm" :
			messageHeader = "LECTR_NM";
			break;
		case "dfk" :
			messageHeader = "DFK";
			break;
		case "courseDetailDesc" :
			messageHeader = "COUSE_DETAIL_DESC";
			break;
		case "excclcAmt" :
			messageHeader = "EXCCLC_AMT";
			break;
		case "dsEmail1" :
			messageHeader = "QNA_EMAIL";
			break;
		case "dsEmail2" :
			messageHeader = "QNA_EMAIL";
			break;
		case "idPhoneMobile1" :
			messageHeader = "QNA_CP_NO";
			break;
		case "idPhoneMobile2" :
			messageHeader = "QNA_CP_NO";
			break;
		case "idPhoneMobile3" :
			messageHeader = "QNA_CP_NO";
			break;
		case "addr01Cd" :
			messageHeader = "QNA_AREA_CD";
			break;
		case "addr02Cd" :
			messageHeader = "QNA_AREA_CD";
			break;
		case "dsTitleVoc" :
			messageHeader = "QNA_TITLE";
			break;
		case "dsVoc" :
			messageHeader = "QNA_CONTENTS";
			break;
		case "cleanBrtcCd" :
			messageHeader = "QNA_AREA_CD";
			break;
		case "cleanSignguCd" :
			messageHeader = "QNA_AREA_CD";
			break;
		case "sj" :
			messageHeader = "QNA_TITLE";
			break;
		case "cn" :
			messageHeader = "QNA_CONTENTS";
			break;
		case "acntrNm" :
			messageHeader = "ACNUT_HOLDER";
			break;
		case "acnutno" :
			messageHeader = "ACNUTNO";
			break;
		case "bankCd" :
			messageHeader = "BANK_CD";
			break;
	}
	
	return eval("MESSAGE." + messageHeader + "_" + type);
	
}


/********************************
 * 로그인 페이지로 이동한다.
*********************************/
function goLogin() {
	
	location.href = contextPath + "login/login.do?menuNo=43&topMenuNo=42";
	
}


/********************************
 * 로그아웃 후 메인페이지로 이동한다.
*********************************/
function logout() {
	
	if(confirm("로그아웃 하시겠습니까?")) {
		
		location.href = contextPath + "login/logout.do";
		
	}
	
}


/***************************************
 * 시설의 위치를 지도 팝업으로 호출한다.
****************************************/
function openFacilMap(bizrno, alsfcSn) {
	
	$("#bizrno").val(bizrno);
	$("#alsfcSn").val(alsfcSn);
	
	window.open('', 'popup', 'width=600,height=600,toolbars=no,location=no,status=no,menubars=no,scrollbars=no,resizable=no');
	
	$("#frm").attr("action", contextPath + "map/mapPopup.do");
	$("#frm").attr("target", "popup");
	$("#frm").submit();
	
}




/***************************************
 * 동적으로 자바스크립트 객체를 생성한다.
****************************************/
function createJsObject(objNm) {
	
	//매개변수로 전달받은 이름으로 동적 객체를 생성한다.
	eval(objNm + "={}");
	
}

/***************************************
 * 메인페이지로 다시 보낸다.
****************************************/
function backMain(){
	alert("이미 시설 회원으로 로그인 하였으므로 회원가입을 하실 수 없습니다.");
	
	return location.href = contextPath + "main.do";
}