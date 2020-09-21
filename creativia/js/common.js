$(function(){
	$('.hamburger').click(function(){
		$('.top-nav__menu').toggleClass('menu-block');
		$('.hamburger').toggleClass('is-active');
	});
	$(window).resize(function(){
		if($(window).width() > 974){
			$('.top-nav__menu').removeClass('menu-block');	
			$('.hamburger').removeClass('is-active');
		}
	});

	$('.text_title').click(function(){
		$(this).next().slideToggle('slow');
		$('.text_title').not(this).next().slideUp();
	});
	
	$(window).scroll(function(){
		$top = $('.top_arrow');
		if($(this).scrollTop() > 20){
			$top.fadeIn();			
		}else{
			$top.fadeOut();		
		}
	});
	
	$('.top_arrow').click(function(){
		$('html, body').animate({scrollTop: 0}, 800);
	});

	// setInterval(createElement, 500);
});