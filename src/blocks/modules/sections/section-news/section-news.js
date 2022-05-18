import $ from "jquery";
require("slick-slider");

$(".news-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});