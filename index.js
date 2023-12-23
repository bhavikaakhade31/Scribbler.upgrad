var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");


// Get the button that opens the modal
var btn = document.getElementById("Sign-up");
var btn2 = document.getElementById("Sign-in");
var btn3 = document.getElementById("create");

var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];





// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display= "block";
}
btn2.onclick = function () {
  modal2.style.display = "block";
}
btn3.onclick = function () {
  modal3.style.display = "block";
}

span1.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  }
  else if (event.target == modal3) {
    modal3.style.display = "none";
  }
} 

function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  // Check if any of the fields is empty
  if (name === '' || email === '') {
      document.getElementById('errorMessage').innerText = 'Please fill out all fields.';
      return false; // Prevent form submission
  }

  // If all fields are filled, proceed with form submission
  return true;
}
