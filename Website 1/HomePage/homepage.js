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


card.forEach((card) => {
  observer.observe(card);
});
workball.forEach((workball) => {
  observer2.observe(workball);
});
 