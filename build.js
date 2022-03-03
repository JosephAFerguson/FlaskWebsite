var nav = document.querySelectorAll(".navbar");
var count = 0;
for(var i = 0; i < nav.length; i++){
    nav[i].style.visibility = "hidden";
}
function menu(x){
    x.classList.toggle('change');
    visi();
}
function visi(){
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