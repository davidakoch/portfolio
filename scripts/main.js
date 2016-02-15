$(document).on('ready', function(){



	//this scrolls slowly to a section of the page
	$('.navMenu a').on('click', function(){
		var href = $(this).attr('href');
		$.scrollTo(href, 800);
	});


	//adds underline to nav tags
	$('.navMenu a').on('click', function(){
		$('.navMenu a').css('text-decoration', 'none');
		$(this).css('text-decoration', 'underline');
	});















});//end of document on ready