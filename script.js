const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");

openBtn.addEventListener("click", function () {

    welcome.classList.remove("hidden");

    openBtn.style.display = "none";

    welcome.scrollIntoView({
        behavior: "smooth"
    });

});
