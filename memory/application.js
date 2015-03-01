$(document).ready(function(){
	$(".card").on("click", function() {
		event.preventDefault();
		$(this).find("p").css("display", "inline").delay(1000).css("display", "none");
	});
});
