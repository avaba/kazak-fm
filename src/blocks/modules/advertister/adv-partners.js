import $ from "jquery";
require("slick-slider");

$(".partners__grid").slick({
    responsive: [
        {
            breakpoint: 100000,
            settings: 'unslick'
        },
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                centerPadding: '30px',
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 676,
            settings: {
                infinite: true,
                centerPadding: '30px',
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

