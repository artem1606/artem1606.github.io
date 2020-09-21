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

	
	$('.balls').slick({
	  autoplay: true,
	  autoplaySpeed:0,
	  dots: false,
	  infinite: true,
	  speed: 50000,
	  cssEase: 'linear',
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true,
	  arrows : false
	 
	});
	
	
	// setInterval(createElement, 500);
});