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













});//end of document on ready