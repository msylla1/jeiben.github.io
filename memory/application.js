$(document).ready(function(){
	event.preventDefault();
	var click_count = 0;
	var first_guess = 0;
	var second_guess = 0;
	$(".card").on("click", function() {
		$(this).find("p").css("opacity", 1);
		$(this).find("p").addClass("clicked");
		if (click_count == 0) {
			click_count = 1;
			first_guess = $(this).find("p").html();
		}
		else {
			click_count = 0
			second_guess = $(this).find("p").html();
			if (first_guess != second_guess){
				$(".clicked").each().css("opacity", 0);
			};
		}
		});
	$("#clear").on("click", function() {
		$(this).css("color", "red");
		$(document).each(".clicked").css("opacity", 0);
	});
});
