document.addEventListener("DOMContentLoaded", () => {

    const cover = document.querySelector(".cover");
    const storybook = document.getElementById("storybook");
    const openBook = document.getElementById("openBook");

    const pages = document.querySelectorAll(".story-card");
    const prevBtn = document.getElementById("prevPage");
    const nextBtn = document.getElementById("nextPage");

    let currentPage = 0;

    function showPage(index){

    pages.forEach((page)=>{
        page.classList.remove("active");
        page.style.opacity = "0";
    });

    pages[index].classList.add("active");

    setTimeout(()=>{
        pages[index].style.opacity = "1";
    },50);

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === pages.length - 1;

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

    showPage(currentPage);

    openBook.addEventListener("click", () => {

        cover.style.opacity = "0";

        setTimeout(() => {

            cover.style.display = "none";
            storybook.classList.remove("hidden");

            showPage(currentPage);

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        },600);

    });

    nextBtn.addEventListener("click", ()=>{

        if(currentPage < pages.length - 1){
            currentPage++;
            showPage(currentPage);
        }

    });

    prevBtn.addEventListener("click", ()=>{

        if(currentPage > 0){
            currentPage--;
            showPage(currentPage);
        }

    });

});
