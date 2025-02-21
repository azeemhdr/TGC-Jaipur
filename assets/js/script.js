$(document).ready(function(){
	// FAQ===========================================
		$(".question").click(function () {
			$(this).next(".answerPanel").slideToggle("slow");
		  });
	// Modal=====================================
	$('.open_modal a').click(function(e){
		e.preventDefault();
		$('.modal_section').fadeIn();
	  })

	  $('.modalForm-close a').click(function(e){
		e.preventDefault();
		$('.modal_section').fadeOut();
	  })
	//Modules=====================================================
	$(".module-learn-more").click(function () {
		let hiddenContent = $(this).siblings(".hidden-content");
		let shortText = $(this).siblings(".short-text");

		if (hiddenContent.is(":visible")) {
			hiddenContent.hide();
			shortText.show();
			$(this).text("Learn More");
		} else {
			hiddenContent.show();
			shortText.hide();
			$(this).text("Show Less");
		}
	});
})