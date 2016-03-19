/**
 * Created by Julius Hernandez on 2/4/2016.
 */

jQuery(function(){

	jQuery('.ngc-bg-slider-fade').slick({
		autoplay:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: false,
		infinite: true,
		arrows: false,
		dots: false,
		fade:true,
		speed:3700,
		autoplaySpeed: 7000
	});

});