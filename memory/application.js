$(document).ready(function(){
	event.preventDefault();
	$(".card").on("click", function() {
		var first_guess = $(this).find("p").html();
		$(this).find("p").addClass("clicked");
		$(this).find("p").css("opacity", 1);
		$.when($(".card").on("click", function() {
			var second_guess = $(this).find("p").html();
			$(this).find("p").css("opacity", 1);
			$(this).find("p").addClass("clicked");
			if (first_guess != second_guess){
				$(".clicked").each().css("opacity, 0");
			};
		}))
	});
});
