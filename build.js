var nav = document.querySelectorAll(".navbar");
var count = 0;
$("nav").each(function(i){
    $(this).slideUp(0.1);
});
function visi(){
    if(count == 0){
        $("nav").each(function(i){
            $(this).slideDown();
        });
        $("div div").addClass("change");
        $("div div").removeClass("changeback");
        count = count + 1;
    } else if(count == 1){
        $("nav").each(function(i){
            $(this).slideUp();
        });
        $("div div").addClass("changeback");
        $("div div").removeClass("change");
        count = count - 1;
    }
}
