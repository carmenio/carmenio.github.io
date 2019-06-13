// JavaScript Document
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(x) {
  document.getElementById("myDropdown").classList.toggle("show");
  x.classList.toggle("change");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.container')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
