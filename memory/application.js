$(document).ready(function(){
	event.preventDefault();
	var click_count = 0;
	var first_guess = 0;
	var second_guess = 0;
	$(".card").on("click", function() {
		if (click_count == 0) {
			click_count = 1;
			first_guess = $(this).find("p").html();
			$(this).find("p").css("opacity", 1);
			$(this).find("p").addClass("clicked");
		}
		else {
			$(this).find("p").css("opacity", 1);
			second_guess = $(this).find("p").html();
			$(this).find("p").addClass("clicked");
			if (first_guess != second_guess){
				$(".clicked").each().css("opacity, 0");
			};
			click_count = 0;
		}
		}))
	});
});
