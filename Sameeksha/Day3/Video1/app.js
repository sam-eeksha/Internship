const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const Hlink=document.querySelectorAll('#hlink')
const body=document.querySelector("body")
const moon = document.querySelector("#moon")


hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
})

Hlink.forEach(link=>{
    link.addEventListener("click", ()=>{
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })
})

moon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
    
})