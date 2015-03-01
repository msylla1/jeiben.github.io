$(document).ready(function(){
	event.preventDefault();
	$(".card").on("click", function() {
		$(this).find("p").css("opacity", 1).delay(1000).css("opacity", 0);
	});
});
