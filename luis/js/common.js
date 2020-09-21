$(function(){

	$('.hamburger').click(function(){
		$('.hamburger').toggleClass('is-active');
		$('.hide-menu').toggleClass('visible-menu');
	});
	

	$(window).resize(function(){
		if($(window).width() > 576){
			$('.hide-menu').removeClass('visible-menu');	
			$('.hamburger').removeClass('is-active');
		}
	});

});

