
document.addEventListener("DOMContentLoaded", function () {
    const element = document.querySelector(".loading");
    if (element) {
        element.style.opacity = 0;

        setTimeout(() => element.remove(), 300);
    }
});
