import $ from "jquery";
import noUiSlider from "nouislider";
import WOW from "wow.js";

const volumeSlider = document.getElementById("sound");
const timeSlider = document.getElementById("time");

noUiSlider.create(volumeSlider, {
    start: [0],
    connect: "lower",
    range: {
        "min": [0],
        "max": [100]
    }
});

noUiSlider.create(timeSlider, {
    start: ["00:30"],
    connect: "lower",
    range: {
        "min": 0,
        "max": 24 * 60
    },
    format: {
        to: minutesToHHMM,
        from: HHMMtoMinutes
    }
});

const Start = document.getElementById("start");

timeSlider.noUiSlider.on("update", function (values, handle) {
    Start.innerHTML = values[handle];
});

function minutesToHHMM(value) {
    value = Math.round(value);
    let min = Math.floor(value / 60);
    let sec = value - min * 60;
    return ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2);
}

function HHMMtoMinutes(value) {
    let split = value.toString().split(":");
    let min = parseInt(split[0]) * 60;
    let sec = parseInt(split[1]);
    return min + sec;
}

new WOW().init();

let i = 0;
lastScrollTop = 0;
$(window).on("scroll", function () {
    var top = $(window).scrollTop();
    $(".separator").each(function () {
        if ($(this).offset().top < ($(window).scrollTop() + screen.height) && $(this).offset().top > $(window).scrollTop()) {
            $(this).css("background-position-x", i + "px");
            if ($(this).hasClass("reverse")) {
                if (lastScrollTop > top) {
                    i += 2;
                } else {
                    i -= 2;
                }
            } else {
                if (lastScrollTop > top) {
                    i -= 2;
                } else {
                    i += 2;
                }
            }

        }
    });
});


$(".player__btns-like").on("click", function () {
    $(this).toggleClass("likes");
});

$(".listen-live").on("click", function () {
    $(".header-mobile__burger").removeClass("open").children("svg").html(`
        <use xlink:href="img/sprites/sprite.svg#burger"></use>
    `);
    $(".header-player").toggleClass("show");
    $(".m-menu").fadeOut();
});

$(".wach-live").on("click", function () {
    $(".header-mobile__burger").removeClass("open").children("svg").html(`
        <use xlink:href="img/sprites/sprite.svg#burger"></use>
    `);
    $(".header").removeClass("showed");
    $(".m-menu").fadeOut();
    $(".video-player").fadeIn();
});

$("#full-screen").on("click", function () {
    $(".video-player").toggleClass("fullscreen");
});

$("#video-close").on("click", function () {
    $(".video-player").fadeOut();
});

$("#player-close").on("click", function () {
    $(".header-player").toggleClass("show");
});

$(".header-toolbar__button button").on("click", function () {
    const containerThis = $(this).closest(".header-toolbar__button");
    const container = $(".header-toolbar__button").not(containerThis);

    container.removeClass("open");

    if (containerThis.hasClass("open")) {
        containerThis.removeClass("open");
    } else {
        containerThis.addClass("open");
    }
});

$(".header-toolbar__button--mail .header-toolbar__menu a").on("click", function (e) {
    e.preventDefault();
    let text = $(this).text();
    $(".popup__feedback-name").html(text);
    $(".popup__feedback").addClass("active");
});

$(".m-menu__feedback").on("click", function () {
    $(".header-mobile__burger").removeClass("open").children("svg").html(`
        <use xlink:href="img/sprites/sprite.svg#burger"></use>
    `);
    $(".m-menu").fadeOut();
    $(".header").removeClass("showed");
    $(".popup__feedback").addClass("active");
});

let lastScrollTop = 0;
$(window).scroll(function () {
    const st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $(".header").addClass("slide-top");
        $(".header-toolbar__button").removeClass("open");
    } else {
        $(".header").removeClass("slide-top");
    }
    lastScrollTop = st;
});

$(".ether-xl__wrap > button").on("click", () => {
    $(".ether-xl__group").fadeToggle();
});

$(document).on("click", function (e) {
    if (!$(e.target).closest(".header-toolbar__button").length) {
        $(".header-toolbar__button").removeClass("open");
    }

    if (!$(e.target).closest(".ether-xl__wrap").length) {
        $(".ether-xl__group").fadeOut();
    }
    e.stopPropagation();
});

$(".header-mobile__burger").on("click", function () {
    if ($(this).hasClass("open")) {
        $(this).children("svg").html(`
            <use xlink:href="img/sprites/sprite.svg#burger"></use>
        `);
    } else {
        $(this).children("svg").html(`
               <use xlink:href="img/sprites/sprite.svg#close"></use>
        `);
    }

    if (screen.width < 992) {
        $(this).toggleClass("open");
        $(".m-menu").fadeToggle();
    } else {
        $(this).toggleClass("open");
        $(".header").toggleClass("showed");
    }
});

