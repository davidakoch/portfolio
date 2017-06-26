var modal = function(state){
	if(state === 'open'){
		$('.modal-wrapper').fadeIn(function(){
			$('body').addClass('modal-on');
		});
	}
}

$(document).on('ready', function(){

	$('.front_image').on('click', function(){
		console.log("hello");
	});

});