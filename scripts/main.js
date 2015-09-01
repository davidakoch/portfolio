$(document).on('ready', function(){

	//makes the navMenu appear when click on hamburger
	$('.js-menu').on('click', function(){
		$('.navMenu').slideToggle();

	});

	//this makes the navMenu reappear after it's been lost
	$(window).on('resize', function(){
		var w = $(window).width(); 
		if (w > 760 && $('.navMenu').is(':hidden')){
			$('.navMenu').removeAttr('style'); 
		}
	}); 


	//this scrolls slowly to a section of the page
	$('.navMenu a').on('click', function(){
		var href = $(this).attr('href');
		$.scrollTo(href, 800);
	});


	//this fixes the navigation bar
	$(window).on('scroll', function(){
		var topWin = $(window).scrollTop();
		//console.log(topWin);
		if(topWin >= 300 && $('nav-wrapper').css('position') !== 'fixed'){
			$('.nav-wrapper').hide().fadeIn().css('position', 'fixed')
			}	else if (topWin < 300){
					$('.nav-wrapper').css('position', 'static');
				
		}

	});

	//fixes opacity on the about me page

	var animateHover = function(){
		$('.js_about_me_hover').show().animate({
				opacity: 1, 
				color: "rgba(14,14,14,14)",
			});
		};


	$('.js_about_me_hover').mouseenter(function(){
		animateHover();
	});


	var animateLeave = function(){
		$('.js_about_me_hover').show().animate({
					opacity: 0.2,
					},1000);
				};


	
	$('.js_about_me_hover').mouseleave(function(){
				animateLeave();
			});








});//end of document on ready