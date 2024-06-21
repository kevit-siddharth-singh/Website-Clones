const card = document.querySelectorAll(".card");
const workball = document.querySelectorAll(".work-ball");

const observer = new IntersectionObserver(
  (items) => {
    items.forEach((element) => {
      element.target.classList.toggle("show", element.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);
const observer2 = new IntersectionObserver(
  (items) => {
    items.forEach((element) => {
      element.target.classList.toggle("show-ball", element.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);

// Sid:  For Cards On Scroll
card.forEach((card) => {
  observer.observe(card);
});

// !: For Workball
workball.forEach((workball) => {
  observer2.observe(workball);
});

// Sid : Js  Logic For  Topup Btn Visibility
// Get the button:
let topupbtn = document.querySelector(".topup-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topupbtn.style.opacity = "1";
    topupbtn.style["pointer-events"] = "auto";
  } else {
    topupbtn.style.opacity = "0";

    topupbtn.style["pointer-events"] = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Hamburger Menu Logic
function togglemenu() {
  let hamburgerBtn = document.querySelector(".hidden-menu-bg");
  let hiddenLinks = document.querySelector(".hidden-links");
  let hamburgerIcon = document.getElementById("hamburger-icon");
  
  let computedStyle = window.getComputedStyle(hamburgerBtn);
  let displayProperty = computedStyle.display;

  // console.log(displayProperty);
  if (displayProperty === "none") {
    hamburgerBtn.style.display = "block";
    hamburgerIcon.style.color = "white";
    hiddenLinks.style.display = "flex";
  } else if (displayProperty === "block") {
    hamburgerBtn.style.display = "none";
    hiddenLinks.style.display = "none";
    hamburgerIcon.style.color = "#55e6a5";
  }
}
