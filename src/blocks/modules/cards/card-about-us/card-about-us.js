import $ from "jquery";

$(".card-about").on("click", function () {
    let content = $(this).html();
    $(".popup__about .popup__text").html(content);
    $(".popup__about").addClass("active");
});

$(".author__avatar--img").on("click", function () {
    let content = $(this).find(".author-info").html();
    $(".popup__about .popup__text").html(content);
    $(".popup__about").addClass("active");
});