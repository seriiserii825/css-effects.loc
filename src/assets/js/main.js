$(function () {

	let closeMenu = function () {
		$('#js-sandwitch-wrap').on('click', function () {
			$('body').toggleClass('fixed');
			$('#js-main-menu').slideToggle();

			$(this).toggleClass('sandwitch--active');
		});
	};
	closeMenu();

	//btn arrow
	let btnArrowFunc = function () {
		let btnArrow = $('.btn-arrow');

		btnArrow.on('click', function (e) {
			e.preventDefault();
			console.log($(this));

			$(this).toggleClass('btn-arrow--active');

			$('.btn-arrow__menu-nav').toggleClass('btn-arrow__menu-nav--active');
		});
	};

	let cardsSlider = function () {
		$('#js-cards .cards__img-wrap').each(function (idx) {
			let carouselId = "carousel" + idx;
			this.closest('.cards__item').id = carouselId;

			if ($(this).length > 0) {
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
			}
		});

	};

	let closeEnvelope = function () {
		let audio = $('#js-audio-close-envelope')[0];

		$('#js-envelope').on('click', function () {
			$('.envelope__top').toggleClass('envelope__top--close');
			$('.envelope__paper').toggleClass('envelope__paper--down');
			audio.play();
			audio.currentTime = 0;
		});
	};

	let fullscreenMenuAction = function () {
		let fullscreenMenu = $('#js-fullscreen-menu');
		fullscreenMenu.addClass('show');

		$('#js-fullscreen-menu .fullscreen-menu__item').on('mouseenter', function () {
			let dataFullscreenMenu = $(this).attr('data-fullscreen-menu');

			if (fullscreenMenu.hasClass('show')) {
				console.log('Has class show');
				fullscreenMenu.removeClass('show');
				fullscreenMenu.css({
					'background-image': 'url(assets/i/fullscreen-menu/' + dataFullscreenMenu + ')'
				});

				setTimeout(function () {
					fullscreenMenu.addClass('show');
				}, 200);
			} else {
				console.log('Has class show');
			}

		});
	};

	let keysSounds = function () {
		$('#js-keys').on('keydown', function (e) {
			let key = $(this).find('.key[data-key=' + e.which + ']');
			let audio = $(this).find('audio[data-key=' + e.which + ']')[0];


			$('#js-keys .key').removeClass('playing');
			key.toggleClass('playing');

			audio.play();
			audio.currentTime = 0;
		});

		$('#js-keys').on('keyup', function () {
			$('#js-keys .key').removeClass('playing');
		});
	};

	let progress = document.getElementById('scrollbar-hue__progressbar');
	let totalHeight = document.body.scrollHeight - window.innerHeight;
	window.onscroll = function(){
		let progressHeight = (window.pageYOffset / totalHeight) * 100;
		progress.style.height = progressHeight + '%';
	}

	cardsSlider();
	closeEnvelope();
	fullscreenMenuAction();
	btnArrowFunc();
	keysSounds();
});
