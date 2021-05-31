const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", toggleHeader);


function toggleHeader (ev) {
    if(navbar.classList.contains("open")) {
        navbar.classList.remove("open");
    } else {
        navbar.classList.add("open");
    }
}