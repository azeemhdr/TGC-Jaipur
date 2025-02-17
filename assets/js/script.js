$(document).ready(function(){
		$(".partner-carousel").slick({
		  slidesToShow: 8,
		  slidesToScroll: 1,
		  infinite: true,
		  speed: 500,
		  cssEase: "linear",
		  autoplay: true,
		  autoplaySpeed: 2000,
		  arrows: false,
		  responsive:[
			{
			breakpoint: 576,
			settings:{
				slidesToShow:3,
				slidesToScroll:1,
				infinite:true,
			}

		  }
		  ]
		//   prevArrow: '<button type="button" class="slick-prev">←</button>',
		//   nextArrow: '<button type="button" class="slick-next">→</button>',
		});

		$(".a-testimonial").slick({
			slidesToShow:1,
			slidesToScroll:1,
			dots:true,
			infinite:true,
			autoplay:true,
			autoplaySpeed:2000,
			arrows:false,
			fade:true,
			cssEase:"linear"
		});

		$(".question").click(function () {
			$(this).next(".answerPanel").slideToggle("slow");
		  });
	  
})