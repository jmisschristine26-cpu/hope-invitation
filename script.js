document.addEventListener("DOMContentLoaded", function () {

    const openButton = document.getElementById("openBook");
    const storybook = document.getElementById("storybook");

    openButton.addEventListener("click", function () {

        alert(`Welcome!

We are delighted to invite you to celebrate Hope Jelizabeth Azaniah M. Frias' Christening and 1st Birthday.

This is only the beginning of her storybook... 💖`);

        storybook.classList.remove("hidden");

        storybook.scrollIntoView({
            behavior: "smooth"
        });

    });

});
