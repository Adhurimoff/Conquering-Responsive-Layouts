let hamburgerButton = document.querySelector(".hamburger-menu"); 
let navList = document.querySelector(".navigation");

hamburgerButton.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
        navList.classList.toggle("show");
    }, 100);
})