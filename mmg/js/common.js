$(function(){	

	$('.sliders').slick({
	  infinite: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: false

	});  

	$('.hamburger').click(function(){
		$('.hidden-menu').toggleClass('visible-menu');
		$('.hamburger').toggleClass('is-active');
	});
	$(window).resize(function(){
		if($(window).width() > 560){
			$('.hidden-menu').removeClass('visible-menu');
			$('.hamburger').removeClass('is-active');
		}
	});

	$('li:contains(Products)').mousemove(function(){
		$('.top-nav>li>.sub-menu').show();
	});
	$('li:contains(Products)').mouseout(function(){
		$('.top-nav>li>.sub-menu').hide();
	});

	$('li:contains(Products)').mousemove(function(){
		$('.hidden-menu>li>.sub-menu').show();
	});
	$('li:contains(Products)').mouseout(function(){
		$('.hidden-menu>li>.sub-menu').hide();
	});

	$(window).on('load', function(){
		$('.preloader').delay(1000).fadeOut('slow');
	});


	$(document).on('wpcf7mailsent', function( event ) {
		$('.form').slideUp(300);
	});

});
