import $ from "jquery";

$('.map-radio g:last-child path').on('click', function () {
    let coord = $(this).position().top;
    console.log(coord);
})