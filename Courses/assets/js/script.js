$(document).ready(function(){
	// FAQ===========================================
		$(".question").click(function () {
			$(this).next(".answerPanel").slideToggle("slow");
		  });
	// Modal========================================
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

		hiddenContent.slideToggle(300);
		shortText.toggle();

		$(this).text(hiddenContent.is(":visible") ? "Show less" : "Learn More");
	});
	
	// view more why-us==========================================
	$("#viewMoreBtn").click(function () {
		$(".extra-cards").slideToggle(300);
		$(this).text($(this).text() === "View More" ? "View Less" : "View More");
	});

	// view more module=================================================
	$("#viewMoreModule").click(function(){
		$(".module-extra-card").slideToggle(300);
		$(this).text($(this).text() === "View More" ? "View Less" : "View More");
	});
})