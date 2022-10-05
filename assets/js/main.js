/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Sidebar Js
04. Cart Toggle Js
05. Search Js
06. Sticky Header Js
07. Data Background Js
08. Nice Select Js
09. Slider__active Slider Js
10. Fitness slider activation Js
11. Testimonial activation Js
12. Client-feedback activation Js
13. Soponsor activation Js
14. Range Slider Js
15. Masonary Js
16. Wow Js
17. Data width Js
18. Cart Quantity Js
19. Show Login Toggle Js
20. Shipping Box Toggle Js
21. Create An Account Toggle Js
22. Shipping Box Toggle Js
23. Counter Js
24. InHover Active Js
25. Product imgae-select Active Js
26. Cart Plus Minus Js
27. Blog-slider activation Js

****************************************************/

(function ($) {
"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
    // 01. PreLoader Js
	$(window).on('load', function(event) {
		$('#preloader').delay(500).fadeOut(500);
	});
		
	////////////////////////////////////////////////////
    // 02. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});


	////////////////////////////////////////////////////
    // 03. Sidebar Js
	$(".sidebar-toggle-btn").on("click", function () {
		$(".sidebar__area").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".sidebar__close-btn").on("click", function () {
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
    // 04. Cart Toggle Js
	$(".cart-toggle-btn").on("click", function () {
		$(".cartmini__wrapper").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".cartmini__close-btn").on("click", function () {
		$(".cartmini__wrapper").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});
	$(".body-overlay").on("click", function () {
		$(".cartmini__wrapper").removeClass("opened");
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".header__search-3").removeClass("search-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
    // 05. Search Js
	$(".search-toggle").on("click", function () {
		$(".search__area").addClass("opened");
	});
	$(".search-close-btn").on("click", function () {
		$(".search__area").removeClass("opened");
	});

	////////////////////////////////////////////////////
    // 06. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("sticky");
		} else {
			$("#header-sticky").addClass("sticky");
		}
	});

	////////////////////////////////////////////////////
    // 07. Data Background Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

  	////////////////////////////////////////////////////
    // 08. Nice Select Js
	$('select').niceSelect();

	////////////////////////////////////////////////////
    // 09. Slider__active Slider Js
	if (jQuery(".slider__active").length > 0) {
		let sliderActive1 = ".slider__active";
		let sliderInit1 = new Swiper(sliderActive1, {
		  // Optional parameters
		  slidesPerView: 1,
		  slidesPerColumn: 1,
		  loop: true,
		  effect: 'fade',
		  autoplay: {
			delay: 6000,
		  },
	
		  // If we need pagination
		  pagination: {
			el: ".hero-pagination",
			// dynamicBullets: true,
			clickable: true,
		  },
	
		  // Navigation arrows
		  navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		  },
	
		  a11y: false,
		});
	
		function animated_swiper(selector, init) {
		  let animated = function animated() {
			$(selector + " [data-animation]").each(function () {
			  let anim = $(this).data("animation");
			  let delay = $(this).data("delay");
			  let duration = $(this).data("duration");
	
			  $(this)
				.removeClass("anim" + anim)
				.addClass(anim + " animated")
				.css({
				  webkitAnimationDelay: delay,
				  animationDelay: delay,
				  webkitAnimationDuration: duration,
				  animationDuration: duration,
				})
				.one(
				  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
				  function () {
					$(this).removeClass(anim + " animated");
				  }
				);
			});
		  };
		  animated();
		  // Make animated when slide change
		  init.on("slideChange", function () {
			$(sliderActive1 + " [data-animation]").removeClass("animated");
		  });
		  init.on("slideChange", animated);
		}
	
		animated_swiper(sliderActive1, sliderInit1);
	  }

	////////////////////////////////////////////////////
    // 10. Fitness slider activation Js
	$('.fitness-slider_active').owlCarousel({
		loop:true,
		center: true,
		margin:0,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fal fa-angle-left"></i></button>','<button><i class="fal fa-angle-right"></i></button>'],
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			767:{
				items:2
			},
			992:{
				items:2
			},
			1200:{
				items:3
			},
			1600:{
				items:3
			}
		}
	});	

	////////////////////////////////////////////////////
	// 11. Testimonial activation Js
	if (jQuery(".testimonial_active").length > 0) {
		let testimonialTwo = new Swiper('.testimonial_active', {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: true,
			autoplay: {
					delay: 6000,
				},
			
			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: '.ts-button-next',
				prevEl: '.ts-button-prev',
			},
			
			// And if we need scrollbar
			scrollbar: {
				el: '.swiper-scrollbar',
			},
			breakpoints: {
				550: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				1200: {
					slidesPerView: 1,
				},
				1400: {
					slidesPerView: 1,
					}
				}
			});
	}

	////////////////////////////////////////////////////
    // 12. Client-feedback activation Js
	if (jQuery(".client-feedback_active").length > 0) {
		let testimonialTwo = new Swiper('.client-feedback_active', {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: true,
			autoplay: {
					delay: 6000,
				},
			
			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				clickable: false,
			},
			// Navigation arrows
			navigation: {
				nextEl: '.ts-button-next',
				prevEl: '.ts-button-prev',
			},
			
			// And if we need scrollbar
			scrollbar: {
				el: '.swiper-scrollbar',
			},
			breakpoints: {
				550: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				1200: {
					slidesPerView: 1,
				},
				1400: {
					slidesPerView: 1,
					}
				}
			});
	}

	////////////////////////////////////////////////////
    // 13. Soponsor activation Js
	if (jQuery(".sponsor_slider-active").length > 0) {
		let testimonialTwo = new Swiper('.sponsor_slider-active', {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: true,
			autoplay: {
					delay: 6000,
				},
			
			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				clickable: false,
			},
			// Navigation arrows

			// And if we need scrollbar
			scrollbar: {
				el: '.swiper-scrollbar',
			},
			breakpoints: {
				400: {
					slidesPerView: 2,
				},
				550: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
				1400: {
					slidesPerView: 4,
					}
				}
			});
	}

	////////////////////////////////////////////////////
	// 14. Range Slider Js
	if (jQuery("#slider-range").length > 0) {
		$("#slider-range").slider({
			range: true,
			min: 20,
			max: 280,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " To $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" To $" + $("#slider-range").slider("values", 1));
	}	

	////////////////////////////////////////////////////
    // 15. Masonary Js
	$('.grid').imagesLoaded( function() {
		
		var $grid = $(".grid").isotope({
			// options
		});
		// filter items on button click
		$(".filter-button-group").on("click", "button", function () {
			var filterValue = $(this).attr("data-filter");
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$(".portfolio-menu button").on("click", function (event) {
			$(this).siblings(".active").removeClass("active");
			$(this).addClass("active");
			event.preventDefault();
		});
	});

	/* magnificPopup img view */
	$('.image-popups').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	  });

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
    // 16. Wow Js
	new WOW().init();

	////////////////////////////////////////////////////
    // 17. Data width Js
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});
	
	////////////////////////////////////////////////////
    // 18. Cart Quantity Js
	$('.cart-minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.cart-plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	////////////////////////////////////////////////////
	// 19. Show Login Toggle Js
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 20. Show Coupon Toggle Js
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 21. Create An Account Toggle Js
	$('#cbox').on('click', function () {
		$('#cbox_info').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 22. Shipping Box Toggle Js
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});

	////////////////////////////////////////////////////
	// 23. Counter Js
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	////////////////////////////////////////////////////
    // 24. InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});


	////////////////////////////////////////////////////
	// 26. Cart Plus Minus Js
	$(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find("input").val(newVal);
	});

	////////////////////////////////////////////////////
	// 27. Blog-slider activation Js
	if (jQuery(".blog-slider_active").length > 0) {
		let testimonialTwo = new Swiper('.blog-slider_active', {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: true,
			autoplay: {
					delay: 6000,
				},
			
			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: '.bs-button-next',
				prevEl: '.bs-button-prev',
			},
			
			// And if we need scrollbar
			scrollbar: {
				el: '.swiper-scrollbar',
			},
			breakpoints: {
				550: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				1200: {
					slidesPerView: 1,
				},
				1400: {
					slidesPerView: 1,
					}
				}
		});
	}


})(jQuery);