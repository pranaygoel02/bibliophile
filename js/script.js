// Navbar response responsive function
function myFunction() {
    var x = document.getElementById("topNavbar");
    if (x.className === "topNav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }