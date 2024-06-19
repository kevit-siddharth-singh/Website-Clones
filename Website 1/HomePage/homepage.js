const card = document.querySelectorAll(".card");

const observer = new IntersectionObserver((items) => {
  items.forEach((element) => {
    element.target.classList.toggle("show", element.isIntersecting);
  });
},{
    threshold: 0.5,
}


);

card.forEach(card => {
        observer.observe(card);
});