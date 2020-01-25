$(function(){
	$('.section-slider').slick({
		dots: true,
		dotsClass: 'slider-dots',
		arrows: true,
		prevArrow: document.querySelector('.left-arrow'), 
		nextArrow: document.querySelector('.right-arrow'),
	})
});