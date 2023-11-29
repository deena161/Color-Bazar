const btn = document.querySelector('.navbar');
const navbarLinks = document.querySelector('.auto');

btn.addEventListener("click", () => {
  navbarLinks.classList.toggle('active');
  console.log("click")
});

