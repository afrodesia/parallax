$(document).ready(function(){
	//$('#nav').localScroll(800);
	
	RepositionNav();
	
	$(window).resize(function(){
		RepositionNav();
	});	
	
	//.parallax(xPosition, adjuster, inertia, outerHeight) options:
	//xPosition - Horizontal position of the element
	//adjuster - y position to start from
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#home').parallax("50%", 0, 0.1, true);
	$('#about').parallax("50%", 0, 0.1, true);
	$('.bg').parallax("26%", 2520, 0.4, true);
	$('.bg2').parallax("26%", 2540, 0.4, true);
	$('#info').parallax("50%", 2750, 0.1, true);
	$('#contact').parallax("50%", 2750, 0.1, true);
	
	var deck = new $.scrolldeck({
		slides: '.slide',
		buttons: '#nav li a',
		easing: 'easeInOutExpo'
	});

});