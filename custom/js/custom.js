$(document).ready(function() {
      var href;
      
      $("a.toggle-search").remove();
      href = $(".custom-link").prop("href");
      href = "http://" + _.last(href.split("-")) + ".ed-era.com";
      $(".custom-link").prop("href", href);

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	
	
});