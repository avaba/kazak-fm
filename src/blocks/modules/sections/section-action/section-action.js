import $ from "jquery";
require("slick-slider");

$(".action__slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});