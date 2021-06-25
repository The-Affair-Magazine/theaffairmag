toggleNav = function() {  
  plainNavLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
  boldNavLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link-bold"))

  navLinks = plainNavLinks.concat(boldNavLinks);
  document.getElementById("toggle-btn").classList.toggle("active");

  for(i = 0; i < navLinks.length; i++) {
    if(navLinks[i].style.display !== "block") {
      navLinks[i].style.display = "block";
      navLinks[i].classList.add("animate__animated", "animate__fadeIn");
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
  navLogo = document.querySelector("#nav-logo img");

  if (window.pageYOffset >= navHeight) {
    navContainer.classList.add("scrolled");
    navLogo.style.maxWidth = "3vw";
  }
  else {
    navContainer.classList.remove("scrolled");
    navLogo.style.maxWidth = "5vw";
  }
}

window.addEventListener("scroll", onScrollNav);

if(document.querySelector(".carousel-container") != null) {

  var scrollMax = 2;
  var scrollMin = 0;
  var carouselLength = 4;
  
  hideCarousel = function() {
    carouselContainer = document.querySelector(".carousel-container");
    carouselCards = document.querySelectorAll(".carousel-container a");
    prevBtn = document.getElementById("prev");
    nextBtn = document.getElementById("next");  
  
    for(i = 0; i < carouselCards.length; i++) {
      if(i > scrollMax) {
        carouselCards[i].style.display = "none";      
      }        
    }
  
    console.log(carouselCards);
    scrollMin++;
    scrollMax++;
    prevBtn.style.color = "#BEBEBE";
    nextBtn.style.color = "var(--teal)";
  }();
  
  scrollCarousel = function() {
    carouselContainer = document.querySelector(".carousel-container");
    carouselCards = document.querySelectorAll(".carousel-container a");
    prevBtn = document.getElementById("prev");
    nextBtn = document.getElementById("next");   
  
    if(scrollMin == 0) {
      if(scrollMax < carouselLength) {
        scrollMin++;
        scrollMax++;
      } 
    }
  
    for(i = 0; i < carouselCards.length; i++) {
      if(i < scrollMin || i > scrollMax) {
         carouselCards[i].style.display = "none";
         console.log("Hide elements");     
      }
      else {
        carouselCards[i].style.display = "block";
        if(carouselCards[i].classList.contains("animate__slideInLeft")) {
          carouselCards[i].classList.remove("animate__slideInLeft");
          carouselCards[i].classList.add("animate__slideInRight");
        }
      }       
    }  
    console.log(`Scroll max: ${scrollMax}, Scroll min: ${scrollMin}`);    
  
    prevBtn.style.color = "var(--teal)";
    if(scrollMax === carouselLength) {
      nextBtn.style.color = "#BEBEBE";
    }
    else {
      nextBtn.style.color = "var(--teal)";
    }
  
    if(scrollMax < carouselLength) {
      scrollMin++;
      scrollMax++;
    }  
  }
  
  reverseCarousel = function() {
    carouselContainer = document.querySelector(".carousel-container");
    carouselCards = document.querySelectorAll(".carousel-container a");
    prevBtn = document.getElementById("prev");
    nextBtn = document.getElementById("next");
  
    if(scrollMin > 0) {
      scrollMin--;
      scrollMax--;
    } 
  
    for(i = 0; i < carouselCards.length; i++) {
      if(i < scrollMin || i > scrollMax) {
         carouselCards[i].style.display = "none";
         console.log("Hide elements");     
      }
      else {
        carouselCards[i].style.display = "block";
  
        if(carouselCards[i].classList.contains("animate__slideInRight")) {
          carouselCards[i].classList.remove("animate__slideInRight");
          carouselCards[i].classList.add("animate__slideInLeft");
        }      
      }    
    }
    console.log(`Scroll max: ${scrollMax}, Scroll min: ${scrollMin}`);
  
    nextBtn.style.color = "var(--teal)";
    if(scrollMin == 0) {
      prevBtn.style.color = "#BEBEBE";
    }
    else {
      prevBtn.style.color = "var(--teal)";
    }
  }
  
  document.getElementById("next").addEventListener("click", scrollCarousel);
  document.getElementById("prev").addEventListener("click", reverseCarousel);

}

if(document.querySelector(".search-container") != null) {

  searchContainer = document.querySelector(".search-container");
  searchInput = document.getElementById("blog-search");
  searchIcon = document.querySelector(".search-container i");
  var searchInputValue;
  console.log(screen.width);

  if(screen.width > 394) {
    searchInput.setAttribute('size', searchInput.getAttribute('placeholder').length - 5);
  }
  else {
    searchInput.setAttribute('placeholder', "Search");
    searchContainer.removeChild(searchIcon);
  }

  searchInput.addEventListener('keydown', openSearch);

  function openSearch(event) {
    if(event.code === "Enter") {
      searchInputValue = searchInput.value;
      console.log(searchInputValue);
    }       
  }
  
}


