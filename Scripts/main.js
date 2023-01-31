// Navbar Mobile

const nav_list = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener('click', ()=>{
    var visible = nav_list.getAttribute("visible");
    
    if(visible === "false"){
        nav_list.setAttribute("visible", true);
        hamburger.classList.remove("ri-menu-line");
        hamburger.classList.add("ri-close-line");
    } else{
        nav_list.setAttribute("visible", false);
        hamburger.classList.remove("ri-close-line");
        hamburger.classList.add("ri-menu-line");
    }
})

// Détection ordi
if(window.matchMedia("only screen and (min-width: 1024px)").matches === true){
    // on fait une détection d'ordi car one ne veux pas que gsap marche sur les téléphones
    
    //GSAP
    // initialisation timeline gsap
    var tl = gsap.timeline();

    // apparition overlay gauche
    tl.from(".left_border", {x: -400, duration: 1.5})

    // apparition navbar
    tl.from("nav", {x: -100, duration: 0.5}, 0.8)
    tl.to("nav", {opacity: 1, duration: 0.5}, 0.8)

    // apparition titre
    tl.from(".main_title", {x: -50, duration: 0.5}, 1.2)
    tl.to(".main_title", {opacity: 1, duration: 0.5}, 1.2)

    // apparition paragraphe
    tl.from(".main_text", {x: -50, duration: 0.5}, 1.4)
    tl.to(".main_text", {opacity: 1, duration: 0.5}, 1.4)

    // apparition bouton compéténce
    tl.from("#button1", {x: -20, duration: 0.2}, 1.6)
    tl.to("#button1", {opacity: 1, duration: 0.5}, 1.6)

    // apparition compte à rebours engagement
    tl.from(".deadline_container", {x: -25, duration: 0.5}, 1.6)
    tl.to(".deadline_container", {opacity: 1, duration: 0.5}, 1.6)

    // apparition bouton engagement et convention
    tl.from("#button2", {x: -20, duration: 0.5}, 1.8)
    tl.to("#button2", {opacity: 1, duration: 0.5}, 1.8)
};