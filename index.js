function storeInfo(){
    var name = document.getElementById("name").value
    localStorage.setItem("name", name);
    document.cookie = "name=" + name;
}
function handleSubmit(evt){
	if(evt.preventDefault){
		evt.preventDefault(); // prevent form from submitting
	} else{
		evt.returnValue = false; //prevent form from submitting in IE8
	}
	storeInfo();
    document.getElementsByTagName("form")[0].submit();
}
function createEventListeners(){
    var form = document.getElementsByTagName("form")[0];
    if(form.addEventListener){
		form.addEventListener("submit", handleSubmit, false);
	} else if(form.attachEvent){
		form.attachEvent("onsubmit", handleSubmit);
	}
}
function setUpPage(){
    createEventListeners();
}
if(window.addEventListener){
	window.addEventListener("load", setUpPage, false);
} else if(window.attachEvent){
	window.attachEvent("onload", setUpPage);
}