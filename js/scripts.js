function menuToggle() {
  var x = document.getElementById("mynavtoggle");
  var isMobileBreakpoint = window.innerWidth <= 641
 
  if (x.className === "navtoggle" && isMobileBreakpoint) {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}
