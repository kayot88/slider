;(function($) {

	$(function() {

		$('.slick-slider').slick({
			'slidesToShow': 3,
			'speed': 1000,
			'slide': '.slick-slider__item',
			'centerMode': true,
			'infinite': true,
			'centerPadding': '100px',
			'autoplay': true,
			'autoplaySpeed': 2000,
			'prevArrow': '.slider-arrow--prev',
			'nextArrow': '.slider-arrow--next'
		}); // end slick

		$('.slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.slick-slider .slick-slider__item').addClass('slide-hover');
		}); //end beforeChange 
	
		$('.slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
			$('.slick-slider .slick-slider__item').removeClass('slide-hover');
		}); //end afterChange 
		
	}); // end ready

})(jQuery);