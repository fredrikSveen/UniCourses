// Get the pop-up
var popUp = document.getElementById("myPopUp");

// Get the button that opens the pop-up
var btn = document.getElementById("help_btn");

// Get the <span> element that closes the pop-up
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the pop-up 
btn.onclick = function() {
    popUp.style.display = "block";
}

// When the user clicks on <span> (x), close the pop-up
span.onclick = function() {
    popUp.style.display = "none";
}

// When the user clicks anywhere outside of the pop-up, close it
window.onclick = function(event) {
  if (event.target == popUp) {
    popUp.style.display = "none";
  }
}