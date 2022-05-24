let popups = document.querySelectorAll(".popup");
let closes = document.querySelectorAll(".popup__close");

popups.forEach((popup) => {
    popup.addEventListener("click", function (e) {
        if (!e.target.closest(".popup__body")) {
            e.target.closest(".popup").classList.remove("active");
        }
    });
});

closes.forEach((close) => {
    close.addEventListener("click", function () {
        document.querySelector(".popup.active").classList.remove("active");
    });
});