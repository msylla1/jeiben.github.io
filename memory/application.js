$(document).ready(function(){
	event.preventDefault();
	$(".card").on("click", function() {
		$(this).find("p").css("opacity", 1);
	});
});
