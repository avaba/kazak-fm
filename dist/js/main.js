/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/advertister/adv-partners.js":
/*!********************************************************!*\
  !*** ./src/blocks/modules/advertister/adv-partners.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! slick-slider */ "./node_modules/slick-slider/slick/slick.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".partners__grid").slick({
  responsive: [{
    breakpoint: 100000,
    settings: 'unslick'
  }, {
    breakpoint: 992,
    settings: {
      infinite: true,
      centerPadding: '30px',
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 676,
    settings: {
      infinite: true,
      centerPadding: '30px',
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});

/***/ }),

/***/ "./src/blocks/modules/advertister/adv-trust.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/advertister/adv-trust.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! slick-slider */ "./node_modules/slick-slider/slick/slick.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".trust__list").slick({
  responsive: [{
    breakpoint: 100000,
    settings: 'unslick'
  }, {
    breakpoint: 992,
    settings: {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 767,
    settings: {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 676,
    settings: {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});

/***/ }),

/***/ "./src/blocks/modules/broadcast/section-live/section-live.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/modules/broadcast/section-live/section-live.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! slick-slider */ "./node_modules/slick-slider/slick/slick.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".live__slider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  vertical: true,
  responsive: [{
    breakpoint: 768,
    settings: "unslick"
  }]
});

/***/ }),

/***/ "./src/blocks/modules/cards/card-about-us/card-about-us.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/cards/card-about-us/card-about-us.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".card-about").on("click", function () {
  var content = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".popup__about .popup__text").html(content);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".popup__about").addClass("active");
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".author__avatar--img").on("click", function () {
  var content = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".author-info").html();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".popup__about .popup__text").html(content);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".popup__about").addClass("active");
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("scroll", function () {
  var offset = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".footer").offset().top;
  var height = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();
  var scroll = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();

  if (offset - height <= scroll) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header").fadeOut(300);
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header").fadeIn(0);
  }
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wow.js */ "./node_modules/wow.js/dist/wow.js");
/* harmony import */ var wow_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wow_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _js_import_jquery_formstyler_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../js/import/jquery.formstyler.min */ "./src/js/import/jquery.formstyler.min.js");
/* harmony import */ var _js_import_jquery_formstyler_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_import_jquery_formstyler_min__WEBPACK_IMPORTED_MODULE_3__);





var volumeSlider = document.getElementById("sound");
var timeSlider = document.getElementById("time");
var timeSliderVideo = document.getElementById("time-video");
nouislider__WEBPACK_IMPORTED_MODULE_1___default().create(volumeSlider, {
  start: [0],
  connect: "lower",
  range: {
    "min": [0],
    "max": [100]
  }
});
nouislider__WEBPACK_IMPORTED_MODULE_1___default().create(timeSlider, {
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
nouislider__WEBPACK_IMPORTED_MODULE_1___default().create(timeSliderVideo, {
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
var Start = document.getElementById("start");
var StartVideo = document.getElementById("start-video");
timeSlider.noUiSlider.on("update", function (values, handle) {
  Start.innerHTML = values[handle];
});
timeSliderVideo.noUiSlider.on("update", function (values, handle) {
  StartVideo.innerHTML = values[handle];
});

function minutesToHHMM(value) {
  value = Math.round(value);
  var min = Math.floor(value / 60);
  var sec = value - min * 60;
  return ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2);
}

function HHMMtoMinutes(value) {
  var split = value.toString().split(":");
  var min = parseInt(split[0]) * 60;
  var sec = parseInt(split[1]);
  return min + sec;
}

new (wow_js__WEBPACK_IMPORTED_MODULE_2___default())().init();
var i = 0;
lastScrollTop = 0;
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("scroll", function () {
  var top = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".separator").each(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).offset().top < jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() + screen.height && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).offset().top > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop()) {
      gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.to(this, 0, {
        backgroundPositionX: i + "px"
      });

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass("reverse")) {
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
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".player__btns-like").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass("likes");
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".listen-live").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header-mobile__burger").removeClass("open").children("svg").html("\n        <use xlink:href=\"img/sprites/sprite.svg#burger\"></use>\n    ");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header-player").toggleClass("show");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".m-menu").fadeOut();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".video-player").removeClass("show");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".video-player").removeClass("fullscreen");
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".wach-live").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header-mobile__burger").removeClass("open").children("svg").html("\n        <use xlink:href=\"img/sprites/sprite.svg#burger\"></use>\n    ");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header").removeClass("showed");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".m-menu").fadeOut();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".video-player").toggleClass("show");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header-player").removeClass("show");
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()("#full-screen").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".video-player").toggleClass("fullscreen");
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()("#video-close").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".video-player").removeClass("show");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".video-player").removeClass("fullscreen");
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()("#player-close").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header-player").toggleClass("show");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".video-player").removeClass("show");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".video-player").removeClass("fullscreen");
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header-toolbar__button button").on("click", function () {
  var containerThis = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".header-toolbar__button");
  var container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header-toolbar__button").not(containerThis);
  container.removeClass("open");

  if (containerThis.hasClass("open")) {
    containerThis.removeClass("open");
  } else {
    containerThis.addClass("open");
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header-toolbar__button--mail .header-toolbar__menu a").on("click", function (e) {
  e.preventDefault();
  var text = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".popup__feedback-name").html(text);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".popup__feedback").addClass("active");
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".m-menu__feedback").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header-mobile__burger").removeClass("open").children("svg").html("\n        <use xlink:href=\"img/sprites/sprite.svg#burger\"></use>\n    ");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".m-menu").fadeOut();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header").removeClass("showed");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".popup__feedback").addClass("active");
});
var lastScrollTop = 0;
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
  var st = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).scrollTop();

  if (st > lastScrollTop) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header").addClass("slide-top");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header-toolbar__button").removeClass("open");
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header").removeClass("slide-top");
  }

  lastScrollTop = st;
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".ether-xl__wrap > button").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".ether-xl__group").fadeToggle();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("click", function (e) {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest(".header-toolbar__button").length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header-toolbar__button").removeClass("open");
  }

  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest(".ether-xl__wrap").length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".ether-xl__group").fadeOut();
  }

  e.stopPropagation();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header-mobile__burger").on("click", function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass("open")) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children("svg").html("\n            <use xlink:href=\"img/sprites/sprite.svg#burger\"></use>\n        ");
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children("svg").html("\n               <use xlink:href=\"img/sprites/sprite.svg#close\"></use>\n        ");
  }

  if (screen.width < 992) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass("open");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".m-menu").fadeToggle();
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass("open");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header").toggleClass("showed");
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()("select").styler();

/***/ }),

/***/ "./src/blocks/modules/home-slider/home-slider.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/home-slider/home-slider.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! slick-slider */ "./node_modules/slick-slider/slick/slick.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".intro").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

/***/ }),

/***/ "./src/blocks/modules/map/map.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/map/map.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".map-radio g:last-child path").on("click", function () {
  var cord = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).position().top;
  console.log(cord);
});

/***/ }),

/***/ "./src/blocks/modules/news/news.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/news/news.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dmuy_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dmuy/datepicker */ "./node_modules/@dmuy/datepicker/dist/duDatepicker.js");
/* harmony import */ var _dmuy_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dmuy_datepicker__WEBPACK_IMPORTED_MODULE_0__);

_dmuy_datepicker__WEBPACK_IMPORTED_MODULE_0___default()("#date", {
  i18n: "ru",
  show: true,
  range: true,
  clearBtn: true,
  rangeDelim: " - "
});

/***/ }),

/***/ "./src/blocks/modules/popup/popup.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/popup/popup.js ***!
  \*******************************************/
/***/ (() => {

var popups = document.querySelectorAll(".popup");
var closes = document.querySelectorAll(".popup__close");
popups.forEach(function (popup) {
  popup.addEventListener("click", function (e) {
    if (!e.target.closest(".popup__body")) {
      e.target.closest(".popup").classList.remove("active");
    }
  });
});
closes.forEach(function (close) {
  close.addEventListener("click", function () {
    document.querySelector(".popup.active").classList.remove("active");
  });
});

/***/ }),

/***/ "./src/blocks/modules/sections/section-action/section-action.js":
/*!**********************************************************************!*\
  !*** ./src/blocks/modules/sections/section-action/section-action.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! slick-slider */ "./node_modules/slick-slider/slick/slick.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".action__slider").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1081,
    settings: {
      slidesToShow: 1
    }
  }]
});

/***/ }),

/***/ "./src/blocks/modules/sections/section-guest/section-guest.js":
/*!********************************************************************!*\
  !*** ./src/blocks/modules/sections/section-guest/section-guest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! slick-slider */ "./node_modules/slick-slider/slick/slick.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".guest-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

/***/ }),

/***/ "./src/blocks/modules/sections/section-news/section-news.js":
/*!******************************************************************!*\
  !*** ./src/blocks/modules/sections/section-news/section-news.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! slick-slider */ "./node_modules/slick-slider/slick/slick.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".news-slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 960,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 650,
    settings: {
      slidesToShow: 1
    }
  }]
});

/***/ }),

/***/ "./src/blocks/modules/sections/section-playlist/section-playlist.js":
/*!**************************************************************************!*\
  !*** ./src/blocks/modules/sections/section-playlist/section-playlist.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".home .playlist__bottom .btn-outline").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".playlist.home .short").toggleClass("show");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text() === "Скрыть" ? "Показать еще 5 песен" : "Скрыть");
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".home .playlist__bottom .btn-wave").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".playlist.home .short").toggleClass("show");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text() === "Скрыть" ? "Показать больше" : "Скрыть");
});

/***/ }),

/***/ "./src/blocks/modules/sections/section-release/section-release.js":
/*!************************************************************************!*\
  !*** ./src/blocks/modules/sections/section-release/section-release.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! slick-slider */ "./node_modules/slick-slider/slick/slick.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".release__slider").slick({
  infinite: true,
  variableWidth: true,
  slidesToShow: 1,
  centerMode: true,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 700,
    settings: {
      centerPadding: '30px',
      variableWidth: false,
      centerMode: false
    }
  }]
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/jquery.formstyler.min.js":
/*!************************************************!*\
  !*** ./src/js/import/jquery.formstyler.min.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/* jQuery Form Styler v2.0.2 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
!function (e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (e) {
  "use strict";

  function t(t, s) {
    this.element = t, this.options = e.extend({}, l, s);
    var i = this.options.locale;
    void 0 !== this.options.locales[i] && e.extend(this.options, this.options.locales[i]), this.init();
  }

  function s(t) {
    if (!e(t.target).parents().hasClass("jq-selectbox") && "OPTION" != t.target.nodeName && e("div.jq-selectbox.opened").length) {
      var s = e("div.jq-selectbox.opened"),
          l = e("div.jq-selectbox__search input", s),
          o = e("div.jq-selectbox__dropdown", s);
      s.find("select").data("_" + i).options.onSelectClosed.call(s), l.length && l.val("").keyup(), o.hide().find("li.sel").addClass("selected"), s.removeClass("focused opened dropup dropdown");
    }
  }

  var i = "styler",
      l = {
    idSuffix: "-styler",
    filePlaceholder: "Файл не выбран",
    fileBrowse: "Обзор...",
    fileNumber: "Выбрано файлов: %s",
    selectPlaceholder: "Выберите...",
    selectSearch: !1,
    selectSearchLimit: 10,
    selectSearchNotFound: "Совпадений не найдено",
    selectSearchPlaceholder: "Поиск...",
    selectVisibleOptions: 0,
    selectSmartPositioning: !0,
    locale: "ru",
    locales: {
      en: {
        filePlaceholder: "No file selected",
        fileBrowse: "Browse...",
        fileNumber: "Selected files: %s",
        selectPlaceholder: "Select...",
        selectSearchNotFound: "No matches found",
        selectSearchPlaceholder: "Search..."
      }
    },
    onSelectOpened: function onSelectOpened() {},
    onSelectClosed: function onSelectClosed() {},
    onFormStyled: function onFormStyled() {}
  };
  t.prototype = {
    init: function init() {
      function t() {
        void 0 !== i.attr("id") && "" !== i.attr("id") && (this.id = i.attr("id") + l.idSuffix), this.title = i.attr("title"), this.classes = i.attr("class"), this.data = i.data();
      }

      var i = e(this.element),
          l = this.options,
          o = !(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/(Windows\sPhone)/i)),
          a = !(!navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Windows\sPhone)/i));

      if (i.is(":checkbox")) {
        var d = function d() {
          var s = new t(),
              l = e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({
            id: s.id,
            title: s.title
          }).addClass(s.classes).data(s.data);
          i.after(l).prependTo(l), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), l.click(function (e) {
            e.preventDefault(), i.triggerHandler("click"), l.is(".disabled") || (i.is(":checked") ? (i.prop("checked", !1), l.removeClass("checked")) : (i.prop("checked", !0), l.addClass("checked")), i.focus().change());
          }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function (t) {
            e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault());
          }), i.on("change.styler", function () {
            i.is(":checked") ? l.addClass("checked") : l.removeClass("checked");
          }).on("keydown.styler", function (e) {
            32 == e.which && l.click();
          }).on("focus.styler", function () {
            l.is(".disabled") || l.addClass("focused");
          }).on("blur.styler", function () {
            l.removeClass("focused");
          });
        };

        d(), i.on("refresh", function () {
          i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), d();
        });
      } else if (i.is(":radio")) {
        var r = function r() {
          var s = new t(),
              l = e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({
            id: s.id,
            title: s.title
          }).addClass(s.classes).data(s.data);
          i.after(l).prependTo(l), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), e.fn.commonParents = function () {
            var t = this;
            return t.first().parents().filter(function () {
              return e(this).find(t).length === t.length;
            });
          }, e.fn.commonParent = function () {
            return e(this).commonParents().first();
          }, l.click(function (t) {
            if (t.preventDefault(), i.triggerHandler("click"), !l.is(".disabled")) {
              var s = e('input[name="' + i.attr("name") + '"]');
              s.commonParent().find(s).prop("checked", !1).parent().removeClass("checked"), i.prop("checked", !0).parent().addClass("checked"), i.focus().change();
            }
          }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function (t) {
            e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault());
          }), i.on("change.styler", function () {
            i.parent().addClass("checked");
          }).on("focus.styler", function () {
            l.is(".disabled") || l.addClass("focused");
          }).on("blur.styler", function () {
            l.removeClass("focused");
          });
        };

        r(), i.on("refresh", function () {
          i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), r();
        });
      } else if (i.is(":file")) {
        var c = function c() {
          var s = new t(),
              o = i.data("placeholder");
          void 0 === o && (o = l.filePlaceholder);
          var a = i.data("browse");
          void 0 !== a && "" !== a || (a = l.fileBrowse);
          var d = e('<div class="jq-file"><div class="jq-file__name">' + o + '</div><div class="jq-file__browse">' + a + "</div></div>").attr({
            id: s.id,
            title: s.title
          }).addClass(s.classes).data(s.data);
          i.after(d).appendTo(d), i.is(":disabled") && d.addClass("disabled");
          var r = i.val(),
              c = e("div.jq-file__name", d);
          r && c.text(r.replace(/.+[\\\/]/, "")), i.on("change.styler", function () {
            var e = i.val();

            if (i.is("[multiple]")) {
              e = "";
              var t = i[0].files.length;

              if (t > 0) {
                var s = i.data("number");
                void 0 === s && (s = l.fileNumber), s = s.replace("%s", t), e = s;
              }
            }

            c.text(e.replace(/.+[\\\/]/, "")), "" === e ? (c.text(o), d.removeClass("changed")) : d.addClass("changed");
          }).on("focus.styler", function () {
            d.addClass("focused");
          }).on("blur.styler", function () {
            d.removeClass("focused");
          }).on("click.styler", function () {
            d.removeClass("focused");
          });
        };

        c(), i.on("refresh", function () {
          i.off(".styler").parent().before(i).remove(), c();
        });
      } else if (i.is('input[type="number"]')) {
        var n = function n() {
          var s = new t(),
              l = e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({
            id: s.id,
            title: s.title
          }).addClass(s.classes).data(s.data);
          i.after(l).prependTo(l).wrap('<div class="jq-number__field"></div>'), i.is(":disabled") && l.addClass("disabled");
          var o,
              a,
              d,
              r = null,
              c = null;
          void 0 !== i.attr("min") && (o = i.attr("min")), void 0 !== i.attr("max") && (a = i.attr("max")), d = void 0 !== i.attr("step") && e.isNumeric(i.attr("step")) ? Number(i.attr("step")) : Number(1);

          var n = function n(t) {
            var s,
                l = i.val();
            e.isNumeric(l) || (l = 0, i.val("0")), t.is(".minus") ? s = Number(l) - d : t.is(".plus") && (s = Number(l) + d);
            var r = (d.toString().split(".")[1] || []).length;

            if (r > 0) {
              for (var c = "1"; c.length <= r;) {
                c += "0";
              }

              s = Math.round(s * c) / c;
            }

            e.isNumeric(o) && e.isNumeric(a) ? s >= o && s <= a && i.val(s) : e.isNumeric(o) && !e.isNumeric(a) ? s >= o && i.val(s) : !e.isNumeric(o) && e.isNumeric(a) ? s <= a && i.val(s) : i.val(s);
          };

          l.is(".disabled") || (l.on("mousedown", "div.jq-number__spin", function () {
            var t = e(this);
            n(t), r = setTimeout(function () {
              c = setInterval(function () {
                n(t);
              }, 40);
            }, 350);
          }).on("mouseup mouseout", "div.jq-number__spin", function () {
            clearTimeout(r), clearInterval(c);
          }).on("mouseup", "div.jq-number__spin", function () {
            i.change().trigger("input");
          }), i.on("focus.styler", function () {
            l.addClass("focused");
          }).on("blur.styler", function () {
            l.removeClass("focused");
          }));
        };

        n(), i.on("refresh", function () {
          i.off(".styler").closest(".jq-number").before(i).remove(), n();
        });
      } else if (i.is("select")) {
        var f = function f() {
          function d(e) {
            var t = e.prop("scrollHeight") - e.outerHeight(),
                s = null,
                i = null;
            e.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function (l) {
              s = l.originalEvent.detail < 0 || l.originalEvent.wheelDelta > 0 ? 1 : -1, ((i = e.scrollTop()) >= t && s < 0 || i <= 0 && s > 0) && (l.stopPropagation(), l.preventDefault());
            });
          }

          function r() {
            for (var e = 0; e < c.length; e++) {
              var t = c.eq(e),
                  s = "",
                  i = "",
                  o = "",
                  a = "",
                  d = "",
                  r = "",
                  f = "",
                  h = "",
                  u = "";
              t.prop("selected") && (i = "selected sel"), t.is(":disabled") && (i = "disabled"), t.is(":selected:disabled") && (i = "selected sel disabled"), void 0 !== t.attr("id") && "" !== t.attr("id") && (a = ' id="' + t.attr("id") + l.idSuffix + '"'), void 0 !== t.attr("title") && "" !== c.attr("title") && (d = ' title="' + t.attr("title") + '"'), void 0 !== t.attr("class") && (f = " " + t.attr("class"), u = ' data-jqfs-class="' + t.attr("class") + '"');
              var p = t.data();

              for (var v in p) {
                "" !== p[v] && (r += " data-" + v + '="' + p[v] + '"');
              }

              i + f !== "" && (o = ' class="' + i + f + '"'), s = "<li" + u + r + o + d + a + ">" + t.html() + "</li>", t.parent().is("optgroup") && (void 0 !== t.parent().attr("class") && (h = " " + t.parent().attr("class")), s = "<li" + u + r + ' class="' + i + f + " option" + h + '"' + d + a + ">" + t.html() + "</li>", t.is(":first-child") && (s = '<li class="optgroup' + h + '">' + t.parent().attr("label") + "</li>" + s)), n += s;
            }
          }

          var c = e("option", i),
              n = "";

          if (i.is("[multiple]")) {
            if (a || o) return;
            !function () {
              var s = new t(),
                  l = e('<div class="jq-select-multiple jqselect"></div>').attr({
                id: s.id,
                title: s.title
              }).addClass(s.classes).data(s.data);
              i.after(l), r(), l.append("<ul>" + n + "</ul>");
              var o = e("ul", l),
                  a = e("li", l),
                  f = i.attr("size"),
                  h = o.outerHeight(),
                  u = a.outerHeight();
              void 0 !== f && f > 0 ? o.css({
                height: u * f
              }) : o.css({
                height: 4 * u
              }), h > l.height() && (o.css("overflowY", "scroll"), d(o), a.filter(".selected").length && o.scrollTop(o.scrollTop() + a.filter(".selected").position().top)), i.prependTo(l), i.is(":disabled") ? (l.addClass("disabled"), c.each(function () {
                e(this).is(":selected") && a.eq(e(this).index()).addClass("selected");
              })) : (a.filter(":not(.disabled):not(.optgroup)").click(function (t) {
                i.focus();
                var s = e(this);

                if (t.ctrlKey || t.metaKey || s.addClass("selected"), t.shiftKey || s.addClass("first"), t.ctrlKey || t.metaKey || t.shiftKey || s.siblings().removeClass("selected first"), (t.ctrlKey || t.metaKey) && (s.is(".selected") ? s.removeClass("selected first") : s.addClass("selected first"), s.siblings().removeClass("first")), t.shiftKey) {
                  var l = !1,
                      o = !1;
                  s.siblings().removeClass("selected").siblings(".first").addClass("selected"), s.prevAll().each(function () {
                    e(this).is(".first") && (l = !0);
                  }), s.nextAll().each(function () {
                    e(this).is(".first") && (o = !0);
                  }), l && s.prevAll().each(function () {
                    if (e(this).is(".selected")) return !1;
                    e(this).not(".disabled, .optgroup").addClass("selected");
                  }), o && s.nextAll().each(function () {
                    if (e(this).is(".selected")) return !1;
                    e(this).not(".disabled, .optgroup").addClass("selected");
                  }), 1 == a.filter(".selected").length && s.addClass("first");
                }

                c.prop("selected", !1), a.filter(".selected").each(function () {
                  var t = e(this),
                      s = t.index();
                  t.is(".option") && (s -= t.prevAll(".optgroup").length), c.eq(s).prop("selected", !0);
                }), i.change();
              }), c.each(function (t) {
                e(this).data("optionIndex", t);
              }), i.on("change.styler", function () {
                a.removeClass("selected");
                var t = [];
                c.filter(":selected").each(function () {
                  t.push(e(this).data("optionIndex"));
                }), a.not(".optgroup").filter(function (s) {
                  return e.inArray(s, t) > -1;
                }).addClass("selected");
              }).on("focus.styler", function () {
                l.addClass("focused");
              }).on("blur.styler", function () {
                l.removeClass("focused");
              }), h > l.height() && i.on("keydown.styler", function (e) {
                38 != e.which && 37 != e.which && 33 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected").position().top - u), 40 != e.which && 39 != e.which && 34 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected:last").position().top - o.innerHeight() + 2 * u);
              }));
            }();
          } else !function () {
            var a = new t(),
                f = "",
                h = i.data("placeholder"),
                u = i.data("search"),
                p = i.data("search-limit"),
                v = i.data("search-not-found"),
                m = i.data("search-placeholder"),
                g = i.data("smart-positioning");
            void 0 === h && (h = l.selectPlaceholder), void 0 !== u && "" !== u || (u = l.selectSearch), void 0 !== p && "" !== p || (p = l.selectSearchLimit), void 0 !== v && "" !== v || (v = l.selectSearchNotFound), void 0 === m && (m = l.selectSearchPlaceholder), void 0 !== g && "" !== g || (g = l.selectSmartPositioning);
            var b = e('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').attr({
              id: a.id,
              title: a.title
            }).addClass(a.classes).data(a.data);
            i.after(b).prependTo(b);
            var C = b.css("z-index");
            C = C > 0 ? C : 1;
            var x = e("div.jq-selectbox__select", b),
                y = e("div.jq-selectbox__select-text", b),
                w = c.filter(":selected");
            r(), u && (f = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + m + '"></div><div class="jq-selectbox__not-found">' + v + "</div>");
            var q = e('<div class="jq-selectbox__dropdown">' + f + "<ul>" + n + "</ul></div>");
            b.append(q);

            var _ = e("ul", q),
                j = e("li", q),
                k = e("input", q),
                S = e("div.jq-selectbox__not-found", q).hide();

            j.length < p && k.parent().hide(), "" === c.first().text() && c.first().is(":selected") && !1 !== h ? y.text(h).addClass("placeholder") : y.text(w.text());
            var T = 0,
                N = 0;
            if (j.css({
              display: "inline-block"
            }), j.each(function () {
              var t = e(this);
              t.innerWidth() > T && (T = t.innerWidth(), N = t.width());
            }), j.css({
              display: ""
            }), y.is(".placeholder") && y.width() > T) y.width(y.width());else {
              var P = b.clone().appendTo("body").width("auto"),
                  H = P.outerWidth();
              P.remove(), H == b.outerWidth() && y.width(N);
            }
            T > b.width() && q.width(T), "" === c.first().text() && "" !== i.data("placeholder") && j.first().hide();

            var A = b.outerHeight(!0),
                D = k.parent().outerHeight(!0) || 0,
                I = _.css("max-height"),
                K = j.filter(".selected");

            if (K.length < 1 && j.first().addClass("selected sel"), void 0 === j.data("li-height")) {
              var O = j.outerHeight();
              !1 !== h && (O = j.eq(1).outerHeight()), j.data("li-height", O);
            }

            var M = q.css("top");
            if ("auto" == q.css("left") && q.css({
              left: 0
            }), "auto" == q.css("top") && (q.css({
              top: A
            }), M = A), q.hide(), K.length && (c.first().text() != w.text() && b.addClass("changed"), b.data("jqfs-class", K.data("jqfs-class")), b.addClass(K.data("jqfs-class"))), i.is(":disabled")) return b.addClass("disabled"), !1;
            x.click(function () {
              if (e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")), i.focus(), !o) {
                var t = e(window),
                    s = j.data("li-height"),
                    a = b.offset().top,
                    r = t.height() - A - (a - t.scrollTop()),
                    n = i.data("visible-options");
                void 0 !== n && "" !== n || (n = l.selectVisibleOptions);
                var f = 5 * s,
                    h = s * n;
                n > 0 && n < 6 && (f = h), 0 === n && (h = "auto");

                var u = function u() {
                  q.height("auto").css({
                    bottom: "auto",
                    top: M
                  });

                  var e = function e() {
                    _.css("max-height", Math.floor((r - 20 - D) / s) * s);
                  };

                  e(), _.css("max-height", h), "none" != I && _.css("max-height", I), r < q.outerHeight() + 20 && e();
                };

                !0 === g || 1 === g ? r > f + D + 20 ? (u(), b.removeClass("dropup").addClass("dropdown")) : (function () {
                  q.height("auto").css({
                    top: "auto",
                    bottom: M
                  });

                  var e = function e() {
                    _.css("max-height", Math.floor((a - t.scrollTop() - 20 - D) / s) * s);
                  };

                  e(), _.css("max-height", h), "none" != I && _.css("max-height", I), a - t.scrollTop() - 20 < q.outerHeight() + 20 && e();
                }(), b.removeClass("dropdown").addClass("dropup")) : !1 === g || 0 === g ? r > f + D + 20 && (u(), b.removeClass("dropup").addClass("dropdown")) : (q.height("auto").css({
                  bottom: "auto",
                  top: M
                }), _.css("max-height", h), "none" != I && _.css("max-height", I)), b.offset().left + q.outerWidth() > t.width() && q.css({
                  left: "auto",
                  right: 0
                }), e("div.jqselect").css({
                  zIndex: C - 1
                }).removeClass("opened"), b.css({
                  zIndex: C
                }), q.is(":hidden") ? (e("div.jq-selectbox__dropdown:visible").hide(), q.show(), b.addClass("opened focused"), l.onSelectOpened.call(b)) : (q.hide(), b.removeClass("opened dropup dropdown"), e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(b)), k.length && (k.val("").keyup(), S.hide(), k.keyup(function () {
                  var t = e(this).val();
                  j.each(function () {
                    e(this).html().match(new RegExp(".*?" + t + ".*?", "i")) ? e(this).show() : e(this).hide();
                  }), "" === c.first().text() && "" !== i.data("placeholder") && j.first().hide(), j.filter(":visible").length < 1 ? S.show() : S.hide();
                })), j.filter(".selected").length && ("" === i.val() ? _.scrollTop(0) : (_.innerHeight() / s % 2 != 0 && (s /= 2), _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() / 2 + s))), d(_);
              }
            }), j.hover(function () {
              e(this).siblings().removeClass("selected");
            });
            var W = j.filter(".selected").text();
            j.filter(":not(.disabled):not(.optgroup)").click(function () {
              i.focus();
              var t = e(this),
                  s = t.text();

              if (!t.is(".selected")) {
                var o = t.index();
                o -= t.prevAll(".optgroup").length, t.addClass("selected sel").siblings().removeClass("selected sel"), c.prop("selected", !1).eq(o).prop("selected", !0), W = s, y.text(s), b.data("jqfs-class") && b.removeClass(b.data("jqfs-class")), b.data("jqfs-class", t.data("jqfs-class")), b.addClass(t.data("jqfs-class")), i.change();
              }

              q.hide(), b.removeClass("opened dropup dropdown"), l.onSelectClosed.call(b);
            }), q.mouseout(function () {
              e("li.sel", q).addClass("selected");
            }), i.on("change.styler", function () {
              y.text(c.filter(":selected").text()).removeClass("placeholder"), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), c.first().text() != j.filter(".selected").text() ? b.addClass("changed") : b.removeClass("changed");
            }).on("focus.styler", function () {
              b.addClass("focused"), e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide();
            }).on("blur.styler", function () {
              b.removeClass("focused");
            }).on("keydown.styler keyup.styler", function (e) {
              var t = j.data("li-height");
              "" === i.val() ? y.text(h).addClass("placeholder") : y.text(c.filter(":selected").text()), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), 38 != e.which && 37 != e.which && 33 != e.which && 36 != e.which || ("" === i.val() ? _.scrollTop(0) : _.scrollTop(_.scrollTop() + j.filter(".selected").position().top)), 40 != e.which && 39 != e.which && 34 != e.which && 35 != e.which || _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() + t), 13 == e.which && (e.preventDefault(), q.hide(), b.removeClass("opened dropup dropdown"), l.onSelectClosed.call(b));
            }).on("keydown.styler", function (e) {
              32 == e.which && (e.preventDefault(), x.click());
            }), s.registered || (e(document).on("click", s), s.registered = !0);
          }();
        };

        f(), i.on("refresh", function () {
          i.off(".styler").parent().before(i).remove(), f();
        });
      } else i.is(":reset") && i.on("click", function () {
        setTimeout(function () {
          i.closest("form").find("input, select").trigger("refresh");
        }, 1);
      });
    },
    destroy: function destroy() {
      var t = e(this.element);
      t.is(":checkbox") || t.is(":radio") ? (t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove(), t.closest("label").add('label[for="' + t.attr("id") + '"]').off(".styler")) : t.is('input[type="number"]') ? t.removeData("_" + i).off(".styler refresh").closest(".jq-number").before(t).remove() : (t.is(":file") || t.is("select")) && t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove();
    }
  }, e.fn[i] = function (s) {
    var l = arguments;
    if (void 0 === s || "object" == _typeof(s)) return this.each(function () {
      e.data(this, "_" + i) || e.data(this, "_" + i, new t(this, s));
    }).promise().done(function () {
      var t = e(this[0]).data("_" + i);
      t && t.options.onFormStyled.call();
    }), this;

    if ("string" == typeof s && "_" !== s[0] && "init" !== s) {
      var o;
      return this.each(function () {
        var a = e.data(this, "_" + i);
        a instanceof t && "function" == typeof a[s] && (o = a[s].apply(a, Array.prototype.slice.call(l, 1)));
      }), void 0 !== o ? o : this;
    }
  }, s.registered = !1;
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_home_slider_home_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/home-slider/home-slider */ "./src/blocks/modules/home-slider/home-slider.js");
/* harmony import */ var _modules_sections_section_guest_section_guest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/sections/section-guest/section-guest */ "./src/blocks/modules/sections/section-guest/section-guest.js");
/* harmony import */ var _modules_sections_section_news_section_news__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/sections/section-news/section-news */ "./src/blocks/modules/sections/section-news/section-news.js");
/* harmony import */ var _modules_sections_section_action_section_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/sections/section-action/section-action */ "./src/blocks/modules/sections/section-action/section-action.js");
/* harmony import */ var _modules_sections_section_playlist_section_playlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/sections/section-playlist/section-playlist */ "./src/blocks/modules/sections/section-playlist/section-playlist.js");
/* harmony import */ var _modules_broadcast_section_live_section_live__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/broadcast/section-live/section-live */ "./src/blocks/modules/broadcast/section-live/section-live.js");
/* harmony import */ var _modules_sections_section_release_section_release__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/sections/section-release/section-release */ "./src/blocks/modules/sections/section-release/section-release.js");
/* harmony import */ var _modules_cards_card_about_us_card_about_us__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/cards/card-about-us/card-about-us */ "./src/blocks/modules/cards/card-about-us/card-about-us.js");
/* harmony import */ var _modules_popup_popup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/popup/popup */ "./src/blocks/modules/popup/popup.js");
/* harmony import */ var _modules_popup_popup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_popup_popup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/map/map */ "./src/blocks/modules/map/map.js");
/* harmony import */ var _modules_news_news__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/news/news */ "./src/blocks/modules/news/news.js");
/* harmony import */ var _modules_advertister_adv_partners__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/advertister/adv-partners */ "./src/blocks/modules/advertister/adv-partners.js");
/* harmony import */ var _modules_advertister_adv_trust__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/advertister/adv-trust */ "./src/blocks/modules/advertister/adv-trust.js");
















/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map