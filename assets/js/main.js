$(function(){
	$("#h-menu").click(function(){
		$(".h-menu-line1").toggleClass("menu-click1");
		$(".h-menu-line2").toggleClass("menu-click2");
		$(".h-menu-line3").toggleClass("menu-click3");

		if ($('#h-gnavi').css('display') == 'none') {
			$('#h-gnavi').slideDown('fast');
		} else {
			$('#h-gnavi').slideUp('fast');
		}
	});

	$('.h-gnavi-li').click(function(){
		if ($('#h-gnavi').css('display') == 'none') {
			$('#h-gnavi').slideDown('fast');
		} else {
			$('#h-gnavi').slideUp('fast');
		}
		$(".h-menu-line1").toggleClass("menu-click1");
		$(".h-menu-line2").toggleClass("menu-click2");
		$(".h-menu-line3").toggleClass("menu-click3");
	});

	var btn_top=$('#page-top');
	btn_top.hide();

	$(window).scroll(function(){
		if($(this).scrollTop()>80){
			// 80px以上スクロールした場合、トップボタンを表示する
			btn_top.fadeIn();
		}else{
			// 80px満たない場合、トップボタンは表示しない
			btn_top.fadeOut();
		}
	});
	// btn_top をクリックした場合、トップまで戻る
	btn_top.click(function(){
		$('body,html').animate({scrollTop: 0},500);
		return false;
	});

});