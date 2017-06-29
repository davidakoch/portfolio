

$(document).on('ready', function(){


	$('.front_image').on('click', function(){
		console.log("hello");
		//modal('open');
		$('.modal_wrapper').css("display", "block");
	});

	$('.issues_image').on('click', function(){
		console.log("hello");
		//modal('open');
		$('.modal_wrapper').css("display", "block");
	});

	$('.news_image').on('click', function(){
		console.log("hello");
		//modal('open');
		$('.modal_wrapper').css("display", "block");
	});

	$('.js-modal-close').on('click', function(){
		$('.modal_wrapper').css("display", "none");
	})

});