(function($) {
	'use strict';

	// START MENU JS
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 50) {
			$('.main-nav').addClass('menu-shrink');
		} else {
			$('.main-nav').removeClass('menu-shrink');
		}
	});				

    // Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});

	// Home Slider JS
	$('.home-slider').owlCarousel({
		items: 1,
		loop:true,
		margin: 0,
		nav: true,
		dots: true,
		smartSpeed: 1000,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		navText: [
			"<i class='icofont-simple-left'></i>",
			"<i class='icofont-simple-right'></i>"
		]
	});

	// Popup Youtube JS
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Blog Slider JS
	$('.blog-slider').owlCarousel({
		loop:true,
		margin: 0,
		nav: false,
		dots: true,
		smartSpeed: 1000,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:1,
			},
			800:{
				items:2,
			},
			1000:{
				items:3,
			}
		}
	});

	// Wow JS
	new WOW().init();

	// Nice Select JS
	$('select').niceSelect();

	// Accordion JS
	$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
	$('.accordion a').on('click', function(j) {
		var dropDown = $(this).closest('li').find('p');
		$(this).closest('.accordion').find('p').not(dropDown).slideUp(300);
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.accordion').find('a.active').removeClass('active');
			$(this).addClass('active');
		}
		dropDown.stop(false, true).slideToggle(300);
		j.preventDefault();
	});

	// Back to top 
	$('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-bubble-up"></i></div>');
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	}); 
	$('#toTop').on('click', function(){
		$("html, body").animate({ scrollTop: 0 }, 900);
		return false;
	});

	// Buy Now Btn
	$('body').append("<a href='https://themeforest.net/checkout/from_item/27248799?license=regular&support=bundle_6month&_ga=2.226242777.2131256700.1648234835-1425290503.1590986634' target='_blank' class='buy-now-btn'><img src='assets/img/envato.png' alt='envato'/>Buy Now</a>");

	// Switch Btn
	$('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");

})(jQuery);

try {
	// function to set a given theme/color-scheme
	function setTheme(themeName) {
		localStorage.setItem('lufz_theme', themeName);
		document.documentElement.className = themeName;
	}
	// function to toggle between light and dark theme
	function toggleTheme() {
		if (localStorage.getItem('lufz_theme') === 'theme-dark') {
			setTheme('theme-light');
		} else {
			setTheme('theme-dark');
		}
	}
	// Immediately invoked function to set the theme on initial load
	(function () {
		if (localStorage.getItem('lufz_theme') === 'theme-dark') {
			setTheme('theme-dark');
			document.getElementById('slider').checked = false;
		} else {
			setTheme('theme-light');
		document.getElementById('slider').checked = true;
		}
	})();
} catch (err) {}