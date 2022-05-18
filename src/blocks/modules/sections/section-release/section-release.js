import $ from "jquery";
require("slick-slider");

$(".release__slider").slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                centerPadding: '30px',
                variableWidth: false,
                centerMode: false,
            }
        }
    ]
});