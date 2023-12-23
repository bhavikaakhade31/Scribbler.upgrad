var modal = document.getElementById("modal1");
var btn = document.getElementById("delete");
var btn2 = document.getElementById("delete2");
var btn3 = document.getElementById("delete3");
var btn4 = document.getElementById("delete4");
var btn5 = document.getElementById("delete5");


btn.onclick = function() {
  modal.style.display= "block";
}
btn2.onclick = function() {
  modal.style.display= "block";
}
btn3.onclick = function() {
  modal.style.display= "block";
}
btn4.onclick = function() {
  modal.style.display= "block";
}
btn5.onclick = function() {
  modal.style.display= "block";
}



var span1 = document.getElementsByClassName("close1")[0];

span1.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } 
} 

