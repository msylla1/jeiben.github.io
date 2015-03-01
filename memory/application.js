$(document).ready(function(){
	$(".card").on("click", function() {
		event.preventDefault();
		$(this).find("p").fadeIn().css("display", "inline-block");
	});
});
