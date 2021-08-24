let button = document.getElementsByClassName("button");
let table = document.getElementsByClassName("table");


button[0].addEventListener("click", function(){
	table[0].style.bottom = "20px";
})

button[1].addEventListener("click", function(){
	table[0].style.bottom = "-20px";
})