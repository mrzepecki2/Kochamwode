$(document).ready(function(){
	$( window ).resize(function() { console.log($(window).width()) });
    
	if( $('#produkt').length>0){  
        //START SLIDER PRODUCT FOTOS
        var maxSlides;
        if      ( $(window).width() > 1199 ){ maxSlides = 3 ; }
        else if ( $(window).width() > 991 ){ maxSlides = 2 ; }
        else if ( $(window).width() > 976 ){ maxSlides = 2 ; }
        else if ( $(window).width() > 770 ){ maxSlides = 4 ; }
        else if ( $(window).width() > 580 ){ maxSlides = 3 ; }
        else { maxSlides = 2 ; }
        var product_fotos_slider = $('.bxslider').bxSlider({
            minSlides: 2,
            maxSlides: maxSlides,
            slideWidth: 171,
            slideMargin: 5,
            moveSlides: 1,
            pager: false,
            onSliderLoad: function(){ afterSliderLoad(); }
        }); 
		
        function reloadSliderFoto(){
            if      ( $(window).width() > 1199 ){ maxSlides = 3 ; }
			else if ( $(window).width() > 991 ){ maxSlides = 2 ; }
			else if ( $(window).width() > 976 ){ maxSlides = 2 ; }
			else if ( $(window).width() > 770 ){ maxSlides = 4 ; }
			else if ( $(window).width() > 580 ){ maxSlides = 3 ; }
            else { maxSlides = 2 ; }
            product_fotos_slider.reloadSlider({
                minSlides: 2,
				maxSlides: maxSlides,
				slideWidth: 171,
				slideMargin: 5,
				moveSlides: 1,
				pager: false,
            });
        }
		
		function afterSliderLoad(){
			$("#produkt-obraz").elevateZoom({
				gallery:'zoomGallery', 
				galleryActiveClass: 'active',
				borderSize: 2,
				scrollZoom : true,
				borderColour: '#90c3d4',
				zoomType	: "lens",
				lensShape : "round",
				lensSize : 200 
			});
        }
		
        $( window ).resize(function() { reloadSliderFoto(); });
        $( window ).on( "orientationchange", function(){ reloadSliderFoto(); });   
    //----------------------------------------------------------------------------------------------------------------------//   
    }
});



$(window).load(function() {

	$(".colorbox-1").colorbox();
	//$(".fancybox").fancybox({openSpeed : 'slow',openEffect :'elastic', nextEffect: 'fade', prevEffect: 'fade' });	
	
	$(".ikona_flaga").click( function(){
		$(".active").removeClass("active");
		$(this).addClass("active");
	});
	$(".ikona_socialka").click( function(){
		$(".active").removeClass("active");
		$(this).addClass("active");
	});
	
	 $(".zakladka").click(function(){
        var index = $(this).data("index");    
        $(".tresc[data-index='"+index+"']").fadeIn();   
    })
      
    $(".home-article-list-titles-single").click(function(){
        $(".active_news").removeClass("active_news");
        $(this).addClass("active_news");
        var index = $(this).data("index");
		
        $(".home-article-list-text-single").removeClass("active_news_text");
		$(".home-article-list-text-single[data-index='"+index+"']").addClass("active_news_text");
    });

	$('.slick').slick({
	  dots: true,
	  infinite: true,
	  speed: 5000,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  autoplay: true,
	  autoplaySpeed: 00,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
});
$(window).resize(function(){

});

