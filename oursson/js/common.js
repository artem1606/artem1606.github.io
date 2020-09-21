$(function(){

	// $('.header_logo').click(function(){
	// 	$('.form').addClass('form-visible');
	// });
	

	$('.nav__menu > li').click(function(){
		$(this).addClass('active');
		$('.nav__menu').children().not(this).removeClass('active');
	});

	$('.hamburger').click(function(){		
		$('.hamburger').toggleClass('is-active');
		$('.nav__menu').toggleClass('nav__menu__active');
		if($('.nav__menu').hasClass('nav__menu__active')){
			$('.nav__menu').css('display', 'flex');
		}else{
			$('.nav__menu').css('display', 'none');
		}
	});
	$(window).resize(function(){
		if($(window).width() > 557){			
			$('.hamburger').removeClass('is-active');
			$('.nav__menu').removeClass('nav__menu__active');
			$('.nav__menu').css('display', 'flex');
		}else if($(window).width() < 570 && $('.nav__menu').hasClass('nav__menu__active')){
			$('.nav__menu').css('display', 'flex');
		}else{
			$('.nav__menu').css('display', 'none');
		}
	});	
	
	$('.footer > .hamburger').click(function(){
		$('.hidden_menu').toggleClass('visible-menu');		
	});

	$(window).resize(function(){
		if($(window).width() > 557){
			$('.hidden_menu').removeClass('visible-menu');	
		}
	});


	$(window).scroll(function(){
			$top = $('.fa-arrow-up');
			if($(this).scrollTop() > 20){
				$top.fadeIn();
			}else{
				$top.fadeOut();
			}
		});

		$('.fa-arrow-up').click(function(){
			$('html, body').animate({scrollTop: 0}, 'slow');
		});
	
	$('.content').hide();
	$('.left-sidebar li>a').click(function(){
		$(this).next().slideToggle('slow');
		$('.left-sidebar li>a').not(this).next().slideUp('slow');
		
	});

	$('.action-sliders').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,

	   responsive: [
	     
	     {
	       breakpoint: 991,
	       settings: {
	         slidesToShow: 2,
	         nextArrow: '<button class="next arrow"></button>',
	         prevArrow: '<button class="prev arrow"></button>',
	         slidesToScroll: 2
	       }
	     },
	     {
	       breakpoint: 767,
	       settings: {
	         slidesToShow: 1,
	         nextArrow: '<button class="next arrow"></button>',
	         prevArrow: '<button class="prev arrow"></button>',
	         slidesToScroll: 1
	       }
	           }
	           // You can unslick at a given breakpoint now by adding:
	           // settings: "unslick"
	           // instead of a settings object
	         ]  
	});

	
	$('.ball').children().hide();
	$('.ball1').children().show();

		
	$('.ball').click(function(){
		$(this).children().show();
		$('.ball').not(this).children().hide();
	});

$('.cook-sliders').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  nextArrow: '<button class="next arrow"></button>',
	  prevArrow: '<button class="prev arrow"></button>',
	  responsive: [
	    
	    {
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 3,
	        nextArrow: '<button class="next arrow"></button>',
	        prevArrow: '<button class="prev arrow"></button>',
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	        nextArrow: '<button class="next arrow"></button>',
	        prevArrow: '<button class="prev arrow"></button>',
	        slidesToScroll: 1
	      }
	          }
	          // You can unslick at a given breakpoint now by adding:
	          // settings: "unslick"
	          // instead of a settings object
	        ]  
	});

	
		
});
