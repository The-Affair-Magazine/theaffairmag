toggleNav = function() {  
  plainNavLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
  boldNavLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link-bold"))

  navLinks = plainNavLinks.concat(boldNavLinks);
  document.getElementById("toggle-btn").classList.toggle("active");

  for(i = 0; i < navLinks.length; i++) {
    if(navLinks[i].style.display !== "block") {
      navLinks[i].style.display = "block";
      navLinks[i].classList.add("animate__animated", "animate__fadeIn");
      console.log("Nav links displayed")
    }
    else {
      navLinks[i].style.display = "none";
    }    
  }  
}

toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener("click", toggleNav);

onScrollNav = function() {
  navHeight = document.querySelector(".nav-container").clientHeight;
  navContainer = document.querySelector(".nav-container");

  if (window.pageYOffset >= navHeight) {
    navContainer.classList.add("scrolled");
    console.log("Nav goes opaque");
  }
  else {
    navContainer.classList.remove("scrolled")
  }
}
window.addEventListener("scroll", onScrollNav);