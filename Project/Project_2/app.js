let burger = document.querySelector(".fa-bars");
let links = document.querySelector(".nav");

burger.addEventListener('click',()=> {
  links.classList.toggle("nav-show"); 
})