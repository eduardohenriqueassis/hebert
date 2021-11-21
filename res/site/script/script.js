// class active on click
const linksPages = document.querySelectorAll(".menu-link");

function addActiveClass(event) {
  linksPages.forEach((link) => {
    link.classList.remove("active");
  });
  event.currentTarget.classList.add("active");
  // console.log(event);
}

linksPages.forEach((link) => {
  link.addEventListener("click", addActiveClass);
});

// Back to top button
const backToTopBtn = document.querySelector("#back-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    if (!backToTopBtn.classList.contains("btn-in")) {
      backToTopBtn.classList.add("btn-in");
      backToTopBtn.classList.remove("btn-out");
      backToTopBtn.style.display = "block";
    }
  } else {
    if (backToTopBtn.classList.contains("btn-in")) {
      backToTopBtn.classList.add("btn-out");
      backToTopBtn.classList.remove("btn-in");
      setTimeout(() => {
        backToTopBtn.style.display = "none";
      }, 650);
    }
  }
}
