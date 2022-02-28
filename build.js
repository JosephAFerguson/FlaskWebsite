var nav = document.querySelectorAll(".navbar");
for(var i = 0; i < nav.length; i++){
    nav[i].style.visibility = "hidden";
}
var count = 0;
function menubutton(){
    if(count === 0){
        for(var i = 0; i < nav.length; i++){
            nav[i].style.visibility = "visible";
        }
        count = count + 1;
    } else {
        for(var i = 0; i < nav.length; i++){
            nav[i].style.visibility = "hidden";
        }
        count = count - 1;
    }
}
function createEventListeners(){
    document.getElementById("1").addEventListener("click", menubutton, false);
    document.getElementById("2").addEventListener("click", menubutton, false);
    document.getElementById("3").addEventListener("click", menubutton, false);
}
window.addEventListener("load", createEventListeners, false);
