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
})