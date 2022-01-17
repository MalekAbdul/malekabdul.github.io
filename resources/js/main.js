// Responsive Menu
$(function() {
    $('.menu-toggle').click(function() {
        $('.menu-toggle').toggleClass('mfe');
        $('nav').toggleClass('mfe');
    });
});

// Animated Headline
$(function() {
    $('.prof-selector').animatedHeadline({
        animationType: 'type'
    });
});

// Wow
new WOW().init();

// Counter-Up
$(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
});

if($('.skill-bar').length) {
    $('.skill-inner').appear(function() {
        const el = $(this);
        const percent = el.data('width');
        $(el).css('width', percent+'%');
    }, {accY: 0});
};

// Splide
new Splide( '.splide' ).mount();

// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    slideSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});