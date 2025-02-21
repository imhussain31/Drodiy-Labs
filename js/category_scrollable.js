document.addEventListener("DOMContentLoaded", function () {
    const categoriesContainer = document.querySelector(".categories");
    const leftBtn = document.querySelector(".categories-container .left-btn");
    const rightBtn = document.querySelector(".categories-container .right-btn");

    leftBtn.addEventListener("click", () => {
        categoriesContainer.scrollBy({
            left: -200, // Adjust scroll distance
            behavior: "smooth"
        });
    });

    rightBtn.addEventListener("click", () => {
        categoriesContainer.scrollBy({
            left: 200, // Adjust scroll distance
            behavior: "smooth"
        });
    });
});