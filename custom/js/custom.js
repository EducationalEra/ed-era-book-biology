$(document).ready(function() {
  var href, $lastLink;
  
  $("a.toggle-search").remove();
  
  $lastLink = $(".custom-link:last");
  href = $lastLink.prop("href");
  href = "https://ed-era.com/books/" + _.last(href.split("-"));
  $lastLink.prop("href", href);

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    	disableOn: 700,
    	type: 'iframe',
    	mainClass: 'mfp-fade',
    	removalDelay: 160,
    	preloader: false,
    
    	fixedContentPos: false
    });
	
	
});