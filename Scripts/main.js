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
});

// Détection ordi
if(window.matchMedia("only screen and (min-width: 1024px)").matches === true || page === "sdisProjet.html"){
    // Récupération de la page sur laquelle on est
    var page = location.href.split('/').pop('/');
    
    if(page === "portfolio.html"){
        var left_border = document.getElementsByClassName("left_border");
        left_border[0].style.height = "305vh";
    }

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
    tl.from(".section_title", {x: -50, duration: 0.5}, 1.2)
    tl.to(".section_title", {opacity: 1, duration: 0.5}, 1.2)

    // apparition paragraphe
    tl.from(".section_text", {x: -50, duration: 0.5}, 1.4)
    tl.to(".section_text", {opacity: 1, duration: 0.5}, 1.4)

    // apparition bouton compéténce
    tl.from("#button1", {x: -20, duration: 0.2}, 1.6)
    tl.to("#button1", {opacity: 1, duration: 0.5}, 1.6)

    // apparition compte à rebours engagement
    tl.from(".deadline_container", {x: -25, duration: 0.5}, 1.6)
    tl.to(".deadline_container", {opacity: 1, duration: 0.5}, 1.6)

    // apparition bouton engagement et convention
    tl.from("#button2", {x: -20, duration: 0.5}, 1.8)
    tl.to("#button2", {opacity: 1, duration: 0.5}, 1.8)

    //apparition mail
    tl.from("#mail", {x: -20, duration: 0.5}, 1.7)
    tl.to("#mail", {opacity: 1, duration: 0.5}, 1.7)

    //apparition linkedin
    tl.from("#linkedin", {x: -20, duration: 0.5}, 1.8)
    tl.to("#linkedin", {opacity: 1, duration: 0.5}, 1.8)

    //apparition github
    tl.from("#github", {x: -20, duration: 0.5}, 1.9)
    tl.to("#github", {opacity: 1, duration: 0.5}, 1.9)

    //apparition behance
    tl.from("#behance", {x: -20, duration: 0.5}, 2)
    tl.to("#behance", {opacity: 1, duration: 0.5}, 2)

    //apparition dribble
    tl.from("#dribble", {x: -20, duration: 0.5}, 2.1)
    tl.to("#dribbble", {opacity: 1, duration: 0.5}, 2.1)
};