var modal = function(state){
	if(state === 'open'){
		$('.modal-wrapper').fadeIn(function(){
			$('body').addClass('modal-on');
		});
	} else {
		$('.modal-wrapper').fadeOut(function(){
			$('body').removeClass('modal-on');
		});
	}
}

$(document).on('ready', function(){

	$('.front_image').on('click', function(){
		console.log("hello");
	});

});