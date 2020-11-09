$(document).ready(function () {
  $('#owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 8000,
    autoplaySpeed: 1800,
    autoplayHoverPause: true,
    loop: true,
    items: 1
  });

});
$(document).ready(function () {
  $('#owl-carousel-services').owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1800,
    autoplayHoverPause: true,
    loop: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:false
        },
        1000:{
            autoplayTimeout: 4000,
            autoplaySpeed: 1800,
            autoplayHoverPause: true,
            loop: true,
            items:3,
            nav:true,
            loop:true
        }
    }
  });

});



function toggleDropdown (e) {
  const _d = $(e.target).closest('.dropdown'),
    _m = $('.dropdown-menu', _d);
  setTimeout(function(){
    const shouldOpen = e.type !== 'click' && _d.is(':hover');
    _m.toggleClass('show', shouldOpen);
    _d.toggleClass('show', shouldOpen);
    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
  }, e.type === 'mouseleave' ? 300 : 0);
}

$('body')
  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
  .on('click', '.dropdown-menu a', toggleDropdown);


