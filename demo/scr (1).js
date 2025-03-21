let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".nav-bar");
const slider = document.querySelector(".slider");

function changeSlide(index) {
  currentSlide = index;
  const offset = -index * 100 + "%";
  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = "translateX(" + offset + ")";

  // Update active class on dots
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

// Auto Slide
function autoSlide() {
  if (currentSlide < slides.length - 1) {
    changeSlide(currentSlide + 1);
  } else {
    setTimeout(() => {
      slider.style.transition = "none"; // Remove transition to prevent "backwards" effect
      slider.style.transform = "translateX(0%)"; // Instantly jump to first slide
      currentSlide = 0;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[currentSlide].classList.add("active");
      setTimeout(() => {
        slider.style.transition = "transform 0.5s ease-in-out";
      }, 50);
    }, 500);
  }
}

// Click Navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    changeSlide(index);
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 3000);
  });
});

// Start Auto Sliding
let autoSlideInterval = setInterval(autoSlide, 2500);

// Pause auto sliding on hover and resume on mouse leave
slider.addEventListener("mouseenter", () => {
  clearInterval(autoSlideInterval);
});

slider.addEventListener("mouseleave", () => {
  autoSlideInterval = setInterval(autoSlide, 2500);
});