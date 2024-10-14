/*eslint-env es6*/

$(document).ready(function () {
    // Horizontal Swiper
    var horizontalSwiper = new Swiper('.horizontal-swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.horizontal-swiper .swiper-pagination',
        },
        navigation: {
            nextEl: '.horizontal-swiper .swiper-button-next',
            prevEl: '.horizontal-swiper .swiper-button-prev',
        },
        //scrollbar: {
        //    el: '.horizontal-swiper .swiper-scrollbar',
        //},
    });

    // Vertical Swiper
    var verticalSwiper = new Swiper('.vertical-swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.vertical-swiper .swiper-pagination',
        },
        navigation: {
            nextEl: '.vertical-swiper .swiper-button-next',
            prevEl: '.vertical-swiper .swiper-button-prev',
        },
/*        scrollbar: {
            el: '.vertical-swiper .swiper-scrollbar',
        },*/
    });
    
    // Initialize Fancybox (optional)
    Fancybox.bind("[data-fancybox='gallery']", {
        infinite: true,
        Thumbs: {
            showOnStart: false,
        },
    });
});