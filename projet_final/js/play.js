const bouton = document.querySelector(".play");
const animation = document.querySelector(".animation");

animation.addEventListener("animationend", function(){
    animation.classList.remove("animation");
})

bouton.addEventListener("click", function(){
    animation.classList.add("animation");
})