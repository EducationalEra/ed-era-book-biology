$(document).ready(function() {
     var href;
  
      $("a.toggle-search").remove();
      href = $(".custom-link:last").prop("href");
      //href = "https://ed-era.com/books/" + _.last(href.split("-"));
      href = "http://" + _.last(href.split("-")) + ".ed-era.com";
      $(".custom-link:last").prop("href", href);

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	
	
});