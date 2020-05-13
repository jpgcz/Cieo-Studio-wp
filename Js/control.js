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

$('a[href*="#"]').click(function(event) {

  var href = $(this.hash);

  if (href.length) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: href.offset().top - 100
      }, 750, function() {
          if (history.pushState) {
              history.pushState(null, null, 'index.html#' + href.attr('id'));
          } else {
              location.hash = href.attr('id');
          }
      });     
  }
});

//SIDEBAR CLOSE
function closeNav() {
  document.getElementById("sidebar").style.left = "-100%";
  document.getElementById("cancel").style.left = "-100px";
  
}

function openNav() {//width: 30vw;
  document.getElementById("sidebar").style.width = "30vw";
  document.getElementById("cancel").style.left = "-100px";
}