$(function(){
	$('.hamburger').click(function(){
		$('.hidden-menu').toggleClass('visible-menu');
		$('.hamburger').toggleClass('is-active');
	});
	$(window).resize(function(){
		if($(window).width() > 576){
			$('.hidden-menu').removeClass('visible-menu');	
			$('.hamburger').removeClass('is-active');
		}
	});	
	
	$('.pictures .hamburger').click(function(){
		$('.pictures-hidden-menu').toggleClass('pictures-visible-menu');
		$('.pictures .hamburger').toggleClass('is-active');
	});
	
	$(window).resize(function(){
		if($(window).width() > 576){
			$('.pictures-hidden-menu').removeClass('pictures-visible-menu');	
			$('.pictures .hamburger').removeClass('is-active');
		}
	});	

	$(window).scroll(function(){
		$top = $('.top-arrow');
		if($(this).scrollTop() > 20){
			$top.fadeIn();
		}else{
			$top.fadeOut();
		}
	});

		$('.top-arrow').click(function(){
			$('html, body').animate({scrollTop:0}, 'slow');
		});

		$('.scills').each(function(){
			$(this).find('.scills__bar').animate({width:$(this).attr('data-percent')}, 2000);
		});

		$('.slider-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.slider-nav'
		});
		$('.slider-nav').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.slider-for',
		  variableWidth: true,
		  dots: false,
		  centerMode: false,
		  focusOnSelect: true
		});
		
	// setInterval(createElement, 500);
});