// Add active class to the current button (highlight it)
var header = document.getElementById("navbarResponsive");
var links = header.getElementsByClassName("nav-link");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", controlActive);
}

function controlActive() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
}