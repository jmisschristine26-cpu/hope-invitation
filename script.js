document.addEventListener("DOMContentLoaded", function () {

    const openButton = document.getElementById("openBook");
    const storybook = document.getElementById("storybook");

    openButton.addEventListener("click", function () {

        storybook.classList.remove("hidden");

        storybook.scrollIntoView({
            behavior: "smooth"
        });

    });

});
