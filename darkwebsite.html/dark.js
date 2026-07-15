let hero = document.getElementById("hero");
let logo = document.getElementById("logo");
let h1dark = document.getElementById("h1dark")
let pdark = document.getElementById("pdark")
let btnprimary = document.getElementById("btn-primarydarkMode")
let btnsecondary = document.getElementById("btn-secondarydarkMode")
let button = document.getElementById("toggleBtn");
button.addEventListener("click",()=>{
    button.classList.toggle("tooglebtn")
    hero.classList.toggle("heroDark");
    logo.classList.toggle("logoDark");
    h1dark.classList.toggle("h1darkMode")
    pdark.classList.toggle("pdarkMode")
    btnprimary.classList.toggle("btn-primarydark")
    btnsecondary.classList.toggle("btn-secondarydark")
})