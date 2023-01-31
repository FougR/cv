// Compte à rebours page engagement
var deadline = new Date("apr 01, 2023 10:00:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var t = deadline - now;
    const compte_rebours = document.getElementById("deadline");

    var days = Math.floor(t / (1000 * 60 * 60 *24));
    var hours = Math.floor((t % (1000 * 60 * 60* 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t %(1000 * 60)) / 1000);

    compte_rebours.innerHTML = days + "<span class='highlighted'>j </span>" + hours + "<span class='highlighted'>h </span>" + minutes + "<span class='highlighted'>m </span>" + seconds + "<span class='highlighted'>s </span>";

    // Si date passé, on affiche un message
    if(t < 0){
        clearInterval(x);
        compte_rebours.innerHTML = "<img src='Images/casque.png' id='casque' alt='Casque de pompier icônes créées par Freepik - Flaticon'> Prêt à décaler !"
    }
}, 1000)