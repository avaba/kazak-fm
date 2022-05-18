import $ from "jquery";
require("slick-slider");

$(".trust__list").slick({
    responsive: [
        {
            breakpoint: 100000,
            settings: 'unslick'
        },
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 676,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

