document.addEventListener("DOMContentLoaded", () => {

    const cover = document.querySelector(".cover");
    const storybook = document.getElementById("storybook");
    const openBook = document.getElementById("openBook");

    openBook.addEventListener("click", () => {

        cover.style.opacity = "0";

        setTimeout(() => {
            cover.style.display = "none";
            storybook.classList.remove("hidden");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 600);

    });

});
