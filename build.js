var nav = document.querySelectorAll(".navbar");
var count = 0;
$("nav").each(function(i){
    this.style.opacity = "0";
});
function visi(){
    if(count == 0){
        $("nav").each(function(i){
            $(this).animate({opacity: "1"}, 'fast');
        });
        $("div div").addClass("change");
        $("div div").removeClass("changeback");
        count = count + 1;
    } else if(count == 1){
        $("nav").each(function(i){
            $(this).animate({opacity: "0"}, 'fast');
        });
        $("div div").addClass("changeback");
        $("div div").removeClass("change");
        count = count - 1;
    }
}
