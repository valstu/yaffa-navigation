(function ( $ ) {

	$.fn.toggleNav = function( options ) {
		var settings = $.extend({
			"wrapper": ".toggle-nav-wrapper",
			"navToggle": ".toggle-menu",
			"navToggleActiveClass": "active",
			"navList": "nav > ul",
			"animationSpeed": 140,
			"childClass": "has-child",
			"childToggleClass": "toggle-sub",
			"childToggleTitle": "toggle",
			"childToggleClassActive": "open",
			"breakpoint": "768"
		}, options );

		$(this).find('li').has('ul').addClass(settings.childClass).prepend('<a href="#toggle" class="' + settings.childToggleClass + '">'+ settings.childToggleTitle +'</a>');
		
		$(this).find(settings.navToggle).click(function(e) {
			e.preventDefault();
			$(this).siblings(settings.navList).slideToggle(settings.animationSpeed);
			$(this).toggleClass(settings.navToggleActiveClass);
		});

		$('.' + settings.childToggleClass, this).click(function (e){
			e.preventDefault();
			$(this).toggleClass(settings.childToggleClassActive).find('~ ul').slideToggle(settings.animationSpeed);
			return;
		});

/*
		$(settings.navToggle, this).click(function() {
			console.log(find(settings.navList));
			$(settings.wrapper).find(settings.navList).slideToggle(settings.animationSpeed);
			$(settings.wrapper).find(settings.navToggle).toggleClass(settings.navToggleActiveClass);
		});
	
		$(this).find('li').has('ul').addClass(settings.childClass).prepend('<a href="#toggle" class="' + settings.childToggleClass + '">'+ settings.childToggleTitle +'</a>');

		$('.' + settings.childToggleClass, this).click(function (){
			$(this).toggleClass(settings.childToggleClassActive).find('~ ul').slideToggle(settings.animationSpeed);
			return;
		});
*/
		$(window).resize(function(){
			if ($(window).width() > settings.breakpoint ) {
				$(settings.wrapper).find('ul').removeAttr("style");
				$(settings.wrapper).find('a.' + settings.childToggleClassActive).removeClass(settings.childToggleClassActive);
			}
		});
	};
}( jQuery ));