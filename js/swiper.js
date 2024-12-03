/*eslint-env es6*/

document.addEventListener('DOMContentLoaded', function () {    
    // Horizontal Swiper
    var horizontalSwiper = new Swiper('.horizontal-swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.horizontal-swiper .swiper-pagination',
            clickable: 'true',
            type: "fraction",
        },
        navigation: {
            nextEl: '.horizontal-swiper .swiper-button-next',
            prevEl: '.horizontal-swiper .swiper-button-prev',
        },
    });

    // Vertical Swiper
    var verticalSwiper = new Swiper('.vertical-swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.vertical-swiper .swiper-pagination',
            clickable: 'true',
            type: "fraction",
        },
        navigation: {
            nextEl: '.vertical-swiper .swiper-button-next',
            prevEl: '.vertical-swiper .swiper-button-prev',
        },
    });
    
    // Initialize Fancybox (optional)
    Fancybox.bind("[data-fancybox='gallery']", {
        infinite: true,
        Thumbs: {
            showOnStart: false,
        },
    });
    
});