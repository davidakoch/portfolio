

$(document).on('ready', function(){


	/*var modal = function(state){
		if(state === 'open'){
			//$('.modal-wrapper').fadeIn(function(){
				//$('body').addClass('modal');
			$('.modal-wrapper').css({display:'block'});
			//};
		} else {
			//$('.modal-wrapper').fadeOut(function(){
				//$('body').removeClass('modal');
			$('.modal-wrapper').css({display:'none'});
			//};
		}
	}*/

	$('.front_image').on('click', function(){
		console.log("hello");
		//modal('open');
		$('.modal_wrapper').css("display", "block");
	});

	$('.js-modal-close').on('click', function(){
		$('.modal_wrapper').css("display", "none");
	})

});