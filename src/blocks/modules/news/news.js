import $ from "jquery";
import Datepicker from "../../../js/import/datepicker";

new Datepicker("#news-date", {
    inline: true,
    ranged: true,
    separator: " - ",
});

$(".news-filter__date").on("click", function () {
    $(".calendar").addClass("active");
});

$(".calendar, .calendar__close").on("click", function () {
    $(".calendar").removeClass("active");
    $("#date").val("");
    $("#news-date").attr("data-value", "");
});

$(".calendar__content").on("click", function (e) {
    e.stopPropagation();
});



$("#show-news").on("click", function () {
    const value = $("#news-date").attr("data-value");
    $("#date").val(value);
    $(".calendar").removeClass("active");
});