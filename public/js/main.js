/*
 Directive by HTML5 UP
 html5up.net | @ajlkn
 Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
 */

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		$body.addClass('is-loading');

		function lazyLoad(){
			var $images = $('.lazy_load');

			$images.each(function(){
				var $img = $(this),
					src = $img.attr('data-src');

				$img
					.on('load', imgLoaded($img[0]))
					.attr('src', src);
			});
		}

		function imgLoaded(img){
			var $img = $(img);
			$img.removeClass('lazy_load');
		}

		$window.on('load', function() {
			$body.removeClass('is-loading');
			lazyLoad();
            var $en = $('#en');
            var $ru = $('#ru');
			if (~document.cookie.indexOf('forceLang=')) {
                var lang = document.cookie.substr(document.cookie.indexOf('forceLang=' + 'forceLang='.length) - 1, 2);
            }
            $en.click(function(){
            	if (lang != 'en') {
                    document.cookie = "forceLang=en";
                    location.reload();
				}
			});

            $ru.click(function(){
            	if (lang != 'ru') {
                    document.cookie = "forceLang=ru";
                    location.reload();
				}
			});
        });

	});


})(jQuery);