alert("JavaScript is loading!");

document.addEventListener("DOMContentLoaded", function () {

    const openButton = document.getElementById("openBook");
   
    console.log(openButton);

alert(openButton ? "Button found!" : "Button NOT found!");
    
    const storybook = document.getElementById("storybook");

    openButton.addEventListener("click", function () {

        storybook.classList.add("show");

        storybook.scrollIntoView({
            behavior: "smooth"
        });

    });

});

