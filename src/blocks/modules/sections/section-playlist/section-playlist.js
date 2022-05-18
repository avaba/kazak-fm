import $ from "jquery";

$(".home .playlist__bottom .btn-outline").on("click", function () {
    $(".playlist.home .short").toggleClass("show");
    $(this).text($(this).text() === "Скрыть" ? "Показать еще 5 песен" : "Скрыть");
});

$(".home .playlist__bottom .btn-wave").on("click", function () {
    $(".playlist.home .short").toggleClass("show");
    $(this).text($(this).text() === "Скрыть" ? "Показать больше" : "Скрыть");
});