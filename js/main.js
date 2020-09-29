/* =====================================
Template Name: Appmela
Author Name: Themelamp
Author URL: http://themelamp.com
Description: Appmela is a modern & powerfull html5 template for any app landing page showcase.
Version: 1.0
========================================*/  
/*=======================================
[Start Activation Code]
=========================================
	01. Mobile Menu JS
	02. Sticky Header JS
	03. Onepage Nav JS
	04. Hero Slider JS
	05. Counter Up JS
	06. Swipper Slider JS
	07. Testimonials Slider JS
	08. Blog Slider JS
	09. Brands Slider JS
	10. Twitter Slider JS
	09. Aos Animation JS
	10. Magnipic Popup JS
	11. Sticky Sidebar JS
	12. Aos Animation JS
	13. Magnipic Popup JS
	14. Scroll Up JS
	15. Animate Scroll JS
	16. Preloader JS
=========================================
[End Activation Code]
=========================================*/ 
(function ($) {
	"use strict";
    $(document).ready(function(){
		
		/*====================================
			01. Mobile Menu JS
		======================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-menu",
			label:"", //you can add mobile menu text
		});
		
		/*====================================
			02. Sticky Header JS
		======================================*/ 
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 0) {
				$('.header.sticky').addClass("active");
			} else {
				$('.header.sticky').removeClass("active");
			}
		});
		
		/*====================================
			03. Onepage Nav JS
		======================================*/ 
		$('.menu').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 1000,
			scrollThreshold: 0.5,
			filter: '',
			easing: 'easeInOutQuart',
			begin: function() {
				//I get fired when the animation is starting
			},
			end: function() {
				//I get fired when the animation is ending
			},
			scrollChange: function($currentListItem) {
				//I get fired when you enter a section and I pass the list item of the section
			}
		});
		
		/*====================================
			04. Hero Slider JS
		======================================*/
		$(".hero-slider").owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			autoplay: false,
			autoplayTimeout: 2500,
			autoplayHoverPause:true,
			smartSpeed: 500,
			mouseDrag: true,
			center: false,
			dots: true,
			nav: false,
		});	
		
		/*====================================
			05. Counter Up JS
		======================================*/ 
		$('.count').counterUp({
			time: 3000,
			delay: 20,
		});
		
		/*====================================
			06. Swipper Slider JS
		======================================*/ 
		var swiper = new Swiper('.swiper-container.swiper-3d-gallery', {
            slidesPerView: 3,
            initialSlide: 3,
			nextButton: '.slider-button-next',
			prevButton: '.slider-button-prev',
            keyboardControl: true,
            lazyLoading: true,
            centeredSlides: true,
			lazyLoadingInPrevNext: true,
            preventClicks: false,
            preventClicksPropagation: false,
			autoplay: 2500,
			speed: 600,
			grabCursor: true,
			loop: true,
			spaceBetween: 40,
			centeredSlides: true,
			fadeEffect: {
				crossFade: true
			},
			 breakpoints: {
                1199: {
                   slidesPerView: 3,
                   spaceBetween: 30,
                },
                991: {
                    slidesPerView: 3,
                   spaceBetween: 30,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                575: {
                    slidesPerView: 1,
                   spaceBetween: 30,
                }
            }
		});
		
		/*====================================
			07. Testimonials Slider JS
		======================================*/ 
		$('.testimonials-slider .slider-active').bxSlider({
            auto:true,
			autoStart:true,
			stopAutoOnClick:true,            
            controls: true,
            nextText: '<i class="icofont-long-arrow-right"></i>',
            prevText: '<i class="icofont-long-arrow-left"></i>',
            pause: 3500,
            speed: 600,
			randomStart: true,
			mode: 'vertical',
            pager: true,
            pagerCustom: '#testimonials-slider-pager'
        });
		
		/*====================================
			08. Blog Slider JS
		======================================*/
		$(".blog-slider").owlCarousel({
			loop: true,
			margin: 30,
			dots: true,
			autoplay: false,
			autoplayTimeout: 3500,
			autoplayHoverPause:true,
			smartSpeed: 600,
			mouseDrag: true,
			items: 3,
			nav: false,
			navText: ['<i class="icofont-thin-double-left"></i>', '<i class="icofont-thin-double-right"></i>'],
			responsive:{
				300: {
					items: 1,
				},
				480: {
					items: 1,
				},
				768: {
					items: 2,
				},
				1170: {
					items: 3,
				},
			}
		});		
		
		/*====================================
			09. Brands Slider JS
		======================================*/
		$(".brands-slider").owlCarousel({
			autoplay:false,
			loop:true,
			smartSpeed: 700,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			center:false,
			items:6,
			margin:0,
			dots:false,
			nav: false,
			responsive:{
				300: {
					items: 1,
				},
				480: {
					items: 2,
				},
				768: {
					items: 4,
				},
				1170: {
					items: 6,
				},
			}
		});
		
		
		/*====================================
			10. Twitter Slider JS
		======================================*/
		$(".twitter-slider").owlCarousel({
			autoplay:true,
			loop:true,
			smartSpeed: 400,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			center:false,
			items:1,
			margin:0,
			dots:false,
			nav: true,
			navText: ['<i class="icofont-long-arrow-left"></i>', '<i class="icofont-long-arrow-right"></i>'],
		});	
		
		/*====================================
			11. Sticky Sidebar JS
		======================================*/ 
		$('.st-sidebar').theiaStickySidebar({
		 // Settings
		  additionalMarginTop: 30
		});

		
		/*====================================
			12. Aos Animation JS
		======================================*/ 
		AOS.init();
		
		/*=====================================
			13. Magnipic Popup JS
		======================================*/ 
		$('.video-play').magnificPopup({
			type: 'iframe',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
		/*====================================
			14. Scroll Up JS
		======================================*/
		$.scrollUp({
			scrollText: '<span><i class="icofont-long-arrow-up"></i></span>',
			easingType: 'easeInOutExpo',
			scrollSpeed: 900,
			animation: 'fade'
		});

		/*====================================
			15. Animate Scroll JS
		======================================*/
		$('.a-scrool,.slicknav_nav li a').on('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top -65 
			}, 1000, 'easeInOutQuart');
			event.preventDefault();
		});
		
		
    });
		/*====================================
			16. Preloader JS
		======================================*/
		
		$(window).on('load', function() {
			var preloaderFadeOutTime = 500;
			function hidePreloader() {
				var preloader = $('.spinner-wrapper');
				setTimeout(function() {
					preloader.fadeOut(preloaderFadeOutTime);
				}, 500);
			}
			hidePreloader();
		});
	
	
})(jQuery);	