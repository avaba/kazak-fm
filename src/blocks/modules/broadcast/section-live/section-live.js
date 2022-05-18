import $ from "jquery";
require("slick-slider");

$(".live__slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    responsive: [
        {
            breakpoint: 768,
            settings: "unslick"
        }
    ]
});