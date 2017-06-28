var modal = function(state){
	if(state === 'open'){
		$('.modal-wrapper').fadeIn(function(){
			$('body').addClass('modal');
		});
	} else {
		$('.modal-wrapper').fadeOut(function(){
			$('body').removeClass('modal');
		});
	}
}

$(document).on('ready', function(){

	$('.front_image').on('click', function(){
		console.log("hello");
		modal('open');
	});

	$('.js-modal-close').on('click', function(){
		modal('close');
	})

});