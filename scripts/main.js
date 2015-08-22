$(document).on('ready', function(){

	$('.js-menu').on('click', function(){
		$('.mainMenu').slideToggle();

	});


	//this scrolls slowly to a section of the page
	$('.navMenu a').on('click', function(){
		var href = $(this).attr('href');
		$.scrollTo(href, 800);
	});


});//end of document on ready