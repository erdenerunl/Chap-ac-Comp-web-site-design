$(document).ready(function(){
    $("services-slider").slick({
        dots: false,
         infinite: true,
         speed: 300,
         arrows: true,
         slidesToShow: 5,
         slidesToScroll: 1,
         focusOnSelect: true,
         adaptiveHeight: true,
         asNavFor: '.for-services-slider',
        cssEase: 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
         responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    centerMode:true
                }
           },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    centerMode:true
                }
           }
        ]


    });
});