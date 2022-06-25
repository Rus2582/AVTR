$(function () {
	$('.design__slider').slick({
		dots: false,
		slidesToShow: 4,
		variableWidth: true,
		prevArrow: '<img class="arrow-left"src="images/Arrow-left.svg" alt="">',
		nextArrow: '<img class="arrow-right"src="images/Arrow-right.svg" alt="">',
		responsive: [
			{
				breakpoint: 361,
				settings: {
					variableWidth: false,
					slidesToShow: 1,
					arrows: false,

				}
			}
		]
	});
});