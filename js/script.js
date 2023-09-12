const menu = document.querySelector('.menu');
const loginRegister = document.querySelector('.login_register');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener("click", () => {
    menu.classList.toggle("open--menu");
    loginRegister.classList.toggle("open--login_register");
    hamburger.classList.toggle("hamburger--open--menu")
    // menu.classList.remove("menu_icon");
})