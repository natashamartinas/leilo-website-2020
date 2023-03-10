// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var close_button = document.getElementById("close-button");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close_button.onclick = function() {
 	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Get the modal
var modal_mobile = document.getElementById("myModal-mobile");

// Get the button that opens the modal
var btn_mobile = document.getElementById("myBtn-mobile");

// Get the <span> element that closes the modal
var close_button_mobile = document.getElementById("close-button-mobile");

// When the user clicks the button, open the modal 
btn_mobile.onclick = function() {
  console.log('bye');
  modal_mobile.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close_button_mobile.onclick = function() {
 	modal_mobile.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_mobile) {
    modal_mobile.style.display = "none";
  }
}