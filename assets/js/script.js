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

		hiddenContent.slideToggle(300);
		shortText.toggle();

		$(this).text(hiddenContent.is(":visible") ? "Show less" : "Learn More");
	});
})
// ================================form validation===================================
function validateForm(event) {
	event.preventDefault(); 
  
	let form = event.target; 

	let name = document.querySelector("#fname").value.trim();
	let nameError = document.querySelector("#nameError");

	let email = document.querySelector("#email").value.trim();
	let emailError = document.querySelector("#emailError");
	let emailPattern = /^\S+@\S+\.\S+$/; 

	let phone = document.querySelector("#phone").value.trim();
	let phoneError = document.querySelector("#phoneError");
	let phonePattern = /^\d{10}$/; 

	let hasError = false;
  
	if (name === "") {
		nameError.innerText = "Please enter your name";
		hasError = true;
	} else {
		nameError.innerText = "";
	}

	if (email === "") {
		emailError.innerText = "Please enter your email";
		hasError = true;
	} else if (!emailPattern.test(email)) {
		emailError.innerText = "Please enter a valid email address";
		hasError = true;
	} else {
		emailError.innerText = "";
	}

	if (phone === "") {
		phoneError.innerText = "Please enter your phone number";
		hasError = true;
	} else if (!phonePattern.test(phone)) {
		phoneError.innerText = "Enter a valid 10-digit phone number";
		hasError = true;
	} else {
		phoneError.innerText = "";
	}

	if (!hasError) {
	   
		form.reset(); 
	}
}