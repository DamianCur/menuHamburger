const burger = document.querySelector(".burger");
const bars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");
const menu = document.querySelector(".menu");
const wrapper = document.querySelector(".wrapper");


burger.addEventListener("click" , function(){
    bars.classList.toggle("show")
    times.classList.toggle("show")
    menu.classList.toggle("show")
    wrapper.classList.toggle("show")
})