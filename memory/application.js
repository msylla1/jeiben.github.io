$(document).ready(function(){
	$(".card").on("click", function() {
		event.preventDefault();
		$(this).find("p").fadeIn(500).delay(1000).fadeOut(500);
	});
