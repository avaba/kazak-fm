import $ from "jquery";

$(".map-radio g:last-child path").on("click", function () {
    let cord = $(this).position().top;
    console.log(cord);
});