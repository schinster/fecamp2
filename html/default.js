jQuery(function($){
	//모바일 gnb 토글 버튼
	var $gnbBtn = $(".gnb>button");
	$gnbBtn.on("click", function(){
		$(this).next().slideToggle(200);
		//$(".gnb>ul").slideToggle(200);
		//$(this).next("ul").slideToggle(200);
		if( $gnbBtn.text() === "메뉴 열기"){
			//메뉴 닫기 텍스트 표시
			$gnbBtn.text("메뉴 닫기");
		} else {
			//메뉴 열기 텍스트 표시
			$gnbBtn.text("메뉴 열기");
		}
	});
	// 태블릿 + 테스크톱 gnb메뉴
	$(".gnb>ul>li>a").on("mouseover focus", function(){
		$(this).parent("li").addClass("active").siblings("li").removeClass("active");
		//여기서 this는 마우스오버된 a element를 의미. 그리고 parent()라고 해도 된다. siblings()라고 해도 된다. li밖에 없기 때문.
	});
});

/*
jQuery(function($){
	$(".gnb>button").on("click", function(){
		$(this).next().slideToggle(200);
		//$(".gnb>ul").slideToggle(200);
		//$(this).next("ul").slideToggle(200);
		if( $(".gnb>button").text() === "메뉴 열기"){
			//메뉴 닫기 텍스트 표시
			$(".gnb>button").text("메뉴 닫기");
		} else {
			//메뉴 열기 텍스트 표시
			$(".gnb>button").text("메뉴 열기");
		}
	});
});

jQuery(function($){
	$(".gnb>button").on("click", function(){
		//$(".gnb>ul").slideToggle(200);
		//$(this).next("ul").slideToggle(200);
		$(this).next().slideToggle(200);
		if(메뉴가 열려 있으면){
			//메뉴 닫기 텍스트 표시
		} else {
			//메뉴 열기 텍스트 표시
		}
	});
});
*/

