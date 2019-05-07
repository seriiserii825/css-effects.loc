$(function () {
  /*
      https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
      ===========================*/
	$("html").easeScroll({
		frameRate: 60,
		animationTime: 1000,
		stepSize: 90,
		pulseAlgorithm: 1,
		pulseScale: 8,
		pulseNormalize: 1,
		accelerationDelta: 20,
		accelerationMax: 1,
		keyboardSupport: true,
		arrowScroll: 50,
		touchpadSupport: true,
		fixedBackground: true
	});

	//btn arrow
	let btnArrow = $('.btn-arrow');

	if (btnArrow.length > 0) {
		btnArrow.on('click', function (e) {
			e.preventDefault();

			$(this).toggleClass('btn-arrow--active');

			$('.btn-arrow__menu-nav').toggleClass('btn-arrow__menu-nav--active');
		});
	}

	let cardsSlider = function () {
		$('#js-cards .cards__img-wrap').each(function (idx) {
			let carouselId = "carousel" + idx;
			this.closest('.cards__item').id = carouselId;

			$(this).slick({
				arrows: false,
				dots: true,
				appendDots: "#" + carouselId + ' .cards__color',
				customPaging: function (slider, i) {
					let sliderItem = $(slider.$slides[i]);
					let sliderChildren = sliderItem.find('.cards__img');
					let color = sliderChildren.data('color');

					return '<a class="cards__color-item" style="background-color: ' + color + ';"></a>';
				}
			});

		});

	};

	cardsSlider();


	let closeEnvelope = function () {
		let audio = $('#js-audio-close-envelope')[0];

		$('#js-envelope').on('click', function () {
			$('.envelope__top').toggleClass('envelope__top--close');
			$('.envelope__paper').toggleClass('envelope__paper--down');
			audio.play();
		});
	};

	closeEnvelope();

	// let cityAudio = function () {
	// 	let cityAudio = $('#js-city-audio')[0];
	// 	let cityOverlay = $('.city__overlay');

	// 	cityOverlay.on('mouseenter', function () {
	// 		cityAudio.play();
	// 	});
	// };

	// cityAudio();
});

