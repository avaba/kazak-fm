import $ from "jquery";

$(window).on("scroll", function () {
    const offset = $(".footer").offset().top;
    const height = $(window).height();
    const scroll = $(window).scrollTop();
    if ((offset - height) <= scroll) {
        $(".header").fadeOut(300);
    } else {
        $(".header").fadeIn(0);
    }
});