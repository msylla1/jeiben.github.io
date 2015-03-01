$(document).ready(function(){
	$(".card").on("click", function() {
		event.preventDefault();
		$(this).find("p").show().delay(1000).hide();
	});
});
