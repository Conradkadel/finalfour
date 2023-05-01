function currentYear() {
    let d = new Date();
    document.getElementById('copyright').innerHTML = d.getFullYear();
}
window.onload = function() {
    currentYear();
}


const primaryNav = document.getElementById("navigation");
const displayButton = document.getElementById("showNavigation");

displayButton.addEventListener("click" , slideMenu);

function slideMenu(){
    let visability = primaryNav.getAttribute("data-visable");

    if(visability === "false"){
        primaryNav.setAttribute("data-visable", "true");
        displayButton.setAttribute("data-visable", "true")

    }
    else{
        primaryNav.setAttribute("data-visable", "false");
        displayButton.setAttribute("data-visable", "false")

    }
}





