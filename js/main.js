function ibg() {
	$.each($('.ibg'), function(index, val) {
		if ($(this).find('img').length>0) {
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

$(document).ready(function(){
	$(".reviews-carousel").owlCarousel({
		'items': 2,
		'loop': true,
		'autoplay': true,
		'autoplayHoverPause': true,
		'nav': true,
	});
});